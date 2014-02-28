angular.module('MBAAS-RI', ['ionic', 'MBAAS-RI.view'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('signin', {url: "/login", templateUrl: "src/view/login/login.html", role: 'public', controller: 'logInCtrl'})
				.state('home', {url: "/home", templateUrl: "src/view/home/home.html", role: 'public', controller: 'homeCtrl'})
				.state('dashboard', {url: "/dashboard", templateUrl: "src/view/dashboard/dashboard.html", role: 'public', controller: 'dashBoardCtrl'})
			$urlRouterProvider.otherwise("/login");

		}])

angular.module('MBAAS-RI.view', []);
