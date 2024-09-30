let dayWorkouts;
let selectedWorkout;

// get workouts based on the day selected in workoutDropdown
let workoutDropdown = document.querySelector('#workout-dropdown');
let daySelector = document.querySelector('#day-selector');
function getDayWorkouts() {
    workoutDropdown.innerHTML = "";
// workouts comes from the workout.js file
    dayWorkouts = workouts
        .filter(workout => workout.day.toLowerCase() == daySelector.value);
    // put warm up at the front
    let warmUp;
    for (workout of dayWorkouts) {
        if (workout.name == 'Warm Up') {
            warmUp = workout;
        }
    }
    let index = dayWorkouts.indexOf(warmUp);
    let item = dayWorkouts.splice(index, 1)[0];
    dayWorkouts.unshift(item);
    // dayWorkoutNames
    let dayWorkoutNames = dayWorkouts
        .map(workout => workout.name);
// what do I need to do to fix warm-up
// when warm up shows make sure to call hideWorkouts()

    for (workoutName of dayWorkoutNames) {
        let option = document.createElement('option');
        option.value = workoutName;
        option.innerHTML = workoutName;
        workoutDropdown.appendChild(option);
    }
    displayWorkout();
}

// display workout in the workout-display div
let workoutDisplay = document.querySelector('#workout-description');

function displayWorkout() {
    console.log(workoutDropdown[workoutDropdown.selectedIndex]);
    if (workoutDropdown.value == "Warm Up") {
        hideWorkoutOptions();
        document.querySelector('#start-button').setAttribute('disabled', 'true');
        console.log('hidden');
    } else {
        console.log('shown');
        showWorkoutOptions();
    }
    
    let workout
    for (item of dayWorkouts) {
        if (item.name == workoutDropdown.value) {
            workout = item;
            selectedWorkout = workout;
            break;
        }
    }

    // get things we're trying to display
    let muscle = workout.muscle_group;
    let equipment = workout.equipment;
    let sets = workout.sets;
    let reps = workout.reps;
    let weight = localStorage.getItem(workout.name);
    let description = workout.description;

    // determine what needs to happen to undefined items
    // undefined = --
    // sets
    if (sets) {
        sets = `0/${sets}`;
    } 
    else {
        sets = '--';
    }
    // reps
    if (!reps) {
        reps = '--';
    }
    if (reps.toLowerCase() == "to failure") {
        reps = "∞";
    }
    // weight
    if (!weight || weight == 0 || isNaN(weight)) {
        weight = '--';
    }
    // other things will be hidden in the next section

    // display the things
    // display muscle
    if (muscle) {
        document.querySelector('#muscle').removeAttribute('hidden');
        document.querySelector("#muscle").innerText = muscle;
    }
    else {
        document.querySelector("#muscle").setAttribute('hidden', 'true');
    }
    //  display equipment
    if (equipment) {
        document.querySelector('#equipment').removeAttribute('hidden');
        document.querySelector("#equipment").innerText = workout.equipment;
    }
    else {
        document.querySelector("#equipment").setAttribute('hidden', 'true');
    }
    // display sets
    document.querySelector('#set-info').innerText = sets;
    // display reps
    document.querySelector('#rep-info').innerText = reps;
    // display weight
    document.querySelector('#weight-info').innerText = weight;

    // set the description
    workoutDisplay.innerText = description;
    
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
        stopWorkout();
        displayWorkout();
        
}

// this is for hiding functionality that isn't importatnt to a user when not on a workout
// like when they are on a warm up
function hideWorkoutOptions() {
    let workoutOptions = document.querySelectorAll('.workout-option');
    try {
        for (option of workoutOptions) {
            option.setAttribute('disabled', 'true');
        }
    } catch {
        console.error("Disabling workout-options failed");
    }
}

// enable options for functionality that is important for workouts
function showWorkoutOptions() {
    let workoutOptions = document.querySelectorAll('.workout-option');
    try {
        for (option of workoutOptions) {
            option.removeAttribute('disabled');
        }
    } catch {
        console.error("Enabling workout-options failed");
    }
}