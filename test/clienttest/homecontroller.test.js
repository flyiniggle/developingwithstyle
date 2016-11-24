describe('homeController', function () {

	beforeEach(module('Stylish'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));


  describe('sum', function () {
		it('should have four words', function () {
			var $scope = {};
			var controller = $controller('homeController', { $scope: $scope });
			expect($scope.someWords.length).toBe(4);
		});
	});


});
