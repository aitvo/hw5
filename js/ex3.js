//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

// Write higher order functions / There are many solutions
function calculateStats(scores) {
  const { min, max, sum } = scores.reduce(
    (acc, score) => {
      return {
        min: score < acc.min ? score: acc.min,
        max: score > acc.min ? score: acc.max,
        sum: acc.sum + score,
      };
    }
  )
  const average = sum / scores.length;
  return { min, max, average };
}

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)

const cLastNameResults = studentList
  .filter(student => student.lastName.startsWith("C")) // last name filter
  .map (student => {
    const { min, max, average } = calculateStats(student.scores);
    return {
      firstName: student.firstName,
      lastName: student.lastName,
      minScore: min,
      maxScore: max,
      avgScore: average,
    }
  })

// print
console.log(cLastNameResults);

// ai's question: why is my score showing undefined?