import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import NumberCount from "./NumberCount";

describe("Given a NumberCount component", () => {
  describe("When rendered ", () => {
    test("Then should print Count: 0", () => {
      render(<NumberCount />);

      const expectedText = `Count: 0`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When user clicks on plus button", () => {
    test("Then should print Count: 1", () => {
      render(<NumberCount />);

      const addButton = screen.getByText("+");
      fireEvent.click(addButton);

      const expectedText = `Count: 1`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When user clicks on plus button 4 times", () => {
    test("Then should print Count: 4", () => {
      render(<NumberCount />);

      const addButton = screen.getByText("+");
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(addButton);

      const expectedText = `Count: 4`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When user clicks on less button ", () => {
    test("Then should print Count: -1", () => {
      render(<NumberCount />);

      const addButton = screen.getByText("-");
      fireEvent.click(addButton);

      const expectedText = `Count: -1`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When user clicks on less button 4 times", () => {
    test("Then should print Count: -4", () => {
      render(<NumberCount />);

      const addButton = screen.getByText("-");
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(addButton);

      const expectedText = `Count: -4`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When user clicks on plus button 2 times and after 1 click on less button", () => {
    test("Then should print Count: 1", () => {
      render(<NumberCount />);

      const addButton = screen.getByText("+");
      const lessButton = screen.getByText("-");
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(lessButton);

      const expectedText = `Count: 1`;
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
