'use strict';

/* Directives */


angular.module('fcdsaApp.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
	}])
	.directive('ngTap', function() {
	  var isTouchDevice = !!("ontouchstart" in window);
	  return function(scope, elm, attrs) {  
		if (isTouchDevice) {
		  var tapping = false;
		  elm.bind('touchstart', function() { tapping = true; });
		  elm.bind('touchmove', function() { tapping = false; });
		  elm.bind('touchend', function() { 
			tapping && scope.$apply(attrs.ngTap);
		  });
		} else {
		  elm.bind('click', function() {
			scope.$apply(attrs.ngTap);
		  });
		};
	  }
	  })
	 .directive('stockListItem',[function(){
			return{
				restrict: 'A',
				transclude: true,
				templateUrl:'content/templates/stockListItem-template.html',							
				link: function(scope,element,attrs){
					scope.showBtnPanel = function($event,index){
						$event.stopPropagation();
						if($($event.target).prop('checked')){							
							scope.selectedData.push(index);
							if(scope.selectedData.length > 0)
							$('.actBtn').slideDown('slow');
						}
						else{							
							$.each(scope.selectedData,function(i,item){
								if(item == index){
									scope.selectedData.splice(i,1);
								}
							})							
							if(scope.selectedData.length == 0)
							$('.actBtn').slideUp('slow');
						}												
					};
				}
					
								
			};

		}])
	.directive('priceChart',[function(){
	return{
		restrict: 'A',
		scope: {settings: "=",data: "=",type: "@"},
		link:function(scope,element,attrs){
			 var props = {
				chart: {
				type: scope.type,
				backgroundColor:scope.bgColor,
				renderTo: element[0],
				events: {
					load: function(event){									
						}
					}
				},
				title: {
					text: scope.settings.chartTitle
				},
				subtitle: {
					text: scope.settings.chartSubTitle
				},
				legend:{
					enabled: false
				},
				credits:{
					enabled: false
				},
				xAxis: {
					categories: scope.settings.xAxislabels
				},
				yAxis: {
					title: {
						text: scope.settings.yAxisTitle
					}
				},
				tooltip: {
					enabled: true,
					formatter: function(){
						return("Price in the month of "+this.x + ' : '+ this.y);
					}
				},
				plotOptions: {
					line: {
						size: '100%',
						dataLabels: {
							enabled: false
						},
						enableMouseTracking: true
					}
				},
				series: [{
					data: scope.data
				}]					
			};
			new Highcharts.Chart(props);				
		}
	} 
}
])

	.directive('slider',[function(){
	return{
	restrict: 'A',
	transclude: 'true',
	replace: 'true',
	template: '<div ng-transclude/>',
	scope:{settings: '='},
	link:function(scope,element,attrs){	
		$(element[0]).bxSlider({
	    slideWidth: scope.settings.slideWidth,
	    minSlides: scope.settings.minSlides,
	    maxSlides: scope.settings.maxSlides,
	    slideMargin: scope.settings.slideMargin
	  });
	}
	};
	}]);
  
