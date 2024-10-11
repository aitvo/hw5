// array with number 1-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// odd numbers
const oddNumbers = numbers.filter(number => number % 2 !== 0);

// divisible by 2 or 5 numbers
const divisibleByTwoOrFive = numbers.filter(number => number % 2 === 0 || number % 5 === 0);

// divisible by 3, squared
const divisibleByThree = numbers
  .filter(number => number % 3 === 0) // filter
  .map(number => number ** 2); // squared

// divisible by 5, square and sum
const divisibleByFive = numbers
  .filter(number => number % 5 === 0) // filter by 5
  .map(number => number ** 2) // square each number
  .reduce((acc, value) => acc + value, 0); // sum of squares

// print
console.log(numbers); // original array
console.log(oddNumbers); // odd numbers
console.log(divisibleByTwoOrFive); // divisible by 2 or 5
console.log(divisibleByThree); // divisible by 3, squared
console.log(divisibleByFive); // divisible by 5, square and sum
