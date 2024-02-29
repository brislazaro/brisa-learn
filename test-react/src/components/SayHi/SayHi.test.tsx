import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SayHi from "./SayHi";

describe("Given a SayHi component", () => {
  describe("When userName is solde", () => {
    test("Then should print Hello solde text", () => {
      render(<SayHi userName={"solde"} />);

      const expectedText = `Hello solde`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When userName is Brisa", () => {
    test("Then should print Hello solde text", () => {
      render(<SayHi userName={"Brisa"} />);

      const expectedText = `Hello Brisa`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When userName is ''", () => {
    test("Then should print Hello text", () => {
      render(<SayHi userName={""} />);

      const expectedText = `Hello`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
