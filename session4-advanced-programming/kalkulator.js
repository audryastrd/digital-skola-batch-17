function kalkulator(number1, operator, number2) {
    switch (operator) {
        case "+":
            return number1 + number2;

        case "-":
            return number1 - number2;

        case "*":
            return number1 * number2;

        case "/":
            return number1 / number2;

        default:
            return "Operator is invalid";
    }
}

module.exports = kalkulator;