class Day {
    constructor(name) {
        this.name = name;
        this.workouts = [];
        this.selectedWorkout;
    }

    addWorkout(workout) {
        if (workout instanceof Workout) {
            this.workouts.push(workout);
        }
        else {
            console.log("couldn't add workout, not of correct class")
        }
    }

    removeWorkout(workout_to_remove) {
        let index = this.workouts.findIndex(workout => workout == workout_to_remove);
        if (!index == -1) {
            this.workouts.splice(index, 1);
        }
        else {
            console.log('did not find the workout in the days workouts');
        }
    }

    changeWorkout(incriment) {
        let newIndex = week.selectedDay.workouts.findIndex((workout) => workout == week.selectedDay.selectedWorkout);
        if (newIndex == week.selectedDay.workouts.length - 1 && incriment == 1) {
            newIndex = 0;
            hideNextButton();
        } 
        else if (newIndex == 0 && incriment == -1) {
            newIndex = week.selectedDay.workouts.length - 1;
        }
        else {
            newIndex += incriment;
        }
        week.selectedDay.selectedWorkout = week.selectedDay.workouts[newIndex];
        display();
    }
}