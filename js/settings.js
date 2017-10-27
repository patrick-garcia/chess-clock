app.$minuteBtn = $('button[data-time]');
app.$startBtn = $('#start button');
app.container = document.querySelector('.container.flip-effect');
app.time1 = document.getElementById('time1');
app.time2 = document.getElementById('time2');
app.customForm = document.customForm;

app.init = function() {
  $(app.$minuteBtn).each(function() {
    const timeData = parseInt($(this).attr('data-time'));
    $(this).text(`${timeData / 60} min`);
    $(this).append(`<figure></figure>`);

    $(this).on('touchstart click', function(e) {
      e.preventDefault();
      if(!app.interval) {
        app.count1 = app.count2 = timeData;
        app.time1.textContent = app.formatTime(timeData);
        app.time2.textContent = app.formatTime(timeData);
      }

      const clicked = $(this)
      const clickedFig = clicked.children()

      if(!clickedFig.hasClass('blue-bg')) {
        const btnNotClicked = app.$minuteBtn.not(clicked)
        btnNotClicked.children().removeClass('blue-bg')
        btnNotClicked.css({'border':'1px solid white', 'transition':'border .3s'})
        clickedFig.addClass('blue-bg')
        clicked.css({'border':'1px solid cornflowerblue'})
      }

      setTimeout(() => {
        app.$startBtn.addClass('green-bg')
      }, 250);
    });
  });

  $('.container').on('touchstart click', function(e) {
    e.preventDefault();
    if (!$(e.target).is('button')) {
      $('button figure').removeClass('blue-bg')
      $(app.$minuteBtn).css({'border':'1px solid white'})
      $(app.$startBtn).removeClass('green-bg')
      app.count1 = app.count2 = undefined;
    }
  });

  $(app.$startBtn).on('touchstart click', function(e) {
    e.preventDefault();
    if (isNaN(app.count1) && isNaN(app.count2)) {
      swal({
        icon: "error",
        title: "whoopsie daisy!",
        text: "you need to set the number of minutes",
        button: {text: "got it"}
      });
    } else {
      app.flipListener();
      $('.container').off() // prevent from showing backface after container flip
    }
  })
};

app.flipListener = function() {
  const containerClass = app.container.classList;
  containerClass.contains('flipped') === false ? containerClass.add('flipped') : '';

  setTimeout(() => {
    $('time#time1').addClass('flipTime1')
  }, 750)
};

app.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const customMinutes = parseInt(this.minutes.value) * 60;

  if (!isNaN(customMinutes)) {
    app.count1 = app.count2 = customMinutes;
    app.time1.textContent = app.time2.textContent = app.formatTime(customMinutes);
    this.reset();
    app.flipListener();
  } else {
    swal({
      icon: "error",
      title: "whoopsie daisy!",
      text: "make sure you enter a number",
      button: {text: "got it"}
    });
    this.reset();
  }
  $('.container').off()
});
