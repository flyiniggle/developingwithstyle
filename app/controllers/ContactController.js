Stylish.controller('contactController', function($scope, $http) {
	$scope.formData = {
		name: "",
		email: "",
		telephone: "",
		message: ""
	};
	$scope.editable = ($scope.reqActive && $scope.status === -1);
	$scope.reqActive = false;
	$scope.status = 0;
	$scope.message = "";
	$scope.contactMe = function(){
		var f = $scope.contactForm,
			nameMessage = "Hold on there cowboy. Please enter your name.",
			noEmailMessage = "Slow down! Please enter your email address.",
			invalidEmailMessage = "Whoops, it looks like your email address isn't valid.",
			invalidPhoneMessage = "Please double-check your phone number.",
			noMessageMessage = "Please tell me what I can do to help you.",
			successMessage = "Thanks for the message! I'm looking forward to working with you.",
			failureMessage = "There was an error sending your message. Please reach out to me by email, telephone, or LinkedIn.";

		if ($scope.reqActive){
			return;
		}
		if (f.name.$error.required) {
			$scope.message = nameMessage;
			return;
		} else if (f.email.$error.required) {
			$scope.message = noEmailMessage;
			return;
		} else if (f.email.$invalid) {
			$scope.message = invalidEmailMessage;
			return;
		} else if (!!f.telephone.$viewValue && f.telephone.$invalid) {
			$scope.message = invalidPhoneMessage;
			return;
		} else if (f.message.$error.required) {
			$scope.message = noMessageMessage;
			return;
		}
		$scope.reqActive = true;
		$http.post("mail",
					jQuery.param($scope.formData),
					{'headers': {'Content-Type': 'application/x-www-form-urlencoded'}}
		).success(function(data){
			$scope.status = parseInt(data);
			$scope.message = $scope.status > 0 ? successMessage : failureMessage;
		}).error(function(data){
			$scope.status = parseInt(data);
			$scope.message = failureMessage;
		}).then(function(){
				$scope.reqActive = false;
		})
	};
	$scope.closeFeedback = function() {
		$scope.message = "";
	}
});