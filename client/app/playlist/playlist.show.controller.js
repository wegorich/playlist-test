'use strict';

angular.module('testApp')
  .controller('PlaylistShowCtrl', function ($scope, $stateParams, $window, $localStorage) {
    var findItem = function(collection){
      if (collection) {
        $scope.item = collection.filter(function (i) {
          return i.Name === $stateParams.name;
        })[0];
      }
    };

    findItem($scope.playlist);

    $scope.$watchCollection('playlist', findItem);
    $scope.$storage = $localStorage;

    $scope.tweet = function(){
      var text = $scope.$storage[$scope.item.Name];
      $window.open('https://twitter.com/share?text='+ text, '' , 'width=600, height=300');
    };
  });
