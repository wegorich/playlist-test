'use strict';

angular.module('testApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngStorage',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
