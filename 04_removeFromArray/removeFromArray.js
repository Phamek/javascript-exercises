const removeFromArray = function(array, ...args) {
    let newArray = [...array];
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(args[i])) {
            newArray.splice(newArray.indexOf(args[i]), 1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
