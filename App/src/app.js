angular.module('MBAAS-RI', ['ionic', 'MBAAS-RI.view'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('signin', {url: "/login", templateUrl: "src/view/login/login.html", role: 'public'})
			$urlRouterProvider.otherwise("/login");

		}])

angular.module('MBAAS-RI.view', []);
