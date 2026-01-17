// ===============================
// PROJECT CARD 3D TILT EFFECT
// ===============================

if (window.innerWidth > 768) {
  document.querySelectorAll(".project-modern-card").forEach(card => {

    card.style.willChange = "transform";

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 6;
      const rotateY = ((x / rect.width) - 0.5) * -6;

      card.style.transform =
        `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  });
}