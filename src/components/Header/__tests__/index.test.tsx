import { render, cleanup } from '@testing-library/react';
import Header from '../index';

const props = {
  setSearch: jest.fn(),
  setTemperatureMeasurementUnit: jest.fn(),
  setError: jest.fn(),
  temperatureMeasurementUnit: 'celsius' as app.MeasurementUnit,
};

describe('default wrapper render', () => {
  afterEach(cleanup);
  test('render the component', () => {
    const { container } = render(<Header {...props} />);
    expect(container).toMatchSnapshot();
  });
});
