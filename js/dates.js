//STEP 1
// let month = prompt("Enter the month (1-12): "); // input month
// let year = prompt("Enter the year (yyyy): "); // input year
// let daysInMonth = new Date(year, month, 0).getDate();  // calculate number of days in month, the parameter 0 presents the last day of previous month
// console.log(`There are ${daysInMonth} days in the month of ${month} of the year ${year}.`);  // display result in console

//STEP 2
// let particularDate = new Date('2022-03-22'); // set a particular date
// let monthName = particularDate.getMonth();
// let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // set an array for months
// console.log(monthArray[monthName]); // display the month name

//STEP 3
// let dateObj = new Date();  // Get an date object
// let dayOfweekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let dayOfWeek = dateObj.getDay();
// console.log(dayOfweekArr[dayOfWeek]); // display the day of this week
// let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6); // Check if the day is a weekend day (Saturday or Sunday)
// if (isWeekend) {
//   console.log("today is a weekend!");
// } else {
//   console.log("Today is not a weekend.");
// };  // if..else for weekend or not and display the result

//STEP 4
// let dateObj = new Date();  // Get an date object
// let dayOfweekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']  // set an array to store the days of a week
// let dayOfWeek = dateObj.getDay();  // Get the day of today for this week
// console.log(`Today is ${dayOfweekArr[dayOfWeek]}`); // display the day of the week
// console.log(`Yesterday was ${dayOfweekArr[dayOfWeek-1]}`); // display yesterday of the week

//STEP 5
let dateObj = new Date();  // Get an date object 
let dayOfWeek = dateObj.getDay(); // Get today's number of the week (0 = Sunday, 1 = Monday,...6 = Saturday)
let dayOfweekArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // set an array to store the days of a week
console.log(`Today is ${dayOfweekArr[dayOfWeek]}`); // get the day of this week
console.log(`Today is ${dayOfweekArr[dayOfWeek].charAt(0)}`); // get the first character of the day

