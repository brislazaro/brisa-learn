import { describe, test, expect } from "vitest";
import { getBiggerNum } from "./ex3";

describe("Given a big Number function", () => {
  describe("When called with 1 and 2", () => {
    test("Then should return 2", () => {
      const a = 1;
      const b = 2;
      const result = getBiggerNum(a, b);
      expect(result).toBe(2);
    });
  });

  describe("When called with -2 and 19", () => {
    test("Then should return 19", () => {
      const a = -2;
      const b = 19;
      const result = getBiggerNum(a, b);
      expect(result).toBe(19);
    });
  });

  describe("When called with -5 and -3", () => {
    test("Then should return -3", () => {
      const a = -5;
      const b = -3;
      const result = getBiggerNum(a, b);
      expect(result).toBe(-3);
    });
  });

  describe("When called with 400 and 198", () => {
    test("Then should return 400", () => {
      const a = 400;
      const b = 198;
      const result = getBiggerNum(a, b);
      expect(result).toBe(400);
    });
  });

  describe("When called with 0 and 0", () => {
    test("Then should return 0", () => {
      const a = 0;
      const b = 0;
      const result = getBiggerNum(a, b);
      expect(result).toBe(0);
    });
  });
});
