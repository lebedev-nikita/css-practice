const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;

next.addEventListener('click', () => {
  currentActive++;
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  update();
});

function update() {
  console.log(currentActive);
  circles.forEach((circle, index) => {
    if (index <= currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progress.style.width = (currentActive / (circles.length - 1)) * 100 + '%';

  switch (currentActive) {
    case 0:
      prev.disabled = true;
      next.disabled = false;
      return;
    case circles.length - 1:
      prev.disabled = false;
      next.disabled = true;
      return;
    default:
      prev.disabled = false;
      next.disabled = false;
      return;
  }
}
