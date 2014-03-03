angular.module('MBAAS-RI.view')
	.controller('dashBoardCtrl', ['$scope', 'UserService', '$state', function($scope, User, $state) {
			if (!User.username) {
				$state.go('login');
			}
		}]);