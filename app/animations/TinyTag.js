Stylish.animation('.tinyTag', function() {
    return {
        removeClass : function(element, className, done) {
            if(className === 'ng-hide') {
                var e = jQuery(element);
                e.css('top' , (0 - e.height()) + '');
                e.delay(200).animate({top : '0px'}, 200, done);
            } else {
                done();
            }
        },
        beforeAddClass : function(element, className, done) {
            if(className === 'ng-hide') {
                var e = jQuery(element);
                e.delay(200).animate({top : -e.height() + "px"}, 200, done);
            } else {
                done();
            }
        }
    };
});