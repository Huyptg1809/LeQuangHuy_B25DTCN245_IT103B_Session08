const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37"
]

function reportByPosition(players) {
  const grouped = players.reduce(function(acc, player) {
    const parts = player.split(" - ")
    const name = parts[0]
    const position = parts[1]
    const goals = Number(parts[2])
    const assists = Number(parts[3])
    const matches = Number(parts[4])

    if (!acc[position]) {
      acc[position] = {
        count: 0,
        goals: 0,
        assists: 0,
        matches: 0
      }
    }

    acc[position].count += 1
    acc[position].goals += goals
    acc[position].assists += assists
    acc[position].matches += matches

    return acc
  }, {})

  console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ")

  Object.keys(grouped).forEach(function(position) {
    const data = grouped[position]
    const totalPerformance = data.goals + data.assists
    const avg = data.matches === 0 ? 0 : (totalPerformance / data.matches).toFixed(2)

    console.log(position + ":")
    console.log("- Số cầu thủ: " + data.count)
    console.log("- Tổng bàn thắng: " + data.goals)
    console.log("- Tổng kiến tạo: " + data.assists)
    console.log("- Tổng số trận: " + data.matches)
    console.log("- Trung bình hiệu suất/trận: " + avg)
    console.log("")
  })

  const totalGoals = Object.values(grouped)
    .map(function(data) {
      return data.goals
    })
    .reduce(function(sum, goals) {
      return sum + goals
    }, 0)

  console.log("----------------------------")
  console.log("Tổng bàn thắng toàn đội: " + totalGoals)
}

reportByPosition(players)