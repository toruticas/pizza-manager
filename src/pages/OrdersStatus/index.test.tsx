import { render, screen } from '@testing-library/react';
import { ordersStatusPath } from 'routes/helpers';
import App from '../../App';

const configRoute = () => {
  window.history.pushState({}, 'orders status route', ordersStatusPath());
};

describe('page OrdersStatus', () => {
  beforeEach(() => {
    configRoute();
  });

  test('title', () => {
    render(<App />);
    expect(screen.getByText(/OrdersStatus/i)).toBeInTheDocument();
  });
});
