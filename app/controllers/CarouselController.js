Stylish.carouselController = function($scope, carouselService) {

	$scope.slides = [];
	$scope.disableCarouselNext = true;
	$scope.disableCarouselPrev = true;
	$scope.displayIdx = 0;

	carouselService.getSlides().then(
		function(data){
			$scope.slides = (data);
			$scope.slide = $scope.slides[$scope.displayIdx];
			$scope.disableCarouselNext = false;
		},
		function(errorMessage){
			alert(errorMessage);
		}
	);

	$scope.next = function() {
		var dIdx = $scope.displayIdx,
			dMax = $scope.slides.length - 1;
		$scope.displayIdx = (dIdx === dMax) ? 0 : (dIdx + 1);
	};

	$scope.prev = function() {
		var dIdx = $scope.displayIdx;
			dMax = $scope.slides.length - 1;
		$scope.displayIdx = (dIdx === 0) ? dMax : (dIdx - 1);
	};

	$scope.bgImg = function() {
		var bg = "";
		try{
			bg = 'url(css/img/carousel/' + $scope.slide[$scope.displayIdx] + ') no-repeat scroll center top / cover transparent';
		} catch(e) {
			bg = "some loading gif";
		}
		return {
			background: bg
		};
	};
};

Stylish.controller('carouselController', Stylish.carouselController);