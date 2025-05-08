window.addEventListener("DOMContentLoaded", () => {
    // Use absolute or corrected paths based on your repo location
    const defaultCursor = 'url("..css/assets/star.svg") 16 16, auto';
    const hoverCursor = 'url("..css/assets/lightning bolt.svg") 16 16, auto';
  
    // Apply default cursor to body
    document.body.style.cursor = defaultCursor;
  
    // Get all images and attach event listeners
    const images = document.querySelectorAll("img");
  
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        img.style.cursor = hoverCursor;
      });
      img.addEventListener("mouseleave", () => {
        img.style.cursor = defaultCursor;
      });
    });
  });