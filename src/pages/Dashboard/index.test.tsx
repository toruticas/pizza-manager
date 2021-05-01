import { render, screen, waitFor } from '@testing-library/react';
import { dashboardPath } from 'routes/helpers';
import { server } from 'mocks/server';

import App from '../../App';

const configRoute = () => {
  window.history.pushState({}, 'dashboard route', dashboardPath());
};

describe('page Dashboard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    configRoute();
  });

  test('delivery status section', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText(/Delivery Status/i);
      screen.getByText(/Total Orders/i);
      screen.getByText(/150/i);

      screen.getByText(/Orders Delivered/i);
      screen.getByText(/120/i);

      screen.getByText(/Pending Delivery/i);
      screen.getByText(/30/i);
    });
  });

  test('sales section', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText(/Total Sales/i);
      screen.getByText(/USD/i);
      screen.getByText(/14543/i);
    });
  });

  test('order history section', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText(/Order History/i);
    });
  });

  test('report section', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText(/Report/i);

      screen.getByText(/Ontime Delivery/i);
      screen.getByText(/\+29.7%/i);

      screen.getByText(/Late Deliveries/i);
      screen.getByText(/53.4%/i);

      screen.getByText(/Performance/i);
      screen.getByText(/\+0.05/i);
    });
  });
});
