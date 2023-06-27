// Tasks 1
// Compare two Json Properties without order:

let json1 = {
  name: "Swastic",
  degree: "B.Tech Civil",
  age: 27,
  place: "Trichy",
};
let json2 = {
  degree: "B.Tech Civil",
  place: "Trichy",
  name: "Swastic",
  age: 27,
};
let compareJson = () => {
  if (Object.keys(json1).length !== Object.keys(json2).length) {
    return false;
  }
  for (let keys in json1) {
    if (!json2.hasOwnProperty(keys) || json1[keys] !== json2[keys]) {
      return false;
    }
  }
  return true;
};
console.log(compareJson());
