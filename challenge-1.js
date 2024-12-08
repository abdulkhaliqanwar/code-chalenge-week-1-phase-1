function getGrade() {
  // Ask the user for marks using a prompt. The input is converted to an integer using parseInt.
  let marks = parseInt(prompt("Enter marks (0-100):"));

  // Check if the input marks are valid (between 0 and 100).
  if (marks < 0 || marks > 100 || isNaN(marks)) {
      // If the marks are invalid, show an alert with an error message.
      alert("Invalid input! Please enter a number between 0 and 100.");
  } else {
      // Declare a variable to store the grade.
      let grade;

      // Assign a grade based on the marks entered by the user.
      if (marks > 79) {
          grade = "A";  // Marks greater than 79 get an "A".
      } else if (marks >= 60) {
          grade = "B";  // Marks between 60 and 79 get a "B".
      } else if (marks >= 50) {
          grade = "C";  // Marks between 50 and 59 get a "C".
      } else if (marks >= 40) {
          grade = "D";  // Marks between 40 and 49 get a "D".
      } else {
          grade = "E";  // Marks less than 40 get an "E".
      }

      // Show the grade using an alert.
      alert("Grade: " + grade);
  }
}

// Call the function to start the process
getGrade();
