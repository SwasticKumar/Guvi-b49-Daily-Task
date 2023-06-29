// Return all the prime numbers in an array:

(function primeNum(ArrValue) {
    ArrValue = ArrValue.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(ArrValue);
})([2, 4, 7, 8, 9, 10, 15, 17, 19, 31, 39, 25, 61, 80]);
