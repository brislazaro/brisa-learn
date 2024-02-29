import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UseCard from "./UserCard";

describe("Given a UseCard component", () => {
  describe("When userName is solde and age 29", () => {
    test("Then should print Name Solde and Age 29 text", () => {
      render(<UseCard userName={"Solde"} age={29} />);

      const expectedText = `Name: Solde`;
      const expectedAge = `Age: 29`;
      const text = screen.getByText(expectedText);
      const age = screen.getByText(expectedAge);

      expect(text).toBeInTheDocument();
      expect(age).toBeInTheDocument();
    });
  });
});
