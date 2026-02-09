import { add, divide, capitalize } from "../src/utils.js";

describe("add", () => {
  test("add(2, 3) should return 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("add should throw TypeError when input is not number", () => {
    expect(() => add("2", 3)).toThrow(TypeError);
  });
});

describe("divide", () => {
  test("divide(10, 2) should return 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide by zero should throw error", () => {
    expect(() => divide(1, 0)).toThrow(Error);
  });
});

describe("capitalize", () => {
  test("capitalize('hello') should return 'Hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("capitalize should throw TypeError if not string", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });
});
