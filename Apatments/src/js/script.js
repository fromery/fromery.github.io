$(function () {
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1500);
        return false;
    });
});