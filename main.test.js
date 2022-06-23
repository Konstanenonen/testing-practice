import { capitalize } from "./main";

test("dog should change to Dog", () => {
  expect(capitalize("dog")).toBe("Dog");
});
