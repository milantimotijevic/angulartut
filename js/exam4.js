var app4 = angular.module("app4", []);

app4.controller("eventCtrl", function($scope) {

  $scope.blurVal = 0;
  $scope.clickVal = 0;
  $scope.dblClickVal = 0;
  $scope.copyVal = 0;
  $scope.pasteVal = 0;
  $scope.cutVal = 0;
  $scope.focusVal = 0;
  $scope.changeVal = 0;
  $scope.keyDownEvent = function(e) {
    // Works for the basic characters and numbers
    $scope.downedKey = String.fromCharCode(e.keyCode);
  };
  $scope.mouseEnterVal = 0;
  $scope.mouseLeaveVal = 0;

  $scope.shouldDisableButton = true;

  $scope.pastMorning = true;

  $scope.capitals = [
      {city: 'Montgomery', state: 'Alabama'},
      {city: 'Juneau', state: 'Alaska'},
      {city: 'Phoenix', state: 'Arizona'}
      ];

});