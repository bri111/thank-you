const card = document.getElementById('card');
const hint = document.getElementById('hint');
let open = false;

// Click the front cover to open
document.getElementById('front').addEventListener('click', () => {
  open = true;
  card.classList.add('opened');
  hint.textContent = 'Click here to close ↑';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Click the hint to close
hint.addEventListener('click', () => {
  if (open) {
    open = false;
    card.classList.remove('opened');
    hint.textContent = 'Click the card to open';
  }
});