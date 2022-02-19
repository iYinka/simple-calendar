const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const monthDays = document.querySelector(".days");
document.querySelector(".date p").innerHTML = date.toDateString();


const renderCalendar = () => {
  date.setDate(1); // set date to first day of the month

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); // get number of days in a month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate(); // get number of dats of the previous month
  const firstDayIndex = date.getDay(); // get the day of the week (returns an index number)
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  //document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let j = firstDayIndex; j > 0; j--) {
    days += `<div class='prev-date'>${prevLastDay - j + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let x = 1; x <= nextDays; x++) {
    days += `<div class='prev-date'>${x}</div>`;
  }

  monthDays.innerHTML = days;
};

const nextMonth = document.querySelector(".next");
const prevMonth = document.querySelector(".prev");

nextMonth.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  let updatedDate = new Date(date.setMonth(date.getMonth()));
  document.querySelector(".date p").innerHTML = updatedDate.toDateString();
  console.log(updatedDate.toDateString()) + 1;
  renderCalendar();
});

prevMonth.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  let updatedDate = new Date(date.setMonth(date.getMonth()));
  document.querySelector(".date p").innerHTML = updatedDate.toDateString();
  renderCalendar();
});

renderCalendar();
