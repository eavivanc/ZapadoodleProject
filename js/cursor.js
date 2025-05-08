$(document).ready(function () {
    const defaultCursor = 'url("data:image/png;base64,iVBORw0KGgoAAA...") 16 16, auto';
    const hoverCursor = 'url("data:image/png;base64,iVBORw0KAAABBB...") 16 16, auto';

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
