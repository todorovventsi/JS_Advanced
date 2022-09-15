function cookBuNumber(...data) {
  let number = Number(data.shift());

  let operations = {
    chop: "/2",
    spice: "+1",
    bake: "*3",
    fillet: "*0.8",
  };

  for (command of data) {
    if (command === "dice") {
      number = Math.sqrt(number);
      console.log(number);
      continue;
    }
    number = eval(`${number}${operations[command]}`);
    console.log(number);
  }
}

// cookBuNumber("32", "chop", "chop", "chop", "chop", "chop");
cookBuNumber("9", "dice", "spice", "chop", "bake", "fillet");
