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
Haiku.prototype.vowelCount = function() {
  const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
  let vowelArray = [];
  let wordSplit = this.line1.split("")
  for (var i=0; i<= wordSplit.length; i++) {
    if(wordSplit.includes(vowels[i])) {
      vowelArray.push(vowels[i]);
    }
  }
  return vowelArray.length
}