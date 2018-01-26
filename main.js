window.onkeyup = keyup;
var inputTextValue;

function main() {
  greet();
  time();
  date();
}

function greet() {
  var today = new Date();
  var h = today.getHours();
  var per;

  if (h < 12) per = "morning";
  else if (h < 18) per = "afternoon";
  else per = "evening";

  document.getElementById('greeting').innerHTML = "good " + per + " ray";

  var t = setTimeout(greet, 1800000);
}

function time() {
    var today = new Date();
    var h = hh = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var tc = "am";

    if (h >= 12) {
        h = hh - 12;
        tc = "pm";
    }
    if (h == 0) {
        h = 12;
    }

    if (h == 24 && m == 0 && s == 0) date();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML = "it is " + h + ":" + m
                                                 + ":" + s + ' ' + tc;


    var t = setTimeout(time, 500);
}

function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
}

function date() {
  var days = ["sunday", "monday", "tuesday", "wednesday", "thursday",
              "friday", "saturday"];
  var months = ["january", "february", "march", "april", "may", "june",
                "july", "august", "september", "october", "november",
                "december"];

  var today = new Date();
  var day = days[today.getDay()];
  var month = months[today.getMonth()];
  var date = today.getDate();
  var oi;

  if (date == 1) oi = "st";
  else if (date == 2) oi = "nd";
  else if (date == 3) oi = "rd";
  else oi = "th";

  document.getElementById('date').innerHTML = day + ' ' + month + ' ' +
                                  date + oi + " " + today.getFullYear();
}

function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    window.location = "https://duckduckgo.com/?q=" + inputTextValue;
  }
}
