import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('should contain title', async () => {
    const header = render(<Header />);
    const headerElement = header.container;
    const title =  headerElement.querySelector('h1')
    expect(title).not.toBeFalsy()
    expect(title?.textContent).toMatch(/react con typescript/i);
})