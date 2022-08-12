export const separateListWithComa = (str: string): string => {
  const arr = str.split('/');
  return arr.join(', ');
};
