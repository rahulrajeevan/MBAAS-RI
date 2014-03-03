angular.module('MBAAS-RI.view')
	.controller('logInCtrl', ['$scope', '$state', '$http', '$ionicLoading', '$timeout', 'UserService',
		function($scope, $state, $http, $ionicLoading, $timeout, User) {
			if (User.username) {
				$state.go('dashboard');
			}
			else {
				$scope.signinuser = function(username, password) {
					if (username && password) {
						$scope.loading = $ionicLoading.show({
							content: 'Loading...',
							animation: 'fade-in',
							showBackdrop: true,
							maxWidth: 200,
							showDelay: 5000
						});
						$http({
							url: 'http://jsonstub.com/login',
							method: 'POST',
							headers: {
								'JsonStub-User-Key': '7e801c34-1a24-4f2b-8ad0-07360aec6fb9',
								'JsonStub-Project-Key': 'c6d07727-edb3-4858-a5f9-dad98ee03621'
							}
						})
							.success(function(data, status, headers, config) {
								if (data[2].role == 'admin')
								{
									$scope.loading.hide();
									User.isLogged = true;
									User.username = data[0].username;
									$state.go('dashboard');
								}
								else
								{
									$scope.loading.hide();
								}
							})
							.error(function(data, status, headers, config) {
								$scope.loading.hide();
								User.isLogged = false;
								User.username = '';
								$scope.msg = 'Some error in connection !!!!';
							});
					}
					else {
						$scope.loading.hide();
						$scope.msg = 'Please Enter User Name and password';
					}
				};
			}
		}
	]);