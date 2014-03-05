angular.module('MBAAS-RI', ["mobile-angular-ui"])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {templateUrl: "../app/src/view/home/home.html"});
		$routeProvider.otherwise('/');
	})
	.filter('range', function() {
		return function(input, total) {
			total = parseInt(total);
			for (var i = 0; i < total; i++)
				input.push(i);
			return input;
		};
	})

	.directive('exampleCode', function() {
		return {
			link: function(scope, elem, attrs) {
				container = angular.element(document.getElementById(attrs.exampleCode));
				html = container.html();
				elem.empty().append("<pre><code>" + escapeHtml(html) + "</code></pre>")
			}
		};
	})
	.controller('MainController', function($rootScope, $scope) {

	})

var escapeHtml = function(str) {
	var tagsToReplace = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;'
	};
	return str.replace(/[&<>]/g, function(tag) {
		return tagsToReplace[tag] || tag;
	});
}






