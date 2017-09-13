let count1, count2;
// let timer1, timer2; // on/off
let interval;
let timerOne; // if true timer1 is on timer2 is off, vice versa

// let controls = [
//   {isOn: false, twoMin: 120, oneMin: 60},
//   {isOn: false, twoMin: 120, oneMin: 60}
// ];

// countdown using interval function
function countdown(secs) {
  const fixedTime = secs + timeStamp();
  // displayTime(secs);

  interval = setInterval(function() {

    if (timerOne) {
      count1 = fixedTime - timeStamp();
      displayTime(count1);
    } else {
      count2 = fixedTime - timeStamp();
      displayTime(count2);
    }

    if (count1 <= 0 || count2 <= 0) {
      clearInterval(interval);
      timer1 = timer2 = false;
      return;
    }
    
    console.log(count1, count2);
  }, 1000);
};

// display formatted time
function displayTime(x) {
  const display = formatTime(x);

  if (timerOne) {
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
  } else if (timerOne === undefined) {
    timerOne = true;
    clickSound();
    return countdown(count1);
  }
}

// check which timer is running
function timerCheck() {
  if (timerOne) {
    timerOne = !timerOne;
    clickSound();
    clearInterval(interval);
    return countdown(count2);
    
  } else if (timerOne === false) {
    timerOne = !timerOne;
    clickSound();
    clearInterval(interval);
    return countdown(count1);
  } // must declare "timerOne === false" and not "!timerOne".  Undefined yields false
};

// get time, convert to seconds
function timeStamp() { return Math.floor(Date.now() / 1000); };

function formatTime(s) {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

function clickSound() {
  click.currentTime = 0; // currentTime sets playback begin time in seconds
  click.play();
};














  