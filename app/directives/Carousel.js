Stylish.directive("carousel", function() {
    return {
        restrict : "AC",
        templateUrl : 'app/templates/snippets/Pony.html',
        link : function(scope, element, attrs) {

            scope.selected = false;
            scope.slide = scope.slides[0];

            scope.$watch('displayIdx', function(){
                scope.slide = scope.slides[scope.displayIdx];
            });
        }
    };
});