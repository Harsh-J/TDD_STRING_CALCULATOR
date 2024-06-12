class StringCalculator{

    constructor(){}

    calculate (string_to_sum="" , delimiter="," ){

        let sum = 0;

        this.convertString(numberString, delimiter).forEach((number) => {
            this.validateNumber(number);
            sum += +number;
        });

        return sum;
    }


}