// Convert all the strings to title caps in a string array

let titleCaps = (words) => {
  let content = words.toLowerCase().split(" ");
  for (let i in content) {
    content[i] = content[i][0].toUpperCase() + content[i].slice(1);
  }
  console.log(content.join(" "));
  return content;
};
titleCaps("arrOw funCtioN");
