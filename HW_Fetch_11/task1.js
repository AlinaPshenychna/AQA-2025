function printWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}
printWithDelay("Hello", 1000);
