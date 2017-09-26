const minuteBtn = document.querySelectorAll('section[data-time]');
const timers = document.querySelectorAll('section[data-desc]');
const topTimer = timers[0];
const bottomTimer = timers[1];
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const click = document.querySelector('audio[data-audio="click"]');
// const buzzer = document.querySelector('audio[data-audio="buzzer"]');


minuteBtn.forEach(b => {
  b.innerHTML = `${parseInt(b.dataset.time) / 60} min`;
  b.addEventListener('click', () => {
    let time = parseInt(b.dataset.time);
    if (!interval) {
      count1 = count2 = time;
      time1.textContent = time2.textContent = formatTime(time);
    }
  })
});

timers.forEach(t => {
  t.addEventListener('click', startingPlayerCheck);
});

function startingPlayerCheck() {
  startingPlayer = this.dataset.desc;
  startCheck();

  if (count1 && count2) {
    timers.forEach(t => {
      t.removeEventListener('click', startingPlayerCheck) // remove eventList after firing once & use clickToggle function to add/remove eventList
    })
  }
};

function clickToggle() {
  if (runTimerOne) {
    topTimer.addEventListener('click', timerCheck)
    bottomTimer.removeEventListener('click', timerCheck)
    blackBG();
  } else {
    bottomTimer.addEventListener('click', timerCheck)
    topTimer.removeEventListener('click', timerCheck)
    blackBG();
  }
};

// black-bg when running timer, bottom timer starts with black-bg
function blackBG() {
  if (runTimerOne) {
    topTimer.classList.toggle('black-bg');
    bottomTimer.classList.toggle('black-bg');
  } else {
    topTimer.classList.remove('black-bg');
    bottomTimer.classList.add('black-bg');
  }
};

// audio
function clickSound() { click.currentTime = 0; click.volume = .5; click.play(); };
function buzzerSound() { buzzer.currentTime = 0; buzzer.volume = .1; buzzer.play(); };
