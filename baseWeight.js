const workoutBaseWeights = {
    "Flat Barbell Bench Press": 45,      // Empty barbell
    "Incline Dumbbell Press": 15,
    "Pec Deck Machine": 20,
    "Overhead Shoulder Press": 20,
    "Lateral Raises": 5,
    "Push-ups": "Bodyweight",
    "Pull-ups": "Bodyweight",
    "Bent-over Barbell Rows": 45,       // Empty barbell
    "Lat Pulldown": 30,
    "Single-Arm Dumbbell Row": 15,
    "Barbell Curls": 20,
    "Dumbbell Hammer Curls": 10,
    "Squats": 45,                       // Empty barbell
    "Romanian Deadlifts": 45,           // Empty barbell
    "Leg Press": 100,
    "Lunges": 10,
    "Standing Calf Raises": "Bodyweight",
    "Deadlifts": 45,                    // Empty barbell
    "T-bar Rows": 25,
    "Seated Cable Rows": 30,
    "Front Squats": 45,                 // Empty barbell
    "Leg Curls": 30,
    "Overhead Shoulder Press (Dumbbell/Barbell)": 45
  };

for (item in workoutBaseWeights) {
    localStorage.setItem(item, workoutBaseWeights[item])
}

console.log("Base Weights set successfully")