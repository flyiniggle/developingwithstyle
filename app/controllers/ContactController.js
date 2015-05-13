Stylish.contactController = function($scope, $http) {
	$scope.formData = {
		name: "me",
		email: "firetrucks@gmail.com",
		telephone: "5256277882",
		message: "heyo"
	};
	$scope.contactMe = function(){
		console.log($scope.formData);
		$http.post("mail", jQuery.param($scope.formData), {'headers': {'Content-Type': 'application/x-www-form-urlencoded'} }
			//headers: {'Content-Type': 'text/json'}
		);
	};
};

Stylish.controller('contactController', Stylish.contactController);