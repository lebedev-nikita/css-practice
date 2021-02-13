const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
const timer = setInterval(blurring, 30);

function blurring() {
  load++;

  loadText.innerText = load + '%';
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${(100 - load) * 0.3}px)`;

  if (load >= 100) {
    clearInterval(timer);
  }
}
