angular.module('MBAAS-RI.view')
	.controller('forgotPwdCtrl', ['$scope', '$state', '$http', '$ionicLoading', '$timeout',
		function($scope, $state, $http, $ionicLoading, $timeout) {
			$scope.pwdreset = function(username, password) {
				if (username && password) {
					$scope.loading = $ionicLoading.show({
						content: 'Loading...',
						animation: 'fade-in',
						showBackdrop: true,
						maxWidth: 200,
						showDelay: 5000
					});
					$http({
						url: 'http://jsonstub.com/pwdreset',
						method: 'POST',
						headers: {
							'JsonStub-User-Key': '7e801c34-1a24-4f2b-8ad0-07360aec6fb9',
							'JsonStub-Project-Key': 'c6d07727-edb3-4858-a5f9-dad98ee03621'
						}
					}).success(function(data, status, headers, config) {
						$scope.msg = 'New password send to ' + data[0].email;
						$scope.message = {
							"type": "info",
							"title": "Success!",
							"content": "alert directive is working"
						};
						$scope.loading.hide();
					})
						.error(function(data, status, headers, config) {
							$scope.msg = 'Some error in connection !!!!';
							$scope.loading.hide();
						});
				}
				else {
					$scope.loading.hide();

				}
			};
		}
	])
