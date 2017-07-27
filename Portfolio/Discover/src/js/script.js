$(function () {
    var $window = $(window);
    var $header = $('.header');
    var $headerImg = $('.header__img');
    var $hamburger = $('.header__hamburger');
    var $hamburgerTop = $('.header__hamburgerLine_top');
    var $hamburgerCenter = $('.header__hamburgerLine_center');
    var $hamburgerBottom = $('.header__hamburgerLine_bottom');
    var $bgDark = $('.background-dark');
    var $nav = $('.header__nav');
    var $topBg = $('.top__bg');
    var $enjoy = $('.headline__enjoy');
    var $enjoySpan = $('.headline__enjoy span');
    var $owl = $('.owl-carousel');
    var $toTop = $('.totop');


    function changeMenu () {
        $hamburgerTop.toggleClass("rotateTop");
        $hamburgerCenter.toggleClass("hideCenter");
        $hamburgerBottom.toggleClass("rotateBottom");
        $bgDark.toggleClass("background-dark_active");
        $nav.toggleClass("header__nav_active");
        $enjoy.toggleClass("headline__enjoy_blur");
    }

    $hamburger.on('click', changeMenu);

    $bgDark.on('click', changeMenu);

    $enjoy.on('click', function () {
        $(this).toggleClass("headline__enjoy_blur");
    });

    $enjoySpan.on('mouseenter', function () {
        $(this).addClass("flip");
    }).on('mouseleave', function () {
        $(this).removeClass("flip");
    });

    $window.scroll(function () {
        $topBg.css({'top': $window.scrollTop() / 1.5});
        $enjoy.css({'top': $window.scrollTop() / 2});

        if ($window.scrollTop() === 0) {
            $header.removeClass("header_small");
            $headerImg.removeClass("header__img_small");
        }

        if ($window.scrollTop() > 0) {
            $header.addClass("header_small");
            $headerImg.addClass("header__img_small");
        }

        if ($(window).width() > 767) {
            if ($window.scrollTop() > 50) {
                $toTop.addClass("totop_active");
            }
        }

        if ($window.scrollTop() < 50) {
            $toTop.removeClass("totop_active");
        }


    });

    /*slider*/
    $owl.owlCarousel({
        items: 1,
        singleItem: true,
        loop: false,
        dots: true,
        nav: true,
        navText: ["<img src=\"build/img/prev.png\">", "<img src=\"build/img/next.png\">"],
        touchDrag: true,
        mouseDrag: true
    });
    /*end slider*/

   /* $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        if($.browser.safari){
            $('body').animate( { scrollTop: destination }, 1000 );
        } else {
            $('html').animate( { scrollTop: destination }, 1000 );
        }
        return false;
    });*/

    $('a[href^="#"]').click(function () {
        var t = $(this).attr("href");
        return $("body, html").animate({scrollTop: $(t).offset().top}, 1000), !1
    })
});
