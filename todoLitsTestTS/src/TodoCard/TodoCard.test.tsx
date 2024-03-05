import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Task } from "../List/List";
import TodoCard from "./TodoCard";

describe("Given a ListCard component", () => {
  beforeEach(() => {
    const tarea: Task = {
      text: "A test text for my task",
    };

    render(<TodoCard tarea={tarea} />);
  });

  describe("When it receives a task with the text A test text for my task", () => {
    test("Then should print the text A test text for my task", () => {
      const todo = screen.getByText("A test text for my task");

      expect(todo).toBeInTheDocument();
    });
  });

  describe("When the user checks the checkbox", () => {
    test("Then should print the word Completed", () => {
      // Seleccionar el checkbox
      const checkbox = screen.getByRole("checkbox");

      // Hacer click en el checkbox
      fireEvent.click(checkbox);

      // Obtener el texto que esperamos
      const result = screen.getByText("Completed");
      expect(result).toBeInTheDocument();
    });
  });

  describe("When the user checks the checkbox", () => {
    test("Then should print the word Completed", () => {
      // Seleccionar el checkbox
      const checkbox = screen.getByRole("checkbox");

      // Hacer click en el checkbox
      fireEvent.click(checkbox);
      fireEvent.click(checkbox);

      // Obtener el texto que esperamos
      const result = screen.getByText("Pending");
      expect(result).toBeInTheDocument();
    });
  });
});
