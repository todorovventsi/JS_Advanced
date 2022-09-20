function crewCare(worker) {
  if (!worker.dizziness) {
    return worker;
  }

  let requiredWater = 0.1 * worker.weight * worker.experience;
  worker.levelOfHydrated += requiredWater;
  worker.dizziness = false;
  return worker;
}

console.log(
  crewCare({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false })
);
