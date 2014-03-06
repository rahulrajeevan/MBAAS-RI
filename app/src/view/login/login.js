angular.module('MBAAS-RI.view')
	.factory('commonNav', function() {		
		var loginStatus = {
			status: 'fail',
			getStatus: function() {				
				return this.status;
			},
			setStatus: function(updatedStatus) {
				this.status = updatedStatus;
			}
		};
		return loginStatus;
	})	

	.controller('logInCtrl', ['$location', '$scope', 'commonNav', function($location, $scope, commonNav) {
			$scope.userLogin = function(username, password) {
				if (username && password) {
					if (username == 'a' && password == 'a') {
						$location.path('\home');
						commonNav.setStatus('success');
					}
					else
					{
						$scope.msg = 'Invalid User Name or password'
					}
				}
				else {
					$scope.msg = 'Please Enter User Name and password'
				}
			}
		}])


	