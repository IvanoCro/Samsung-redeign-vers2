gsap.registerPlugin(ScrollTrigger);

let galaxyAiTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".galaxy-ai-list",
    start: "top center",
    end: "bottom bottom",
    scrub: true 
  }
});

galaxyAiTimeline
  .to(".galaxy-ai-list-item", { y: 0, opacity: 1, stagger: 0.5 })

  function createGalaxyIcon(x, y) {
const icon = document.createElement("div");
icon.classList.add("galaxy-ai-icon");

icon.style.left = x + "px";
icon.style.top = y + "px";

document.body.appendChild(icon);

setTimeout(() => {
    icon.remove();
}, 1000);
}

document.addEventListener("click", (e) => {

const count = Math.floor(Math.random() * 3) + 1;
for (let i = 0; i < count; i++) {
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;
    createGalaxyIcon(e.clientX + offsetX, e.clientY + offsetY);
}
});
