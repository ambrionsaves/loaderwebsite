// Ambrion — script.js

const statuses = [
  "Access denied — logging request",
  "Unauthorized access attempt detected",
  "Firewall active — request blocked",
  "Security protocol engaged",
  "This resource is restricted",
  "No clearance found for this session",
];

let idx = 0;
const el = document.getElementById("statusText");

setInterval(() => {
  idx = (idx + 1) % statuses.length;
  el.style.transition = "opacity 0.3s";
  el.style.opacity = "0";
  setTimeout(() => {
    el.textContent = statuses[idx];
    el.style.opacity = "1";
  }, 300);
}, 3500);

// Block right-click and devtools shortcuts
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
