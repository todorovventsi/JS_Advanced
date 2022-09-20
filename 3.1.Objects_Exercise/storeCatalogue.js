function storeCatalogue(data) {
  data.sort((x, y) => x.localeCompare(y));
  let catalogue = {};

  for (let dataSet of data) {
    let [product, price] = dataSet.split(" : ");
    price = Number(price);
    let letter = product[0];

    if (!catalogue.hasOwnProperty(letter)) {
      catalogue[letter] = [];
    }

    catalogue[letter].push({ product, price });
  }

  for (let [letter, productData] of Object.entries(catalogue)) {
    console.log(letter);
    productData.forEach((x) => {
      console.log(`  ${x.product}: ${x.price}`);
    });
  }
}

let data = [
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
];
storeCatalogue(data);
