import { render } from "@testing-library/react";
import OrderPage from "./OrderPage";

describe("OrderPage", () => {
  test("renders first name field", () => {
    const { getByLabelText } = render(<OrderPage />);
    const firstNameInput = getByLabelText("First Name");
    expect(firstNameInput).toBeInTheDocument();
  });

  test("renders last name field", () => {
    const { getByLabelText } = render(<OrderPage />);
    const lastNameInput = getByLabelText("Last Name");
    expect(lastNameInput).toBeInTheDocument();
  });

  test("renders email field", () => {
    const { getByLabelText } = render(<OrderPage />);
    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  test("renders password field", () => {
    const { getByLabelText } = render(<OrderPage />);
    const passwordInput = getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders confirmpassword field", () => {
    const { getByLabelText } = render(<OrderPage />);
    const confirmpasswordInput = getByLabelText("Confirm Password");
    expect(confirmpasswordInput).toBeInTheDocument();
  });
});
