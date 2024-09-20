let workouts = [
  {
    "name": "Flat Barbell Bench Press",
    "muscle_group": "Chest",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Monday"
  },
  {
    "name": "Incline Dumbbell Press",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Monday"
  },
  {
    "name": "Pec Deck Machine / Cable Flyes",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Monday"
  },
  {
    "name": "Overhead Shoulder Press (Dumbbell/Barbell)",
    "muscle_group": "Shoulders",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Monday"
  },
  {
    "name": "Lateral Raises",
    "muscle_group": "Shoulders",
    "sets": 3,
    "reps": "12-15",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Monday"
  },
  {
    "name": "Push-ups",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "To failure",
    "weight": undefined,
    "equipment_needed": false,
    "day": "Monday"
  },
  {
    "name": "Pull-ups",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": false,
    "day": "Tuesday"
  },
  {
    "name": "Bent-over Barbell Rows",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Tuesday"
  },
  {
    "name": "Lat Pulldown",
    "muscle_group": "Back",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Tuesday"
  },
  {
    "name": "Single-Arm Dumbbell Row",
    "muscle_group": "Back",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Tuesday"
  },
  {
    "name": "Barbell Curls",
    "muscle_group": "Biceps",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Tuesday"
  },
  {
    "name": "Dumbbell Hammer Curls",
    "muscle_group": "Biceps",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Tuesday"
  },
  {
    "name": "Face Pulls",
    "muscle_group": "Shoulders/Upper Back",
    "sets": 3,
    "reps": "12-15",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Tuesday"
  },
  {
    "name": "Squats (Barbell or Dumbbell)",
    "muscle_group": "Legs",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Wednesday"
  },
  {
    "name": "Romanian Deadlifts",
    "muscle_group": "Hamstrings",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Wednesday"
  },
  {
    "name": "Leg Press",
    "muscle_group": "Legs",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Wednesday"
  },
  {
    "name": "Lunges",
    "muscle_group": "Legs",
    "sets": 3,
    "reps": "10 (each leg)",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Wednesday"
  },
  {
    "name": "Standing Calf Raises",
    "muscle_group": "Calves",
    "sets": 4,
    "reps": "15-20",
    "weight": undefined,
    "equipment_needed": false,
    "day": "Wednesday"
  },
  {
    "name": "Leg Raises",
    "muscle_group": "Core",
    "sets": 3,
    "reps": "15",
    "weight": undefined,
    "equipment_needed": false,
    "day": "Wednesday"
  },
  {
    "name": "Planks",
    "muscle_group": "Core",
    "sets": 3,
    "reps": "45 seconds hold",
    "weight": undefined,
    "equipment_needed": false,
    "day": "Wednesday"
  },
  {
    "name": "Flat Dumbbell Bench Press",
    "muscle_group": "Chest",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Thursday"
  },
  {
    "name": "Incline Barbell Press",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Thursday"
  },
  {
    "name": "Dumbbell Flyes",
    "muscle_group": "Chest",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Thursday"
  },
  {
    "name": "Tricep Dips",
    "muscle_group": "Triceps",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": false,
    "day": "Thursday"
  },
  {
    "name": "Overhead Tricep Extension (Dumbbell/Barbell)",
    "muscle_group": "Triceps",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Thursday"
  },
  {
    "name": "Close-grip Bench Press",
    "muscle_group": "Triceps",
    "sets": 3,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Thursday"
  },
  {
    "name": "Deadlifts",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "5-8",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Friday"
  },
  {
    "name": "T-bar Rows",
    "muscle_group": "Back",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Friday"
  },
  {
    "name": "Seated Cable Rows",
    "muscle_group": "Back",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Friday"
  },
  {
    "name": "Preacher Curls",
    "muscle_group": "Biceps",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Friday"
  },
  {
    "name": "Rear Delt Flyes",
    "muscle_group": "Shoulders",
    "sets": 3,
    "reps": "12-15",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Friday"
  },
  {
    "name": "Front Squats",
    "muscle_group": "Legs",
    "sets": 4,
    "reps": "8-10",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Saturday"
  },
  {
    "name": "Leg Curls (Hamstring Focus)",
    "muscle_group": "Hamstrings",
    "sets": 3,
    "reps": "10-12",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Saturday"
  },
  {
    "name": "Walking Lunges",
    "muscle_group": "Legs",
    "sets": 3,
    "reps": "10-12 (each leg)",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Saturday"
  },
  {
    "name": "Seated Calf Raises",
    "muscle_group": "Calves",
    "sets": 4,
    "reps": "15-20",
    "weight": undefined,
    "equipment_needed": true,
    "day": "Saturday"
  }
]