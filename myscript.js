// api/myscript.js
// Vercel serverless function — serves raw Lua so HttpGet + loadstring works

export default function handler(req, res) {
  const lua = `
--// Ambrion Multi-Game Loader
local gameId = game.PlaceId
local scripts = {
    [17625359962] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/rivals/refs/heads/main/versionpicker', true))()",
    [13772394625] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/bladeball/refs/heads/main/Ambrion', true))()",
    [109983668079237] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/steal-a-brainrot/refs/heads/main/Ambrion', true))()",
    [286090429] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/arsenal/refs/heads/main/Ambrion', true))()",
    [99567941238278] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/ink-game/refs/heads/main/Ambrion', true))()",
    [79546208627805] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/99-nights/refs/heads/main/Ambrion', true))()",
    [16447934574] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/touch-football/refs/heads/main/V1.0.1', true))()",
    [14259168147] = "loadstring(game:HttpGet('https://raw.githubusercontent.com/ambrionsaves/basketball-legends/refs/heads/main/Ambrion', true))()",
}
local scriptToRun = scripts[gameId]
if scriptToRun then
    print("[Ambrion Loader] Loading script for Game:", gameId)
    loadstring(scriptToRun)()
else
    game.Players.LocalPlayer:Kick("Ambrion Scripts | This game is not supported.")
end
`.trim();

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send(lua);
}
