let interval;
let timerRunning1 = false;
let timerRunning2 = false;
let count1, count2;

let controls = [
  {isOn: false, twoMin: 120, oneMin: 60},
  {isOn: false, twoMin: 120, oneMin: 60}
];

// countdown using interval function
function countdown(secs) {
  const fixedTime = secs + timeStamp();
  displayTime(secs);

  interval = setInterval(function() {

    if (timerRunning1) {
      count1 = fixedTime - timeStamp();
      displayTime(count1);
    } else if (timerRunning2) {
      count2 = fixedTime - timeStamp();
      displayTime(count2);
    }

    if (count1 <= 0 || count2 <= 0) {
      clearInterval(interval);
      timerRunning1 = timerRunning2 = false;
      return;
    }
    
    console.log(count1, count2);
  }, 1000);
};

// display formatted time
function displayTime(x) {
  const display = formatTime(x);

  if (timerRunning1) {
    time1.textContent = display;
  } else if (timerRunning2) {
    time2.textContent = display;
  }
};

// check which timer is running
function timerCheck() {
  if (count1 == null && count2 == null) {
    swal({
      icon: "error",
      title: "whoopsie daisy!",
      text: "you need to set the number of minutes",
      button: {
        text: "got it"
      }
    });

  } else if (!timerRunning1 && !timerRunning2) {
    timerRunning1 = !timerRunning1;
    timerRunning2 = timerRunning2;
    return countdown(count1)
  }

  if (timerRunning1) {
    timerRunning1 = !timerRunning1;
    timerRunning2 = !timerRunning2;
    clearInterval(interval);
    return countdown(count2);
    
  } else if (timerRunning2) {
    timerRunning1 = !timerRunning1;
    timerRunning2 = !timerRunning2;
    clearInterval(interval);
    return countdown(count1);
  }
};

// get time, convert to seconds
function timeStamp() { return Math.floor(Date.now() / 1000); };

function formatTime(s) {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};
















  