angular.module('fcdsaApp', ['ajoslin.mobile-navigate', 'shoppinpal.mobile-menu', 'fcdsaApp.directives', 'fcdsaApp.controllers', 'fcdsaApp.services'])
	.config(function($routeProvider) {
		$routeProvider.when("/settings", {
			templateUrl: "src/view/settings.html"
		}).when("/details:index", {
			templateUrl: "src/view/details.html",
			controller: "detailsCtrl",
			transition: "modal" //this is overwritten by the go() in home.html
		}).when("/popup", {
			templateUrl: "src/view/popup.html",
			transition: "modal"
		}).when("/", {
			templateUrl: "src/view/home.html",
			controller: "homeCtrl"
		}).otherwise({
			redirectTo: "/"
		});
	})



