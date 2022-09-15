function timeCalculator(distanceInSteps, footprintMeters, speedKMH) {
  let distanceInMetres = distanceInSteps * footprintMeters;
  let speedInMPS = speedKMH / 3.6;
  let additionalSeconds = Math.floor(distanceInMetres / 500) * 60;

  let timeNeededInSeconds = Math.ceil(
    distanceInMetres / speedInMPS + additionalSeconds
  );

  let date = new Date(timeNeededInSeconds * 1000);
  let hours = date.getUTCHours();
  let hoursFMT = hours < 10 ? `0${hours}` : `${hours}`;
  let minutes = date.getUTCMinutes();
  let minutesFMT = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = date.getUTCSeconds();
  let secondsFMT = seconds < 10 ? `0${seconds}` : `${seconds}`;

  console.log(`${hoursFMT}:${minutesFMT}:${secondsFMT}`);
}

timeCalculator(4000, 0.6, 5);
timeCalculator(2564, 0.7, 5.5);
