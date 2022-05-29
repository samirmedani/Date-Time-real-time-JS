function DisplayDate() {
  const date = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const showDate = document.querySelector(".showDate");

  showDate.innerHTML = "Nous sommes le " + date;
}

DisplayDate();

function display_c() {
  let refresh = 1000;
  dateRefresh = 60000;
  mytime = setTimeout("DisplayTime()", refresh);
  mydate = setTimeout("DisplayDate()", dateRefresh);
}

function DisplayTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  document.getElementById("ShowHours").innerHTML =
    "Il est " + hours + "h" + minutes;
  if (hours == "00") {
    if (minutes == "01") {
      DisplayDate();
    }
  }

  display_c();
}

DisplayTime();
