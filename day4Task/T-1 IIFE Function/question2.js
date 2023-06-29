// Convert all the strings to title caps in a string array:

(function titleCaps(words) {
    let content = words.toLowerCase().split(" ");
    for (let i in content) {
      content[i] = content[i][0].toUpperCase() + content[i].slice(1);
    }
    console.log(content.join(" "));
    return content;
  })("MY name is swastiC kumAr");