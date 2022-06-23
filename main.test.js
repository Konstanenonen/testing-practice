import { capitalize, reverseString } from "./main";

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
