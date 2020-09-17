$(function () {
    //reload when resize
    var timer = false;
    var prewidth = $(window).width();
    $(window).resize(function () {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var nowWidth = $(window).width();
            if (prewidth !== nowWidth) {
                location.reload();
            }
            prewidth = nowWidth;
        }, 200);
    });

    $('.aboutme').click(function () {
            $('.aboutme-popup').slideDown('slow');
    });
    $('.cancel-btn').click(function () {
            $('.aboutme-popup').slideUp('slow');
    });

        $('.viewgallery').click(function () {
            $('.viewgallery-popup').slideDown('slow');
    });
    $('.cancel-btn').click(function () {
            $('.viewgallery-popup').slideUp('slow');
    });
});