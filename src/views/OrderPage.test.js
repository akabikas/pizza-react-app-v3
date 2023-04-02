import { render } from '@testing-library/react';
import OrderPage from './OrderPage';

describe('OrderPage', () => {
  test('renders first name field', () => {
    const { getByLabelText } = render(<OrderPage />);
    const firstNameInput = getByLabelText('First Name');
    expect(firstNameInput).toBeInTheDocument();
  });

  test('renders last name field', () => {
    const { getByLabelText } = render(<OrderPage />);
    const lastNameInput = getByLabelText('Last Name');
    expect(lastNameInput).toBeInTheDocument();
  });

  test('renders email field', () => {
    const { getByLabelText } = render(<OrderPage />);
    const emailInput = getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  test('renders Address field', () => {
    const { getByLabelText } = render(<OrderPage />);
    const AddressInput = getByLabelText('Address');
    expect(AddressInput).toBeInTheDocument();
  });

  test('renders ingredients checkbox field', () => {
    const { getByLabelText } = render(<OrderPage />);
    const ingredientsCheckbox = getByLabelText('Ingredients');
    expect(ingredientsCheckbox).toBeInTheDocument();
  });

  test('renders order now button', () => {
    const { getByText } = render(<OrderPage />);
    const orderNowButton = getByText('Order Now');
    expect(orderNowButton).toBeInTheDocument();
    expect(orderNowButton.tagName).toBe('BUTTON');
  });
});
