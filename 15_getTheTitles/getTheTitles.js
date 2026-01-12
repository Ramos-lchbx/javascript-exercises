const getTheTitles = function(arr) {
    let titles = arr.reduce((acc, val) => {
        acc.push(val.title);
        return acc;
    }, [] )
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
