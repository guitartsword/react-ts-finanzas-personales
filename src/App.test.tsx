import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./AccountBalance/AccountBalance', () => {
  return function DummyHeader() {
    return <header> my dummy header </header>
  }
});

test('renders sub component', () => {
  const rendered = render(<App />);
});