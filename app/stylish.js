jQuery.noConflict();

var Stylish = angular.module("Stylish", ["ngRoute", "ngAnimate"]);

Stylish.routes = function($routeProvider) {
    $routeProvider
            .when('/',
                {
                    controller : 'homeController',
                    templateUrl : 'app/templates/Home.html'
                }
            )
            .when('/work',
                {
                    controller : 'carouselController',
                    templateUrl : 'app/templates/Work.html'
                }
            )
            .when('/about',
                {
                    controller : 'homeController',
                    templateUrl : 'app/templates/About.html'
                }
            )
            .when('/contact',
                {
                    controller : 'homeController',
                    templateUrl : 'app/templates/Contact.html'
                }
            )
            .otherwise({redirectTo : '/'});
};

Stylish.config(Stylish.routes);
