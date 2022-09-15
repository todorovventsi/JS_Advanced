function timeCalculator(distanceInSteps, footprintMeters, speedKMH) {
  let distanceInMetres = distanceInSteps * footprintMeters;
  let speedInMPS = speedKMH * (5 / 18);
  let additionalSeconds = Math.floor(distanceInMetres / 500) * 60;

  let timeNeededInSeconds = distanceInMetres / speedInMPS + additionalSeconds;

  let date = new Date(timeNeededInSeconds * 1000);
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();

  console.log(`0${hours}:${minutes}:${seconds}`);
}

timeCalculator(2564, 0.7, 5.5);
