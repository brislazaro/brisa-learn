import { describe, test, expect } from "vitest";
import { multiplyByTwo } from "./ex5";

describe("Given an Array function", () => {
  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const array = [2, 2, 2];

      const result = multiplyByTwo(array);
      expect(result).toStrictEqual([4, 4, 4]);
    });
  });

  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const array = [3, 0, 2];

      const result = multiplyByTwo(array);
      expect(result).toStrictEqual([6, 0, 4]);
    });
  });

  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const array = [2, 0, -2];

      const result = multiplyByTwo(array);
      expect(result).toStrictEqual([4, 0, -4]);
    });
  });

  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const array = [-4, 0, -2];

      const result = multiplyByTwo(array);
      expect(result).toStrictEqual([-8, 0, -4]);
    });
  });
});
