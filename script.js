function logomotiveScroller() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
      breakpoint: 0,  
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
      breakpoint: 0,
    },
    smoothMobile: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
function loaderAnimation() {
  let tl = gsap.timeline();
  let counter = document.querySelector(".runIt");
  let addCounter = 0;
  setInterval(() => {
    if (addCounter <= 100) {
      counter.textContent = addCounter++;
    }
  }, 34);

  tl.to("#loader", {
    y: -1000,
    duration: 2,
    delay: 3.9,
    display: "none",
  });
  gsap.from(".nohome h1", {
    stagger: true,
    duration: 1,
    delay: 0,
    x: 200,
    y: 1,
  });
  gsap.from(".home h3", {
    stagger: .1,
    duration: 1,
    delay: 0,
    x: 1,
    y: -200,
  });
}
function navBarAnimation() {
  gsap.from(".top-left h1", {
    x: -20,
    y: 1,
    opacity: 0,
    delay: 5,
    duration: 0.3,
    stagger: 0.1,
  });
  gsap.from(".line h1", {
    stagger: 0.25,
    delay: 5,
    duration: 0.6,
    y: 150,
  });
  gsap.from(".name h3", {
    delay: 5,
    duration: 0.6,
    x: -250,
  });
}
function arrowMoveAnimation() {
  gsap.to(".bottom-right img", {
    y: 9,
    position: "absolute",
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
}

// callFunctionArea
logomotiveScroller();
loaderAnimation();
arrowMoveAnimation();
navBarAnimation();

// alter
let pages = document.querySelectorAll("#doNothingOnLoding");
pages.forEach((el) => {
  el.style.overflow = "hidden";
});
