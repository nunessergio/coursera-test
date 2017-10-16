
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.Lista = ""; // So that for the very firs time if user just click the button, the messagem will show up
  

  $scope.CheckList = function () {
    
    var separator = ",";
    var arrayOfStrings = $scope.Lista.split(separator);
    var totalValues = arrayOfStrings.length;
    
    $scope.MessageResult = ReturnMessage(totalValues);
  };


  function ReturnMessage(total){

    if ($scope.Lista != "") {
       if (total <= 3) {
          return "Enjoy!";
       }
       else {
         return "Too much!";
       }
    }
    else{
      return "Please enter data first";
    }
  }

}



})();



