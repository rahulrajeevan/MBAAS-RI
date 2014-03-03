angular.module('MBAAS-RI', ['ionic', 'MBAAS-RI.view'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('login', {url: "/login", templateUrl: "src/view/login/login.html", role: 'public', controller: 'logInCtrl'})
				.state('home', {url: "/home", templateUrl: "src/view/home/home.html", role: 'public', controller: 'homeCtrl'})
				.state('forgotPwd', {url: "/forgotPwd", templateUrl: "src/view/forgotpassword/forgotpassword.html", role: 'public', controller: 'forgotPwdCtrl'})
				.state('dashboard', {url: "/dashboard", templateUrl: "src/view/dashboard/dashboard.html", role: 'public', controller: 'dashBoardCtrl'})
				.state('menu', {url: "/menu", templateUrl: "src/view/menu/menu.html", role: 'public', controller: 'menuCtrl'})
			$urlRouterProvider.otherwise("/login");

		}])
	
	.factory('UserService', [function() {
			var loginInfo = {
				isLogged: false,
				username: ''
			};
			return loginInfo;
		}]);


angular.module('MBAAS-RI.view', []);
