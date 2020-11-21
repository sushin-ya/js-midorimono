'use strict';
{
  console.log("open");
  // opening
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');

  function hidden() {
    console.log("hidden");
    setTimeout(() => {
      mask.classList.add('hidden');
      modal.classList.add('hidden');
      console.log("openingSetTimeout");
    }, 4000);
  }
  hidden();

  // scrollAnimation
  const scrollAnimationElm = document.querySelectorAll('.sa');
  const scrollAnimationFunc = function () {
    console.log("scrollAnimationFunc");
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      const triggerMargin = 300;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('show');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

  //imageSlideShow
  const imgParent = document.getElementById('img-parent');
  const img = document.createElement('img');
  img.src = 'img/img1.jpg'
  imgParent.appendChild(img);
  const pics_src = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
  let num = 0;

  const position = document.querySelector("#main-screen-position");
  const pagenation = position.querySelectorAll('span');

  function slideshow_timer() {
    console.log("slideshow_timer");
    pagenation[num].classList.remove('active');

    if (num === 2) {
      num = 0;
    }
    else {
      num++;
    }

    pagenation[num].classList.add('active');
    img.src = pics_src[num];
  }

  setInterval(slideshow_timer, 2000);

  const android = document.querySelector('.android')
  setInterval(() => {
    console.log("android");
    android.classList.toggle('updown')
  }, 1200);
}