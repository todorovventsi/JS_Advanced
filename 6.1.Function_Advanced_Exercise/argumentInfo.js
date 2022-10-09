function solve(...params) {
    const types = {};

    for (let arg of params) {
        type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type] += 1;
    }

    let sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of sortedTypes) {
        console.log(`${type} = ${count}`);
    }
}

solve("cat", 42, function () {
    console.log("Hello world!");
});
