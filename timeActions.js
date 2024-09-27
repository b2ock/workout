let dayOfTheWeek = new Date().getDay();

daySelector.selectedIndex = dayOfTheWeek - 1;

getDayWorkouts();

if (screen.orientation) {
    screen.orientation.lock('portraint').catch(function(error) {
        console.error("Screen orientation lock failed: ", error);
    })
}