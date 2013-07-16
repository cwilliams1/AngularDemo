'use strict';

/* Controllers */

angular.module('myApp.controllers', []);

function SongListCtrl($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=53cd53914bcc3af839c2d2cc4613dbce&format=json').success(function (data) {
    $scope.songs = data.tracks.track;

    /**
     * Strings for numbers should be converted to ints for sorting to work properly.
     */
    var length = $scope.songs.length,
      i = 0;
    for (; i < length; i++) {
      $scope.songs[i].playcount = parseInt($scope.songs[i].playcount);
      $scope.songs[i].listeners = parseInt($scope.songs[i].listeners);
      
      // track order in json is the rank in the chart on last.fm, but needs to be stored for sorting
      $scope.songs[i].rank = i + 1;
    }

    // default order is descending by playcount
    $scope.orderProp = 'rank';
  });
}

function SongDetailCtrl($scope, $http, $routeParams) {
  var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + $routeParams.artistname + '&api_key=53cd53914bcc3af839c2d2cc4613dbce&format=json';
  $http.get(url).success(function (data) {
    $scope.artist = data.artist;
  });
}