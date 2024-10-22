function display() {
    // get all the elements
    let day = document.querySelector('#day');
    let workoutTitle = document.querySelector('#workout-title');
    let equipment = document.querySelector('#equipment');
    let muscleGroup = document.querySelector('#muscle-group');
    let description = document.querySelector('#description');
    let sets = document.querySelector('#sets');
    let reps = document.querySelector('#reps');
    let weight = document.querySelector('#weight');
    // set states to active
    document.querySelector('#start-button').removeAttribute('disabled');
    // display the workout info
    day.innerText = week.selectedDay.name;


    //***IF THE WORKOUTS ARRAY IS EMPTY FOR A DAY DISPLAY NO WORKOUTS***/
    if (week.selectedDay.workouts.length == 0) {
        week.selectedDay.selectedWorkout = {
            "name": "No Workouts",
            "equipment": null,
            "muscleGroup": null,
            "description": "Add a workout to the days workout list to see it here",
            "sets": null,
            "repsLower": null,
            "repsUpper": null,
            "weight": null,
            "changeWeight": function() {console.log('no workout to add weight to')},
        }
    }


    // set active workout to the selectedDay's selectedWorkout
    let selectedWorkout = week.selectedDay.selectedWorkout;

    // set workout title
    workoutTitle.innerText = selectedWorkout.name;
    // set equipment
    if (selectedWorkout.equipment) {
        equipment.removeAttribute('hidden');
        equipment.innerText = selectedWorkout.equipment;
    }
    else {
        equipment.setAttribute('hidden', 'true');
    }
    // set muscle group
    if (selectedWorkout.muscleGroup) {
        muscleGroup.removeAttribute('hidden');
        muscleGroup.innerText = selectedWorkout.muscleGroup;
    }
    else {
        muscleGroup.setAttribute('hidden', 'true');
    }
    // set description
    description.innerText = selectedWorkout.description;
    // set sets
    sets.innerText = selectedWorkout.sets ? `${selectedWorkout.currentSet}/${selectedWorkout.sets}` : '--';
    // set reps
    if (selectedWorkout.repsLower) {
        if (selectedWorkout.repsUpper) {
            reps.innerText = `${selectedWorkout.repsLower}-${selectedWorkout.repsUpper}`;
        }
        else {
            reps.innerText = selectedWorkout.repsLower;
        }
    } 
    else {
        reps.innerText = '--';
    }
    // set weight
    weight.innerText = selectedWorkout.weight ? selectedWorkout.weight : '--';

    // disable items if there isn't sets
    if (!selectedWorkout.sets) {
        document.querySelector('#start-button').setAttribute('disabled', 'true');
    }
}

function nextSet() {
    let activeWorkout = week.selectedDay.selectedWorkout;
    if (activeWorkout.currentSet == activeWorkout.sets) {
        week.selectedDay.changeWorkout(1);
        activeWorkout.currentSet = 0;
    } 
    else {
        activeWorkout.currentSet += 1;
    }
    display();
}

function activateWorkout() {
    let activeWorkout = week.selectedDay.selectedWorkout;
    let workoutDetailChildren = document.querySelector('#workout-details').children;
    for (let node of workoutDetailChildren) {
        node.classList.add('active');
    }
    activeWorkout.currentSet = 1;
    display();
}

function deactivateWorkout() {
    let activeWorkout = week.selectedDay.selectedWorkout;
    let workoutDetailChildren = document.querySelector('#workout-details').children;
    for (let node of workoutDetailChildren) {
        node.classList.remove('active');
    }
    activeWorkout.currentSet = 0;
    display();
}

function showNextButton() {
    let nextButton = document.querySelector('#next-workout');
    nextButton.classList.add('shown');
    let startButton = document.querySelector('#start-button');
    startButton.innerText = "Stop";
    startButton.onclick = hideNextButton;
    activateWorkout();
}

function hideNextButton() {
    let nextButton = document.querySelector('#next-workout');
    nextButton.classList.remove('shown');
    let startButton = document.querySelector('#start-button');
    startButton.innerText = "Start";
    startButton.onclick = showNextButton;
    deactivateWorkout();
}

// swipe gestures

let touchStartX = 0;
let touchEndX = 0;
let touchY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    touchEndX= e.changedTouches[0].clientX;
})

document.addEventListener('touchend', () => {
    if (touchEndX === 0) return;

    const swipeDistance = touchStartX - touchEndX;

    const swipeThreshold = 100;

    if (touchY < 150) {
        if (swipeDistance > swipeThreshold) {
            week.changeDay(1);
            display();
        }
        if (swipeDistance < -swipeThreshold) {
            week.changeDay(-1);
            display();
        }
    }
    else {
        if (swipeDistance > swipeThreshold) {
            week.selectedDay.changeWorkout(1);
            display();
        }
        if (swipeDistance < -swipeThreshold) {
            week.selectedDay.changeWorkout(-1);
            display();
        }
    }

    let nextButton = document.querySelector('#next-workout');
    nextButton.classList.remove('shown');
    let startButton = document.querySelector('#start-button');
    startButton.innerText = "Start";
    startButton.onclick = showNextButton;

    touchStartX = 0;
    touchEndX = 0;
    touchY = 0;
});

// organize workouts page

function toggleOrganizeWorkouts() {
    let mainContainer = document.querySelector('#main-container');
    let organizationList = document.querySelector('#week-organization');
    let toggleButton = document.querySelector('#organization-list');

    createOrganizationList();

    if (mainContainer.style.display == 'none') {
        mainContainer.style.display = 'flex';
        organizationList.style.display = 'none';
        toggleButton.childNodes[0].classList.remove('fa-home');
        toggleButton.childNodes[0].classList.add('fa-bars');
        display();
    }
    else {  
        mainContainer.style.display = 'none';
        organizationList.style.display = 'block';
        toggleButton.childNodes[0].classList.remove('fa-bars');
        toggleButton.childNodes[0].classList.add('fa-home');
    }
}

function createOrganizationList() {
    let organizationDayTemplate = document.querySelector('.organization-day-template');
    let organizationDayNameTemplate = document.querySelector('.organization-day');
    let organizationWorkoutTemplate = document.querySelector('.organization-day-workout');
    let organizationWorkoutAdd = document.querySelector('.organization-add-workout');

    let organizationWeek = document.querySelector('#week-organization');

    organizationWeek.innerHTML = '';

    for (let organizationDay of week.days) {
        let day = organizationDayTemplate.cloneNode(false);
        let name = organizationDayNameTemplate.cloneNode(false);
        name.innerText = organizationDay.name;
        day.appendChild(name);

        for (let workout of organizationDay.workouts) {
            let organizationWorkout = organizationWorkoutTemplate.cloneNode(true);
            let organizationDelete = organizationWorkout.childNodes[1].childNodes[5];
            let workoutTitle = organizationWorkout.childNodes[1].childNodes[3];
            organizationDelete.onclick = function() {
                deleteWorkout(organizationDay, workout);
            };
            workoutTitle.innerText = workout.name;
            day.appendChild(organizationWorkout);
        }
        
        let addWorkout = organizationWorkoutAdd.cloneNode(true);
        addWorkout.onclick = function() {
            addWorkoutToDay(organizationDay);
        }
        day.appendChild(addWorkout);

        organizationWeek.appendChild(day);
    }
}

function deleteWorkout(day, workout) {
    let newWorkouts = day.workouts.filter(removedWorkout => removedWorkout !== workout);
    day.workouts = newWorkouts;
    createOrganizationList();
    setWeekLocalStorage();

    // this works but there is a bug where if I delete all the workouts the delete button dissapears
}

function addWorkoutToDay(day) {
    let mainContainer = document.querySelector('#main-container');
    let organizationList = document.querySelector('#week-organization');
    let toggleButton = document.querySelector('#organization-list');
    let addContainer = document.querySelector('#add-main-container');
    
    // hide all content
    mainContainer.style.display = "none";
    organizationList.style.display = 'none';
    toggleButton.style.display = 'none';
    addContainer.style.display = 'flex';

    // get elements for adding workout

    document.querySelector('#add-day').innerText = day.name;
    
    // add day to the onclick event
    document.querySelector('#save-workout').onclick = function() {
        saveWorkout(day);
    }

}

function saveWorkout(day) {
    let newWorkout = {
        "name": document.querySelector('#add-workout-title').value,
        "equipment": document.querySelector('#add-equipment').value,
        "muscleGroup": document.querySelector('#add-muscle-group').value,
        "description": document.querySelector('#add-description').value,
        "sets": document.querySelector('#add-sets').value,
        "repsLower": document.querySelector('#add-reps-lower').value,
        "repsUpper": document.querySelector('#add-reps-upper').value,
        "weight": document.querySelector('#add-weight').value
    }
    
    newWorkout = new Workout(newWorkout.name, newWorkout.muscleGroup, newWorkout.sets, newWorkout.repsLower, newWorkout.repsUpper, newWorkout.weight, newWorkout.equipment, newWorkout.description, per_hand=false);
    
    day.addWorkout(newWorkout);

    createOrganizationList();
    setWeekLocalStorage();

    // get display elements

    let mainContainer = document.querySelector('#main-container');
    let organizationList = document.querySelector('#week-organization');
    let toggleButton = document.querySelector('#organization-list');
    let addContainer = document.querySelector('#add-main-container');
    
    // hide all content
    mainContainer.style.display = "none";
    organizationList.style.display = 'block';
    toggleButton.style.display = 'block';
    addContainer.style.display = 'none';
}