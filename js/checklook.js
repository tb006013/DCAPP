angular.module('myApp', [])

.controller('myController', ['$scope',function($scope) {
	$scope.isshow = false;
	
	$scope.tan = function(){
		$scope.isshow = true;
	}
	
	$scope.del = function(){
		$scope.isshow = false;
	}
	
	$scope.sru = function(){
		$scope.isshow = false;
	}
	
}])