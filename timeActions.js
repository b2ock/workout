let dayOfTheWeek = new Date().getDay();

daySelector.selectedIndex = dayOfTheWeek - 1;

getDayWorkouts();

if (screen.orientation) {
    screen.orientation.lock('portrait').catch(function(error) {
        console.error("Screen orientation lock failed: ", error);
    })
}