Stylish.carousel = function() {
    return {
        restrict : "AC",
        templateUrl : 'app/templates/snippets/Pony.html',
        link : function(scope, element, attrs) {
            var mainScope = scope.$parent;

            var getSelected = function() {
                return (mainScope.slides[mainScope.displayIdx] == scope.slide);
            };

            scope.selected = false;

            mainScope.$watch('displayIdx', function(){
                scope.selected = getSelected();
            });
        }
    };
};

Stylish.directive("carousel", ["$window", Stylish.carousel]);