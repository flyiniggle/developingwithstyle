Stylish.contactController = function($scope, $http) {
	$scope.formData = {
		name: "",
		email: "",
		telephone: "",
		message: ""
	};
	$scope.contactMe = function(){
		console.log($scope.formData);
		$http.post("mail", $scope.formData, {'headers': {'Content-Type': 'text/json'} }
			//headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		);
	};
};

Stylish.controller('contactController', Stylish.contactController);