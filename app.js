const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const typeTarget = document.getElementById("typewriter");
const typeText = "npm run build:portfolio";

if (typeTarget && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let index = 0;
  const type = () => {
    typeTarget.textContent = typeText.slice(0, index);
    index += 1;
    if (index <= typeText.length) {
      window.setTimeout(type, 42);
    }
  };
  type();
} else if (typeTarget) {
  typeTarget.textContent = typeText;
}
