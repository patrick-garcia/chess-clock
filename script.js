const startBtn = document.getElementById('start');
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');

var interval;

var controls = [
  {isOn: false, twoMin: 120, oneMin: 60},
  {isOn: false, twoMin: 120, oneMin: 60}
];

var timerRunning1 = false;
var timerRunning2 = false;
var count1 = 120;
var count2 = 120;


// get time, convert to seconds
function timeStamp() { return Math.floor(Date.now() / 1000); }

// countdown using interval function
function countdown(secs) {
  var fixedTime = secs + timeStamp();
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
      timerRunning1 = false;
      timerRunning2 = false;
      return;
    }
    
    console.log(count1, count2);
  }, 1000);

};

// display formatted time
function displayTime(x) {
  const mins = Math.floor(x / 60);
  const secs = x % 60;
  const display = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  console.log(display);

  if (timerRunning1) {
    time1.textContent = display;
  } else if (timerRunning2) {
    time2.textContent = display;
  }
}

// add click
startBtn.addEventListener('click', () => {
  const x = timerCheck();
  countdown(x);
  console.log();
});


// check which timer is running
function timerCheck() {
  if (!timerRunning1 && !timerRunning2) {
    timerRunning1 = !timerRunning1;
    timerRunning2 = timerRunning2;
    console.log(timerRunning1, timerRunning2);
    return count1;
  }

  if (timerRunning1) {
    clearInterval(interval);
    timerRunning1 = !timerRunning1;
    timerRunning2 = !timerRunning2;
    console.log(timerRunning1, timerRunning2);
    return count2;
    
  } else if (timerRunning2) {
    clearInterval(interval);
    timerRunning1 = !timerRunning1;
    timerRunning2 = !timerRunning2;
    console.log(timerRunning1, timerRunning2);
    return count1;
  }
}





















  