import { describe, test, expect } from "vitest";
import { suma } from "./ex1";

describe("Given a suma function", () => {
  describe("When called with 1 and 2", () => {
    test("Then should return 3", () => {
      const a = 1;
      const b = 2;
      const result = suma(a, b);
      expect(result).toBe(3);
    });
  });

  describe("When called with 2 and 19", () => {
    test("Then should return 21", () => {
      const a = 2;
      const b = 19;
      const result = suma(a, b);
      expect(result).toBe(21);
    });
  });

  describe("When called with -5 and 2", () => {
    test("Then should return 3", () => {
      const a = -5;
      const b = 2;
      const result = suma(a, b);
      expect(result).toBe(-3);
    });

    describe("When called with 400 and 198", () => {
      test("Then should return 598", () => {
        const a = 400;
        const b = 198;
        const result = suma(a, b);
        expect(result).toBe(598);
      });

      describe("When called with 0 and 0", () => {
        test("Then should return 0", () => {
          const a = 0;
          const b = 0;
          const result = suma(a, b);
          expect(result).toBe(0);
        });
      });
    });
  });
});
