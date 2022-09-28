function solve() {
  // Take refference to add and checkout buttons, and to text field
  let addBtnList = [...document.querySelectorAll("button.add-product")];
  let checkoutBtnRef = document.querySelector("button.checkout");
  let textAreaRef = document.querySelector("textarea");

  //   Auxilaries
  let purchasedItems = [];
  let purchaseTotalValue = 0;

  //   Add listeners to the buttons
  addBtnList.forEach((button) => {
    button.addEventListener("click", addItem);
  });
  checkoutBtnRef.addEventListener("click", calcTotal);

  function addItem(evt) {
    let evtParent = evt.target.parentElement.parentElement;
    let productTitle =
      evtParent.getElementsByClassName("product-title")[0].textContent;
    let productPrice = Number(
      evtParent.getElementsByClassName("product-line-price")[0].textContent
    );

    purchaseTotalValue += productPrice;
    if (!purchasedItems.includes(productTitle)) {
      purchasedItems.push(productTitle);
    }
    textAreaRef.textContent += `Added ${productTitle} for ${productPrice.toFixed(
      2
    )} to the cart.\n`;
  }

  function calcTotal(evt) {
    textAreaRef.textContent += `You bought ${purchasedItems.join(
      ", "
    )} for ${purchaseTotalValue.toFixed(2)}.`;
    addBtnList.forEach((button) => (button.disabled = true));
    checkoutBtnRef.disabled = true;
  }
}
