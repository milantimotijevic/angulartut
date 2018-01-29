var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
  $scope.felons = [];

  $scope.glossary = {
    evil: "EVIL",
    notEvil: "NOT EVIL",
    kos: "Kill-on-sight",
    safe: "Safe to interact with"
  };

  $scope.saveFelon = function(newFelon) {
    $scope.felons.push({
      fName: newFelon.fName,
      lName: newFelon.lName,
      title: newFelon.title,
      govedonessLevel: newFelon.govedonessLevel,
      evil: newFelon.evil ? newFelon.evil : $scope.glossary.notEvil,
      killOnSight: newFelon.killOnSight ? newFelon.killOnSight: $scope.glossary.safe
    });
  };
});