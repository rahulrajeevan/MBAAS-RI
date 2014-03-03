angular.module('MBAAS-RI.view')
	.controller('dashBoardCtrl', ['$scope','UserService', function($scope,User) {
			console.log('Logger in as '+User.username)
	}]);