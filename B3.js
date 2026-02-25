const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
]

function filterPlayersByPosition(position, players) {
  return players.filter(function(player) {
    const parts = player.split(" - ")
    const playerPosition = parts[1]
    return playerPosition === position
  })
}

const midfielders = filterPlayersByPosition("Midfielder", players)
const forwards = filterPlayersByPosition("Forward", players)

console.log(midfielders)
console.log(forwards)