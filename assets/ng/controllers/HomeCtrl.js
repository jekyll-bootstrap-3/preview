function HomeCtrl($scope, JsonService){
  JsonService.getData(function(data){
    $scope.themes = data;
  });

}
