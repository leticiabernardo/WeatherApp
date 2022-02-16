export function getWeekday(dt: number) {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  })
    .format(dt)
    .split('-')[0];
}
