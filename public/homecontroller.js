mainapp.controller( 'HomeController', ['$scope', '$location', '$http', '$global', function($scope, $location, $http, $global){

	$scope.resources = [];	
	$scope.btngetapps = function(){
		$scope.resources = [];
		var orgdata = {
			accesstoken: $global.getAccessToken(),
			url: 'http://api.ng.bluemix.net/v2/apps'
		};

		$http.post( '/getdata', orgdata)
		.success(function(data) {
			var rscs = data.resources;
			for (var i = 0; i < rscs.length; i++) {
					$scope.resources.push(rscs[i].entity.name);
				};
			})
		.error(function(data) {
			console.log("Error: "+data);
		});
			
	};


	$scope.btngetorgs = function(){
		$scope.resources = [];
		var orgdata = {
			accesstoken: $global.getAccessToken(),
			url: 'http://api.ng.bluemix.net/v2/organizations'
		};

		$http.post( '/getdata', orgdata)
		.success(function(data) {
			var rscs = data.resources;
			for (var i = 0; i < rscs.length; i++) {
					$scope.resources.push(rscs[i].entity.name);
				};
			})
		.error(function(data) {
			console.log("Error: "+data);
		});
			
	};

	$scope.btngetspaces = function(){
		$scope.resources = [];
		var orgdata = {
			accesstoken: $global.getAccessToken(),
			url: 'http://api.ng.bluemix.net/v2/spaces'
		};

		$http.post( '/getdata', orgdata)
		.success(function(data) {
			var rscs = data.resources;
			for (var i = 0; i < rscs.length; i++) {
					$scope.resources.push(rscs[i].entity.name);
				};
			})
		.error(function(data) {
			console.log("Error: "+data);
		});
			
	};

	$scope.logout = function(){
		var actk = '';
		$global.setAccessToken(actk);
		$location.path('/login');
	};

}]);