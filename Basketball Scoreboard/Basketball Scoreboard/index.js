const scoreHome = document.getElementById("scoreHome")
const scoreGuest = document.getElementById("scoreGuest")
let homeScore = 0;
let guestScore = 0;

function addHome(points) {
    homeScore += points;
    document.getElementById("homeScore").innerText = homeScore;
}

function minusHome(points) {
    homeScore -= points;
    document.getElementById("homeScore").innerText = homeScore
}

function resetHome(points) {
    homeScore = 0;
    document.getElementById("homeScore").innerText = homeScore
}

function addGuest(points) {
    guestScore += points;
    document.getElementById("guestScore").innerText = guestScore
}

function minusGuest(points) {
    guestScore -= points;
    document.getElementById("guestScore").innerText = guestScore
}

function resetGuest(points) {
    guestScore = 0;
    document.getElementById("guestScore").innerText = guestScore
}

let Timer;
let timeLeft = 10 * 60;

function startTimer() {
  clearInterval(Timer); // prevent multiple timers
    Timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(Timer);
        document.getElementById("timer").innerText = "00:00";
    } else {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        timeLeft--;
    }
    }, 1000);
}

function stopTimer() {
    clearInterval(Timer);
}

function resetTimer() {
    clearInterval(Timer);
    timeLeft = 10 * 60;
    document.getElementById("timer").innerText = "10:00";
}




