import { render, screen } from '@testing-library/react';
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

  test('title', () => {
    render(<App />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
