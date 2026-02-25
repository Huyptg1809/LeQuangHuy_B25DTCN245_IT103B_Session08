const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
]

function displayPlayers(players) {
  if (!Array.isArray(players)) return

  players.forEach(function(player, index) {
    console.log(player)
  })
}

displayPlayers(players)