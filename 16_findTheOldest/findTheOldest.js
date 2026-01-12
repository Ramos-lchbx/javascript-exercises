const findTheOldest = function(array) {
    let oldest = array.reduce((acc, val) => {
        today = new Date();

        if (!acc.yearOfDeath){
            acc.yearOfDeath = today.getFullYear();
        }

        let accAge = acc.yearOfDeath - acc.yearOfBirth;
        let valAge = val.yearOfDeath - val.yearOfBirth;
        
        if ((valAge) > (accAge)){
            return val;
        }  
        return acc;
    })
    return oldest;
};

// Do not edit below this lines
module.exports = findTheOldest;
