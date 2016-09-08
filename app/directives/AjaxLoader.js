Stylish.directive("ajaxloader",  function($http) {
    return {
        restrict : "E",
        templateUrl : 'app/templates/snippets/AjaxLoader.html',
        link : function(scope, element, attrs) {
            scope.isLoading = function() {
                return $http.pendingRequests.length > 0;
			};
			scope.$watch(scope.isLoading, function(val){
				ele = jQuery("#ajaxLoader");
				if (val) {
					ele.show();
				} else {
					ele.hide();
				}
			});
        }
    };
});