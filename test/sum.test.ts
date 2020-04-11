import { sum } from '../src'

describe('sum', () => {
  it('should sum two unique values', () => {
    expect(sum(3, 5)).toEqual(8)
  })

  it('should sum a negative with a positive value', () => {
    expect(sum(-3, 5)).toEqual(2)
    expect(sum(3, -5)).toEqual(-2)
  })

  it('should sum two negative values', () => {
    expect(sum(-3, -5)).toEqual(-8)
  })
})
