Stylish.service('carouselService', function($http, $q) {
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

    this.preLoadImage = function(url) {
        var deferred = $q.defer();
        $http.get(url).success(function(data){
            deferred.resolve(data);
        }).error(function() {
            deferred.reject("An error occurred while retrieving image at " + url + ".");
        });
        return deferred.promise;
    };
});