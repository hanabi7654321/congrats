'use strict';

const sound01 = document.querySelector('#sound01');
const btn =document.querySelector('#sound-btn');

btn.addEventListener('click', () => {
  if (! sound01.paused ) {
    btn.innerHTML = 'OVATION';
    sound01.pause();
  } else {
    btn.innerHTML = 'STOP';
    sound01.play();
  }
});

sound01.addEventListener('ended', ()=> {
  sound01.currentTime = 0;
  btn.innerHTML = 'OVATION';
})
