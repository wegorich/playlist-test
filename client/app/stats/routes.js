'use strict';

angular.module('testApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stats', {
        url: '/stats',
        templateUrl: 'app/stats/index.html',
        controller: 'StatsIndexCtrl'
      });
  });
