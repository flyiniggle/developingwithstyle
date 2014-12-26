Stylish.carouselController = function($scope, carouselService) {
    $scope.displayIdx = 0;
    $scope.slides = carouselService.getSlides();
    $scope.slide = $scope.slides[$scope.displayIdx];
    $scope.lastSlideIdx = $scope.slides.length - 1;

    $scope.disableCarouselNext = false;
    $scope.disableCarouselPrev = true;

    $scope.$watch('displayIdx', function () {
        $scope.disableNext = $scope.displayIdx === $scope.lastSlideIdx;
        $scope.disablePrev = $scope.displayIdx === 0;
        $scope.slide = $scope.slides[$scope.displayIdx]
    });

    $scope.next = function() {
        var dIdx = $scope.displayIdx,
            dMax = $scope.lastSlideIdx;
        $scope.displayIdx = (dIdx === dMax) ? dMax : (dIdx + 1);
    };

    $scope.prev = function() {
        var dIdx = $scope.displayIdx;
        $scope.displayIdx  = (dIdx === 0) ? 0 : (dIdx - 1);
    };
};

Stylish.controller('carouselController', Stylish.carouselController);