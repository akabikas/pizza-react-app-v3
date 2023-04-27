import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";


describe("Login", () => {
  test("renders first name field", () => {
    const { getByLabelText } = render(<Login />);
    const firstNameInput = getByLabelText("First Name");
    expect(firstNameInput).toBeInTheDocument();
  });

  test("renders last name field", () => {
    const { getByLabelText } = render(<Login />);
    const lastNameInput = getByLabelText("Last Name");
    expect(lastNameInput).toBeInTheDocument();
  });

  test("renders email field", () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  test("renders password field", () => {
    const { getByLabelText } = render(<Login />);
    const passwordInput = getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders confirmpassword field", () => {
    const { getByLabelText } = render(<Login />);
    const confirmpasswordInput = getByLabelText("Confirm Password");
    expect(confirmpasswordInput).toBeInTheDocument();
  });
});
