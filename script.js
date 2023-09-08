function fetchAndDisplayUTCTime() {
    const timeElement = document.querySelector('.time');
    const utcTime = new Date().toUTCString();
    timeElement.textContent = `UTC Time: ${utcTime}`;
}

function fetchAndDisplayDayOfWeek() {
    const dayOfWeekElement = document.querySelector('.dayOfTheWeek');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = new Date().getDay();
    const dayName = daysOfWeek[currentDayOfWeek];
    dayOfWeekElement.textContent = `Day of the Week: ${dayName}`;
}

function updateDateTime() {
    fetchAndDisplayUTCTime();
    fetchAndDisplayDayOfWeek();
}

// Call the updateDateTime function initially to set the time and day of the week
updateDateTime();

// Update the time and day of the week every second (1000 milliseconds)
setInterval(updateDateTime, 1000);