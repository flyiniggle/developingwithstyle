Stylish.directive("contactFeedback", function(){
	return {
		restrict: "AC",
		link: function(scope, element, attrs) {
			scope.$watch("reqActive", function(){
				var loader = jQuery("#sendLoader");
				(!!scope.reqActive) ? loader.show() : loader.hide();
			})
		}
	}
});