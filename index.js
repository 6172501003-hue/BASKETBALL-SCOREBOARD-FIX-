const scoreHome = document.getElementById("scoreHome")
const scoreGuest = document.getElementById("scoreGuest")
let homeScore = 0; //variabel untuk menyimpan score Home
let guestScore = 0; //variabel untuk menyimpang score Guess

function addHome(points) { //menambah poin dari score Home
    homeScore += points;
    document.getElementById("homeScore").innerText = homeScore;
}

function minusHome(points) { //mengurangi poin dari score Home
    homeScore -= points;
    document.getElementById("homeScore").innerText = homeScore
}

function resetHome(points) { //mengatur ulang poin dari score Home
    homeScore = 0;
    document.getElementById("homeScore").innerText = homeScore
}

function addGuest(points) { //menambah poin dari score Guess
    guestScore += points;
    document.getElementById("guestScore").innerText = guestScore
}

function minusGuest(points) { //mengurangi poin dari score Guess
    guestScore -= points;
    document.getElementById("guestScore").innerText = guestScore
}

function resetGuest(points) { //mengatur ulang poin dari score Guess
    guestScore = 0;
    document.getElementById("guestScore").innerText = guestScore
}

let Timer;
let timeLeft = 20 * 60; //menetapkan waktu hitung mundur dari 10 menit 60 detik.

function startTimer() { //untuk memulai, menghentikan, dan mengatur ulang timer.
  clearInterval(Timer); // prevent multiple timers
    Timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(Timer);
        document.getElementById("timer").innerText = "00:00";
    } else {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60; //Mengambil sisa hasil bagi. (Contoh: 599 % 60 adalah 59, karena $599 = 9 \times 60 + 59$).
        document.getElementById("timer").innerText =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        timeLeft--;
    }
    }, 1000); //Interval waktu dalam milidetik (1000 ms = 1 detik). Jadi, kode di dalamnya akan berjalan setiap 1 detik.
} 

function stopTimer() { //menjeda/menghentikan timer
    clearInterval(Timer);
}

function resetTimer() {
    clearInterval(Timer); //untuk mengatur ulang timer
    timeLeft = 20 * 60;
    document.getElementById("timer").innerText = "20:00";
}




