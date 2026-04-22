const form = document.getElementById('leadForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = '✅ Demo class successfully booked! Team aapse jald contact karegi.';
  form.reset();
});
