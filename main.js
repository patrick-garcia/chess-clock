const startBtn = document.getElementById('start');
const minuteBtn = document.querySelectorAll('[data-time]');
const click = document.querySelector('audio[data-click]');
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');

minuteBtn.forEach(b => {
  b.innerHTML = b.dataset.desc;

  b.addEventListener('click', () => {
    let time = parseInt(b.dataset.time);
    if (!interval) {
      count1 = count2 = time;
      const display = formatTime(time);
      time1.textContent = time2.textContent = display;
      console.log(count1, count2);
    }
  })
});

startBtn.addEventListener('click', () => {
  timerCheck();
  click.play();
});