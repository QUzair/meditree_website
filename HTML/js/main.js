(function($) {
    "use strict";
    $(window).on('load', function() {
        $('body').addClass('loaded')
    });

    function headerHeight() {
        var height = $("#header").height();
        $('.header-height').css('height', height + 'px')
    }
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        headerHeight();
        $(window).resize(headerHeight);
        $(window).on('scroll', function() {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top animated slideInDown")
            } else {
                header.removeClass("navbar-fixed-top animated slideInDown")
            }
        })
    });
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: !0
    });
    
    $('#project-carousel').owlCarousel({
        loop: !0,
        margin: 15,
        autoplay: !0,
        smartSpeed: 500,
        nav: !1,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });
    $('#case-details-carousel').owlCarousel({
        loop: !0,
        margin: 15,
        autoplay: !0,
        smartSpeed: 500,
        nav: !1,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });
    $('#testimonial-carousel').owlCarousel({
        loop: !0,
        margin: 10,
        center: !1,
        autoplay: !0,
        smartSpeed: 500,
        nav: !1,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });
    $('#testimonial-carousel-2').owlCarousel({
        loop: !0,
        margin: 10,
        center: !1,
        autoplay: !0,
        smartSpeed: 500,
        nav: !1,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });
    $('#sponsor-carousel').owlCarousel({
        loop: !0,
        margin: 15,
        center: !1,
        autoplay: !0,
        smartSpeed: 500,
        nav: !1,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: !1,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 6,
            }
        }
    });
    $('.odometer').waypoint(function() {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber)
        })
    }, {
        offset: "80%",
        triggerOnce: !0
    });
    $(function() {
        $('#dl-popup-search-box').removeClass('toggled');
        $('.dl-search-icon').on('click', function(e) {
            e.stopPropagation();
            $('#dl-popup-search-box').toggleClass('toggled');
            $("#popup-search").focus()
        });
        $('#dl-popup-search-box input').on('click', function(e) {
            e.stopPropagation()
        });
        $('#dl-popup-search-box, body').on('click', function() {
            $('#dl-popup-search-box').removeClass('toggled')
        })
    });
    $('select').niceSelect();
    $(".video-bg").YTPlayer();
    smoothScroll.init({
        offset: 60
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn()
        } else {
            $('#scroll-to-top').fadeOut()
        }
    });
    new WOW().init();
    $('.img-popup').venobox({
        numeratio: !0,
        infinigall: !0
    });

  
})(jQuery)