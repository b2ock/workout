class Week {
    constructor() {
        this.days = []
        this.selectedDay;
    }

    addDay(day) {
        if (day instanceof Day) {
            this.days.push(day);
        }
        else {
            console.log(`couldn't add ${day} it is not of the class Day`);
        }
    }

    changeDay(incriment) {
        let newIndex = week.days.findIndex((day) => day == week.selectedDay);
        if (newIndex == week.days.length - 1 && incriment == 1) {
            newIndex = 0;
        } 
        else if (newIndex == 0 && incriment == -1) {
            newIndex = week.days.length - 1;
        }
        else {
            newIndex += incriment;
        }
        week.selectedDay = week.days[newIndex];
        week.selectedDay.selectedWorkout = week.selectedDay.workouts[0];
        display();
    }
}