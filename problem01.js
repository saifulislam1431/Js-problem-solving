/**
 * Problem 1: Let’s play a mind game
 
 * Description:- In this function we take a positive integer and inside this function the number will be calculate by multiply by 3, add 10, divided by 2 and subtract by 5 and return this as a result.
 */

// function mindGame(positiveNumber) {
//     if (typeof positiveNumber !== 'number') {
//         return 'Please enter a positive number'
//     } else {

//         const result = (((positiveNumber * 3) + 10) / 2) - 5;
//         return result;

//     }

// }

// const theNumberIs = mindGame(5);
// console.log(theNumberIs);








/**
 * Problem 2: Finding even or odd
 
 *Description:-  In this function we take a string as input and inside this function will count character of this string and if there have odd number of character we will return Odd else we will return Even as output.

 */

function evenOdd(string) {
    if (string.length % 2 == 0) {
        return 'even';
    } else {
        return 'odd'
    }

}

const isOddEven = evenOdd('chatgpt');
console.log(isOddEven);






/**
 * Problem 3: Is Less or Greater than seven
 
 *  Description:- In this function we take a number as input and inside this function we find difference this number with 7 and if the difference is less then 7 then the function will return subtraction value(difference - 7) and if the difference greater then 7 then this function will return double value of the number (number * 2).

 */

// function isLGSeven(number) {
//     const difference = number - 7;
//     if (difference < 7) {
//         return difference;
//     } else {
//         return number * 2;
//     }

// }

// const theNumberIs = isLGSeven(15);
// console.log(theNumberIs);

/**
 * Problem 4: Finding Bad data
 
 * 
 */