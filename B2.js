const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson"
]

function getUpperNames(playerNames) {
  return playerNames.map(function(name) {
    return name.toUpperCase()
  })
}

const result = getUpperNames(playerNames)
console.log(result)