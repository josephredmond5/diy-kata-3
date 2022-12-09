const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns yes if True and no if False", () => {
    expect(booleanToWord(true)).toEqual("yes");
    expect(booleanToWord(false)).toEqual("no")
  });
});