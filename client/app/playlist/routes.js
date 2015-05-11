'use strict';

angular.module('testApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playlist', {
        url: '/',
        templateUrl: 'app/playlist/index.html',
        controller: 'PlaylistIndexCtrl'
      }).state('playlist.show', {
        url: 'item/:name',
        templateUrl: 'app/playlist/show.html',
        controller: 'PlaylistShowCtrl'
      });
  });
