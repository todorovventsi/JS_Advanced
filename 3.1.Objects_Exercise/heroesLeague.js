function processHeroes(data) {
  let result = [];

  for (let heroData of data) {
    let heroDataArr = heroData.split(" / ");
    let items = heroDataArr[2] !== undefined ? heroDataArr[2].split(", ") : [];
    let [name, levelH] = heroDataArr;
    let level = Number(levelH);
    let heroObject = { name, level, items };
    result.push(heroObject);
  }

  console.log(JSON.stringify(result));
}

let data = [
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1",
];

processHeroes(data);
