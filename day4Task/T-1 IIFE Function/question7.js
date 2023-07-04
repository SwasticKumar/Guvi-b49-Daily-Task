// Remove duplicates from an array:

(function (arr) {
  let value = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  console.log(`Without duplicates values: ${value}`);
})(["a", "b", "a", "b", "c",1, 2, 2, 3, 4]);
