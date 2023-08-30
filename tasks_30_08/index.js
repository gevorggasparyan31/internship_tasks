function createCalculator (number) {
    return {
        add: function (value) {
            return number + value;
        },
        subtract: function (value) {
            return number - value;
        },
        multiple: function (value) {
            return number * value;
        },
        divide: function (value) {
            if (value !== 0) {
                return number / value;
            }
                return "Can't divide by 0";
        }
    };
}

let calc = createCalculator(10);
console.log(calc.divide(0));