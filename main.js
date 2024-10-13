let week;
const today = new Date();

function main() {
    // check it you need to use default workouts
    let workoutsReady = localStorage.getItem('week');
    
    if (!workoutsReady) {
        // create week
        week = new Week();
        // add days to the week
        for (let day of defaultWeek.days) {
            let newDay = new Day(day.name);
            week.addDay(newDay);
            // add workouts to days
            for(let workout of day.workouts) {
                let newWorkout = new Workout(workout.name, workout.muscle_group, workout.sets, workout.reps_lower, workout.reps_upper, workout.weight, workout.equipment, workout.description, workout.per_hand ? workout.per_hand : false);
                newDay.addWorkout(newWorkout);
            }
        }
        week.selectedDay = week.days[today.getDay()]
        localStorage.setItem('week', JSON.stringify(week));
    } 

    let savedWeek = JSON.parse(localStorage.getItem('week'));
    week = new Week();
    for (day of savedWeek.days) {
        let newDay = new Day(day.name);
        for (workout of day.workouts) {
            let newWorkout = new Workout(workout.name, workout.muscleGroup, workout.sets, workout.repsLower, workout.repsUpper, workout.weight, workout.equipment, workout.description, workout.per_hand ? workout.per_hand : false);
            newDay.addWorkout(newWorkout);
        }
        week.addDay(newDay);
    }
    week.selectedDay = week.days[today.getDay()];
    week.selectedDay.selectedWorkout = week.selectedDay.workouts[0];
    
    display();
}
main();