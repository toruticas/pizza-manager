import { render, screen, fireEvent } from '@testing-library/react';
import { ordersNewPath } from 'routes/helpers';
import { server } from 'mocks/server';
import App from 'App';

const configRoute = () => {
  window.history.pushState({}, 'new order route', ordersNewPath());
};

describe('page OrdersNew/BasicInformation', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    configRoute();
  });

  test('summary of order', async () => {
    render(<App />);
    expect(await screen.findByText(/Summary/i)).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/Bacon/i));
    await screen.findByText(/43.5/i);
  });

  test('summary of order with new item', async () => {
    render(<App />);
    fireEvent.click(await screen.findByText(/Add Pizza/i));
    await screen.findByText(/large Pizza 2/i);
    fireEvent.click(screen.queryAllByLabelText(/Bacon/i)[1]);
    fireEvent.click(screen.queryAllByLabelText(/Pepperoni/i)[1]);
    await screen.findByText(/86/i);
  });

  test('order creation', async () => {
    render(<App />);
    expect(await screen.findByText(/Summary/i)).toBeInTheDocument();
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
    fireEvent.click(screen.getByLabelText(/Bacon/i));
    await screen.findByText(/43.5/i);

    fireEvent.click(screen.getByText(/Place Order/i));

    await screen.findByText(/Order Management/i);
    expect(window.location.pathname).toBe('/orders/status');
  });
});
