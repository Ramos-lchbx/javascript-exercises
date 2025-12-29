const convertToCelsius = function(temp) {
    let converted = ((temp-32)/(9/5));
    let readable = Math.round(converted * 10) / 10;
    return readable;
};

const convertToFahrenheit = function(temp) {
    let converted = (temp * (9/5) + 32);
    let readable = Math.round(converted * 10) / 10;
    return readable;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
