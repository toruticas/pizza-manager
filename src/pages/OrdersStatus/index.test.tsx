import {
  render,
  screen,
  getByText,
  getByTestId,
  findByText,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { ordersStatusPath } from 'routes/helpers';
import { server } from 'mocks/server';

import App from '../../App';

const configRoute = () => {
  window.history.pushState({}, 'orders status route', ordersStatusPath());
};

describe('page OrdersStatus', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    configRoute();
  });

  test('title section', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText(/Order Management/i);
      screen.getByText(
        /Manage your orders here and get an overview of status/i,
      );
    });
  });

  test('summary section', async () => {
    render(<App />);
    const section = await screen.findByTestId(/summary-section/i);

    await waitFor(() => {
      getByText(section, /Total items in inventory/i);
      getByText(section, /9/i);

      getByText(section, /Completed/i);
      getByText(section, /5/i);

      getByText(section, /Pending/i);
      getByText(section, /3/i);

      getByText(section, /Canceled/i);
      getByText(section, /1/i);
    });
  });

  test('table section', async () => {
    render(<App />);
    const section = await screen.findByTestId(/orders-table/i);

    await waitFor(() => {
      getByText(section, /Item Id/i);
      getByText(section, /Address/i);
      getByText(section, /Ordered Time/i);
      getByText(section, /Status \/ Action/i);
    });

    const pendingElement = getByTestId(section, /AB75231/i);
    getByText(pendingElement, /Accept/i);
    getByText(pendingElement, /Cancel/i);

    const acceptedElement = getByTestId(section, /HF54D25/i);
    getByText(acceptedElement, /Accepted/i);
    getByText(acceptedElement, /Mark as Completed/i);

    const inTransitElement = getByTestId(section, /AB75232/i);
    getByText(inTransitElement, /In-Transit/i);
    getByText(inTransitElement, /Mark as Completed/i);

    const completedElement = getByTestId(section, /HF54D26/i);
    getByText(completedElement, /Completed/i);

    const canceledElement = getByTestId(section, /AB75233/i);
    getByText(canceledElement, /Cancelled/i);
  });

  test('accept action', async () => {
    render(<App />);
    const section = await screen.findByTestId(/orders-table/i);
    const pendingElement = getByTestId(section, /AB75231/i);
    fireEvent.click(getByText(pendingElement, /Accept/i));
    await findByText(pendingElement, /Accepted/i);
  });

  test('mark as completed an accepted order', async () => {
    render(<App />);
    const section = await screen.findByTestId(/orders-table/i);
    const pendingElement = getByTestId(section, /HF54D25/i);
    fireEvent.click(getByText(pendingElement, /Mark as Completed/i));
    await findByText(pendingElement, /In-Transit/i);
  });

  test('mark as completed an order in-transit', async () => {
    render(<App />);
    const section = await screen.findByTestId(/orders-table/i);
    const pendingElement = getByTestId(section, /AB75232/i);
    fireEvent.click(getByText(pendingElement, /Mark as Completed/i));
    await findByText(pendingElement, /Completed/i);
  });
});
