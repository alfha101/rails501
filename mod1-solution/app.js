(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.displayMsg = "";

  $scope.checkIfTooMuch = function () {
    var totalLunchItems =
      calculateNumberOfItems($scope.lunch);
    var displayMsg = ""
    if (totalLunchItems == 0) {
      displayMsg = "Please enter data first";
    } else if (totalLunchItems <= 3 ) {
      displayMsg = "Enjoy!";
    } else {
      displayMsg = "Too much!";
    }
    $scope.displayMsg = displayMsg
   };

  function calculateNumberOfItems(string) {
    var splits = string.split(',');
    var totalStringValue;
    totalStringValue = splits.length;
    if (!$scope.lunch.length) {totalStringValue = 0};
    return totalStringValue;
  };
}

})();
