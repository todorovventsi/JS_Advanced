function getPreviousDay(year, month, day) {
  let date = new Date(`${year}-${month}-${day}`);
  let previousDate = new Date(date - 1);
  let yearSt = previousDate.getFullYear();
  let monthSt = previousDate.getMonth() + 1;
  let dayOfMonth = previousDate.getDate();

  console.log(`${yearSt}-${monthSt}-${dayOfMonth}`);
}

getPreviousDay(2022, 5, 1);
