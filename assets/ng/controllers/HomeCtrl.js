function HomeCtrl($scope, JsonService){
  JsonService.getData(function(data){
    $scope.themes = data;

    sizes.setSidebarSize();

    $scope.setTheme = function(index){
      $scope.activeTheme = index;
    }

  });

}
