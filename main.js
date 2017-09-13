const startBtn = document.getElementById('start');
const minuteBtn = document.querySelectorAll('[data-time]');
const click = document.querySelector('audio[data-click]');
const half = document.querySelectorAll('section[data-desc]');
const topHalf = document.querySelector('.top');
const bottomHalf = document.querySelector('.bottom');

const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');

minuteBtn.forEach(b => {
  b.innerHTML = b.dataset.desc;

  b.addEventListener('click', () => {
    let time = parseInt(b.dataset.time);
    if (!interval) {
      count1 = count2 = time;
      time1.textContent = time2.textContent = formatTime(time);
      console.log(count1, count2);
    }
  })
});

startBtn.addEventListener('click', () => {
  timerCheck();
  startCheck(); // only runs when count1 & count2 are undefined
});

// half.forEach(h => {
  // if (h.dataset.desc == "top" && time1) {
    // h.addEventListener('click', timerCheck)
    // console.log('hi');
  // } else if (h.dataset.desc == "bottom" && time2) {
    // h.addEventListener('click', timerCheck)
    // console.log('hello');
  // }
// })

// half.forEach(h => {
//   h.addEventListener('click', function handler(e) {
//     timerCheck()
//     // const y = e.currentTarget;
//     // console.log(e);
//     e.currentTarget.removeEventListener(e.type, handler);
//     console.log('fire only once');
//   })
// })














