function getWeekday(dt: number, lang: string) {
  return new Intl.DateTimeFormat(lang, {
    weekday: 'long',
  })
    .format(dt)
    .split('-')[0];
}

function getDate(dt: number | Date, lang: string) {
  return new Intl.DateTimeFormat(lang).format(dt);
}

export { getWeekday, getDate };
