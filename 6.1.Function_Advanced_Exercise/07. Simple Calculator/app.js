function calculator() {
    let fieldFirstNum = null;
    let fieldSecondNum = null;
    let fieldResult = null;

    return {
        init,
        add,
        subtract,
    };

    function init(selector1, selector2, resultSelector) {
        fieldFirstNum = Number(document.getElementById(selector1));
        fieldSecondNum = Number(document.getElementById(selector2));
        fieldResult = Number(document.getElementById(resultSelector));
    }

    function add() {
        fieldResult.value = fieldFirstNum + fieldSecondNum;
    }

    function subtract() {
        fieldResult.value = fieldSecondNum - fieldFirstNum;
    }
}
