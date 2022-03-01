import { getWeekday, getDate } from '@/helpers/weekday';

describe('weekday helper - getweekday', () => {
  it('should return weekday with pt format', () => {
    const dt = 1646102246000;
    const expected = 'segunda';

    const weekday = getWeekday(dt, 'pt_BR');
    expect(weekday).toEqual(expected);
  });

  it('should return weekday with en format', () => {
    const dt = 1646102246000;
    const expected = 'Monday';

    const weekday = getWeekday(dt, 'en_US');
    expect(weekday).toEqual(expected);
  });
});

describe('weekday helper - getdate', () => {
  it('should convert the time date to en_US format', () => {
    const dt = 1646102246000;
    const expected = '2/28/2022';

    const weekday = getDate(dt, 'en_US');
    expect(weekday).toEqual(expected);
  });

  it('should convert the time date to pt_BR format', () => {
    const dt = 1646102246000;
    const expected = '28/02/2022';

    const weekday = getDate(dt, 'pt_BR');
    expect(weekday).toEqual(expected);
  });

  it('should convert the new date to pt_BR format', () => {
    const dt = new Date('2022-02-28T10:00:00.000+03:00');
    const expected = '28/02/2022';

    const weekday = getDate(dt, 'pt_BR');
    expect(weekday).toEqual(expected);
  });
});
