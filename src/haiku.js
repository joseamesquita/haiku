export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1,
      this.line2 = line2,
      this.line3 = line3
  }
  checkInput1() {
    if (this.line1.includes("")) {
      return true;
    }
  }
  checkInput2() {
    if (this.line2.includes("")) {
      return true;
    }
  }
  checkInput3() {
    if (this.line3.includes("")) {
      return true;
    }
  }
  sepWords1() {
    let phrase1 = this.line1.split(" ")
    return phrase1

  }
  sepWords2() {
    let phrase2 = this.line2.split(" ")
    return phrase2
  }
  sepWords3() {
    let phrase3 = this.line3.split(" ")
    return phrase3
  }
  vowelCount1(word) {
    const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
    let vowelArray1 = [];
    let wordSplit1 = word.split(" ");
    for (var i = 0; i < wordSplit1.length; i++) {
      if (vowels.includes(wordSplit1[i])) {
        vowelArray1.push(vowels[i]);
      }
    }
    return (vowelArray1.length);
  }
  removeE() {
    let vowelE = ["E", "e"];
    let wordSplit1 = this.line1.split(" ");
    const arr = []
    for (var i = 0; i < wordSplit1.length; i++) {
      let word = wordSplit1[i];
      let e = word[word.length - 1];
      if (vowelE.includes(e)) {
        let new_word = word.substring(0, word.length - 1)
        arr.push(new_word)
      }
      else {
        arr.push(word)
      }
    }
    return arr;
  }

  dipthong(word) {
    let newWord = word.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < newWord.length; i++) {
      let firstVowel = vowels.includes(word[i]);
      let secondVowel = vowels.includes(word[i + 1])
      console.log(newWord[i])
      if (firstVowel && secondVowel) {
        let result = newWord.replace(word[i + 1], "");
        return result;
      }
      else {
        return newWord;
      }
    }
  }
  syllableCount() {
  let count = [];
  let count2 = [];
  let newWord = this.removeE();
  console.log(newWord)
  for(let i = 0; i < newWord.length; i++){
    let finalWord = this.dipthong(newWord[i]);
  count.push(finalWord)
  }
  console.log(count)
  let syllables = this.vowelCount1(count2);
  return syllables;
  }
};
