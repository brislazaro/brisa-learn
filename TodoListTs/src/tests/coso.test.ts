import { sum } from "./sum";
import { describe, test, expect } from "vitest";

describe("Given a sum function", () => {
  describe("When called with 1 and 2", () => {
    test("Then it should return 3", () => {
      // Arrange

      // Act
      const result = sum(1, 2);
      // Assert
      expect(result).toBe(3);
    });
  });

  describe("When called with -5 and 0", () => {
    test("Then should return -5", () => {
      // Arrange

      // Act
      const result = sum(-5, 0);
      // Assert
      expect(result).toBe(-5);
    });
  });

  describe('When called with "a" and 5', () => {
    test("Then should return 0", () => {
      // Arrange

      // Act
      const result = sum("a", 5);
      // Assert
      expect(result).toBe(0);
    });
  });
});
