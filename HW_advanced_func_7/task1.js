function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    return handleEven();
  } else {
    return handleOdd();
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
