const sumAll = function(firstNum, secondNum) {
    let result = 0;
    if (firstNum < 0 || secondNum < 0 || typeof firstNum !== "number" || typeof secondNum !== "number") {
        return 'ERROR';
    }
    if (secondNum > firstNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            result += i;
        }
    }
    for (let i = secondNum; i <= firstNum; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
