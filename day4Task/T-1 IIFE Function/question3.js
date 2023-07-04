// Sum of all numbers in an array:

(function(number) {
  let sum = 0;
  for (let value of number) {
    sum += value;
  }
  console.log(`Natural Number: ${sum}`);
})([10, 20, 30, 40]);
