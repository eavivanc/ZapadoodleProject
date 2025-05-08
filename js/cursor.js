$(document).ready(function () {
    const defaultCursor = 'url("/zapadoodle/css/assets/star.svg") 16 16, auto';
    const hoverCursor = 'url("/zapadoodle/css/assets/lightning bolt.svg") 16 16, auto';

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