function printTownsPopulation(data) {
  let townRegistry = {};

  for (let town of data) {
    let [city, pop] = town.split(" <-> ");

    if (!townRegistry.hasOwnProperty(city)) {
      townRegistry[city] = 0;
    }
    townRegistry[city] += Number(pop);
  }

  for (let [town, pop] of Object.entries(townRegistry)) {
    console.log(`${town} : ${pop}`);
  }
}

printTownsPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
