'use strict';

angular.module('testApp')
  .controller('PlaylistIndexCtrl', function ($scope, $http, $state) {
    $scope.params.playlist = {
      sortField: ''
    };

    $http.get('/api/playlist')
      .success(function(playlist) {
        $scope.playlist = playlist;
      })
      .error(function(){
        $scope.error = 'Failed ...';
      });


    $scope.showDetails = function(i){
      $scope.selected = i;
      $state.go('playlist.show', {name: i.Name});
    };

    $scope.sortBy = function(fieldName){
      var _field = $scope.params.playlist.sortField;

      _field = _field === fieldName?
        '-' + _field :
        fieldName;

      $scope.params.playlist.sortField = _field;
    };

  });
