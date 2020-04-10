/**
 * Checks if the recieved value is empty
 */
export const isEmpty = (value: any): boolean => {
  return (
    value === void 0 ||
    value === '' ||
    String(value).toLocaleLowerCase() === 'null' ||
    value === 'undefined' ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  )
}
