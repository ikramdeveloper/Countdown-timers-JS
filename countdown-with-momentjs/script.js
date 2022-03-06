const targetDate = moment("1/1/2023");

setInterval(() => {
  const now = moment();
  const timeDiff = moment.duration(targetDate.diff(now));
  updateTime(timeDiff);
}, 10);

function updateTime(remainingTime) {
  const days = Math.floor(remainingTime.asDays()),
    hrs = Math.floor(remainingTime.asHours()) % 24,
    mins = Math.floor(remainingTime.asMinutes()) % 60,
    secs = Math.floor(remainingTime.asSeconds()) % 60;

  $("#days").text(padNumber(days));
  $("#hours").text(padNumber(hrs));
  $("#minutes").text(padNumber(mins));
  $("#seconds").text(padNumber(secs));
}

function padNumber(number) {
  let formattedNum = number;
  if (number < 10) formattedNum = "0" + formattedNum;
  return formattedNum;
}
