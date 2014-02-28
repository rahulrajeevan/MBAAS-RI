angular.module('MBAAS-RI.view')
	.controller('logInCtrl', ['$scope', '$state', '$http', '$ionicLoading', '$timeout',
		function($scope, $state, $http, $ionicLoading, $timeout) {
			$scope.signinuser = function(username, password) {
				if (username && password) {
					var names = [];
					$http({
						url: 'http://jsonstub.com/login',
						method: 'POST',
						headers: {
							'JsonStub-User-Key': '7e801c34-1a24-4f2b-8ad0-07360aec6fb9',
							'JsonStub-Project-Key': 'c6d07727-edb3-4858-a5f9-dad98ee03621'
						}
					})
						.success(function(data, status, headers, config) {
							$state.go('dashboard');
						})
						.error(function(data, status, headers, config) {
							$scope.msg = 'Some error in connection !!!!';
						});
				}
				else {
					$scope.msg = 'Please Enter User Name and password';
				}
			};
		}
	]);