document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("custom-cursor");
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    const images = document.querySelectorAll("img");
  
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        cursor.style.backgroundImage = 'url("..css/assets/lightning-bolt.png")';
      });
      img.addEventListener("mouseleave", () => {
        cursor.style.backgroundImage = 'url("..css/assets/star.png")';
      });
    });
  });
  