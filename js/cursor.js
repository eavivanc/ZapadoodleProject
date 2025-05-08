document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("custom-cursor");
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX - 24}px`;
      cursor.style.top = `${e.clientY - 24}px`;
    });
  
    const images = document.querySelectorAll("img");
  
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        cursor.style.backgroundImage = 'url("../css/assets/lightning-bolt.png")';
        cursor.style.width = "64px";
        cursor.style.height = "64px";
        cursor.style.left = `${parseInt(cursor.style.left) - 8}px`;
        cursor.style.top = `${parseInt(cursor.style.top) - 8}px`;
      });
  
      img.addEventListener("mouseleave", () => {
        cursor.style.backgroundImage = 'url("../css/assets/star.png")';
        cursor.style.width = "48px";
        cursor.style.height = "48px";
        cursor.style.left = `${parseInt(cursor.style.left) + 8}px`;
        cursor.style.top = `${parseInt(cursor.style.top) + 8}px`;
      });
    });
  });
  