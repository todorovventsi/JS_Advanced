function processOrder(order) {
  let engineInventory = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };

  function wheelSize(order) {
    let result = 0;
    if (order.wheelsize % 2 !== 0) {
      result = order.wheelsize;
    } else {
      result = order.wheelsize - 1;
    }

    return [result, result, result, result];
  }

  function chooseEgnine(order) {
    power = order.power;
    for (let engineType of Object.values(engineInventory)) {
      if (engineType.power >= power) {
        power = engineType;
        break;
      }
    }
    return power;
  }

  let orderCompleted = {
    model: order.model,
    engine: chooseEgnine(order),
    carriage: {
      type: order.carriage,
      color: order.color,
    },
    wheels: wheelSize(order),
  };

  return orderCompleted;
}

let order = {
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
};

console.log(processOrder(order));
