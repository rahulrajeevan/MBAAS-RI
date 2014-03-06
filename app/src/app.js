angular.module('MBAAS-RI', ['MBAAS-RI.view', 'mobile-angular-ui'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {action:"preLogin", templateUrl: "../app/src/view/login/login.html", controller: 'logInCtrl'})
			.when('/main', {templateUrl: "../app/src/view/main/main.html", controller: 'mainCtrl'})
			.when('/home', {templateUrl: "../app/src/view/home/home.html"})
			.otherwise('/');
	})
	
	.run(['$rootScope','$route',function($rootScope,$route){
		$rootScope.$on('$routeChangeSuccess',function($currentRoute){
			if($route.current.loadedTemplateUrl  == '"../app/src/view/login/login.html"'){
				
			}
		})
	}])
	.controller('mainCtrl',['$scope','$route',function($scope,$route){
		$scope.renderPage = function(){
			if($route.current.action == "preLogin"){
				$scope.requireMenu = 'false';
			}
			else{
				$scope.requireMenu = 'true';
			}
		};
		$scope.$on('$routeChangeSuccess',function(){
			$scope.renderPage();
		})
	}]);
	

angular.module('MBAAS-RI.view', []);






