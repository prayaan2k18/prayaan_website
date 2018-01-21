	function updateTimer() {
 future  = Date.parse("February 16, 2018 09:00:00");
   now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<span class="timer_span">' + d + '<span>days</span></span>&nbsp&nbsp;' +
      '<span class="timer_span">' + h + '<span>hours</span></span>&nbsp;&nbsp;' +
      '<span class="timer_span">' + m + '<span>minutes</span></span>&nbsp;&nbsp;' +
      '<span class="timer_span">' + s + '<span>seconds</span></span>' ;
}
setInterval('updateTimer()', 1000 );