export const pad = (num: number, size: number = 2, type: string = '0') =>
  `${num}`.padStart(size, type)
