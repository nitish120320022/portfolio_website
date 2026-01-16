// ===============================
// SCROLL-BASED ANIMATIONS
// ===============================

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   SECTION FADE + SLIDE
================================ */
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.querySelectorAll(".section-title, .section-text"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true,
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15
  });
});

/* ===============================
   SKILLS ANIMATION (CARDS / BARS)
================================ */
gsap.from(".skills-grid", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 75%",
    once: true,
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

/* ===============================
   PROJECT CARDS ANIMATION
================================ */
gsap.from(".projects-grid > *", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 75%",
    once: true,
  },
  y: 60,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  stagger: 0.2
});

/* ===============================
   EXPERIENCE TIMELINE
================================ */
gsap.from(".timeline > *", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 75%",
    once: true,
  },
  x: -40,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2
});

/* ===============================
   EXPERIENCE TIMELINE ANIMATION
================================ */
gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 75%",
    once: true,
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.25
});

/* ===============================
   CONTACT SECTION ANIMATION
================================ */
gsap.from("#contact .section-title, #contact .section-text, #contact .contact-actions, #contact .contact-links", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    once: true,
  },
  y: 30,
  // opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15
});