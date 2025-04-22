/*function openSideMenu(){
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("side-menu").style.height = "100%";
    document.querySelector(".content").style.marginLeft = "250px";
}
function closeSideMenu(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-menu").style.height = "0";
    document.querySelector(".side-menu").style.display = "none";
    document.querySelector(".side-menu").style.overflow = "hidden";
    document.querySelector(".content").style.marginLeft = "0";
}

$("#logo").on("mouseenter", function(){
    $(this).css("cursor", "pointer");
});
document.querySelector("#logo").addEventListener("click", function(){
    openSideMenu();
});
$("#side-menu").on("mouseleave", function(){
    closeSideMenu();
});*/

$(document).ready(function(){
    $("#side-menu").hide();
});
function openSideMenu(){
    $("#side-menu").animate({
        width: "250px",
        height: "100%",
    }, 300);
  $("#side-menu").show();
  
}
function closeSideMenu(){
    $("#side-menu").css("width", "0");
    $("#side-menu").css("height", "0");
    $(".side-menu").hide();
    $(".side-menu").css("overflow", "hidden");
    $(".content").css("margin-left", "0");
}
$("#logo").on("mouseenter", function(){
    $(this).css("cursor", "pointer");
}
);
document.querySelector("#logo").addEventListener("click", function(){
    openSideMenu();
});
