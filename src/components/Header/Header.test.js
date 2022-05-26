import { getByAltText, render, screen } from '@testing-library/react';
import Header from './';

const mockLocation = {
  city: 'Cueva',
  countryNativeName: 'Nunca Jamás',
  flag: 'https://www.codernicola.com/assets/logo.png',
  state: 'Roca Calavera',
};

const setup = () => render(<Header location={mockLocation} />);

describe('render Header', () => {
  test('should render a Title', () => {
    setup();
    screen.getByText(mockLocation.city);
  });

  test('should render a Subtitle', () => {
    setup();
    screen.getByText('Roca Calavera, Nunca Jamás');
  });

  test('should render a Flag', () => {
    setup();
    expect(screen.getByAltText('Cueva flag')).toHaveAttribute(
      'src',
      mockLocation.flag
    );
  });
});
