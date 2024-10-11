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

// add 5 points
for (let student of studentList) {
  for (let i = 0; i < student.scores.length; i++) {
    student.scores[i] += 5;
  }
}

// add missing scores
for (let student of studentList) {
  const total = student.scores.reduce((sum, score) => sum + score, 0); // sums up the score
  const average = total / student.scores.length; // finds the updated average
  student.scores.push(average); // average score at the end of array
}

for (let student of studentList) {
  const fullName = `${student.lastName}, ${student.firstName}`; // set fullName to the student's first & last name
  const updatedScores = student.scores
}
console.log(`Full name (last, first): ${fullName}`);
console.log(`Updated scores are: ${updatedScores}`);

// ai question: why is it saying that it's not defined?