import { Calculator, capitalize, reverseString, caesarCipher } from "./main";

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
