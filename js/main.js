'use strict';
{
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  function hidden() {
    setTimeout(() => {
      mask.classList.add('hidden');
      modal.classList.add('hidden');
    }, 4000);
  }
  hidden();

  const scrollAnimationElm = document.querySelectorAll('.sa');
  const scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      const triggerMargin = 300;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('show');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);


  const imgParent = document.getElementById('img-parent');
  const img = document.createElement('img');
  img.src = 'img/img1.jpg'
  imgParent.appendChild(img);
  const pics_src = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
  let num = -1;

  function slideshow_timer() {
    if (num === 2) {
      num = 0;
    }
    else {
      num++;
    }
    img.src = pics_src[num];
  }

  setInterval(slideshow_timer, 2000);

  const android = document.querySelector('.android')
  setInterval(() => {
    android.classList.toggle('updown')
  }, 1200);
}