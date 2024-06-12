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
  it("Calculate string with one element 2", () => {
    assert.strictEqual(stringCalcObj.calculate("5"), 5);
  });
  it("Calculate string with one element 3", () => {
    assert.strictEqual(stringCalcObj.calculate("7"), 7);
  });
  it("Calculate string with two elements", () => {
    assert.strictEqual(stringCalcObj.calculate("1,1"), 2);
  });
  it("Calculate string with two elements 2", () => {
    assert.strictEqual(stringCalcObj.calculate("3,1"), 4);
  });

  it("Calculate string with 3 elements ", () => {
    assert.strictEqual(stringCalcObj.calculate("1,2,3"), 6);
  });

  it("Calculate string with 3 elements ", () => {
    assert.strictEqual(stringCalcObj.calculate("2,3,4"), 9);
  });
  it('Calculate string with "\\n" delimiter ', () => {
    assert.strictEqual(stringCalcObj.calculate("5\n1\n5", "\n"), 11);
  });
  it('Calculate string with "\\n" delimiter 2', () => {
    assert.strictEqual(stringCalcObj.calculate("5\n1\n7", "\n"), 13);
  });
  it('Calculate string with ";" delimiter ', () => {
    assert.strictEqual(stringCalcObj.calculate("2;5;1", ";"), 8);
  });

  
});
