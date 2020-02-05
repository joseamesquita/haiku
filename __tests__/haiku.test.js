import { Haiku } from "../src/haiku.js";

describe("Haiku",  () => {

  test("this should confirm input in line 1", () => {
    let haiku = new Haiku("hello", 0, 0);
    expect(haiku.checkInput1()).toEqual(true)
  });
  
  test("this should confirm input in line 2", () => {
    let haiku = new Haiku("hello", "hola", 0);
    expect(haiku.checkInput2()).toEqual(true)
  });

  test("this should confirm input in line 3", () => {
    let haiku = new Haiku("hello", "hola", "bojour");
    expect(haiku.checkInput3()).toEqual(true)
  });
  test("this should take input from line 1 and place each word into an array", () => {
    let haiku = new Haiku("My name is joe schmoe", "things" , "stuff");
    expect(haiku.sepWords1()).toEqual(["My", "name", "is", "joe", "schmoe"])
  });

  test("this should take input from line 2 and place each word into an array", () => {
    let haiku = new Haiku("things", "Hello Epicodus", "stuff");
    expect(haiku.sepWords2()).toEqual(["Hello", "Epicodus"])
  });
  test("this should take input from line 2 and place each word into an array", () => {
    let haiku = new Haiku("things", "Hello Epicodus", "stuff and things");
    expect(haiku.sepWords3()).toEqual(["stuff", "and", "things"])
  })
});
test("this should count the number of vowels in line1", () => {
  let haiku = new Haiku("words", "more words",  "even more words")
  expect(haiku.vowelCount()).toEqual(1);
});