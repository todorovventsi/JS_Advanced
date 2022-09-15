function priceCalculator(fruit, grams, pricePerKilo) {
  let weightInKilo = grams / 1000;
  let totalPriceUSD = weightInKilo * pricePerKilo;
  let message = `I need $${totalPriceUSD.toFixed(
    2
  )} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`;

  console.log(message);
}

priceCalculator("orange", 2500, 1.8);
