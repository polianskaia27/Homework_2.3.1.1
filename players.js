const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let allScorePoints = new Array();

for (const numOfElement in players) {
  scorePointsOfStudent = players[numOfElement].scorePoints;
  allScorePoints.push(scorePointsOfStudent);
}

maxScore = Math.max(...allScorePoints);
indexOfBestPlayer = allScorePoints.indexOf(maxScore);
bestPlayer = players[indexOfBestPlayer].name;
console.log(`Максимальное количество очков набрал ${bestPlayer}.`);
