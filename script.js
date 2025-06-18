let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dateElement = document.getElementById("date");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let dayOfWeek = daysOfWeek[date.getDay()];

  let dayOfMonth = date.getDate();

  let formattedDate = `${dayOfWeek} ${
    dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth
  }`;

  dateElement.textContent = formattedDate;
}

setInterval(displayTime, 1000);
