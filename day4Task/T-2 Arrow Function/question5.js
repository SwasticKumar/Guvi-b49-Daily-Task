// // Return all the palindromes in an array

let stringArr = ["appa", "array", "12321","mama", "ada", "guvi","620026"];
let newOne = stringArr.length;

let function1=(word) =>{
  let dup = word;
  word = word.split("").reverse().join("");
  return word == dup;
}

let function2=(stringArr, newOne)=> {
  let emptyArr = [];
  for (let i = 0; i < newOne; i++) {
    if (function1(stringArr[i])) {
      emptyArr.push(stringArr[i]);
    }
  }
  return emptyArr;
}

let word = function2(stringArr, newOne);
if (word.length == 0) console.log("-1");
for (let str of word) console.log(str, " ");