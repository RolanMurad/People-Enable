// !Calendar
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector('.calendar__days');
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firsDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const month = [
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
  // !Display the current month
  document.querySelectorAll('.calendar__month').forEach(function (item) {
    item.innerHTML = month[date.getMonth()];
  })

  // !Display the current Year
  document.querySelectorAll('.calendar__year').forEach(function (item) {
    item.innerHTML = new Date().getFullYear();
  });

  // !Display next Month
  nextMonth = document.querySelector('.calendar__next-month span').innerHTML = month[date.getMonth() + 1];

  // !Option for Current day
  let options = {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    timezone: 'UTC',
  }

  // !Display current Day
  currentDay = document.querySelector('.calendar__current-day').innerHTML = new Date().toLocaleDateString('en-Gb', options);


  let days = "";

  for (let x = firsDayIndex; x > 1; x--) {
    days += `<div class="calendar__prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="calendar__days-item today">${i}</div>`;
    } else {
      days += `<div class="calendar__days-item">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="calendar__next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
}

document.querySelector('.calendar__next-month').addEventListener('click', (e) => {
  e.stopPropagation();
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.querySelector('.comeback').addEventListener('click', (e) => {
  e.stopPropagation();
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

renderCalendar()
