'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs', { templateUrl: 'partials/song-chart.html', controller: SongListCtrl });
    $routeProvider.when('/artist/:artistname', { templateUrl: 'partials/song-detail.html', controller: SongDetailCtrl });
    $routeProvider.otherwise({redirectTo: '/songs'});
  }]);
