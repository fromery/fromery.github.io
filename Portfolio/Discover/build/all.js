$(function(){function e(){r.toggleClass("rotateTop"),n.toggleClass("hideCenter"),t.toggleClass("rotateBottom"),_.toggleClass("background-dark_active"),i.toggleClass("header__nav_active"),d.toggleClass("headline__enjoy_blur")}var a=$(window),o=$(".header"),l=$(".header__img"),s=$(".header__hamburger"),r=$(".header__hamburgerLine_top"),n=$(".header__hamburgerLine_center"),t=$(".header__hamburgerLine_bottom"),_=$(".background-dark"),i=$(".header__nav"),g=$(".top__bg"),d=$(".headline__enjoy"),c=$(".headline__enjoy span"),h=$(".owl-carousel");s.on("click",e),_.on("click",e),d.on("click",function(){$(this).toggleClass("headline__enjoy_blur")}),c.on("mouseenter",function(){$(this).addClass("flip")}).on("mouseleave",function(){$(this).removeClass("flip")}),a.scroll(function(){g.css({top:a.scrollTop()/1.5}),d.css({top:a.scrollTop()/2}),0==a.scrollTop()&&(o.removeClass("header_small"),l.removeClass("header__img_small")),a.scrollTop()>0&&(o.addClass("header_small"),l.addClass("header__img_small"))}),h.owlCarousel({items:1,singleItem:!0,loop:!1,dots:!0,nav:!0,navText:['<img src="build/img/prev.png">','<img src="build/img/next.png">'],touchDrag:!0,mouseDrag:!0})});