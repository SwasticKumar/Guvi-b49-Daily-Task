// Sum of all numbers in an array:

(function natural(number) {
  let sum = 0;
  for (let value of number) {
    sum += value;
  }
  console.log(sum);
})([10, 20, 30, 40]);
