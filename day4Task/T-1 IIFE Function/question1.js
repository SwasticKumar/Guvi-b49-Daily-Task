// Print Odd Numbers in an Array.

//Function:
(function (arr) {
  let empty=[]
  for (let index in arr) {
    if (arr[index] % 2 != 0) {
      empty.push(arr[index])
    }
  }
  console.log(empty);
})([1, 2, 3, 4, 5, 9, 6, 7, 23, 41, 45, 65, 33, 70, 32, 98]);
