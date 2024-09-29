let dayWorkouts;
let selectedWorkout;

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
    displayWorkout();
}

// display workout in the workout-display div
let workoutDisplay = document.querySelector('#workout-description');
function displayWorkout() {
    // add a warm up option and display the generic warm up message
    if (workoutDropdown.value == 'warm-up') {
        workoutDisplay.innerHTML = 
                `<div id="workout-attributes-container">
                <div class="workout-attribute">5-10 min Cardio</div>
                </div>`;
        document.querySelector('#set-info').innerText = `--`;
        document.querySelector('#rep-info').innerText = `--`;
        document.querySelector('#weight-info').innerText = `--`;
        
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
        // make changes to workouts
        let muscle = workout.muscle_group;
        document.querySelector("#muscle").innerText = workout.muscle_group;

        let equipment = workout.equipment;
        if (equipment) {
            document.querySelector('#equipment').removeAttribute('hidden');
            document.querySelector("#equipment").innerText = workout.equipment;
        }
        else {
            document.querySelector("#equipment").setAttribute('hidden', 'true');
        }

        let sets = workout.sets;
        document.querySelector('#set-info').innerText = `0/${sets}`;

        let reps = workout.reps;
        document.querySelector('#rep-info').innerText = reps;

        let weight = localStorage.getItem(workout.name) ? localStorage.getItem(workout.name) : "--";
        document.querySelector('#weight-info').innerText = weight;
        workoutDisplay.innerText = workout.day;      
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
            console.log(option);
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