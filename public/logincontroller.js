mainapp.controller( 'LoginController', ['$scope', '$location', '$http', '$global', function($scope, $location, $http, $global){
	$scope.errormessage = '';
	$scope.failurealert = false;
	$scope.login = function(){
		$scope.errormessage = '';
		$scope.failurealert = false;
		var logindetails = {
			username: $scope.email,
			password: $scope.password
		};

		$http.post( '/authenticate', logindetails)
		.success(function(data) {
			console.log("Success Authorization:  " + data);
			//set the accesstoken to be accessed by next requests...
			if( data.error == 'unauthorized'){
				$scope.failurealert = true;
				$scope.errormessage = data.error + ':' + data.error_description;
			}
			else{
				var actk = data.token_type + ' ' + data.access_token;
				$global.setAccessToken( actk );
				$location.path('/userhome');
				}
			})
		.error(function(data) {
			console.log("Error: "+data);
		});

	};

}]);

