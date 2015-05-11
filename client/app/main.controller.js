'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    $scope.params = {
      theme: 'light'
    };

    $scope.themes = ['light', 'dark'];
  });
