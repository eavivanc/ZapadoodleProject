$(document).ready(function () {
    const defaultCursor = 'url("../css/assets/star.png") 16 16, auto';
    const hoverCursor = 'url("../css/assets/lightning-bolt.png") 16 16, auto';

    $('body').css('cursor', defaultCursor);

    $('img').hover(
        function () {
            $(this).css('cursor', hoverCursor);
        },
        function () {
            $(this).css('cursor', defaultCursor);
        }
    );
});