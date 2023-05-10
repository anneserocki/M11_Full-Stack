//STEP 1
// inputNumber = prompt('Whatever negative number or positive number, please input a number: ')
// console.log(`${Math.abs(inputNumber)}`)

//STEP 2
// let decimalNumber = -2.894
// console.log(`${Math.ceil(decimalNumber)}`)
// or use the different positive number
// let decimalNumber = 2.294
// console.log(`${Math.ceil(decimalNumber)}`)

//STEP 3
// let decimalNumber = -2.894
// console.log(`${Math.floor(decimalNumber)}`)
// or
// let decimalNumber = 2.294
// console.log(`${Math.floor(decimalNumber)}`)

//STEP 4
// let inputNumber = prompt('Please five numbers with comma delimiting each number: ')
// // use split() method to get an array
// let numbersAsString = inputNumber.split(',');
// // use map() function to parseInt every element and get an number array, use trim() method to make sure no whitespace around every number
// let numbers = numbersAsString.map(num => parseInt(num.trim()));
// console.log(numbers);
// // compare with numbers and get the largest, the smallest number.
// maxNumber = Math.max(...numbers)
// minNumber = Math.min(...numbers)
// console.log(`The largest number is: ${maxNumber}; \nThe smallest number is: ${minNumber}`)

//STEP 5
let inputNumber = parseInt(prompt('Please input a number: '))
squareRootNumber = Math.sqrt(inputNumber)
console.log(`The square root number is: ${squareRootNumber} `)
