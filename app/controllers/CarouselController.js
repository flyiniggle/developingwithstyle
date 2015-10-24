Stylish.carouselController = function($scope, carouselService) {
	var imgDir = 'css/img/',
		carouselImgDir = imgDir + 'carousel/';

	$scope.slides = [];
	$scope.disableCarouselNext = true;
	$scope.disableCarouselPrev = true;
	$scope.displayIdx = 0;

	carouselService.getSlides().then(
		function(data){
			var i = 0;
			$scope.slides = (data);
			$scope.slide = $scope.slides[$scope.displayIdx];
			$scope.disableCarouselNext = false;
			jQuery("#workCarousel").show();
			for(i; i<$scope.slides.length; i++) {
				carouselService.preLoadImage(carouselImgDir + $scope.slides[i][0]).catch(
					function(errorMessage){
						alert(errorMessage);
					}
				);
			}
			window.scrollTo(0, 550);
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
			bg = 'url(' + carouselImgDir + $scope.slide[0] + ') no-repeat scroll center top / cover transparent';
		} catch(e) {
			bg = "url('" + imgDir + "loader.svg') no-repeat scroll center top / cover transparent";
		}
		return {
			background: bg
		};
	};
};

Stylish.controller('carouselController', Stylish.carouselController);