function randomText(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}
randomText("Hello", 1000);
