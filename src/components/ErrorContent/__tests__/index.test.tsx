import { render, cleanup } from '@testing-library/react';
import ErrorContent from '../index';

describe('default content render', () => {
  afterEach(cleanup);

  test('render the component', () => {
    const { container } = render(<ErrorContent />);
    expect(container).toMatchSnapshot();
  });

  test('should be able to test component', () => {
    const { getByText } = render(<ErrorContent />);
    expect(getByText('Your search could not be completed...')).toBeDefined();
    expect(() => getByText('no exist')).toThrow();
  });
});
