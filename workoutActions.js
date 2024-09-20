let daySelector = document.querySelector('#day-selector');
let workoutDropdown = document.querySelector('#workout-dropdown');
let workoutDisplay = document.querySelector('#workout-display');

let dayWorkouts

// get workouts based on the day selected in workoutDropdown
function getDayWorkouts() {
    workoutDropdown.innerHTML = "";

    dayWorkouts = workouts
        .filter(workout => workout.day.toLowerCase() == daySelector.value);
    let dayWorkoutNames = dayWorkouts
        .map(workout => workout.name)
        .sort();

    let warmUp = document.createElement('option');
    warmUp.innerText = 'Warm Up';
    warmUp.value = 'warm-up';

    workoutDropdown.appendChild(warmUp);

    for (workoutName of dayWorkoutNames) {
        let option = document.createElement('option');
        option.value = workoutName;
        option.innerHTML = workoutName;
        workoutDropdown.appendChild(option);
    }
}

// display workout in the workout-display div
function displayWorkout() {
    // add a warm up option and display the generic warm up message
    if (workoutDropdown.value == 'warm-up') {
        workoutDisplay.innerText = 
                `5-10 min Cardio`
    }
    else {
        let workout
        for (item of dayWorkouts) {
            if (item.name == workoutDropdown.value) {
                workout = item;
                break;
            }
        }
            workoutDisplay.innerText = 
                `${workout.name}
                Weight: ${workout.weight}
                Sets: ${workout.sets}
                Reps: ${workout.reps}`
    }
}

function displayNextWorkout(workoutName) {
    if (workoutDropdown.selectedIndex == workoutDropdown.length - 1) {
        workoutDropdown.selectedIndex = 0;
    }
    workoutDropdown.selectedIndex += 1;
    displayWorkout();
}

getDayWorkouts();
displayWorkout();