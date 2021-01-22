
// 1) Create function testMe that creates 3 variables and returns their product

const testMe = (num1, num2, num3) => {
    return num1 * num2 * num3
}

// 2) Create function AI that respond "hi" if the parameter is "hello", "I cannot understand" otherwise
const AI = (greetings) => {
    if (greetings.toString().toLowerCase() === "hello")
        return "hi"
    else
        return "I cannot understand"
}

// 3) Create function tripleSum that receives 3 numbers and returns the product of them
const tripleSum = (num1, num2, num3) => {
    return num1 * num2 * num3
}

// 4) Create function factorial that calculates the factorial of the given param
const Factorial = (number) => {
    let total = 1
    for (let i = number; i > 0; i--) {
        total *= i
    }
    return total
}

// 5) Create function calculator with 3 params, two numbers (param1 and param2) and a sign between "+","-","*","/". Return the operation between param1 and param2
const calculator = (num1, num2, sign) => {
    return eval(num1 + sign + num2)
}

// 6) Create function absolute that returns the absolute value of the parameter (es.: p = 1 returns 1, p = -27 returns 27)
const absolute = (number) => {
    return Math.abs(number)
}

// 7) Create function fizzBuzz that returns fizz if param is multiple of 3, buzz if multiple of 7, fizzbuzz if multiple of 3 and 7. Otherwise returns the same number
const fizzBuzz = (param) => {
    if (param % 3 === 0 && param % 7 === 0)
        return "fizzbuzz"
    else if (param % 3 === 0)
        return "fizz"
    else if (param % 7 === 0)
        return "buzz"
    else
        return param
}

// 8) Create function positive that returns true if the params is greater than 0
const postive = (param) => {
    return param > 0
}

// 9) Create function transform that receives a number between 0 and 9 and returns a string containing the number (ex.: 0 returns "zero", 1 returns "one")
const transform = (number) => {
    if (number >= 0 && number < 10) {
        let num_words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
        return num_words[number]
    }
    else
        return "invalid input. Enter number from 0 to 9"
}

// 10) Create function sum that receives an array as parameter and return the sum of the elements (only numerical ones)
const sum = (input_array) => {
    let total = 0
    for (let i = 0; i < input_array.length; i++) {
        if (Number.isInteger(input_array[i]))
            total += input_array[i]
    }
    return total
}

// 11) Create function min that receives an array and returns the minumum value in the array
const min = (input_array) => {
    return Math.min(...input_array)
}

// 12) Create function arrayFi that receives an object and trasforms it in an array. Example: arrayFi({ name: "John", surname: "Doe"}) returns [ "name", "john", "surname", "Doe"]
const arrayFi = (input_object) => {
    let keys = Object.keys(input_object)
    let values = Object.values(input_object)
    let output_array = []
    for (let i = 0; i < keys.length; i++) {
        output_array.push(keys[i])
        output_array.push(values[i])
    }
    return output_array
}
/* better solution to arrayFi function
let result = []
for (let prop in obj){
    result.push(prop)
    result.push(obj[prop])
}
*/
// 13) Create function objectyFi that revert the array generated by arrayFi into and object
const objectFi = (input_array) => {
    output_object = {}

    if (input_array.length % 2 === 0) {
        for (let i = 0; i < input_array.length; i += 2) {
            output_object[input_array[i]] = input_array[i + 1]
        }
    }
    else
        return "length of array is not even"

    return output_object
}


// 14) Create function revertArray that revert the elements into an array
const revertArray = (input_array) => {
    let result = []
    for (let i = 0; i < input_array.length; i++) {
        result.unshift(input_array[i])
    }
    return result
}

// 15) Create function swappy that receives 2 positions and swap them into the array. Example: array = [ 1, 2, 3, 4]. Swappy(0, 3) ==> [3, 2, 1, 4]
Swappy = (array, pos1, pos2) => {
    let temp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = temp
    return array
}