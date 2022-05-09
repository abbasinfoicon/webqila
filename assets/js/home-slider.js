/*=====================================================================
==========================  Owl Carousel  =========================
========================================================================*/
$('#owl-demo').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='assets/img/left-icon.png' class='right-cirle-icon'>", "<img src='assets/img/right-icon.png' class='left-cirle-icon'>"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
