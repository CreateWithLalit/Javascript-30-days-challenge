/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    
    let current = init; // store value
    
    return {
        increment: function() {
            // increase current by 1
             current++
            // return current
            return current
        },
        
        decrement: function() {
            current--
            // return current
            return current
        },
        
        reset: function() {
            // set current back to init
            current = init
            // return current
            return current
        }
    };
};