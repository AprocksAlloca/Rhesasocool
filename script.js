$(document).ready(function () {
    const safeZone = {
        xStart: $('.container').offset().left,
        xEnd: $('.container').offset().left + $('.container').outerWidth(),
        yStart: $('.container').offset().top,
        yEnd: $('.container').offset().top + $('.container').outerHeight()
    };

    function isOutsideSafeZone(x, y) {
        return x < safeZone.xStart || x > safeZone.xEnd || y < safeZone.yStart || y > safeZone.yEnd;
    }

    function placeElementRandomly(elementClass) {
        let x, y;
        do {
            x = Math.random() * $(window).width();
            y = Math.random() * $(window).height();
        } while (!isOutsideSafeZone(x, y));
    
        const element = $('<div></div>', { class: elementClass });
        $('body').append(element);
        element.css({ left: x + 'px', top: y + 'px' });
    }

    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Cursor heart creation and movement
    const cursorHeart = $('<div class="cursor-heart"></div>').appendTo('body');
    $(document).mousemove(function(e) {
        cursorHeart.css({
            left: e.pageX - 10, // Adjusted for the heart size
            top: e.pageY - 10
        });
    });

    // Place pizzas and hearts randomly but not too close to the letter
    for (let i = 0; i < 50; i++) {
        placeElementRandomly('small-pizza');
        placeElementRandomly('static-heart');
    }
});
