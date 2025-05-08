$(document).ready(function () {
    const defaultCursor = 'url("https://cdn-icons-png.flaticon.com/512/616/616408.png") 16 16, auto';
    const hoverCursor = 'url("https://cdn-icons-png.flaticon.com/512/616/616408.png") 16 16, auto';

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
