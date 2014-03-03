'use strict';

/* Controllers */

angular.module('fcdsaApp.controllers', ['ajoslin.mobile-navigate','angular-carousel'])	
 .controller('MainCtrl', ['$scope','$navigate',function($scope, $navigate) {
  $scope.$navigate = $navigate;
  $scope.navItem = '';
  $scope.showSubMenu = false;
  $scope.navItems = [{'category':'Navigation Item 1','subcategory':[{'subMenu':'Sub Item 1'},{'subMenu':'Sub Item 2'}]},{'category':'Navigation Item 2'},{'category':'Navigation Item 3'},{'category':'Navigation Item 4'},{'category':'Navigation Item 5'},{'category':'Navigation Item 6'},{'category':'Navigation Item 7'}];
  $scope.toggleSubMenu = function(evtObj){
	$scope.showSubMenu = !$scope.showSubMenu;
	$(evtObj.target).parent().children('ul').toggle('medium');
	$(evtObj.target).toggleClass('open');	
  }
}])
  .controller('homeCtrl', ['$scope','$http',function($scope,$http) {
    $scope.data = [];
	$scope.modData = [];
	$scope.selectedData = [];	
	$scope.dataUrl = "common/content/data/stockDetail.json";
	$http({
                         method: 'GET',
						 cache: true,
                         url: $scope.dataUrl                            
                        })
                        .success(function(data) {    							
							$scope.data = data.StockPriceBoardData_stockPriceBoardData.records;							
                        })
                        .error(function(data) {
                            console.log('No data found');
                        });
	
	$scope.removeItems = function(){		
		for(var i=0;i<$scope.data.length;i++){
			var match = false;
			for(var j=0;j<$scope.selectedData.length;j++){
				if(i === $scope.selectedData[j]){
					match = true;
					break;
				}	
			}
			if(!match)
			$scope.modData.push($scope.data[i]);
		}		
		$scope.data = $scope.modData;
		$scope.modData = [];
		$scope.selectedData = [];
		$('.actBtn').slideUp('slow');
	};
	
  }])
  .controller('detailsCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.priceData = [];
	$scope.dataUrl = "/content/data/stockDetail.json";	
	var index = +$routeParams.index.split(':')[1];	
					$http({
                         method: 'GET',						 
                         url: $scope.dataUrl                            
                        })
                        .success(function(data) {
							$.each(data.StockPriceBoardData_stockPriceBoardData.records,function(i,item){
								if(item.record.disporder == index){
								$scope.data = item.record;
								}
								
								$scope.nextData = index+1;
							})
                        })
                        .error(function(data) {
                            console.log('No data found');
                        });
	if(index % 2 == 0){
		$scope.priceData = [71.0, 46.9, 29.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 69.6];
	}else{
		$scope.priceData = [61.0, 56.9, 39.5, 24.5, 28.4, 21.5, 35.2, 36.5, 33.3, 38.3, 33.9, 59.6];
	}
	$scope.xAxislabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$scope.settings = {
	'chartTitle': '',
	'chartSubTitle': '',
	'xAxislabels': $scope.xAxislabels,
	'yAxisTitle': 'Price ($)',
	'bgColor':'#c5ccd4'
	};
	
        
  }]);
  