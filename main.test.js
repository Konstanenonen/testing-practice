import {
  Calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} from "./main";

test("capitalize TEST 1: dog should change to Dog", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("capitalize TEST 2: konsta should change to Konsta", () => {
  expect(capitalize("konsta")).toBe("Konsta");
});

test("reverseString TEST 1: emma should change to amme", () => {
  expect(reverseString("emma")).toBe("amme");
});

test("reverseString TEST 1: kuumailmapallo should change to ollapamliamuuk", () => {
  expect(reverseString("kuumailmapallo")).toBe("ollapamliamuuk");
});

test("add TEST 1: 3 + 7 should equal to 10", () => {
  const calculator = new Calculator();
  expect(calculator.add(3, 7)).toEqual(10);
});

test("substract TEST 1: 3 - 7 should equal to -4", () => {
  const calculator = new Calculator();
  expect(calculator.subtract(3, 7)).toEqual(-4);
});

test("divide TEST 1: 3 / 7 should equal close to 0.42857", () => {
  const calculator = new Calculator();
  expect(calculator.divide(3, 7)).toBeCloseTo(3 / 7);
});

test("multiply TEST 1: 3 * 7 should equal 21", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 7)).toEqual(21);
});

test("caesarCipher TEST 1: konsta should change to xbafgn", () => {
  expect(caesarCipher("konsta")).toBe("xbafgn");
});

test("caesarCipher TEST 2 keeping the same case: HeLLoWorlD => UrYYbJbeyQ", () => {
  expect(caesarCipher("HeLLoWorlD")).toBe("UrYYbJbeyQ");
});

test("caesarCipher TEST 3 keeping punctuation: hello world and mom => uryyb jbeyq naq zbz", () => {
  expect(caesarCipher("hello world and mom")).toBe("uryyb jbeyq naq zbz");
});

test("caesarCipher TEST 4 wrapping from a to z and A to Z: ", () => {
  expect(
    caesarCipher("abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  ).toBe("nopqrstuvwxyzabcdefghijklm NOPQRSTUVWXYZABCDEFGHIJKLM");
});

test("analyzeArray TEST 1: length property returns correct length", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object2 = analyzeArray([]);
  expect(object.length).toBe(6);
  expect(object2.length).toBe(0);
});

test("analyzeArray TEST 2: max property returns largest number", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.max).toBe(8);
});

test("analyzeArray TEST 3: min property return smallest number", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
});

test("analyzeArray TEST 4: average property return array average", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object2 = analyzeArray([4, 5, 2]);
  expect(object.average).toBe(4);
  expect(object2.average).toBeCloseTo(3.6666);
});

test("analyzeArray TEST 5: testing all of the properties at the same time", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
