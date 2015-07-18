Stylish.carouselService = function($http, $q) {
    var slides = [];

    this.getSlides = function() {
        var deferred = $q.defer();
        $http.get("get_ponies").success(function(data){
            deferred.resolve(data);
        }).error(function() {
            deferred.reject("An error occurred while retrieving these slides.");
        });
        return deferred.promise;
    };
};

Stylish.service('carouselService', Stylish.carouselService);