const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

const reverseString = (string) => string.split("").reverse().join("");

class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    return x / y;
  }

  multiply(x, y) {
    return x * y;
  }
}

export { capitalize, reverseString, Calculator };
