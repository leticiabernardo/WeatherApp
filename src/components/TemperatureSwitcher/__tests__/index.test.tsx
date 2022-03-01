import { render, cleanup, fireEvent } from '@testing-library/react';
import TemperatureSwitcher from '../index';

const props = {
  setMeasurementUnit: jest.fn(),
};

describe('temperature switcher render', () => {
  afterEach(cleanup);

  test('render the component', () => {
    const { container } = render(<TemperatureSwitcher {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('should have the button to celsius', () => {
    const { getByText } = render(<TemperatureSwitcher {...props} />);

    expect(getByText('°C')).toBeInTheDocument();
  });

  test('should have the button to switch fahrenheit', () => {
    const { getByText } = render(<TemperatureSwitcher {...props} />);

    expect(getByText('°F')).toBeInTheDocument();
  });
});

describe('temperature switcher events', () => {
  afterEach(cleanup);

  test('should change to celsius', async () => {
    const { container, getByText } = render(
      <TemperatureSwitcher {...props} measurementUnit="fahrenheit" />
    );
    const button = getByText('°C');
    await fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  test('should change to fahrenheit', async () => {
    const { container, getByText } = render(<TemperatureSwitcher {...props} />);
    const button = getByText('°F');
    await fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
