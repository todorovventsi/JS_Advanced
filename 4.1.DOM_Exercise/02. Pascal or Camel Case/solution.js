function solve() {
  let input = document.getElementById("text").value.toLowerCase().split(" ");
  console.log(input);
  let caseType = document.getElementById("naming-convention").value;
  let result = "";

  function toCamel(input) {
    let result = input[0];
    for (let word of input.slice(1)) {
      transformedWord = word[0].toUpperCase() + word.slice(1);
      result += transformedWord;
    }
    return result;
  }

  function toPascal(input) {
    let result = "";
    for (let word of input) {
      transformedWord = word[0].toUpperCase() + word.slice(1);
      result += transformedWord;
    }
    return result;
  }

  let cases = {
    "Camel Case": toCamel,
    "Pascal Case": toPascal,
  };

  if (!cases.hasOwnProperty(caseType)) {
    result = "Error!";
  }

  switch (caseType) {
    case "Camel Case":
      result = cases["Camel Case"](input);
      break;
    case "Pascal Case":
      result = cases["Pascal Case"](input);
      break;
  }

  let resultField = document.querySelector(".result-container #result");
  resultField.textContent = result;
}
