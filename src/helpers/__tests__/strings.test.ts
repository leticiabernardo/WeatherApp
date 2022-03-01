import { sanitizeString } from '@/helpers/strings';

describe('temperature helper - get full temperature', () => {
  it('should return the full celsius temperature', () => {
    const value = '@#%@ˆ%*)(&*///../;"\'Alemanha';
    const expected = 'Alemanha';

    const sanitizedString = sanitizeString(value);
    expect(sanitizedString).toEqual(expected);
  });
});
