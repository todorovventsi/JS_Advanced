function lowestPrice(data) {
  let productLowestPrices = {};

  for (let dataSet of data) {
    let [town, product, price] = dataSet.split(" | ");
    price = Number(price);

    if (!productLowestPrices.hasOwnProperty(product)) {
      productLowestPrices[product] = { price, town };
    }

    if (productLowestPrices[product].price > price) {
      productLowestPrices[product] = { price, town };
    }
  }

  for (let [product, data] of Object.entries(productLowestPrices)) {
    console.log(`${product} -> ${data.price} (${data.town})`);
  }
}

let data = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];
lowestPrice(data);
