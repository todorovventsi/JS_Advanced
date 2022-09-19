function listOfNames(data) {
  data.sort((a, b) => a.localeCompare(b));
  data.forEach((name, index) => {
    console.log(`${index + 1}.${name}`);
  });
}

listOfNames(["John", "bob", "Christina", "Ema"]);
