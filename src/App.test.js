import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Zyroo Partner Registration heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Zyroo Partner Registration/i);
  expect(headingElement).toBeInTheDocument();
});
