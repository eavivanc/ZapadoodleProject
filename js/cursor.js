$(document).ready(function () {
    const defaultCursor = 'url("/css/assets/star.svg") 16 16, auto';
    const hoverCursor = 'url("/css/assets/lightning bolt.svg") 16 16, auto';

    // Set the default cursor on the entire page
    $('body').css('cursor', defaultCursor);

    // Change cursor when hovering over any <img>
    $('img').hover(
        function () {
            $(this).css('cursor', hoverCursor);
        },
        function () {
            $(this).css('cursor', defaultCursor);
        }
    );
});