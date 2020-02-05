import { Haiku } from "../src/haiku.js";

describe("Haiku",  () => {

  test("this should confirm input in line 1", () => {
    var haiku = new Haiku("hello", 0, 0);
    expect(haiku.checkInput1()).toEqual(true)
  });
  
  test("this should confirm input in line 2", () => {
    var haiku = new Haiku("hello", "hola", 0);
    expect(haiku.checkInput2()).toEqual(true)
  });

  test("this should confirm input in line 3", () => {
    var haiku = new Haiku("hello", "hola", "bojour");
    expect(haiku.checkInput3()).toEqual(true)
  });

});