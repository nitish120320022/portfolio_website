// ===============================
// SKILLS BAR ANIMATION
// ===============================

gsap.utils.toArray(".skill-bar span").forEach(bar => {
  const level = bar.getAttribute("data-level");

  gsap.to(bar, {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 70%",
    },
    width: level + "%",
    duration: 1.4,
    ease: "power3.out"
  });
});