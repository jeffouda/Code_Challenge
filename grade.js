//Student Grade Generator
//Marks should be between 0 - 100
// Prompt the user to enter marks between 0 and 100
const marksInput = prompt("Enter student marks (0 - 100):");

// Convert to number
const marks = parseInt(marksInput, 10);

//Variable to hold the grades
let grade;

// Check the range of marks and grades assigned
if (marks >= 79 && marks <= 100) {
  grade = "A"; //A for marks 80 - 100
} else if (marks >= 60 && marks < 79) {
  grade = "B"; //B for marks 60 - 79
} else if (marks >= 49 && marks <= 59) {
  grade = "C"; //C for marks 49 - 59
} else if (marks >= 40 && marks <= 49) {
  grade = "D"; //D for marks 40 - 49
} else if (marks >= 0 && marks <= 40) {
  grade = "E"; //E for marks 0 - 40
} else {
  grade = "Enter number between 0 - 100";
} //Error message incase of invalid number

//Display the grade on the webpage inside the "result" div
document.getElementById("result").innerHTML = `<h2>Grade: ${grade}</h2>`;
