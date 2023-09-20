// Function to calculate GPA
function calculateGPA() {
    // Initialize variables to store total grade points and total credit hours
    let totalGradePoints = 0;
    let totalCreditHours = 0;
  
    // Get the number of courses from the user
    const numCourses = parseInt(prompt("Enter the number of courses:"));
  
    // Loop through each course to get grades and credit hours
    for (let i = 0; i < numCourses; i++) {
      const courseName = prompt(`Enter the name of course ${i + 1}:`);
      const creditHours = parseFloat(prompt(`Enter the credit hours for ${courseName}:`));
      const grade = prompt(`Enter the grade for ${courseName} (A, A-, B+, etc.):`);
  
      // Calculate grade points based on the grade
      let gradePoints;
      if (grade === "A") {
        gradePoints = 4.0;
      } else if (grade === "A-") {
        gradePoints = 3.7;
      } else if (grade === "B+") {
        gradePoints = 3.3;
      } else if (grade === "B") {
        gradePoints = 3.0;
      } else if (grade === "B-") {
        gradePoints = 2.7;
      } else if (grade === "C+") {
        gradePoints = 2.3;
      } else if (grade === "C") {
        gradePoints = 2.0;
      } else if (grade === "C-") {
        gradePoints = 1.7;
      } else if (grade === "D+") {
        gradePoints = 1.3;
      } else if (grade === "D") {
        gradePoints = 1.0;
      } else if (grade === "F") {
        gradePoints = 0.0;
      } else {
        alert("Invalid grade entered. Please enter a valid grade.");
        i--; // Decrement the loop counter to re-enter the grade
        continue;
      }
  
      // Update total grade points and total credit hours
      totalGradePoints += gradePoints * creditHours;
      totalCreditHours += creditHours;
    }
  
    // Calculate GPA
    const gpa = totalGradePoints / totalCreditHours;
  
    // Display the GPA to the user
    alert(`Your GPA is: ${gpa.toFixed(2)}`);
  }
  
  // Call the function to calculate GPA
  calculateGPA();