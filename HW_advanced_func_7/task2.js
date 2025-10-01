function handleNumber(num) {
  console.log(num);
  if (num <= 0) {
    return;
  }
  handleNumber(num - 1);
}

handleNumber(5);
