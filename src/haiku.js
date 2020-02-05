export function Haiku(line1, line2, line3) { 
  this.line1 = line1,
  this.line2 = line2,
  this.line3 = line3
};
  Haiku.prototype.checkInput1 = function() {
    if (this.line1 === "hello") {
      return true;
    }
  }
  Haiku.prototype.checkInput2 = function(){
    if (this.line2 === "hola") {
      return true;
  }
}
  // Haiku.prototype.checkInput3 = function(){
  //   if (this.line3 === "yo") {
  //     return true;
