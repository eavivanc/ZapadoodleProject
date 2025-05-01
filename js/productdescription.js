

$(".thumbnail").on("mouseover", function() {
    $(this).css("cursor", "pointer");
    $(this).css("opacity", "1");
});
$(".thumbnail").on("mouseout", function() {
    $(this).css("cursor", "default");
    $(this).css("opacity", "0.5");
});

$(".thumbnail").on("click", function() {
    $(".product-image").attr("src", $(this).attr("src"));
});

$(".tab").on("mouseover", function() {
    $(this).css("cursor", "pointer");

});






var description_info = document.querySelector(".description-box").innerHTML;
$("#description-tab").on("click", function() {
    document.querySelector(".description-box").innerHTML = description_info;
});
$("#reviews-tab").on("click", function() {
    document.querySelector(".description-box").innerHTML = `"this is a review"`;
}
);
$("#shipping-tab").on("click", function() {
    document.querySelector(".description-box").innerHTML = `"this is a shipping information"`;
});

function navigatetabs(){
    var text_in_box = document.querySelector(".description-box").innerHTML;


}

$("#back-button").on("mouseover", function() {
    $(this).css("filter", "brightness(0.5)");
    $(this).css("cursor", "pointer");
});
$("#play_pause").on("mouseover", function() {
    $(this).css("filter", "brightness(0.5)");
    $(this).css("cursor", "pointer");
});
$("#forward-button").on("mouseover", function() {
    $(this).css("filter", "brightness(0.5)");
    $(this).css("cursor", "pointer");
});
$("#back-button").on("mouseout", function() {
    $(this).css("filter", "brightness(1)");
});
$("#play_pause").on("mouseout", function() {
    $(this).css("filter", "brightness(1)");
});
$("#forward-button").on("mouseout", function() {
    $(this).css("filter", "brightness(1)");
});