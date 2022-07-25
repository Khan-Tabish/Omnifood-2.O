const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries(0);
    console.log(ent);

    if (ent.inIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.inIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px ",
  }
);
obs.observe(sectionHeroEl);
