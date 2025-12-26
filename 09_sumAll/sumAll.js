const sumAll = function(firstVal, secondVal) {

    if ( firstVal < 0 || secondVal < 0 ) return "ERROR";
    if ( Number.isInteger(firstVal) === false || Number.isInteger(secondVal) === false ) return "ERROR";
    if ( firstVal > secondVal ){
        const wip = firstVal;
        firstVal = secondVal;
        secondVal = wip;
    }

    let sum= 0;

    for (let i = firstVal ; i <= secondVal ; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
