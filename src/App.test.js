// src\App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // regex diye chk kore j screen e "learn react" ei text ta ase kina
  // oitar element ta linkElement er moddhe rekhe dlm
  const linkElement = screen.getByText(/2024/i);
  // expect diye chk kore j oi element exist kore kina
  // exist korle ->true(rc pass) else false(rc fail)
  expect(linkElement).toBeInTheDocument();
});
