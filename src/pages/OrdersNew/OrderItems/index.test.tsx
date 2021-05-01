import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ordersNewPath } from 'routes/helpers';
import App from 'App';

const configRoute = () => {
  window.history.pushState({}, 'new order route', ordersNewPath());
};

describe('page OrdersNew/BasicInformation', () => {
  beforeEach(() => {
    configRoute();
  });

  test('order items required errors', async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Remove Pizza/i));
    fireEvent.click(screen.getByText(/Place Order/i));
    await screen.findByText(/Minimum of 1 item/i);
  });

  test('order items without errors', async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Place Order/i));
    const element = await waitFor(() =>
      screen.queryByText(/Minimum of 1 item/i),
    );
    expect(element).not.toBeInTheDocument();
  });
});
