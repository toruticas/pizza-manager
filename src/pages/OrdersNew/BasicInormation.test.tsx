import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ordersNewPath } from 'routes/helpers';
import App from 'App';

const LARGE_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const configRoute = () => {
  window.history.pushState({}, 'new order route', ordersNewPath());
};

describe('page OrdersNew/BasicInformation', () => {
  beforeEach(() => {
    configRoute();
  });

  test('basic information required errors', async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Place Order/i));
    await waitFor(() => {
      screen.getByText(/Name is required/i);
      screen.getByText(/Email is required/i);
      screen.getByText(/Address is required/i);
      screen.getByText(/Contact is required/i);
    });
  });

  test('basic information extra errors', async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Place Order/i));
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: LARGE_TEXT },
    });
    fireEvent.change(screen.getByLabelText(/E-mail Address/i), {
      target: { value: 'wrong@email' },
    });
    fireEvent.change(screen.queryAllByLabelText(/Address/i)[1], {
      target: { value: LARGE_TEXT },
    });
    fireEvent.change(screen.getByLabelText(/Contact Number/i), {
      target: { value: LARGE_TEXT },
    });

    await waitFor(() => {
      screen.getByText(/Name must be 64 characters or less/i);
      screen.getByText(/Invalid email address/i);
      screen.getByText(/Address must be 64 characters or less/i);
      screen.getByText(/Contact must be 20 characters or less/i);
    });
  });

  test('basic information without errors', async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'Rafael Silva' },
    });
    fireEvent.change(screen.getByLabelText(/E-mail Address/i), {
      target: { value: 'toruticas@gmail.com' },
    });
    fireEvent.change(screen.queryAllByLabelText(/Address/i)[1], {
      target: { value: 'Lorem Ipsum Street, 1' },
    });
    fireEvent.change(screen.getByLabelText(/Contact Number/i), {
      target: { value: '+55 (11) 11111-1111' },
    });

    fireEvent.click(screen.getByText(/Place Order/i));

    {
      let nameErrors, emailErrors, addressErrors, contactErrors;
      await waitFor(() => {
        nameErrors = screen.queryByText(/Name is required/i);
        emailErrors = screen.queryByText(/Email is required/i);
        addressErrors = screen.queryByText(/Address is required/i);
        contactErrors = screen.queryByText(/Contact is required/i);
      });

      expect(nameErrors).not.toBeInTheDocument();
      expect(emailErrors).not.toBeInTheDocument();
      expect(addressErrors).not.toBeInTheDocument();
      expect(contactErrors).not.toBeInTheDocument();
    }

    {
      let nameErrors, emailErrors, addressErrors, contactErrors;
      await waitFor(() => {
        nameErrors = screen.queryByText(/Name must be 64 characters or less/i);
        emailErrors = screen.queryByText(/Invalid email address/i);
        addressErrors = screen.queryByText(
          /Address must be 64 characters or less/i,
        );
        contactErrors = screen.queryByText(
          /Contact must be 20 characters or less/i,
        );
      });

      expect(nameErrors).not.toBeInTheDocument();
      expect(emailErrors).not.toBeInTheDocument();
      expect(addressErrors).not.toBeInTheDocument();
      expect(contactErrors).not.toBeInTheDocument();
    }
  });
});
