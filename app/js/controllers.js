'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl', ['$scope', function($scope) {
    $scope.zooom = 1;
    $scope.max = 10;
    $scope.min = 1;
    
    $scope.zoomIn = function() {
        if ($scope.zooom < $scope.max) {
            $scope.zooom = $scope.zooom + 1;
            console.log('zoom=' + $scope.zooom);
        }        
    };
    
    $scope.zoomOut = function() {
        if ($scope.zooom > $scope.min) {
            $scope.zooom = $scope.zooom - 1;
            console.log('zoom=' + $scope.zooom);
        }        
    };
    
  }]);