Stylish.carousel = function() {
    return {
        restrict : "AC",
        templateUrl : 'app/templates/snippets/Pony.html',
        link : function(scope, element, attrs) {
            var mainScope = scope.$parent;

            scope.selected = false;
            scope.slide = mainScope.slides[0];

            mainScope.$watch('displayIdx', function(){
                console.log(mainScope.displayIdx)
                scope.slide = mainScope.slides[displayIdx];
            });
        }
    };
};

Stylish.directive("carousel", ["$window", Stylish.carousel]);