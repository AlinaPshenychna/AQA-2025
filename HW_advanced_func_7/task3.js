function devide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Not a number");
  }
  if (denominator === 0) {
    throw new Error("Can not be less than 0");
  }
  return numerator / denominator;
}

try {
  console.log(devide(4, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(devide("Hello", 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(devide(4, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}
