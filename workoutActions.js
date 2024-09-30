// add weight to the workout
function addWeight(weight) {
    let currentWeight = parseInt(localStorage.getItem(selectedWorkout.name));
    if (isNaN(currentWeight)) {
        currentWeight = 0;
    } 
    
    localStorage.setItem(selectedWorkout.name, currentWeight + weight);
    displayWorkout();
    console.log('hi');
}

// remove weight from the workout
function removeWeight(weight) {
    let currentWeight = parseInt(localStorage.getItem(selectedWorkout.name));
    if (isNaN(currentWeight)) {
        currentWeight = 0;
    } 
    
    localStorage.setItem(selectedWorkout.name, currentWeight - weight);
    displayWorkout();
}