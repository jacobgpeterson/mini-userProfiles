var app = angular.module("userProfiles");
app.controller("mainCtrl", function($scope, mainService){

	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
	}

	$scope.getUsers();

	// $scope.test = mainService.myProperty;

	// $scope.countOdds = function(){
	// 	var result = mainService.countTheOdds($scope.countMeOdds);
	// 	console.log(result);
	// }

	// console.log(mainService.countTheOdds);

	// $scope.showServiceVariable = function(){
	// 	console.log(mainService.myProperty);
	// }

});