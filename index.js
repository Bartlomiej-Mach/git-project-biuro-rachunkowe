console.log('test');
//test





const navBtn = document.querySelector('.hamburger-menu');
const line = document.querySelector('.hamburger-menu__line');
const navList = document.querySelector('.navigation-menu');
const navItems1 = document.querySelector('.nav-links-1');
const navItems2 = document.querySelector('.nav-links-2');
const navItems3 = document.querySelector('.nav-links-3');
const navItems4 = document.querySelector('.nav-links-4');

const openCloseMenu = () => {

    navBtn.classList.toggle('hamburger-menu--active');
    line.classList.toggle('hamburger-menu__line--active');
    navList.classList.toggle('navigation-menu--active');
}


navBtn.addEventListener('click', openCloseMenu);
navItems1.addEventListener('click', openCloseMenu);
navItems2.addEventListener('click', openCloseMenu);
navItems3.addEventListener('click', openCloseMenu);
navItems4.addEventListener('click', openCloseMenu);

//slide changer main 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    const slides = document.getElementsByClassName("slide-changer");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }

//nav animation 

const showNav = gsap.from('.navigation-section', { 
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse()
  }
});




gsap.from('.wrapper-name-1', {
  scrollTrigger: {
    trigger: ".wrapper-name-1",
    scrub: false,
    start: "top center",
  },
  y:40,
  opacity: 0,
  ease: "none",
  duration: 0.2,
});

gsap.from('.wrapper-content', {
  scrollTrigger: {
    trigger: ".wrapper-name-1",
    scrub: false,
    start: "top center",
  },
  x:40,
  opacity: 0,
  ease: "none",
  duration: 0.6,
});

gsap.from('.wrapper-img', {
  scrollTrigger: {
    trigger: ".wrapper-name-1",
    scrub: false,
    start: "top center",
  },
  x:-40,
  opacity: 0,
  ease: "none",
  duration: 0.9,
});

//company present animations
gsap.from('.present-name-1', {
  scrollTrigger: {
    trigger: ".present-name-1",
    scrub: false,
    start: "top center",
  },
  y: 10,
  opacity: 0,
  ease: "none",
  duration: 0.3,
})

gsap.from('.present-description-1', {
  scrollTrigger: {
    trigger: ".present-name-1",
    scrub: false,
    start: "top center",
  },
  y: -10,
  opacity: 0,
  ease: "none",
  duration: 0.3,
})


gsap.from('.present-name-2', {
  scrollTrigger: {
    trigger: ".present-name-2",
    scrub: false,
    start: "top center",
  },
  y: 10,
  opacity: 0,
  ease: "none",
  duration: 0.3,
})

gsap.from('.present-description-2', {
  scrollTrigger: {
    trigger: ".present-name-2",
    scrub: false,
    start: "top center",
  },
  y: -10,
  opacity: 0,
  ease: "none",
  duration: 0.3,
})





//info 2 animations 
gsap.from('.wrapper-name-2', {
  scrollTrigger: {
    trigger: ".wrapper-name-2",
    scrub: false,
    start: "top center",
  },
  y:40,
  opacity: 0,
  ease: "none",
  duration: 0.2,
});

gsap.from('.wrapper-list--item', {
  scrollTrigger: {
    trigger: ".wrapper-list--item",
    scrub: false,
    start: "top center",
  },
  x: -20,
  opacity: 0,
  ease: "none",
  duration: 0.2,
  stagger: 0.1,
});


gsap.from('.wrapper-button', {
  scrollTrigger: {
    trigger: ".wrapper-button",
    scrub: false,
    start: "top center",
  },
  y: 20,
  opacity: 0,
  ease: "none",
  duration: 0.2,
});

//contact animations
gsap.from('.col-01-left--item', {
  scrollTrigger: {
    trigger: ".col-01-left--item",
    scrub: false,
    start: "top center",
  },
  x: -20,
  opacity: 0,
  ease: "none",
  duration: 0.2,
  stagger: 0.1,
});

gsap.from('.col-01-right--item', {
  scrollTrigger: {
    trigger: ".col-01-right--item",
    scrub: false,
    start: "top center",
  },
  x: 20,
  opacity: 0,
  ease: "none",
  duration: 0.2,
  stagger: 0.1,
});


gsap.from('.wrapper-name-3', {
  scrollTrigger: {
    trigger: ".wrapper-name-3",
    scrub: false,
    start: "top center",
  },
  y:40,
  opacity: 0,
  ease: "none",
  duration: 0.2,
});
