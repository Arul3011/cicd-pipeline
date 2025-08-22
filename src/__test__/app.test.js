import { render, screen } from '@testing-library/react';
import App from "../App"
import React from 'react';

jest.mock("../assets/data.txt?raw", () => "Mocked data content");
test('renders App component without crashing', () => {
  render(<App />);
  const heading = screen.getByText(/welcome/i); 
  expect(heading).toBeInTheDocument();
});
