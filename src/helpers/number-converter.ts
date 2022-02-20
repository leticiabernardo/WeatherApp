function convertFloatToIntWithRounding(value: number | undefined): number {
  return value ? Math.round(value) : 0;
}

export { convertFloatToIntWithRounding };
