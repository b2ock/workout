let dayWorkouts
let selectedWorkout

// get workouts based on the day selected in workoutDropdown
let workoutDropdown = document.querySelector('#workout-dropdown');
let daySelector = document.querySelector('#day-selector');
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
let workoutDisplay = document.querySelector('#workout-display');
function displayWorkout() {
    // add a warm up option and display the generic warm up message
    if (workoutDropdown.value == 'warm-up') {
        workoutDisplay.innerText = 
                `5-10 min Cardio`;
        hideWorkoutOptions();
    }
    else {
        showWorkoutOptions();
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

//  increment the workout in the workoutDropdown. indexChange determins if you move forwards or backwards using 1 and -1
function changeWorkout(workoutName, indexChange) {
    if (workoutDropdown.selectedIndex == 0 && indexChange == -1) {
        workoutDropdown.selectedIndex = workoutDropdown.length - 1;
        indexChange = 0;
    }
    if (workoutDropdown.selectedIndex == workoutDropdown.length - 1 && indexChange == 1) {
            workoutDropdown.selectedIndex = 0;
            indexChange = 0;
        }
        workoutDropdown.selectedIndex += indexChange;
        displayWorkout();
}

// add five pounds to the current weight in local storage
function addFivePounds() {
    let weight = parseInt(localStorage.getItem(selectedWorkout.name));
    if (isNaN(weight)) {
        weight = 0;
    } 
    localStorage.setItem(selectedWorkout.name, weight + 5);
    displayWorkout();
}

// remove five pounds from the workouts current weight in local storage
function removeFivePounds() {
    let weight = parseInt(localStorage.getItem(selectedWorkout.name));
    if (weight < 0 || isNaN(weight)) {
        console.log("Can't go below 0");
        // should we be able to go below zero for removing weight?
        // add something that alerts the user
    }
    localStorage.setItem(selectedWorkout.name, weight - 5);
    displayWorkout();
}

// this is for hiding functionality that isn't importatnt to a user when not on a workout
// like when they are on a warm up
function hideWorkoutOptions() {
    document.querySelector('#add-five').setAttribute('disabled', 'true');
    document.querySelector('#remove-five').setAttribute('disabled', 'true');
}

// enable options for functionality that is important for workouts
function showWorkoutOptions() {
    document.querySelector('#add-five').removeAttribute('disabled');
    document.querySelector('#remove-five').removeAttribute('disabled');
}

getDayWorkouts();