'use strict'

const toggler = document.querySelector('#toggler'),
    cancel = document.querySelector('#closer')

toggler.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.add('active');
})

cancel.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('active');
})

ScrollReveal({
  reset: false,
  distance: "50px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal("header", { delay: 200, origin: "top" });
ScrollReveal().reveal(".navs", { delay: 500, origin: "top", interval: 200 });
ScrollReveal().reveal(".left-main", { delay: 300, origin: "left" });
ScrollReveal().reveal(".right-main", { delay: 300, origin: "right" });
ScrollReveal().reveal(".same-header", { delay: 100, origin: "bottom" });
ScrollReveal().reveal(".list-anim", { delay: 100, origin: "top", interval: 100 });
ScrollReveal().reveal(".cards", { delay: 100, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".text-info", { delay: 200, origin: "left" });
ScrollReveal().reveal(".img-info", { delay: 200, origin: "right" });

