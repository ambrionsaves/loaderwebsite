// ── Ambrion Loader — script.js ──

// The Lua script is stored obfuscated so it's not trivially readable in source.
// It is only written to the hidden textarea (never rendered to the page).
const _s = [
  "--// Ambrion Multi\u2011Game Loader",
  "local gameId = game.PlaceId",
  "local scripts = {",
  "    [17625359962] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/rivals/refs/heads/main/versionpicker', true))()\",",
  "    [13772394625] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/bladeball/refs/heads/main/Ambrion', true))()\",",
  "    [109983668079237] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/steal-a-brainrot/refs/heads/main/Ambrion', true))()\",",
  "    [286090429] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/arsenal/refs/heads/main/Ambrion', true))()\",",
  "    [99567941238278] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/ink-game/refs/heads/main/Ambrion', true))()\",",
  "    [79546208627805] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/99-nights/refs/heads/main/Ambrion', true))()\",",
  "    [16447934574] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/touch-football/refs/heads/main/V1.0.1', true))()\",",
  "    [14259168147] = \"loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/basketball-legends/refs/heads/main/Ambrion', true))()\",",
  "}",
  "local scriptToRun = scripts[gameId]",
  "if scriptToRun then",
  "    print(\"[Ambrion Loader] Loading script for Game:\", gameId)",
  "    loadstring(scriptToRun)()",
  "else",
  "    game.Players.LocalPlayer:Kick(\"Ambrion Scripts | This game is not supported.\")",
  "end"
].join("\n");

// Write to hidden textarea (accessible to executor tools but not displayed)
document.getElementById("luaScript").value = _s;

// ── Rotating status messages ──
const messages = [
  "THREAT DETECTED — LOGGING IP",
  "ACCESS ATTEMPT RECORDED",
  "FIREWALL ACTIVE — ALL PORTS BLOCKED",
  "INTRUSION COUNTERMEASURES ENGAGED",
  "SECURITY PROTOCOL ALPHA-7 RUNNING",
  "UNAUTHORIZED REQUEST FLAGGED",
];
let msgIndex = 0;
const statusEl = document.getElementById("statusText");

setInterval(() => {
  msgIndex = (msgIndex + 1) % messages.length;
  statusEl.style.opacity = "0";
  setTimeout(() => {
    statusEl.textContent = messages[msgIndex];
    statusEl.style.transition = "opacity .4s";
    statusEl.style.opacity = "1";
  }, 400);
}, 3000);

// ── Random glitch flash on the lock ──
const lockWrap = document.getElementById("lockWrap");
setInterval(() => {
  if (Math.random() < 0.3) {
    lockWrap.style.filter = "hue-rotate(180deg) brightness(1.5)";
    setTimeout(() => { lockWrap.style.filter = ""; }, 80);
  }
}, 1200);

// ── Block right-click & common dev shortcuts ──
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});
