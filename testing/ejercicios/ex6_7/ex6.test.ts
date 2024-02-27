import { describe, test, expect } from "vitest";
import { getPassingStudents } from "./ex6_7";

describe("Given a getPassingStudents function", () => {
  const students1 = [
    { name: "Pepe", grade: 5 },
    { name: "Juan", grade: 0 },
    { name: "Alicia", grade: 7 },
  ];

  describe(`When it receives ${students1}`, () => {
    test("Then should return the array sorted alphabetically", () => {
      const result = getPassingStudents(students1);
      expect(result).toStrictEqual(["Alicia", "Pepe"]);
    });
  });

  const students2 = [
    { name: "Pepe", grade: 0 },
    { name: "Juan", grade: 0 },
    { name: "Alicia", grade: 0 },
  ];
  describe(`When it receives ${students2}`, () => {
    test("Then should return the array sorted alphabetically", () => {
      const result = getPassingStudents(students2);
      expect(result).toStrictEqual([]);
    });
  });

  const students3 = [
    { name: "Pepe", grade: 8 },
    { name: "Juan", grade: 10 },
    { name: "Alicia", grade: 7 },
  ];
  describe(`When it receives ${students3}`, () => {
    test("Then should return the array sorted alphabetically", () => {
      const result = getPassingStudents(students3);
      expect(result).toStrictEqual(["Alicia", "Juan", "Pepe"]);
    });
  });

  const students4 = [{ name: "Pepe", grade: 5 }];
  describe(`When it receives ${students4}`, () => {
    test("Then should return the array sorted alphabetically", () => {
      const result = getPassingStudents(students4);
      expect(result).toStrictEqual(["Pepe"]);
    });
  });
});
