const fibonacci = function(num) {
    let fib = [1, 1, 2, 3, 5]
    
    if ( num == 0 ) return 0;

    else if ( num < 0 ) return "OOPS";

    else {
        for( let i = 5 ; i < num ; i++ ){
        fib.push( fib[ i - 1 ] + fib[ i - 2 ] )
        }

        return fib[ num - 1 ];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
