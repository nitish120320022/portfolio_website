// ===============================
// PROJECT CARD 3D TILT EFFECT
// ===============================

if (window.innerWidth > 768) {
  document.querySelectorAll(".project-modern-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 6;
      const rotateY = ((x / rect.width) - 0.5) * -6;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });
}