import { render, screen } from '@testing-library/react';
import { ordersNewPath } from 'routes/helpers';
import App from '../../App';

const configRoute = () => {
  window.history.pushState({}, 'new order route', ordersNewPath());
};

describe('page OrdersNew', () => {
  beforeEach(() => {
    configRoute();
  });

  test('title', () => {
    render(<App />);
    expect(screen.getByText(/OrdersNew/i)).toBeInTheDocument();
  });
});
