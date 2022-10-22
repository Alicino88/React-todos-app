import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const MockLoginForm = () => {
  return (
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
};

test("Login button to be disabled", () => {
  render(<MockLoginForm />);
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeDisabled();
  userEvent.click(loginButton);
});
