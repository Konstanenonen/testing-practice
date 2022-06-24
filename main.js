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

const caesarCipher = (string) => {
  const cipherWord = (word) => {
    const cipherTable = {
      a: "n",
      b: "o",
      c: "p",
      d: "q",
      e: "r",
      f: "s",
      g: "t",
      h: "u",
      i: "v",
      j: "w",
      k: "x",
      l: "y",
      m: "z",
      n: "a",
      o: "b",
      p: "c",
      q: "d",
      r: "e",
      s: "f",
      t: "g",
      u: "h",
      v: "i",
      w: "j",
      x: "k",
      y: "l",
      z: "m",
    };

    return word
      .split("")
      .map((letter) =>
        cipherTable[letter] === undefined
          ? cipherTable[letter.toLowerCase()].toUpperCase()
          : cipherTable[letter]
      )
      .join("");
  };

  return string.split(" ").map(cipherWord).join(" ");
};

const analyzeArray = (array) => {
  return {
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
