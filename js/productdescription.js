

$(".thumbnail").on("mouseover", function() {
    $(this).css("cursor", "pointer");
   
    $(this).fadeTo("fast",1);
});
$(".thumbnail").on("mouseout", function() {
    $(this).css("cursor", "pointer");
    $(this).fadeTo("fast", .5);
   
});

$(".thumbnail").on("click", function() {
    $(".product-image").attr("src", $(this).attr("src"));
});

$(".tab").on("mouseover", function() {
    $(this).css("cursor", "pointer");

});

document.querySelector(".add-to-cart-button").addEventListener("mouseover", function() {
   document.querySelector(".add-to-cart-button").style.filter = "brightness(0.7)";
});
document.querySelector(".add-to-cart-button").addEventListener("mouseout", function() {
   document.querySelector(".add-to-cart-button").style.filter = "brightness(1)";
});
document.querySelector(".buy-now-button").addEventListener("mouseover", function() {
    document.querySelector(".buy-now-button").style.filter = "brightness(0.7)";});
document.querySelector(".buy-now-button").addEventListener("mouseout", function() {
    document.querySelector(".buy-now-button").style.filter = "brightness(1)";
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


let steps = new Array;
steps[0] = "/1x/step1.png";
steps[1] = "/1x/step2.png";
steps[2] = "/1x/step3.png";
steps[3] = "/1x/step4.png";
steps[4] = "/1x/step5.png";
steps[5] = "/1x/step6.png";
steps[6] = "/1x/step7.png";
steps[7] = "/1x/step8.png";


let step_description = new Array();
step_description[0] = "To start the game form two teams of at least two players each.";
step_description[1] = " bla bla bla2";
step_description[2] = " bla bla bla3";
step_description[3] = " bla bla bla4";
step_description[4] = " bla bla bla5";
step_description[5] = " bla bla bla6";
step_description[6] = " bla bla bla7";
step_description[7] = " bla bla bla8";



document.querySelector("#back-button").addEventListener("click", function() {
   source = document.querySelector("#step-img").src;
   for(i =0; i < steps.length; i++){

    if(source == "http://127.0.0.1:5501" + steps[i]){
        if(i == 0){
            source = steps[7];
            document.querySelector("#step-text").innerHTML = step_description[7];
        }
        else{

        source = steps[i-1];
        console.log(source);
        document.querySelector("#step-text").innerHTML = step_description[i-1];}
    }
   }
   document.querySelector("#step-img").src = source;
});

document.querySelector("#forward-button").addEventListener("click", function() {
    source= document.querySelector("#step-img").src;


    console.log(source);
    for(i = 0; i < steps.length; i++){

        console.log(i);
        console.log(steps[i]);
        console.log(source);
        if(source == "http://127.0.0.1:5501"+steps[i]){
            if(i == steps.length - 1){
                source = steps[0];
                document.querySelector("#step-text").innerHTML = step_description[0];
            }
            else{

            source = steps[i+1];
            console.log(source);
            document.querySelector("#step-text").innerHTML = step_description[i+1];}
            
        }
    }
    console.log(source);
    document.querySelector("#step-img").src = source;

    
});