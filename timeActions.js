let dayOfTheWeek = new Date().getDay();
if (dayOfTheWeek == 0) {
    dayOfTheWeek = 7;
}
daySelector.selectedIndex = dayOfTheWeek - 1;

getDayWorkouts();