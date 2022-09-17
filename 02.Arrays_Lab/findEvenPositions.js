function findEvenPositions(data) {
  let resultEvens = [];
  let resultOdds = [];
  //   data.forEach((x, index) => {
  //     if (index % 2 == 0) {
  //       result.push(x);
  //     }
  //   });
  data.forEach((x, index) =>
    index % 2 == 0 ? resultEvens.push(x) : resultOdds.push(x)
  );
  console.log(resultEvens.join(" "));
}

findEvenPositions(["20", "30", "40", "50", "60"]);
