const startClick = document.getElementById('start');
const container = document.querySelector('.container.flip-effect');

startClick.addEventListener('click', function() {
  if (!count1 && !count2) {
    swal({
      icon: "error",
      title: "whoopsie daisy!",
      text: "you need to set the number of minutes",
      button: {text: "got it"}
    });
    // buzzerSound();

  } else {
    flipListener();
  }
});

function flipListener() {
  const z = container.classList;
  z.contains('flipped') === false ? z.add('flipped') : '';
}