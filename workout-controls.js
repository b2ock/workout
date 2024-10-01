function startWorkout() {
    currentSet = 1;
    // turn the workout info green when started
    let activeItems = document.querySelectorAll('.active-workout-info');
    for (item of activeItems){
        item.classList.add('active');
    }
    // get the start button ready for being active
    document.querySelector('#start-button').innerText = "Stop";
    document.querySelector('#start-button').style = "flex-basis: 25%; transition: 1s;"
    document.querySelector('#start-button').onclick = stopWorkout;
    document.querySelector('#rest-button').innerText = "Next Set";
    document.querySelector('#set-info').innerText = `${currentSet}/${selectedWorkout.sets}`;
    // show the rest button
    document.querySelector('#rest-button').removeAttribute('hidden');
}

function stopWorkout() {
    let activeItems = document.querySelectorAll('.active-workout-info');
    for (item of activeItems){
        item.classList.remove('active');
    }
    // get the start button ready for being active
    document.querySelector('#start-button').innerText = "Start";
    document.querySelector('#start-button').style = "flex-basis: 100%; transition: 1s;";
    document.querySelector('#start-button').onclick = startWorkout;
    document.querySelector('#rest-button').innerText = "Next Set";
    document.querySelector('#rest-button').onclick = nextWorkout;
    document.querySelector('#rest-button').setAttribute('hidden', 'true');
    currentSet = 0;
}


function nextWorkout() {
    currentSet ++;
    document.querySelector('#set-info').innerText = `${currentSet}/${selectedWorkout.sets}`;
    if (currentSet == selectedWorkout.sets) {
        document.querySelector('#rest-button').innerText = 'Next Workout';
        document.querySelector('#rest-button').onclick = finishWorkout;
    }
}

function finishWorkout() {
    let activeItems = document.querySelectorAll('.active-workout-info');
    for (item of activeItems){
        item.classList.remove('active');
    }
    document.querySelector('#rest-button').innerText = "Next Set";
    document.querySelector('#start-button').innerText = "Start";
    document.querySelector('#start-button').style = "flex-basis: 100%; transition: 1s;";
    document.querySelector('#start-button').onclick = startWorkout;
    document.querySelector('#rest-button').onclick = nextWorkout;
    document.querySelector('#rest-button').setAttribute('hidden', 'true');
    changeWorkout(selectedWorkout, 1);
    currentSet = 0;
}