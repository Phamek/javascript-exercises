const leapYears = function(leapYear) {
    if (leapYear % 4 !== 0 || (leapYear % 100 === 0 && leapYear % 400 !== 0)) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
