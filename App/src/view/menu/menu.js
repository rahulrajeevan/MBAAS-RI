anugular.module(MBAAS - RI.view, [])
	.controller('menuCtrl', function($scope, $location, pageTitle) {
		$scope.navTitle = pageTitle;
		$scope.leftButtons = [{
				type: 'button-icon icon ion-navicon',
				tap: function(e) {
					$scope.sideMenuController.toggleLeft();
				}
			}];
		$scope.rightButtons = [];

	});

