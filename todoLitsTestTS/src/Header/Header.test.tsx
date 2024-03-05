import { describe, test, expect } from "vitest";
import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When rendered Header function", () => {
    test("Then should print Lista de Pendientes", () => {
      render(<Header />);

      const todo = screen.getByText("Lista de Pendientes");

      expect(todo).toBeInTheDocument();
    });
  });
});
