import { render, screen } from '@testing-library/react';
import App from './App';
import Signin from './contents/Signin';
import New from './contents/New';

test('renders learn react link', () => {
  render(<New />);
  const linkElement = screen.getByText(/Fundoo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link1', () => {
  render(<New />);
  const linkElement = screen.getByText(/Fundoo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link2', () => {
  render(<New />);
  const linkElement = screen.getByText(/Fundoo/i);
  expect(linkElement).toBeInTheDocument();
});
