describe('homeController', function () {
	var $controller;

	beforeEach(module('Stylish'));


	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));


	describe('homeController', function () {
		  it('should have four words', function () {
			  var $scope = {}, controller;

			  controller = $controller('homeController', { $scope: $scope });
			  expect($scope.someWords.length).toBe(4);
		  });
	  });
});

describe('homeController', function () {
	var $controller;

	beforeEach(module('Stylish'));


	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('contactController', function () {
		it('Closing error alert should clear message', function () {
			var $scope = {}, controller;

			controller = $controller('contactController', { $scope: $scope });
			$scope.message = "message!";
			$scope.closeFeedback();
			expect($scope.message).toBe("");
		});
	});
});
