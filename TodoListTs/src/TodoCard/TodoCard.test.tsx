import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import TodoCard from "./TodoCard";
import { Task } from "../List/List";

test("asdasd", () => {
  const todo: Task = {
    task: "my task text",
    id: 1,
  };
  render(
    <TodoCard
      task={todo}
      onDelete={() => {}}
      setTasks={() => {}}
      tasks={[todo]}
    />
  );

  expect(screen.getByText("my task text")).toBeInTheDocument();
});
