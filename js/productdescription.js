

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

    $(this).css("background-color", "#FFE45C");
    $(this).css("color", "black");
    $(this).css("transition", "0.5s");


});
$(".tab").on("mouseout", function() {

    $(this).css("background-color", "#062943");
    $(this).css("color", "white");
    $(this).css("cursor", "reset");
    $(this).css("transition", "0.5s");
});


document.querySelector(".add-to-cart-button").addEventListener("mouseover", function() {
   document.querySelector(".add-to-cart-button").style.filter = "opacity(0.7)";
   document.querySelector(".add-to-cart-button").style.cursor = "pointer";
    document.querySelector(".add-to-cart-button").style.transition = "0.5s";
    document.querySelector(".add-to-cart-button").style.color = "white";
    document.querySelector(".add-to-cart-button").style.backgroundColor = "#0D68A9";
});
document.querySelector(".add-to-cart-button").addEventListener("mouseout", function() {
   document.querySelector(".add-to-cart-button").style.filter = "opacity(1)";
    document.querySelector(".add-to-cart-button").style.cursor = "reset";
     document.querySelector(".add-to-cart-button").style.transition = "0.5s";
     document.querySelector(".add-to-cart-button").style.color = "black";
     document.querySelector(".add-to-cart-button").style.backgroundColor = "#FFE45C";
});
document.querySelector(".buy-now-button").addEventListener("mouseover", function() {
    document.querySelector(".buy-now-button").style.filter = "opacity(0.7)";
    document.querySelector(".buy-now-button").style.cursor = "pointer";
    document.querySelector(".buy-now-button").style.transition = "0.5s";
    document.querySelector(".buy-now-button").style.color = "white";
    document.querySelector(".buy-now-button").style.backgroundColor = "#0D68A9";

});
document.querySelector(".buy-now-button").addEventListener("mouseout", function() {
    document.querySelector(".buy-now-button").style.filter = "opacity(1)";
    document.querySelector(".buy-now-button").style.cursor = "reset";
    document.querySelector(".buy-now-button").style.transition = "0.5s";
    document.querySelector(".buy-now-button").style.color = "black";
    document.querySelector(".buy-now-button").style.backgroundColor = "#FF9C39";
});





const description_info = document.querySelector(".description-box").innerHTML;
$("#description-tab").on("click", function() {
    document.querySelector(".description-box").innerHTML = description_info;
});
$("#reviews-tab").on("click", function() {
    document.querySelector(".description-box").innerHTML = "<h1 id = 'reviewtitle'>Customer Reviews</h1> <h3>Let us know your thoughts on Zap-A-Doodle!</h3>";
    const reviewbox = document.createElement("input");
    
    reviewbox.id = "reviewbox";
    //reviewbox.style.overflow = "scroll";
    console.log(reviewbox);

    document.querySelector(".description-box").appendChild(reviewbox);
    
    reviewbox.style.backgroundColor = "white";

    const postbutton = document.createElement("button");
    postbutton.innerHTML = "Post Review";
    postbutton.id = "postbutton";
    postbutton.style.backgroundColor = "#FFE45C";

    document.querySelector(".description-box").appendChild(postbutton);


document.querySelector("#postbutton").addEventListener("click", function() {

    const review = document.querySelector("#reviewbox").value;
    console.log(review);

    const reviewtext = document.createElement("div");
    reviewtext.class = "REVIEW";
    reviewtext.innerHTML = "<p>" + review + "</p>";

    document.querySelector(".description-box").appendChild(reviewtext);




});

    
}
);




$("#shipping-tab").on("click", function() {
    


    document.querySelector(".description-box").innerHTML = `<div id="shipping-fullbox"><h1 id = "shippingtitle">Standard Shipping Information</h1>
<h3>Processing Time:</h3>
<p class = 'shippinginfo'>Orders are processed within 1–2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>

<h3>Shipping Rates & Delivery Estimates:</h3>

<p class = 'shippinginfo'> Shipping Method	Estimated Delivery Time	Cost</p>
<p class = "shipptable">Standard Shipping (Domestic)	3–7 business days	Free / $5.00 flat rate <br>
Expedited Shipping	2–3 business days	$10.00<br>
International Shipping	7–21 business days	Calculated at checkout</p>


<p class = 'shippinginfo'>Please note that delivery times may vary depending on your location and any potential delays with carriers.</p>

<h3>Carriers Used:</h3>
<p class = 'shippinginfo'>We typically ship via USPS, UPS, or FedEx, depending on the most efficient option for your destination.</p>

<h3>Tracking Your Order:</h3>
<p class = 'shippinginfo'>Once your order has shipped, you will receive a confirmation email with a tracking number you can use to follow its progress.</p>

<h3>Shipping Restrictions:</h3>

<p class = 'shippinginfo'> We do not ship to P.O. boxes (for certain carriers).</p>

<p class = 'shippinginfo'>International customers are responsible for any customs or import taxes. </p>

<h3>Questions?</h3>
<p class = 'shippinginfo'> If you have any issues with your order or shipping status, please contact us at [your support email].</p>
</div>
`;



});

function navigatetabs(){
    var text_in_box = document.querySelector(".description-box").innerHTML;


}

$("#back-button").on("mouseover", function() {
    $(this).css("filter", "brightness(0.5)");
    $(this).css("cursor", "pointer");
});
$("#play-pause").on("mouseover", function() {
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
$("#play-pause").on("mouseout", function() {
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
step_description[1] = "Assign one player on your team to draw with the vibrating or zapping pen, one player on the opposing team will control the buzzer.";
step_description[2] = "The player who is drawing takes a look at the word their team is trying to guess and hands the card to the opposing player controlling the buzzer. ";
step_description[3] = "The opposing team starts the buzzer!";
step_description[4] = "The drawing player has to draw the guess word on the card and have their teammates guess correctly without saying the 'buzz words'.";
step_description[5] = "If the artist gets 3 zaps or the timer ends, the round is over.";
step_description[6] = "Keep track of how many cards your team guessed correctly and add them to your score.";
step_description[7] = "Pass the pen to the opposing team to start the next round! The game is over when everyone has had two turns drawing. The team with the most points wins!";

let audio = new Array();

audio[0] = "step1.mp3";
audio[1] = "step2.mp3";
audio[2] = "step3.mp3";
audio[3] = "step4.mp3";
audio[4] = "step5.mp3";
audio[5] = "step6.mp3";
audio[6] = "step7.mp3";
audio[7] = "step8.mp3";


currentAudio = new Audio();

document.querySelector("#play-pause").addEventListener("click", function() {



    if(currentAudio.paused == true){
    document.querySelector("#play-pause").src = "/1x/pause.png";
    source = document.querySelector("#step-img").src;
    for(i =0; i < steps.length; i++){

        if(source == "http://127.0.0.1:5501" + steps[i]){

            currentAudio.src = "/css/assets/"+ audio[i];
            currentAudio.play();
            if(i ==3)
            {
                ticking = new Audio();
                ticking.src = "/css/assets/ticking.mp3";
                ticking.play();
                ticking.repeat = false;
            }
        }
    }
}
else{

    document.querySelector("#play-pause").src = "/1x/play.png";
    currentAudio.pause();
    ticking.pause();
    console.log("paused");
}
    

});



document.querySelector("#back-button").addEventListener("click", function() {

    document.querySelector("#play-pause").src = "/1x/play.png";
   currentAudio.pause();
    
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
        document.querySelector("#step-text").innerHTML = step_description[i-1];
       
        
    }
    }
   }
   document.querySelector("#step-img").src = source;
});

document.querySelector("#forward-button").addEventListener("click", function() {

    document.querySelector("#play-pause").src = "/1x/play.png";
    currentAudio.pause();
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

$("#cart").on("mouseover", function() {
    $(this).css("cursor", "pointer");
}
);
$(".close").on("mouseover", function() {
    $(this).css("cursor", "pointer");
}
);


/*
$("#cart").on("click", function() {
    
document.querySelector(".sidecart").style.right = "0px";
document.querySelector(".product").style.left= "-400px";
document.querySelector(".product").style.transition = "0.5s";
document.querySelector(".sidecart").style.transition = "0.5s";
})

$(".close").on("click", function() {
    document.querySelector(".sidecart").style.right = "-100%";
    document.querySelector(".sidecart").style.transition = "1s";
}
);



document.querySelector(".add-to-cart-button").addEventListener("click", function() {



   
    document.cookie = itemnum;

    document.querySelector(".sidecart").style.right = "0px";
    document.querySelector(".product").style.left= "-400px";
    document.querySelector(".product").style.transition = "0.5s";
    document.querySelector(".sidecart").style.transition = "0.5s";

    //document.querySelector(".cart-content").innerHTML = "";
    var cartimg = document.querySelector(".product-image").src;
    if(document.querySelector("#empty").innerHTML == " Your cart is empty. ")
    {
        document.querySelector("#empty").innerHTML = "";
    }

     document.querySelector(".cart-content").innerHTML += "<img id = 'cart-img' src = " + cartimg + ">";
        document.querySelector(".cart-content").innerHTML += "<div> <h3>Zap-A-Doodle Game</h3> <in </div>";
    itemnum +=1;
    
});*/

