// Ambrion Scripts — script.js

// Rotating status messages in the pill
const statuses = [
  "Access denied — logging request",
  "Unauthorized access attempt detected",
  "Firewall active — request blocked",
  "Security protocol engaged",
  "This resource is restricted",
];
let sIdx = 0;
const statusEl = document.getElementById("statusText");

setInterval(() => {
  sIdx = (sIdx + 1) % statuses.length;
  if (!statusEl) return;
  statusEl.style.opacity = "0";
  statusEl.style.transition = "opacity 0.3s";
  setTimeout(() => {
    statusEl.textContent = statuses[sIdx];
    statusEl.style.opacity = "1";
  }, 300);
}, 3500);

// Subtle lock icon glitch
const lockWrap = document.getElementById("lockWrap");
if (lockWrap) {
  setInterval(() => {
    if (Math.random() < 0.25) {
      lockWrap.style.transform = `translateY(-10px) translateX(${(Math.random()-0.5)*4}px)`;
      setTimeout(() => { lockWrap.style.transform = ""; }, 60);
    }
  }, 2000);
}

// Block right-click and common devtools shortcuts
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","J","C","K"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U")
  ) {
    e.preventDefault();
    e.stopPropagation();
  }
});
