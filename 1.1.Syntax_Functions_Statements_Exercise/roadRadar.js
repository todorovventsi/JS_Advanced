function roadRadar(speed, area) {
  let roadRules = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let allowedSpeed = roadRules[area];
  let speedDifferance = Math.abs(speed - allowedSpeed);
  let status;

  if (allowedSpeed >= speed) {
    console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
    return;
  }

  if (speedDifferance <= 20) {
    status = "speeding";
  } else if (speedDifferance <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }

  console.log(
    `The speed is ${speedDifferance} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`
  );
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
