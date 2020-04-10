import { parseJson } from '../src'

const validString = `{"firstName":"Daphne","lastName":"Smit"}`
const invalidString = `{"firstName":"Daphne",,"lastName":"Smit"}`

describe('parseJson', () => {
  it('should parseJson a valid json without errors', () => {
    expect(parseJson(validString)).toEqual({
      firstName: 'Daphne',
      lastName: 'Smit',
    })
  })
  it('should parseJson an invalid json without errors and return undefined', () => {
    expect(parseJson(invalidString)).toEqual(undefined)
  })
  it('should parseJson an invalid json without errors and return default value when set', () => {
    expect(parseJson(invalidString, { failed: true })).toEqual({ failed: true })
  })
})
