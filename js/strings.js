//STEP 1
// let userName = prompt("Please input your name: ")
// window.alert(`The length of your name is: ${userName.length}`)

//STEP 2
// let userName = prompt("Please input your name: ")
// window.alert(`The length of your name is: ${userName.length}`)
// let charNumber = prompt("Please tell me a number within the length of your name: ")
// window.alert(`The character is ${userName.charAt(charNumber)}`)

//STEP 3
// let firstName = prompt("Please input your first name: ")
// let lastName = prompt("Please input your last name: ")
// window.alert(`Your name is: ${firstName.concat(' '+ lastName)}`)

//STEP 4
// let theString = "The quick brown fox jumps over the lazy dog"
// let index = theString.indexOf('fox');
// window.alert(`The index of the word "fox" is: ${index}`)
//STEP 5
// let theString = "The quick brown fox jumps over the lazy dog"
// let index = theString.lastIndexOf('fox');
// window.alert(`The index of the word "fox" is: ${index}`)

//STEP 6
// let theString = "The quick brown fox jumps over the lazy dog"
// let fullName = prompt('Please input your full name: ')
// window.alert(theString.replace('the lazy dog', `${fullName}`))

//STEP 7
// let theString = "The quick brown fox jumps over the lazy dog"
// let searchChar = prompt(`Please input a word within ${theString}: `)
// window.alert(`The position of the word ${searchChar} is ${theString.search(`${searchChar}`)}` )

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// use slice() method
// let new_string = old_string.slice(31, 43).toUpperCase()
// window.alert(`After used slice() method, the new string is: "${new_string}"`)
// use substr() method
// let new_string = old_string.substr(31).toUpperCase()
// window.alert(`After used substr() method, the new string is: "${new_string}"`)
// use substring() method
// let new_string = old_string.substring(31, 43).toUpperCase()
// window.alert(`After used substring() method, the new string is: "${new_string}"`)

//STEP 9
// let theString = '  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// let trimString = theString.trim().toLowerCase()
// window.alert(`After used trim() method, the new string is: "${trimString}" `)

//STEP 10
let theString = "the quick brown fox jumps over the lazy dog"
// let capFirstChar = theString.replace("the", "The")
// window.alert(`After capitalized the first word, the string is: "${capFirstChar}" `)
//  or use the following methods
window.alert(`After capitalized the first word, the string is: "${theString.charAt(0).toUpperCase().concat(theString.substring(1))}" `)