'use strict';

angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    $scope.params = {
      theme: 'app/app.light.css'
    };

    $scope.themes = [{name: 'light', val: 'app/app.light.css'}, {name: 'dark', val: 'app/app.dark.css'}];
  });
