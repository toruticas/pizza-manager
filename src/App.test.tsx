import { render, screen, waitFor } from '@testing-library/react';
import { server } from 'mocks/server';

import App from './App';

describe('app', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders home page', async () => {
    render(<App />);
    const elementTitle = await waitFor(() =>
      screen.getByText(/Delivery Status/i),
    );
    expect(elementTitle).toBeInTheDocument();
  });
});
