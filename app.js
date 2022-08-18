function Time() {
    // Creating object of the Date class
    let date = new Date();
    // Get current hour
    let hour = date.getHours();
    // Get current minute
    let minute = date.getMinutes();
    // Get current second
    let second = date.getSeconds();
    // Variable to store AM / PM
    let period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();
   console.log(Time())

// code from analog clock
// const secondsHand = document.getElementById('seconds-hand')
// const minutesHand = document.getElementById('minutes-hand')
// const hoursHand = document.getElementById('hours-hand')

// function getTime() {
//     const now = new Date()
//     const seconds = now.getSeconds()
//     const minutes = now.getMinutes()
//     const hours = now.getHours()
//     const milSec = now.getMilliseconds()
//     const timeInterval = 6

//     console.log(seconds)
//     console.log(minutes * timeInterval)
//     console.log(minutes * timeInterval + seconds / 10)
//     console.log(hours * 30 + minutes /2)

//     secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
//     minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
//     hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes /2) + 'deg)'

// }

// setInterval(getTime, 100)