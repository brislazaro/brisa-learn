import { describe, test, expect } from "vitest";
import { division } from "./ex2";

describe("Given a division function", () => {
  describe("When called with 6 and 3", () => {
    test("Then should return 2", () => {
      const n1 = 6;
      const n2 = 3;
      const result = division(n1, n2);
      expect(result).toBe(2);
    });
  });

  describe("Given a division function", () => {
    describe("When called with -15 and -3", () => {
      test("Then should return 5", () => {
        const n1 = -15;
        const n2 = -3;
        const result = division(n1, n2);
        expect(result).toBe(5);
      });
    });
  });

  describe("Given a division function", () => {
    describe("When called with 100 and 25", () => {
      test("Then should return 4", () => {
        const n1 = 100;
        const n2 = 25;
        const result = division(n1, n2);
        expect(result).toBe(4);
      });
    });
  });

  describe("Given a division function", () => {
    describe("When called with 0 and 10", () => {
      test("Then should return 0", () => {
        const n1 = 0;
        const n2 = 10;
        const result = division(n1, n2);
        expect(result).toBe(0);
      });
    });
  });

  describe("Given a division function", () => {
    describe("When called with 5 and 0", () => {
      test("Then should return 0", () => {
        const n1 = 5;
        const n2 = 0;
        const result = division(n1, n2);
        expect(result).toBe(0);
      });
    });
  });
});
