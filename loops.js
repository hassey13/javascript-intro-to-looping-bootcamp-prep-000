var forLoop = function(array) {
    for(i = 0; i < 25; i++) {
        if(i === 1) {
            array.push("I am 1 strange loop");
        }
        else { array.push(`${i} strange loops`)
        };
    };
    return array;
};

// Create a function called whileLoop in loops.js. The function should take a number as an argument. Using a while loop, count down (using console.log) from the passed in number to 0. Then return the string 'done'.

var whileLoop = function(n) {
    while(n > 0) {
        console.log(n);
        n -= 1;
    };
    return "done";
};

// Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the maybeTrue() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until maybeTrue() returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.

var doWhileLoop = function(array) {
    var maybeTrue = function() {
        return Math.random() >= 0.5
    };
    do {
        array.pop();
    } while (array.length > 0 && maybeTrue())
    return array;
};
