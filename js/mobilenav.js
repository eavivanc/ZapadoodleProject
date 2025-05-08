$(document).ready(function () {
        $('.mobile-nav').click(function () {
            $('.mobile-links').toggleClass('show');
            $('body').toggleClass('no-scroll');
        });
    });