(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope, handleLunch) {
    $scope.lunch = "";
	$scope.msglunch = "";
	
	$scope.msg = function () {
		// begin handle empty item for ",," or ", ," or ",,,"
		var vLunch = $scope.lunch.replace(",,,",",");
		vLunch = vLunch.replace(",,",",");
		vLunch = vLunch.replace(", ,",",");
		//end handle empty item for ",," or ", ," or ",,,"
		var aLunch = vLunch.split(",");
		var lenLuch = aLunch.length;
		if($scope.lunch.length == 0){
			$scope.msglunch = "Please enter data first";
		}else{
			if(lenLuch <= 3){
				$scope.msglunch = "Enjoy!";
			}else{
				if(lenLuch > 3){
					$scope.msglunch = "Too much!";
				}
			}
		}	
	};
}






})();