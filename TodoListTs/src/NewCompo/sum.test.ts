import { test, expect } from "vitest";
import { sum } from "./sum";

test("Returns 3 when called with 1 and 2", () => {
  // Arrange
  const n1 = 1;
  const n2 = 2;

  // Act
  const result = sum(n1, n2);

  // Assert
  expect(result).toBe(3);
});

test("Returns 3 when called with 0 and 0", () => {
  // Arrange
  const n1 = 0;
  const n2 = 0;

  // Act
  const result = sum(n1, n2);

  // Assert
  expect(result).toBe(0);
});

test("Returns 3 when called with -1 and 2", () => {
  // Arrange
  const n1 = -1;
  const n2 = 2;

  // Act
  const result = sum(n1, n2);

  // Assert
  expect(result).toBe(0);
});
