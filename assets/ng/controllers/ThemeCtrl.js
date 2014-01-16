function ThemeCtrl($scope, $routeParams, $sce){
  $scope.themeName = $routeParams.themeName;

  angular.forEach($scope.themes, function(val,key){
    if(val.name == $scope.themeName){
      $scope.theme = val;
    }
  });

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  setFrameSize();
}
