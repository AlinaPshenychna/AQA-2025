function handleNum(number, getEven, getOdd) {
  if (number % 2 === 0) {
    return getEven();
  } else {
    return getOdd();
  }
}

function handleEven() {
  return "number is even";
}

function handleOdd() {
  return "number is odd";
}

console.log(handleNum(3, handleEven, handleOdd));
console.log(handleNum(6, handleEven, handleOdd));
