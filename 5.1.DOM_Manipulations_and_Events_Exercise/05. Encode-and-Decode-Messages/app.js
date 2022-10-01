function encodeAndDecodeMessages() {
  let [inputTextAreaRef, displayTextAreaRef] = Array.from(
    document.querySelectorAll("#main textarea")
  );
  let [encodeBtnRef, decodeBtnRef] = Array.from(
    document.querySelectorAll("#main button")
  );

  encodeBtnRef.addEventListener("click", encodeAndSend);
  decodeBtnRef.addEventListener("click", decodeAndShow);

  function encodeAndSend(event) {
    let message = inputTextAreaRef.value;
    let encodedM = "";
    for (let char of message) {
      let charAscii = char.charCodeAt();
      let newChar = String.fromCharCode(charAscii + 1);
      encodedM += newChar;
    }
    displayTextAreaRef.value = encodedM;
    inputTextAreaRef.value = "";
    debugger;
  }

  function decodeAndShow(event) {
    let toDecode = displayTextAreaRef.value;
    let decodedM = "";
    for (let char of toDecode) {
      let charAscii = char.charCodeAt();
      let newChar = String.fromCharCode(charAscii - 1);
      decodedM += newChar;
    }
    displayTextAreaRef.value = decodedM;
    let test = "1";
  }
}
