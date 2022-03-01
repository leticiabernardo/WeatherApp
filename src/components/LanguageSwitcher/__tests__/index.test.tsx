import { render, cleanup, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../index';

describe('language switcher render', () => {
  afterEach(cleanup);

  test('render the component', () => {
    const { container } = render(<LanguageSwitcher />);
    expect(container).toMatchSnapshot();
  });

  test('should have the button to switch to English language', () => {
    const { getByText } = render(<LanguageSwitcher />);

    expect(getByText('EN')).toBeInTheDocument();
  });

  test('should have the button to switch to Portuguese language', () => {
    const { getByText } = render(<LanguageSwitcher />);

    expect(getByText('PT')).toBeInTheDocument();
  });
});

describe('language switcher events', () => {
  afterEach(cleanup);

  test('should change to Portuguese language', () => {
    const { container, getByText } = render(<LanguageSwitcher />);
    const button = getByText('PT');
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  test('should change to English language', () => {
    const { container, getByText } = render(<LanguageSwitcher />);
    const button = getByText('EN');
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  test('should change languages', () => {
    const { getByText } = render(<LanguageSwitcher />);
    const buttonPT = getByText('PT');
    const buttonEN = getByText('EN');

    fireEvent.click(buttonPT);
    fireEvent.click(buttonEN);
    fireEvent.click(buttonPT);
  });
});
