import { describe, test, expect } from "vitest";
import { addElementToArray } from "./ex4";

describe("Given an Array function", () => {
  describe("When recive a new element", () => {
    test("Then should return a copy of array", () => {
      const array = ["a", "b", "c"];
      const element = "d";
      const result = addElementToArray(array, element);
      expect(result).toStrictEqual(["a", "b", "c", "d"]);
    });
  });

  describe("When recive a new element", () => {
    test("Then should return a copy of array", () => {
      const array = ["a", "b", "c"];
      const element = "e";
      const result = addElementToArray(array, element);
      expect(result).toStrictEqual(["a", "b", "c", "e"]);
    });
  });

  describe("When recive a new element", () => {
    test("Then should return a copy of array", () => {
      const array = [];
      const element = "a";
      const result = addElementToArray(array, element);
      expect(result).toStrictEqual(["a"]);
    });
  });

  describe("When recive a new element", () => {
    test("Then should return a copy of array", () => {
      const array = ["a"];
      const element = "b";
      const result = addElementToArray(array, element);
      expect(result).toStrictEqual(["a", "b"]);
    });
  });
});
