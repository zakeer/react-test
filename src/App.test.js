/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import { render, screen, waitFor } from '@testing-library/react'
import App from './App';

describe("App.js Test", () => {
  it("Should render App.js without fail", async () => {
    
    fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {id: 100, name: "Muskan"},
        {id: 200, name: "Nida"},
        {id: 300, name: "Lakshmi"}
      ])
    }))

    const renderApp = render(<App />);
    const isNidaAvailableInScreen = await waitFor(() => screen.getByText("Nida"));
    expect(isNidaAvailableInScreen).toBeInTheDocument();

    expect(renderApp).toMatchSnapshot();
    
  })
});

// Async ?
// Sync () and Async ()
