  const display = document.getElementById("display");
  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const resumeBtn = document.getElementById("resume");
  const resetBtn = document.getElementById("reset");

  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  let totalSeconds = 0;
  let timer = null;

  function formatTime(sec) {
    let h = String(Math.floor(sec / 3600)).padStart(2, "0");
    let m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    let s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  startBtn.onclick = () => {
    let h = parseInt(hoursInput.value) || 0;
    let m = parseInt(minutesInput.value) || 0;
    let s = parseInt(secondsInput.value) || 0;
    totalSeconds = h * 3600 + m * 60 + s;

    if (totalSeconds <= 0) return;

    display.textContent = formatTime(totalSeconds);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        display.textContent = formatTime(totalSeconds);
      } else {
        clearInterval(timer);
        alert("\u23F0 Time’s up!");
        resetBtn.click();
      }
    }, 1000);
  };

  pauseBtn.onclick = () => {
    clearInterval(timer);
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
  };

  resumeBtn.onclick = () => {
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds;
        display.textContent = formatTime(totalSeconds);
      } else {
        clearInterval(timer);
        alert("\u23F0 Time’s up!");
        resetBtn.click();
      }
    }, 1000);
  };

  resetBtn.onclick = () => {
    clearInterval(timer);
    totalSeconds = 0;
    display.textContent = "00:00:00";

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
  };