$(function () {
    $('a[href^="#"]').click(function () {
        var t = $(this).attr("href");
        return $("body, html").animate({scrollTop: $(t).offset().top}, 1500), !1
    })
});