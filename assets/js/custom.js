/*=====================================================================
========================== right-social icon  =========================
========================================================================*/
$(".right-sideIcon .fa-angle-double-left").click(function () {
    $(".right-sideIcon").toggleClass("slide");
    $(this).toggleClass("fa-angle-double-right");
});

/*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');
var $html = $('html');
var $body = $('body');

windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    var headerHeight = sticky.height();

    if (screenSize >= 320) {
        if (scroll < headerHeight) {
            sticky.removeClass('is-sticky');
        } else {
            sticky.addClass('is-sticky');
        }
    }

});
/*----------  Scroll to top  ----------*/
function scrollToTop() {
    var $scrollUp = $('#scroll-top'),
        $lastScrollTop = 0,
        $window = $(window);

    $window.on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 200) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
    });

    $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 600);
        evt.preventDefault();
    });
}
scrollToTop();


/*=====================================================================
========================== product-carousel Owl Carousel  =========================
========================================================================*/
$('#product-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 3
        },
        1265: {
            items: 4
        }
    }
});
