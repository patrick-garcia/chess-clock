let app = {};

let count1, count2;
let interval;
let runTimerOne; // if true timer1 is on timer2 is off, vice versa
let startingPlayer; // if true top is clicked (run timer 1), if false bottom is clicked (run timer 2)

// countdown using interval function
function countdown(secs) {
  const fixedTime = secs + timeStamp();

  interval = setInterval(function() {

    if (runTimerOne) {
      count1 = fixedTime - timeStamp();
      displayTime(count1);
    } else {
      count2 = fixedTime - timeStamp();
      displayTime(count2);
    }

    if (count1 <= 0 || count2 <= 0) {
      clearInterval(interval);
      return;
    }
  }, 1000);

  clickToggle();
};

// display formatted time
function displayTime(x) {
  const display = formatTime(x);

  if (runTimerOne) {
    time1.textContent = display;
  } else {
    time2.textContent = display;
  }
};

// check if timer is off
function startCheck() {
  if (!count1 && !count2) {
    swal({
      icon: "error",
      title: "whoopsie daisy!",
      text: "you need to set the number of minutes",
      button: {
        text: "got it"
      }
    });
    buzzerSound();
  } else if (runTimerOne === undefined) {
    clickSound();
    
    let startingCount;
    if (startingPlayer === 'top') {
      runTimerOne = true
      startingCount = count1
    } else {
      runTimerOne = false
      startingCount = count2
    }
    
    return countdown(startingCount); // *****
  }
}

// switch which timer is running
function timerCheck() {
  if (runTimerOne) {
    runTimerOne = !runTimerOne;
    clickSound();
    clearInterval(interval);
    return countdown(count2);
    
  } else if (runTimerOne === false) {
    runTimerOne = !runTimerOne;
    clickSound();
    clearInterval(interval);
    return countdown(count1);
  } // must declare "runTimerOne === false" and not "!runTimerOne" cause "undefined" yields falsey
};

// get time, convert to seconds
function timeStamp() { return Math.floor(Date.now() / 1000); };

function formatTime(s) {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

// audio
function clickSound() { click.currentTime = 0; click.volume = .5; click.play(); };
function buzzerSound() { buzzer.currentTime = 0; buzzer.volume = .05; buzzer.play(); };








