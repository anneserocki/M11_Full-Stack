//STEP 1
// let inputStr = prompt('Please input a string except for punctuaitions and numbers: ');  // input

// const alphaOrderStr = (inputStr) => {
//     return inputStr.split('').sort().join('')
// };  // define order function with split(), sort(), join()methods

// console.log(alphaOrderStr(inputStr));  // output  


//STEP 2
// let inputStr = prompt('Please input a string except for punctuaitions and numbers: ');  // input
// // define a function for capitalizing the first character of the word 
// const upperCaseFirstChar = (inputStr) => {
//     let words = inputStr.split(' ');
//     console.log(words);
//     const capitalizedWords = words.map(word => {
//       let firstLetter = word.charAt(0).toUpperCase();
//       console.log(firstLetter);
//       let restOfWord = word.slice(1);
//       console.log(restOfWord);
//       return `${firstLetter}${restOfWord}`;
//     });
//     return capitalizedWords.join(' ');
//   }  //output
//   console.log(upperCaseFirstChar(inputStr));  

//STEP 3
// let inputStr = prompt('Please input a string except for punctuaitions and numbers: ').toLowerCase();  // input a string and make them become lowercase
// let vowelsCount = 0;  // define count variable

// const totalVowels = (inputStr) => {        
//     let vowelsArr = ['a','o', 'e', 'i', 'u'];
//     for (const letter of inputStr) {
//         if (vowelsArr.includes(letter)) {
//             vowelsCount++;            
//         }        
//       }  // use for... of loop to aggreage vowels number
//       console.log(vowelsCount); 
//       return vowelsCount;                
// };  // define a function for 
// console.log(totalVowels(inputStr));

//STEP 4
// let inputLength = prompt('Please input the lengh of an ID: ');  // input a number

// function getRandomId(inputLength) {
//     let randomID = '';
//     const allchars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!$@#';
//     const allcharsLength = allchars.length;
//     for (let i = 0; i < inputLength; i++) {
//         randomID += allchars.charAt(Math.floor(Math.random() * allcharsLength));
//     }
//     return randomID;
//   }  // define a function to get a random ID with Math.random(), Math.floor(), charAt() methods and for loop
//   console.log(getRandomId(inputLength))

//STEP 5
let countriesArr = ["Australia", "Germany", "United States of America"]; // get countries' list

function getLongestName(countriesArr) {
    let longestName = '';
    for (let i = 0; i < countriesArr.length; i++) {
      if (countriesArr[i].length > longestName.length) {
        longestName = countriesArr[i];
      }
    }
    return longestName;
  }  // use for loop to get the longest name
  console.log(getLongestName(countriesArr));
  