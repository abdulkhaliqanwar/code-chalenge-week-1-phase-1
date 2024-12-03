//Below is a code that defines a function called calculateMark(): 
function calculateMark() { 
 	// Prompt the user to input marks 
	const mark = prompt("Enter the student's marks(0-100):"); 
 // Change the input to a number 
	mark=Number(mark); 
 // Check if the input is valid (0-100) 
	if (mark < 0 || mark > 100) { 
 		console.log("Please enter a valid number between 0 and 100."); 
	} 
	else { 
 		// Determine the grade based on the mark 
		if (mark>79) 
 			console.log(mark + " - Grade A"); 
		else if (mark>=60) 
 			console.log(mark + " - Grade B"); 
		else if (mark>=50) 
 			console.log(mark + " - Grade C"); 
		else if (mark>=40) 
			console.log(mark + " - Grade D"); 
		else 
			console.log(mark  + " - Grade E"); 
	} 
} 
 // Call the function to prompt for input 
 calculateMark();