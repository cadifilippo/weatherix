/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import App from './App';

const setup = () => render(<App />);

describe('render App', () => {
  test('should be Loading while search the user location', async () => {
    const view = setup();
    const lottie = view.container.querySelector('svg');

    await new Promise((r) => setTimeout(r, 3000));
    expect(lottie).not.toBeInTheDocument();
  });
});
