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
  
      x = pos.x;
      y = pos.y;
    });
  
    requestAnimationFrame(animateStars);
  }
  
  animateStars();
