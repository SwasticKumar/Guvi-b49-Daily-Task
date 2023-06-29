// Sum of all numbers in an array

let naturalNum = (number) => {
  let sum = 0;
  for (let value of number) {
    sum += value;
  }
  console.log(sum);
};
naturalNum([1, 2, 3, 4, 5, 6]);