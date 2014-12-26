Stylish.carouselService = function() {
    var slides = [
        ["account_ss.jpg", "words!"],
        ["workbench.jpg", "more words!"],
        ["underconstruction1.jpg", "these aren't words!"]
    ];
    this.getSlides = function() {
        return slides;
    };
};

Stylish.service('carouselService', Stylish.carouselService);