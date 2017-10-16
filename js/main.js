app.$timers = $('section[data-desc]');
app.$topTimer = app.$timers[0];
app.$bottomTimer = app.$timers[1];
app.click = document.querySelector('audio[data-audio="click"]');
app.endToggleInterval;

app.startingPlayerCheck = function(e) {
  e.preventDefault();
  app.startingPlayer = this.dataset.desc;
  app.startCheck();
};

app.clickToggle = function() {
  if (app.runTimerOne) {
    $(app.$topTimer).on('touchstart click', app.timerCheck)
    $(app.$bottomTimer).off()

    app.blackBG();
  } else {
    $(app.$bottomTimer).on('touchstart click', app.timerCheck)
    $(app.$topTimer).off()
    app.blackBG();
  }
};

// black-bg when running timer, bottom timer starts with black-bg
app.blackBG = function() {
  if (app.runTimerOne) {
    $(app.$topTimer).toggleClass('black-bg')
    $(app.$bottomTimer).toggleClass('black-bg')
  } else {
    $(app.$topTimer).removeClass('black-bg')
    $(app.$bottomTimer).addClass('black-bg')
  }
};

app.endToggle = function() {
  let switchCount = 6;
  app.endToggleInterval = setInterval(() => {
    $(app.$topTimer).toggleClass('black-bg')
    $(app.$bottomTimer).toggleClass('black-bg')
    switchCount--;

    if(switchCount <= 0) {
      clearInterval(app.endToggleInterval)
      return;
    }
  }, 1250);
};

$(app.$timers).each(function() {
  $(this).one('touchstart click', app.startingPlayerCheck);
}); // use .one() instead of .on() so you do have to use .remove() which causes issues

// audio
app.clickSound = function() {
  app.click.currentTime = 0;
  app.click.volume = .8;
  app.click.play();
};

