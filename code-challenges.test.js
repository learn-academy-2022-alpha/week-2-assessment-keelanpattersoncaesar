// ASSESSMENT 2: Coding Practical Questions with Jest

// const { throwStatement } = require("@babel/types")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiples by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// const num2 = 0
// const num3 = -7
// // Expected output: "15 is divisible by three"
// // Expected output: "0 is divisible by three"
// // Expected output: "-7 is not divisible by three"
// // a describe method that lists the name of the function OR naming of the particular test.

// describe("modThree", () => {

//     it("takes a number as an argument and decides if the number is evenly divisible by three or not", () => {

//       expect(modThree(num1)).toEqual("15 is divisible by three")
//       expect(modThree(num2)).toEqual("0 is divisible by three")
//       expect(modThree(num3)).toEqual("-7 is not divisible by three")

//     })
//   })

// good fail!!!!

// // PC:
// // create function called modThree
// // takes number as argument in ()
// // evaluates number by % 3
// // checks remainder 
// // if number % 3 equals 0, success
// // if not, return failure message? (maybe)
//   // yes, return failure message for num3 

// // b) Create the function that makes the test pass.

// const modThree = (number) => {
//     if (number % 3 === 0) {
//         return `${number} is divisible by three`
//     } else {
//         return `${number} is not divisible by three`
//     } 
// }



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// describe("wordsCap", () => {

//     it("takes in an array of words and returns an array with all the words capitalized", () => {

//         expect(wordsCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(wordsCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
// })

// // good fail - ReferenceError: wordsCap is not defined

      


// // b) Create the function that makes the test pass.

// // PC:
// // create fn called wordsCap
//     // takes array of words as input
// //  .map() over array
//     // capitalize first letter
//         // find index 0 of each word
//         // .toUppercase()
//         // .substring() starting at [1]
//         // glue them back together

// const wordsCap = (array) => {
//     array.map(first => {
//         return first[0].toUpperCase() + first.substring(1)
//     })
// }


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided. 

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

// describe("firstIndex", () => {

//     it("takes in a string and logs the index of the first vowel", () => {

//       expect(vowelTester1(firstIndex)).toEqual("1")
//       expect(vowelTester2(firstIndex)).toEqual("0")
//       expect(vowelTester3(firstIndex)).toEqual("2")

//     })
//   })

// // Passssssed!

// // b) Create the function that makes the test pass.

// // PS:
// // create firstIndex fn
// // takes a string (input)
// // finds index 0 of given string
//   // determines if vowel or not
//   // console.logs it

// const firstIndex = (string) => {
//     // string.map(first => {
//         console.log(first[0]) 
//     }
    
    