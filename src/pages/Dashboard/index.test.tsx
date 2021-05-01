import { render, screen } from '@testing-library/react';
import { dashboardPath } from 'routes/helpers';
import App from '../../App';

const configRoute = () => {
  window.history.pushState({}, 'dashboard route', dashboardPath());
};

describe('page Dashboard', () => {
  beforeEach(() => {
    configRoute();
  });

  test('title', () => {
    render(<App />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
