
import { describe, it } from 'vitest';
import { render, screen,waitFor } from '@testing-library/react';
import axios from 'axios';
import { App } from './App';
// import userEvent from '@testing-library/user-event';

// test 01
// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     screen.debug();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

//     screen.debug();
//   });
// });



// test 02

// describe('App', () => {
//     it('Renders hello world', () => {
//       // ARRANGE
//       render(<App />);
//         // test 02
//       screen.debug();
//       screen.getByText('Search:');
//       expect(screen.getByText('Search:')).toBeInTheDocument();

//        // fails
//     // expect(screen.getByText('Search')).toBeInTheDocument();
//     screen.getByRole('textbox');
//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//     })
// });

// test 03

vi.mock('axios');

describe('App', () => {
  it('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    waitFor(() => promise);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });


  it('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    );

  
    await userEvent.click(screen.getByRole('button'));

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });
});