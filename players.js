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
  {
    id: 5,
    name: "Anna",
    scorePoints: 4100,
  },
  {
    id: 6,
    name: "Sergei",
    scorePoints: 3900,
  },
  {
    id: 7,
    name: "Elena",
    scorePoints: 2800,
  },
  {
    id: 8,
    name: "Dmitry",
    scorePoints: 1200,
  },
  {
    id: 9,
    name: "Maria",
    scorePoints: 3700,
  },
  {
    id: 10,
    name: "Alex",
    scorePoints: 5900,
  },
  {
    id: 11,
    name: "Natalia",
    scorePoints: 4300,
  },
  {
    id: 12,
    name: "Yuri",
    scorePoints: 6150,
  },
  {
    id: 13,
    name: "Tatiana",
    scorePoints: 3800,
  },
  {
    id: 14,
    name: "Mikhail",
    scorePoints: 2600,
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
