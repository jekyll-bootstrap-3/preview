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

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/theme/:themeName', {
    templateUrl: 'views/theme.html'
  }).
  otherwise({
    redirectTo: '/theme/Dbyll'
  });

});
