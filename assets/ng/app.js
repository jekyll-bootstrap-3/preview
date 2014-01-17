angular.module('jsonService', ['ngResource'])
.factory('JsonService', function($resource) {
  return $resource('themes.json',{ }, {
    getData: {method:'GET', isArray: true}
  });
});

var app = angular.module('preview', ['ngRoute', 'jsonService']);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

app.config(function ($routeProvider) {
  $routeProvider.when('/theme/:themeName', {
    templateUrl: 'views/theme.html'
  }).
  when('/add', {
    templateUrl: 'views/add.html'
  }).
  otherwise({
    redirectTo: '/theme/Dbyll'
  });

});
