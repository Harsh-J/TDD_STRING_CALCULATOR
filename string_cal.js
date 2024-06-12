class StringCalculator {
  constructor() {}

  calculate(string_to_sum = "", delimiter = ",") {
    let sum = 0;

    this.convertString(string_to_sum, delimiter).forEach((number) => {
      this.validateNumber(number);
      sum += +number;
    });

    return sum;
  }
  convertString(string, delimiter) {
    return string.split(delimiter);
  }
  validateNumber(number) {
    if (number < 0) {
      throw Error(`negative numbers not allowed`);
    }
  }
}

module.exports=StringCalculator