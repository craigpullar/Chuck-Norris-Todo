export const getHighestKey = (accumulator, { key }) =>
  key > accumulator ? key : accumulator;
