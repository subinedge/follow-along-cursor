// now we have dynamically move the small circle based on the position of mouse, and slight delay in movement of large circle

function followCursor() {
  const cursor = document.getElementById('main-cursor');

  const followCursor = document.getElementById('follow-cursor');

  const hoverTargets = document.querySelectorAll('.mouse-hover');

  document.addEventListener('mousemove', function(event) {
    // destructuring
    const {pageX:posX, pageY:posY} = event;
    // change the position for small circle
    cursor.style.left = `${posX - cursor.offsetWidth / 2}px`;

    cursor.style.top = `${posY - cursor.offsetHeight / 2}px`;

    // change the position for large circle
    followCursor.style.left = `${posX - followCursor.offsetWidth / 2}px`;

    followCursor.style.top = `${posY - followCursor.offsetHeight / 2}px`;
  });

  // mouse enter
  hoverTargets.forEach(hover => {
    hover.addEventListener("mouseenter", ()=> {
      followCursor.classList.add('is-active');
    })
  })

   // mouse leave
  hoverTargets.forEach(hover => {
    hover.addEventListener("mouseleave", ()=> {
      followCursor.classList.remove('is-active');
    })
  })
}

followCursor();