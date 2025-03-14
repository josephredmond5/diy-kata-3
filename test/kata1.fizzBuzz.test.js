const {fizzBuzz} = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('fizz')
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('buzz')
  });
  

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('fizzBuzz')
    expect(fizzBuzz(30)).toBe('fizzBuzz')
    expect(fizzBuzz(90)).toBe('fizzBuzz')
  });

  
  
  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4)
    expect(fizzBuzz(11)).toBe(11)
  });
  
});


