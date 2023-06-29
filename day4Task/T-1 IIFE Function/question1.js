// Print Odd Numbers in an Array.

let arr = [1, 2, 3, 4, 5, 9, 6, 7, 23, 41, 45, 65, 33, 70, 32, 98];
//Function:
(function (arr) {
  for (let index in arr) {
    if (arr[index] % 2 != 0) {
      console.log(arr[index]);
    }
  }
})(arr);
