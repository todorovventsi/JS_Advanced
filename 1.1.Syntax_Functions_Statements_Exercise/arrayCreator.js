function arrayGenerator(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "add":
        result.push(i + 1);
        break;
      case "remove":
        result.pop();
        break;
    }
  }

  if (result.length === 0) {
    console.log("Empty");
    return;
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

arrayGenerator(["remove", "remove", "remove"]);
