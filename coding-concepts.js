// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: [A, l, p, h, a, , , 2, 0, 2, 2]
// b) Verify and explain: 'A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2'

// .split(""), when used on var cohort, will separate all the characters (even the space) into their own individual strings. I mistakenly logged the output in an array and forgot to keep the characters as a string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Nothing, because there is no return statement. Functions need return statements.
// b) Verify and explain: undefined. I was close. Nothing and undefined are two different values. Undefined means that we established the function 'greeter' but never told it to return anything.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]; .map() takes the original array of [4, 5, 6, 7, 8] and multiplies each number by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Line 40 presents an array of [11, 12, 13, 14, 15]. It then performs .filter() with a % 2. Each value at each index is divided by 2 and checked for remainders. If the number does not have a remainder, it is filtered out. This gives us a new array with all odd numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The code wants to console.log the variable myCodingSkills at the location 'languages'. Then it points to index 0, which is "JavaScript".


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George" in place of this.student = name
// b) Verify and explain: Learn { student: 'George', cohort: 'Alpha', year: 2022 }

// I was right but I didn't know exactly how to explain it. The class Learn is copied on line 70. This time, the name George will be inserted. So, you'll still get the cohort = "Alpha" and year = 2022 but the name will be different.
