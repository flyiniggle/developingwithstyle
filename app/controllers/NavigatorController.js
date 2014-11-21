Stylish.navigatorController = function($scope, $rootScope, $location) {
    $scope.fixBar = false;
    $scope.offset = "";
    $scope.selected = "/";
    $rootScope.$on('$locationChangeStart', function(){
        $scope.selected = $location.path();
    });
};

Stylish.controller('navigatorController', Stylish.navigatorController);