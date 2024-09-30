let workouts = [
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Monday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  },
  {
    "name": "Flat Barbell Bench Press",
    "muscle_group": "Chest",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Bench",
    "day": "Monday",
    "description": "Lie on a flat bench, lower the barbell to your chest, and press it upward until your arms are fully extended, focusing on your chest muscles."
  },
  {
    "name": "Incline Dumbbell Press",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "8-10",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Monday",
    "description": "Press dumbbells upward on an incline bench to target the upper chest muscles, keeping your arms steady and focusing on control."
  },
  {
    "name": "Cable Flyes",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Machine",
    "day": "Monday",
    "description": "Stand between cable machines and pull the handles together in a wide arc until they meet in front of you, focusing on squeezing your chest."
  },
  {
    "name": "Overhead Shoulder Press",
    "muscle_group": "Shoulders",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Monday",
    "description": "Press the barbell upward from shoulder height until your arms are fully extended overhead, keeping your core engaged and back straight."
  },
  {
    "name": "Lateral Raises",
    "muscle_group": "Shoulders",
    "sets": 3,
    "reps": "12-15",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Monday",
    "description": "Raise the dumbbells out to your sides until they reach shoulder height, focusing on using your lateral deltoids and keeping the movement controlled."
  },
  {
    "name": "Push-ups",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "To failure",
    "weight": null,
    "equipment": null,
    "day": "Monday",
    "description": "Lower your body to the ground by bending your arms, then push back up until your arms are fully extended, maintaining a straight body."
  },
  {
    "name": "Pull-ups",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": null,
    "day": "Tuesday",
    "description": "Grip the bar with palms facing forward and pull yourself up until your chin reaches the bar, then lower back down with control."
  },
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Tuesday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  },
  {
    "name": "Bent-over Barbell Rows",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Tuesday",
    "description": "Bend forward at the hips and pull the barbell toward your chest, squeezing your upper back muscles as you row, then lower it back down."
  },
  {
    "name": "Lat Pulldown",
    "muscle_group": "Back",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Machine",
    "day": "Tuesday",
    "description": "Sit at a lat pulldown machine and pull the bar down toward your chest, focusing on engaging your back muscles and controlling the movement."
  },
  {
    "name": "Single-Arm Dumbbell Row",
    "muscle_group": "Back",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Tuesday",
    "description": "Place one knee on a bench, pull the dumbbell toward your waist, and squeeze your back muscles, then lower it back down."
  },
  {
    "name": "Barbell Curls",
    "muscle_group": "Biceps",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Tuesday",
    "description": "Stand with the barbell in your hands, curl it upward toward your chest while keeping your elbows close to your body, then lower it back down."
  },
  {
    "name": "Dumbbell Hammer Curls",
    "muscle_group": "Biceps",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Tuesday",
    "description": "Hold dumbbells with palms facing inward and curl them toward your shoulders, focusing on engaging the biceps throughout the movement."
  },
  {
    "name": "Face Pulls",
    "muscle_group": "Shoulders/Upper Back",
    "sets": 3,
    "reps": "12-15",
    "weight": null,
    "equipment": "Machine",
    "day": "Tuesday",
    "description": "Use a cable machine with a rope attachment, pulling it toward your face and squeezing your rear deltoids and upper back."
  },
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Wednesday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  },
  {
    "name": "Squats",
    "muscle_group": "Legs",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Wednesday",
    "description": "Lower your body by bending your knees until your thighs are parallel to the floor, then push back up to a standing position, keeping your back straight."
  },
  {
    "name": "Romanian Deadlifts",
    "muscle_group": "Hamstrings",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Wednesday",
    "description": "Lower the barbell down your legs while keeping a slight bend in your knees and a straight back, focusing on your hamstrings."
  },
  {
    "name": "Lunges",
    "muscle_group": "Legs",
    "sets": 3,
    "reps": "10",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Wednesday",
    "description": "Step forward with one leg, lowering your body until your back knee nearly touches the ground, then push back up and alternate legs."
  },
  {
    "name": "Standing Calf Raises",
    "muscle_group": "Calves",
    "sets": 4,
    "reps": "15-20",
    "weight": null,
    "equipment": null,
    "day": "Wednesday",
    "description": "Raise your heels off the ground, contracting your calf muscles, then slowly lower your heels back down."
  },
  {
    "name": "Leg Raises",
    "muscle_group": "Core",
    "sets": 3,
    "reps": "15",
    "weight": null,
    "equipment": null,
    "day": "Wednesday",
    "description": "Lie flat on your back and raise your legs until they are vertical, keeping your core engaged, then lower them back down."
  },
  {
    "name": "Planks",
    "muscle_group": "Core",
    "sets": 3,
    "reps": "45 seconds hold",
    "weight": null,
    "equipment": null,
    "day": "Wednesday",
    "description": "Hold a plank position with your body in a straight line from head to heels, keeping your core tight throughout the duration of the hold."
  },
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Thursday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  },
  {
    "name": "Incline Barbell Bench Press",
    "muscle_group": "Chest",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Bench",
    "day": "Thursday",
    "description": "Press the barbell upward on an incline bench to focus on the upper chest, keeping your elbows slightly flared."
  },
  {
    "name": "Dumbbell Flyes",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Thursday",
    "description": "Lie on a bench, open your arms wide, and bring the dumbbells together above your chest, focusing on squeezing your chest muscles."
  },
  {
    "name": "Tricep Dips",
    "muscle_group": "Triceps",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": null,
    "day": "Thursday",
    "description": "Lower your body down by bending your elbows, then push back up, keeping your core tight and shoulders stable."
  },
  {
    "name": "Overhead Tricep Extension",
    "muscle_group": "Triceps",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Thursday",
    "description": "Hold a dumbbell with both hands above your head and lower it behind your head, extending your triceps as you raise it back up."
  },
  {
    "name": "Close-grip Bench Press",
    "muscle_group": "Triceps",
    "sets": 3,
    "reps": "8-10",
    "weight": null,
    "equipment": "Bench",
    "day": "Thursday",
    "description": "Press the bar upward with a narrow grip to focus on engaging the triceps, keeping your elbows close to your body."
  },
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Friday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  },
  {
    "name": "Deadlifts",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "5-8",
    "weight": null,
    "equipment": "Barbell",
    "day": "Friday",
    "description": "Lift the barbell from the floor by extending your hips and knees, keeping your back straight and core tight throughout the movement."
  },
  {
    "name": "T-bar Rows",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Friday",
    "description": "Pull the T-bar toward your chest while keeping your torso angled forward, squeezing your back muscles as you row."
  },
  {
    "name": "Seated Cable Rows",
    "muscle_group": "Back",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Machine",
    "day": "Friday",
    "description": "Sit at a cable machine and pull the handle toward your torso, squeezing your back muscles, then return to the starting position."
  },
  {
    "name": "Preacher Curls",
    "muscle_group": "Biceps",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Friday",
    "description": "Sit at a preacher curl bench and curl the dumbbell upward, focusing on contracting your biceps and controlling the movement."
  },
  {
    "name": "Rear Delt Flyes",
    "muscle_group": "Shoulders",
    "sets": 3,
    "reps": "12-15",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Friday",
    "description": "Bend forward and raise the dumbbells out to your sides, targeting your rear deltoids and upper back."
  },
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Saturday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  },
  {
    "name": "Front Squats",
    "muscle_group": "Legs",
    "sets": 4,
    "reps": "8-10",
    "weight": null,
    "equipment": "Barbell",
    "day": "Saturday",
    "description": "Lower your body with the barbell across the front of your shoulders, then push back up, focusing on keeping your core engaged."
  },
  {
    "name": "Leg Curls",
    "muscle_group": "Hamstrings",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Machine",
    "day": "Saturday",
    "description": "Curl your legs upward while lying on a leg curl machine, focusing on contracting your hamstrings throughout the movement."
  },
  {
    "name": "Walking Lunges",
    "muscle_group": "Legs",
    "sets": 3,
    "reps": "10-12",
    "weight": null,
    "equipment": "Dumbbell",
    "day": "Saturday",
    "description": "Step forward into a lunge while holding dumbbells at your sides, alternating legs with each step."
  },
  {
    "name": "Warm Up",
    "muscle_group": null,
    "sets": null,
    "reps": null,
    "weight": null,
    "equipment": null,
    "day": "Sunday",
    "description": "Perform light cardio and dynamic stretches to increase blood flow and mobility, preparing muscles and joints for the workout ahead."
  }
]