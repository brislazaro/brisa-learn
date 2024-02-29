import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StaticNumber from "./StaticNumber";

describe("Given a StaticNumber component", () => {
  describe("When Counter is 25", () => {
    test("Then should print Counter 25 text", () => {
      render(<StaticNumber />);

      const expectedText = `Counter: 25`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
