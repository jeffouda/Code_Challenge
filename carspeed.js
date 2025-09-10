// Speed Detector
// This program checks a car's speed and assigns demerit points.
// If the driver gets more than 12 points, the license is suspended.

function speedDometer(speed) {
  const speedLimit = 70; // Allowed speed limit
  const pointPerKm = 5; // for every 5km/s above speed limit 1 demerit point is given

  // Case 1: Speed is within the limit
  if (speed <= speedLimit) {
    console.log("Ok"); // No penalty
  } else {
    // Calculate number of demerit points
    const points = Math.floor((speed - speedLimit) / pointPerKm);

    // Case 2: More than 12 points -> license suspended
    if (points > 12) {
      console.log("License suspended");
    } else {
      // Case 3: Print the number of demerit points
      console.log("Points:", points);
    }
  }
}

// Test the function with different speeds
speedDometer(65); // ok -> within the limit
speedDometer(80); // 2 points given at this speed limit
speedDometer(135); // 12 points and above the license is suspended
