let str = "my name is keyur patel";

console.log(capitalzeWords(str));

function capitalzeWords(str) {

  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  let capitalized = words.join(" ");
  console.log(capitalized);
}
