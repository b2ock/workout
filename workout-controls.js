function startWorkout() {
    // turn the workout info green when started
    let activeItems = document.querySelectorAll('.active-workout-info');
    for (item of activeItems){
        item.classList.add('active');
    }
    // get the start button ready for being active
    document.querySelector('#start-button').innerText = "Stop";
    document.querySelector('#start-button').style = "flex-basis: 25%; transition: 1s;"
    document.querySelector('#start-button').onclick = stopWorkout;
    document.querySelector('#rest-button').innerText = "Rest";
}

function stopWorkout() {
    let activeItems = document.querySelectorAll('.active-workout-info');
    for (item of activeItems){
        item.classList.remove('active');
    }
    // get the start button ready for being active
    document.querySelector('#start-button').innerText = "Start";
    document.querySelector('#start-button').style = "flex-basis: 55%; transition: 1s;";
    document.querySelector('#start-button').onclick = startWorkout;
    document.querySelector('#rest-button').innerText = "Rest";
}

let sets = 0;
function restWorkout() {
    sets ++;
    document.querySelector('#set-info').innerText = `${sets}/${selectedWorkout.sets}`;
    if (sets == selectedWorkout.sets) {
        document.querySelector('#rest-button').innerText = 'Finish';
        document.querySelector('#rest-button').onclick = finishWorkout;
    }
}

function finishWorkout() {
    let activeItems = document.querySelectorAll('.active-workout-info');
    for (item of activeItems){
        item.classList.remove('active');
    }
    document.querySelector('#rest-button').innerText = "Rest";
    document.querySelector('#start-button').innerText = "Start";
    document.querySelector('#start-button').style = "flex-basis: 55%; transition: 1s;";
    document.querySelector('#start-button').onclick = startWorkout;
    document.querySelector('#rest-button').onclick = restWorkout;
    changeWorkout(selectedWorkout, 1);
    sets = 0;
}