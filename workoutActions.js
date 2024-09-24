let daySelector = document.querySelector('#day-selector');
let workoutDropdown = document.querySelector('#workout-dropdown');
let workoutDisplay = document.querySelector('#workout-display');

let dayWorkouts

let selectedWorkout

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
    displayWorkout()
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
                selectedWorkout = workout;
                break;
            }
        }
            workoutDisplay.innerText = 
                `${workout.name}
                Weight: ${localStorage.getItem(workout.name) ? localStorage.getItem(workout.name) : workout.weight}
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

function getWeightOptions() {
    let weightDropdown = document.querySelector('#weight-selection');
    let dif = 5;
    for (i = 1; i<20; i++) {
        let option = document.createElement('option');
        option.value = i * dif;
        option.innerText = i * dif;
        weightDropdown.appendChild(option);
    }
}

function setWorkoutWeight() {
    localStorage.setItem(`${selectedWorkout.name}`, `${document.querySelector('#weight-selection').value}`);

    displayWorkout();
}

getDayWorkouts();
getWeightOptions();