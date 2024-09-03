locomotiveAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};

loader = () => {
  const tl = gsap.timeline();

  tl.to("#part1 h4,#part1 h3", {
    opacity: 1,
    duration: 0.8,
    delay: 0.2,
  });

  tl.to("#part1", {
    onStart: () => {
      var ct = document.querySelector("#ct");
      var counter = 0;
      var time = setInterval(() => {
        if (counter >= 100) {
          clearInterval(time);
        } else {
          ct.textContent = ++counter;
        }
      }, 40);
    },
  });

  tl.to(".line h1", {
    opacity: 1,
  });
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.1,
  });

  tl.to("#fs h3", {
    opacity: 1,
    duration: 0.1,
  });

  tl.to("#loader", {
    delay: 2.5,
    opacity: 0,
  });

  tl.from("#page1", {
    y: 1600,
    ease: Power4,
    duration: 0.2,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });

  tl.from("#hero-content", {
    opacity: 0,
    duration: 0.1,
  });

  tl.from(
    ".hero h1,.hero h2,.hero h3",
    {
      y: 100,
      stagger: 0.2,
    },
    "-=0.3"
  );

  tl.from("#page2", {
    opacity: 0,
    duration: 0.1,
  });
};

cursor = () => {
  Shery.mouseFollower({});
  Shery.makeMagnet(".animated-text", {});
  var videocontainer = document.querySelector("#video-container");
  var videocrsr = document.querySelector("#video-cursor");
  var vd = document.querySelector("#vd");
  var playing = false;

  videocontainer.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", { opacity: 0 });
  });

  videocontainer.addEventListener("mousemove", function (dets) {
    gsap.to(videocrsr, {
      left: dets.x - 520,
      y: dets.y - 100,
    });
  });

  videocontainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", { opacity: 1 });
    gsap.to(videocrsr, {
      y: -13,
      left: "62%",
    });
  });

  videocontainer.addEventListener("click", function () {
    if (playing) {
      vd.pause();
      videocrsr.innerHTML = `<i class="ri-play-mini-fill"></i>`;
      videocrsr.style.scale = 1;
      vd.style.opacity = 0;
    } else {
      vd.play();
      vd.muted = false;
      videocrsr.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      videocrsr.style.scale = 0.5;
      vd.style.opacity = 1;
    }
    playing = !playing;
  });
};

sheryAnimation = () => {
  Shery.imageEffect(".img-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7032627582212497 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.61, range: [0, 10] },
      metaball: { value: 0.49, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.4, range: [0, 2] },
      noise_scale: { value: 7.63, range: [0, 100] },
    },
    gooey: true,
  });
};

loader();
cursor();
locomotiveAnimation();
sheryAnimation();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#flag", {
    left: dets.x,
    top: dets.y,
  });
});
document.querySelector("#hero3").addEventListener("mouseenter", function () {
  gsap.to("#flag", {
    opacity: 1,
  });
  gsap.to(".mousefollower", {
    opacity: 0,
  });
});
document.querySelector("#hero3").addEventListener("mouseleave", function () {
  gsap.to("#flag", {
    opacity: 0,
  });
  gsap.to(".mousefollower", {
    opacity: 1,
  });
});
