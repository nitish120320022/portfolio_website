gsap.registerPlugin(ScrollTrigger);

/* ===============================
   SECTION FADE + SLIDE
================================ */
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.querySelectorAll(".section-title, .section-text"), {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      once: true,
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.12
  });
});

/* ===============================
   SKILLS (MODERN BLOCKS)
================================ */
gsap.from(".skills-modern-grid > *", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 85%",
    once: true,
  },
  y: 30,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.12
});

/* ===============================
   PROJECT CARDS
================================ */
gsap.from(".projects-modern-grid > *", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 85%",
    once: true,
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.15
});

/* ===============================
   EXPERIENCE TIMELINE (CLEAN)
================================ */
gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 85%",
    once: true,
  },
  y: 30,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.2
});

/* ===============================
   CONTACT SECTION
================================ */
gsap.from("#contact .section-title, #contact .section-text", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
    once: true,
  },
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.12
});