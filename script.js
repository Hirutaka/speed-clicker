const timeInput = document.getElementById('timeInput');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');
const clickCountDisplay = document.getElementById('clickCount');

let timer = null;
let clicks = 0;
let timerRunning = false;

clickButton.addEventListener('click', () => {

  if (!timerRunning) {
    
    const time = parseInt(timeInput.value, 10);

    if (isNaN(time) || time <= 0) {
    alert('Porfavor ingresa el tiempo en segundos.');
    return;
    }

    timerRunning = true;

    clicks = 0;
    clickCountDisplay.textContent = clicks;

    timeInput.disabled = true;

    resetButton.disabled = false;

    timerDisplay.textContent = `Tiempo restante: ${time}`;

    let timeLeft = time;

    timer = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = `Tiempo restante: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timer);

        timerRunning = false;

        clickButton.disabled = true;

        timerDisplay.textContent = 'Tiempo terminado!';
    }
    }, 1000); 
}

clicks += 1;

clickCountDisplay.textContent = clicks;
});

resetButton.addEventListener('click', () => {
if (timer) {
    clearInterval(timer);
}

timerRunning = false;
clicks = 0;
clickCountDisplay.textContent = clicks;
timerDisplay.textContent = 'Tiempo restante: --';
clickButton.disabled = false;
timeInput.disabled = false;
resetButton.disabled = true;
});
