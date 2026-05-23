const card = document.getElementById('card');
    const hint = document.getElementById('hint');
    let open = false;

    card.addEventListener('click', () => {
      open = !open;
      card.classList.toggle('opened', open);
      hint.textContent = open ? 'Click again to close' : 'Click the card to open';
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });