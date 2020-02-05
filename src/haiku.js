export function Haiku(line1, line2, line3) { 
  this.line1 = line1,
  this.line2 = line2,
  this.line3 = line3
};
  Haiku.prototype.checkInput1 = function() {
    if (this.line1.includes("")) {
      return true;
    }
  }
  Haiku.prototype.checkInput2 = function(){
    if (this.line2.includes("")) {
      return true;
  }
}
  Haiku.prototype.checkInput3 = function(){
    if (this.line3.includes("")) {
      return true;
  }
}
Haiku.prototype.sepWords1 = function() {
 let phrase1 = this.line1.split(" ")
 return phrase1

}
Haiku.prototype.sepWords2 = function() {
  let phrase2 = this.line2.split(" ")
  return phrase2
}
Haiku.prototype.sepWords3 = function() {
  let phrase3 = this.line3.split(" ")
  return phrase3
}
Haiku.prototype.vowelCount1 = function() {
  const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
  let vowelArray1 = [];
  let wordSplit1 = this.line1.split("")
  for (var i=0; i<= wordSplit1.length; i++) {
    if(wordSplit1.includes(vowels[i])) {
      vowelArray1.push(vowels);
    }
  }
  return (vowelArray1.length);
}
// Haiku.prototype.vowelCount2 = function() {
//   const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
//   let vowelArray2 = [];
//   let wordSplit2 = this.line2.split("")
//   for (var i=0; i<= wordSplit2.length; i++) {
//     if(wordSplit2.includes(vowels[i])) {
//       vowelArray2.push(vowels[i]);
//     }
//   }
//   console.log();
//   return (vowelArray2.length);
// }
// Haiku.prototype.vowelCount3 = function() {
//   const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
//   let vowelArray3 = [];
//   let wordSplit3 = this.line3.split("")
//   for (var i=0; i<= wordSplit3.length; i++) {
//     if(wordSplit3.includes(vowels[i])) {
//       vowelArray3.push(vowels[i]);
//     }
//   }
//   console.log(wordSplit3);
//   return (vowelArray3.length);
// }