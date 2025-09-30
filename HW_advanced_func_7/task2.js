function getNumber(num) {
  console.log(num);
  if (num <= 0) {
    return;
  }
  getNumber(num - 1);
}

getNumber(5);
