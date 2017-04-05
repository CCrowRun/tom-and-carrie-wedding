//Controller manages pages user views when clicking tabs
angular.module('app', []).controller('PageController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout)
{
	//Sets a default page (home)
	this.page = 1;

	//Identifies page matching anchor tag
	this.isSet = function(checkPage) {
		return this.page === checkPage;
	};

	//Changes page to match page defined for anchor tag
	this.setPage = function(setPage) {
		this.page = setPage;
	};

   $scope.$watch('this.page', function(newVal, oldVal) {
      if(newVal.page == 2) {
         $timeout(function() { angular.element($window).triggerHandler('resize'); }, 0);
      }
   }, true);
}]);
