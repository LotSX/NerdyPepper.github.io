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

function is_url(str) {
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return regexp.test(str)
}

function keyup(e) {
  let inputTextValue = e.target.value;
  let has_https = (/(http(s)?:\/\/.)/.test(inputTextValue));

  if (e.keyCode == 13) {
    if (is_url(inputTextValue))
      window.location = has_https ? inputTextValue : "https://" + inputTextValue;
    else window.location = "https://duckduckgo.com/?q=" + inputTextValue;
  }
}
