/**
 * Pushes the new value to an array only if that value doesn't exist yet
 */
export const pushUnique = (arr: any[], value: any): any[] => {
  if (arr.includes(value)) return arr
  arr.push(value)
  return arr
}
