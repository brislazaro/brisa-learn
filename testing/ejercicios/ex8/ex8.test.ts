import { describe, test, expect } from "vitest";
import { sortStudents } from "./ex8";

describe("Given a sortStudents function", () => {
  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const names = ["Brisa", "Alicia", "Sara"];

      const result = sortStudents(names);
      expect(result).toStrictEqual(["Alicia", "Brisa", "Sara"]);
    });
  });

  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const names = ["Carmen", "David", "Gerard"];

      const result = sortStudents(names);
      expect(result).toStrictEqual(["Carmen", "David", "Gerard"]);
    });
  });

  describe("When recive a number", () => {
    test("Then should return a copy of array multiply for 2", () => {
      const names = ["Max", "Tere", "Adrian"];

      const result = sortStudents(names);
      expect(result).toStrictEqual(["Adrian", "Max", "Tere"]);
    });
  });
});
