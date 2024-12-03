//we have a function called speedDetector(speed)
function speedDetector(speed) {
    const speedLimit = 70;
    const demeritThreshold = 12;
// If the speed is less than or equal to the speed limit, it's "Ok"
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
    // Calculate the number of demerit points (1 point for every 5 km/s above the limit)
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

    // If the points are more than 12, suspend the license
        if (demeritPoints > demeritThreshold) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Test the function with an example
speedDetector(80);  // Output: Points: 2
speedDetector(90);  // Output: Points: 4
speedDetector(120); // Output: License suspended
speedDetector(60);  // Output: Ok
