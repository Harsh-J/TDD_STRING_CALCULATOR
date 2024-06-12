const assert = require("assert");

const StringCalculator = require("./string_cal");

const stringCalcObj = new StringCalculator();

describe("Task addition", () => {
  it("Calculate empty string", () => {
    assert.strictEqual(stringCalcObj.calculate(""), 0);
  });

  it("Calculate string with one element", () => {
    assert.strictEqual(stringCalcObj.calculate("1"), 1);
  });

});
