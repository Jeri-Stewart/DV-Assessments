///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

/*
    Strategy is to combine all the acres into one array. 
    Use a for loop to loop through the combined array 
    Nest a for loop  in which each acre in the combined array is added to the 'totalAcres' variable
*/

let totalAcres = 0; // create variable to store the sum of all the acres
combinedAcres = [fujiAcres, galaAcres, pinkAcres]; // Create an array that combines the three acres

for (acre of combinedAcres) {
  for (num of acre) {
    // nested for loop to determine total for each individual acre
    totalAcres += num; // assign new value while looping through the individual acre
  }
}

// console.log the answer the variable 'totalAcres' to Problem 1 below

console.log("PROBLEM 1");
console.log(totalAcres);
console.log(`The total number of acres is ${totalAcres}`);
console.log("_____________________");

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

/*
    Strategy is to create a variable called `totalDays` 
    Use a for loop to loop through the  combined acre array `combinedAcres`
    Using the `.length` determine the total number of elements in each `acre` and add to `totalDays`
    The answer" `averageDailyAcres` = `totalAcres` / `totalDays`
*/

let averageDailyAcres = 0;
let totalDays = 0;

for (acre of combinedAcres) {
  totalDays += acre.length;
}

averageDailyAcres = totalAcres / totalDays; // Use formula to determine average: `averageDailyAcres` = `totalAcres` / `totalDays`

console.log("PROBLEM 2");
console.log(`The total number of days are ${totalDays}`);
console.log(averageDailyAcres);
console.log(`${averageDailyAcres} acres on average are picked daily`);
console.log("_____________________");

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

while (acresLeft > 0) {
  // This while loops will continuing running as long as `acresLeft` is greater than zero
  days += 1; // counter to add to days; the same as days = days + 1
  acresLeft -= averageDailyAcres; // substract the daily avg acres picked to numbe rof acres left; the same as acresLeft = acresLeft - averageDailyAcres
}

console.log("PROBLEM 3");
console.log(days);
console.log(`${days} more days of work are left`);
console.log("_____________________");

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

copyCombinedAcres = combinedAcres.slice(); // create copy of combined Acre to maniuplate

for (acre of copyCombinedAcres) {
  // loop through array to access the indivual apple types
  for (i = 0; i < acre.length; i++) {
    // nested for loop to create a counter to access each element in the acre array
    acre[i] = acre[i] * 6.5; // multiply each element by 6.5
  }
}

// index each element of the combined array and assign to new variable

let fujiTons = copyCombinedAcres[0];
let galaTons = copyCombinedAcres[1];
let pinkTons = copyCombinedAcres[2];

console.log("PROBLEM 4");
console.log(`fujitons: ${fujiTons}`);
console.log(`galaTons: ${galaTons}`);
console.log(`pinkTons: ${pinkTons}`);
console.log("_____________________");
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// create variables and set equal to 0 to start
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// create for loops for each apple variety

for (num of fujiTons) {
  num = num * 2000; // multiply each element by 2000 to convert to pounds
  fujiPounds += num; // add resulting number to apple pounds total
}

for (num of galaTons) {
  num = num * 2000; // multiply each element by 2000 to convert to pounds
  galaPounds += num; // add resulting number to apple pounds total
}

for (num of pinkTons) {
  num = num * 2000; // multiply each element by 2000 to convert to pounds
  pinkPounds += num; // add resulting number to apple pounds total
}

console.log("PROBLEM 5");
console.log(`fujiPounds: ${fujiPounds}`);
console.log(`galaPounds: ${galaPounds}`);
console.log(`pinkPounds: ${pinkPounds}`);
console.log("_____________________");

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("PROBLEM 6");
console.log(`fujiProfit: ${fujiProfit}`);
console.log(`galaProfit: ${galaProfit}`);
console.log(`pinkProft: ${pinkProfit}`);
console.log("_____________________");

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit; // create varriable and use '+' operator to add apple profit variables together

console.log("PROBLEM 7");
console.log(`totalProfit: ${totalProfit}`);
console.log("_____________________");
