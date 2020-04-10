import { average } from '../src'

const array = [6, 3, 8, 2, 3, 2]

describe('average', () => {
  it('should calculate the average of a number array', () => {
    expect(average(array)).toEqual(4)
  })
})
