import { sum } from '../src'

describe('sum', () => {
  it('should sum two values', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
