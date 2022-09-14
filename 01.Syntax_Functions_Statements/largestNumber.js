function largestNumber(...numbers) {
  sortedDecending = numbers.sort((a, b) => b - a);
  console.log(`The largest number is ${sortedDecending[0]}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
