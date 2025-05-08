document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("custom-cursor");
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    const images = document.querySelectorAll("img");
  
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        cursor.style.backgroundImage = 'url("../css/assets/lightning-bolt.png")';
        cursor.style.width = "64px";
        cursor.style.height = "64px";
      });
  
      img.addEventListener("mouseleave", () => {
        cursor.style.backgroundImage = 'url("../css/assets/star.png")';
        cursor.style.width = "48px";
        cursor.style.height = "48px";
      });
    });
  });
  