'use strict';

angular.module('testApp')
  .controller('StatsIndexCtrl', function ($scope, $http) {
    $http.get('/api/playlist').success(function(playlist) {
      $scope.playlist = playlist;

      showChart(playlist);
    }).error(function(){
      $scope.error = 'Failed ...';
    });

    $scope.chart = null;

    var formatData = function(data){
      var _genres = {};
      var _stars = {};
      var i;

      var _genresData = [];
      var _starsData = [];

      data.map(function(i){
        _genres[i.Genre] = _genres[i.Genre] !== undefined ? _genres[i.Genre] + 1 : 0;
        _stars[i.Stars] = _stars[i.Stars] !== undefined ? _stars[i.Stars] + 1 : 0;
      });

      for(i in _genres){
        _genresData.push([i, _genres[i]]);
      }

      for(i in _stars){
        _starsData.push([i, _stars[i]]);
      }
      return {
        genres: _genresData,
        stars: _starsData
      };
    };

    var showChart = function(data) {
      var obj = formatData(data);
      var c3 = window.c3;
      c3.generate({
        bindto: '#genres',
        data: {
          columns: obj.genres,
          type : 'pie'
        }
      });

      c3.generate({
        bindto: '#stars',
        data: {
          columns: obj.stars,
          type : 'pie'
        }
      });
    };
  });
