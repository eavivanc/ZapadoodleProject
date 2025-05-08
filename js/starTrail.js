for (let i = 0; i < 5; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    document.body.appendChild(star);
  }
  
  const stars = document.querySelectorAll('.star');
  const coords = { x: 0, y: 0 };
  const positions = Array.from(stars).map(() => ({ x: 0, y: 0 }));
  
  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateStars() {
    let x = coords.x;
    let y = coords.y;
  
    positions.forEach((pos, index) => {
      pos.x += (x - pos.x) * 0.3;
      pos.y += (y - pos.y) * 0.3;
    
      const star = stars[index];
      star.style.left = `${pos.x}px`;
      star.style.top = `${pos.y}px`;
    
      const yellow = [255, 228, 92]; // #FFE45C
      const red = [255, 80, 80];    // #0080FF
    
      const r = Math.round(yellow[0] + (blue[0] - yellow[0]) * (index / (stars.length - 1)));
      const g = Math.round(yellow[1] + (blue[1] - yellow[1]) * (index / (stars.length - 1)));
      const b = Math.round(yellow[2] + (blue[2] - yellow[2]) * (index / (stars.length - 1)));
    
      const color = `rgb(${r}, ${g}, ${b})`;
    
      star.style.setProperty('--star-color', color);
    
      x = pos.x;
      y = pos.y;
    });
      
  
    requestAnimationFrame(animateStars);
  }
  
  animateStars();
