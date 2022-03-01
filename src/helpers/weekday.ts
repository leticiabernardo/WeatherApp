const intl: { [key: string]: string } = {
  pt_BR: 'pt-BR',
  en_US: 'en-US',
};

function getWeekday(dt: number, lang: string) {
  return new Intl.DateTimeFormat(intl[lang], {
    weekday: 'long',
  })
    .format(dt)
    .split('-')[0];
}

function getDate(dt: number | Date, lang: string) {
  return new Intl.DateTimeFormat(intl[lang]).format(dt);
}

export { getWeekday, getDate };
