function checkSpeed() {
    // Prompt the user to enter the car's speed and convert it to a number
    let speed = parseInt(prompt("Enter the car's speed in km/h:"));

    // Speed limit
    let speedLimit = 70;

    // Check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        // If speed is within the limit, show an alert saying "Ok"
        alert("Ok");
    } else {
        // Calculate the number of demerit points for every 5 km/h above the limit
        let demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Check if the driver has more than 12 demerit points
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            // Otherwise, show the number of demerit points
            alert("Points: " + demeritPoints);
        }
    }
}

// Call the function to check the speed and show the result using alert
checkSpeed();
