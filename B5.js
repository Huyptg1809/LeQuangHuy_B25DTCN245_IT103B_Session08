const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1"
]

function reportTopPerformers(minPerformance, players) {
  const total = players
    .map(function(player) {
      const parts = player.split(" - ")
      const name = parts[0]
      const goals = Number(parts[2])
      const assists = Number(parts[3])
      const performance = goals + assists
      return { name, performance }
    })
    .filter(function(player) {
      return player.performance >= minPerformance
    })
    .map(function(player) {
      console.log(player.name + ": " + player.performance)
      return player.performance
    })
    .reduce(function(sum, performance) {
      return sum + performance
    }, 0)

  console.log("Tổng hiệu suất: " + total)
  return total
}