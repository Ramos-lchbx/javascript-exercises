const palindromes = function (str) {
    let letters = str.split("");
    let lettersRev = letters
        .slice()
        .reverse()
        .join()
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    letters = letters
        .join()
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    if(letters === lettersRev){
        return true;
    }else return false;
};

// Do not edit below this line
module.exports = palindromes;
