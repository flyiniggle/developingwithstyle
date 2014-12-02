Stylish.carouselService = function() {
    var slides = [
        ["img1", "words!"],
        ["img2", "more words!"],
        ["img3", "these aren't words!"]
    ];
    this.getSlides = function() {
        return slides;
    };
};

Stylish.service('carouselService', Stylish.carouselService);