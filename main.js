const minuteBtn = document.querySelectorAll('button[data-time]');
const topTimer = document.querySelector('.top-timer');
const bottomTimer = document.querySelector('.bottom-timer');
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const click = document.querySelector('audio[data-click]');
const buzzer = document.querySelector('audio[data-buzzer]');
const half = document.querySelectorAll('section[data-desc]');

minuteBtn.forEach(b => {
  b.innerHTML = b.dataset.desc;
  b.addEventListener('click', () => {
    let time = parseInt(b.dataset.time);
    if (!interval) {
      count1 = count2 = time;
      time1.textContent = time2.textContent = formatTime(time);
    }
  })
});

half.forEach(h => {
  h.addEventListener('click', startingPlayerCheck)
});

function startingPlayerCheck() {
  console.log(this);
  startingPlayer = this.dataset.desc
  startCheck()

  if (count1 && count2) {
    half.forEach(h => {
      h.removeEventListener('click', startingPlayerCheck) // remove eventList & use clickToggle function to add/remove eventList
    })
  }
};

function clickToggle() {
  if (runTimerOne) {
    topTimer.addEventListener('click', timerCheck)
    bottomTimer.removeEventListener('click', timerCheck)
  } else {
    bottomTimer.addEventListener('click', timerCheck)
    topTimer.removeEventListener('click', timerCheck)
  }
}









