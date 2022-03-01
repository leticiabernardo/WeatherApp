import { render, cleanup } from '@testing-library/react';
import DefaultWrapper from '../index';

const props = {
  children: <div>Test</div>,
};

describe('default wrapper render', () => {
  afterEach(cleanup);

  test('render the component', () => {
    const { container } = render(<DefaultWrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('should contain the text of the children prop', () => {
    const { getByText } = render(<DefaultWrapper {...props} />);
    expect(getByText('Test')).toBeDefined();
    expect(() => getByText('no exist')).toThrow();
  });

  test('should contain the css with background image', () => {
    const backgroundImage = 'image.jpg';

    const { container } = render(
      <DefaultWrapper {...props} backgroundImage={backgroundImage} />
    );
    expect(container).toMatchSnapshot();
  });
});
