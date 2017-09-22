var mainapp = angular.module( 'hdb', [ 'ngRoute', 'chart.js'], function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
 
  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */ 
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      
    for(name in obj) {
      value = obj[name];
        
      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
      
    return query.length ? query.substr(0, query.length - 1) : query;
  };
 
  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
});

mainapp.config( function ($routeProvider) {
	$routeProvider
		.when( '/userhome', 
				{
					controller: 'HomeController',
					templateUrl: './home.html'
				})
		.when( '/login', 
				{
					controller: 'LoginController',
					templateUrl: './login.html'
				})
    .when( '/report', 
        {
          controller: 'ReportController',
          templateUrl: './report.html'
        })
		.when( '/authenticate',
				{

				})
		.when( '/getdata',
				{

				})
		.otherwise(
				{
					redirectTo: '/login'}
				);
});


mainapp.factory( '$global', function(){
	var accesstoken = '';

	return{
		getAccessToken: function(){
			return accesstoken;
		},

		setAccessToken: function(val){
			accesstoken = val;
		}
	};

});



