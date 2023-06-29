// Print odd numbers in an array:

let OddNum=(arr)=> {
    let empty=[]
    for (let index in arr) {
      if (arr[index] % 2 != 0) {
        empty.push(arr[index])
      }
    }
    console.log(empty);
  }
  OddNum([1, 2, 3, 4, 5, 9, 6, 7, 41, 45, 65, 33, 98]);
