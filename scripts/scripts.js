
$(function () {
    $('body').scrollspy({
        target: '#main-nav',
        offset: 75
    });

    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    var navbarCollapse = function () {
        if ($("#main-nav").offset().top > 100) {
            $("#main-nav").addClass("navbar-scrolled");
        } else {
            $("#main-nav").removeClass("navbar-scrolled");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
});



