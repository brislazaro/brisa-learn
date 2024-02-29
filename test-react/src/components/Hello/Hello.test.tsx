import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Given a Hello component", () => {
  beforeEach(() => {
    console.log("Before each general");
  });

  describe("When rendered", () => {
    beforeEach(() => {
      render(<Hello />);
    });

    test("Then should print Hello world text", () => {
      const text = screen.getByText("Hello world");

      // Assert
      expect(text).toBeInTheDocument();
    });

    test("Then should print the click me button", () => {
      const button = screen.getByText("click me");

      expect(button).toBeInTheDocument();
    });

    test("Then should print the other text text", () => {
      const text = screen.getByText("other text");

      expect(text).toBeInTheDocument();
    });
  });
});
