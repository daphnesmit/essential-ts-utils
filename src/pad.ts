export function pad(num: number, size: number = 2, type: string = '0') {
  return `${num}`.padStart(size, type)
}
