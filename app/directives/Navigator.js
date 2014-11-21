Stylish.navigator = function($window) {
    return {
        restrict : "AC",
        link : function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                var offset = element[0].getBoundingClientRect().top;
                if (offset < 1) {
                    scope.fixBar = true;
                } else {
                    scope.fixBar = false;
                }
                scope.offset = offset;
                scope.$apply();
            });
            scope.$watch('selected', function(){
                if(scope.selected !== '/') {
                    window.scrollTo(0, 450);
                } else {
                    window.scrollTo(0, 0);
                }
                scope.offset = element[0].getBoundingClientRect().top;
            });
        }
    };
};

Stylish.directive("navigator", ["$window", Stylish.navigator]);