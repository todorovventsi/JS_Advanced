function daysOfMonth(month, year) {
  let numberOfDays = new Date(year, month, 0).getDate();
  console.log(numberOfDays);
}

daysOfMonth(2, 2012);
