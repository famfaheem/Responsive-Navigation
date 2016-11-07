function responsive_menu() {
    var navWidth = $('nav').width();
    var moreWidth = $('.more').outerWidth();
    var availableWidth = navWidth - moreWidth;
    $('li.primary').each(function() {
        var width = $(this).outerWidth();
        availableWidth = availableWidth - width;
        if (availableWidth < 10) {
            $(this).addClass("moved");
            $('.dropdown').append($(this));
            $('.more').addClass('show');
        } else {
            if ($(this).hasClass('moved')) {
                $(this).insertBefore(".more");
                $(this).removeClass('moved');
                $('.more').removeClass('show');
            }
        }
    });
}
responsive_menu();

$('.more').on('click', function() {
    $('.dropdown').toggleClass("show");
});

$(window).resize(function() {
    responsive_menu();
});
