// Return median of two sorted arrays of the same size.

let getMedian = (ar1, ar2, n) => {
  let j = 0;
  let i = n - 1;
  while (ar1[i] > ar2[j] && j < n && i > -1) {
    let temp = ar1[i];
    ar1[i] = ar2[j];
    ar2[j] = temp;
    i--;
    j++;
  }
  ar1.sort((a, b) => {
    return a - b;
  });
  ar2.sort((a, b) => {
    return a - b;
  });
  return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
};

let ar1 = [1, 12, 15, 26, 38];
let ar2 = [2, 13, 17, 30, 45];

let n1 = 5;
let n2 = 5;
if (n1 == n2) console.log("Median is " + getMedian(ar1, ar2, n1));
else console.log("Doesn't work for arrays of unequal size");
