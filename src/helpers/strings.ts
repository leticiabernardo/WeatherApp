const sanitizeString = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
};

export { sanitizeString };
