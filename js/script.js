var app = app || {};

app.count1, app.count2, app.interval;
app.runTimerOne; // if true timer1 is on timer2 is off, vice versa
app.startingPlayer; // if true top WAS CLICKED (run timer 1), if false bottom WAS CLICKED (run timer 2)

// countdown using interval function
app.countdown = function(secs) {
  const fixedTime = secs + app.timeStamp();

  app.interval = setInterval(function() {

    if (app.runTimerOne) {
      app.count1 = fixedTime - app.timeStamp();
      app.displayTime(app.count1);
    } else {
      app.count2 = fixedTime - app.timeStamp();
      app.displayTime(app.count2);
    }

    if (app.count1 <= 0 || app.count2 <= 0) {
      clearInterval(app.interval);
      app.endToggle();
      return;
    }
  }, 1000);

  app.clickToggle();
};

// display formatted time
app.displayTime = function(x) {
  const display = app.formatTime(x);
  if (app.runTimerOne) {
    app.time1.textContent = display;
  } else {
    app.time2.textContent = display;
  }
};

// check if timer is off
app.startCheck = function() {
  if (!app.count1 && !app.count2) {
    swal({
      icon: "error",
      title: "whoopsie daisy!",
      text: "you need to set the number of minutes",
      button: {text: "got it"}
    });

  } else if (app.runTimerOne === undefined) {
    app.clickSound();
    
    let startingCount;
    if (app.startingPlayer === 'top') {
      app.runTimerOne = true
      startingCount = app.count1
    } else {
      app.runTimerOne = false
      startingCount = app.count2
    } 
    return app.countdown(startingCount);
  }
};

// check which timer is running, them switch
app.timerCheck = function() {
  if (app.runTimerOne) {
    app.runTimerOne = !app.runTimerOne;
    app.clickSound();
    clearInterval(app.interval);
    return app.countdown(app.count2);
    
  } else if (app.runTimerOne === false) {
    app.runTimerOne = !app.runTimerOne;
    app.clickSound();
    clearInterval(app.interval);
    return app.countdown(app.count1);
  } // must declare "runTimerOne === false" and not "!runTimerOne" cause "undefined" yields falsey, timer runs unexpectedly
};

// get time, convert to seconds
app.timeStamp = function() { return Math.floor(Date.now() / 1000); };

app.formatTime = function(s) {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

$(function() {
  app.init();
})