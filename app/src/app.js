angular.module('MBAAS-RI', ['MBAAS-RI.view', 'mobile-angular-ui'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {templateUrl: "../app/src/view/login/login.html", controller: 'logInCtrl'})
			.when('/main', {templateUrl: "../app/src/view/main/main.html", controller: 'logInCtrl'})
			.when('/home', {templateUrl: "../app/src/view/home/home.html"})
			.otherwise('/');
	})

	.controller('MainController', function($rootScope, $scope) {

	})
	

angular.module('MBAAS-RI.view', []);






