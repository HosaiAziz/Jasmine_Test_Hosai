let year = 2020;

describe ("Get year date" , ()=>{

  it ("should be a number", () =>{
    year = parseInt(year);
    expect(year).toBe(2020);
  });
});

const helloWorld = require('../src/helloWorld.js');
 
describe("helloWorld", () => {
    it("returns hello world", () => {
      var actual = helloWorld();
      expect(actual).toBe("hello world!");
    });
  });