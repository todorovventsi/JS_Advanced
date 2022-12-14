function solution() {
    // Ingredient collection
    let inStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    // Recepices instructions
    let recepices = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    // Commands collection
    let commands = {
        restock,
        prepare,
        report,
    };

    function manager(instruction) {
        let [command, param, qty] = instruction.split(" ");
        return commands[command](param, qty);
    }

    function restock(ingredient, qty) {
        inStock[ingredient] += Number(qty);
        return "Success";
    }

    function prepare(product, qty) {
        let recipe = Object.entries(recepices[product]);
        qty = Number(qty);

        recipe.forEach((x) => (x[1] *= qty));

        for (let [ingredient, qty] of recipe) {
            if (inStock[ingredient] < qty) {
                return `Error: not enough ${ingredient} in stock`;
            }
            inStock[ingredient] -= qty;
        }
        return "Success";
    }

    function report() {
        return `protein=${inStock.protein} carbohydrate=${inStock.carbohydrate} fat=${inStock.fat} flavour=${inStock.flavour}`;
    }

    return manager;
}

let manager = solution();

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
