Stylish.contactController = function($scope, $http) {
	$scope.formData = {
		name: "me",
		email: "firetrucks@gmail.com",
		telephone: "5256277882",
		message: "heyo"
	};
	$scope.editable = ($scope.reqActive && $scope.status === -1);
	$scope.reqActive = false;
	$scope.status = 0;
	$scope.message = "";
	$scope.contactMe = function(){
		var successMessage = "Thanks for the message! I'm looking forward to working with you.",
			failureMessage = "There was an error sending your message. Please reach out to me by email, telephone, or LinkedIn.";
		if ($scope.reqActive){
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
				var feedback = jQuery(".contactFeedback");
				$scope.reqActive = false;
				feedback.fadeIn(400, function(){
					window.setTimeout(function() {
						feedback.fadeOut(400);
					}, 2000);
				});
		})
	};
};

Stylish.controller('contactController', Stylish.contactController);