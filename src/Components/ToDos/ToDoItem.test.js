import ToDoItem from "./ToDoItem";
import { render, screen } from "@testing-library/react";

test("should render same text as the one passed as title prop", () => {
  render(<ToDoItem title="test title" />);
  const renderedTitle = screen.getByText(/test title/i);
  expect(renderedTitle).toBeInTheDocument();
});
