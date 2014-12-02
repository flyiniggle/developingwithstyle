Stylish.carouselController = function($scope, carouselService) {
    $scope.displayIdx = 0;
    $scope.slides = carouselService.getSlides();

    $scope.disableNext = false;
    $scope.disablePrev = true;

    $scope.$watch('displayIdx', function () {
        $scope.disableNext = $scope.displayIdx === ($scope.slides.length - 1);
        $scope.disablePrev = $scope.displayIdx === 0;
    });

    $scope.next = function() {
        var dIdx = $scope.displayIdx,
            dMax = $scope.slides.length - 1;
        $scope.displayIdx = (dIdx === dMax) ? dMax : (dIdx + 1);
    };

    $scope.prev = function() {
        var dIdx = $scope.displayIdx;
        $scope.displayIdx  = (dIdx === 0) ? 0 : (dIdx - 1);
    };
};

Stylish.controller('carouselController', Stylish.carouselController);