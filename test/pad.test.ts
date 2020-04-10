import { pad } from '../src'

describe('pad', () => {
  it('should add zero padding to numbers', () => {
    expect(pad(7, 2)).toEqual('07')
  })
  it('should add zero padding to numbers', () => {
    expect(pad(998, 4)).toEqual('0998')
  })
  it('should not add 2 zero pad to numbers when no size is set', () => {
    expect(pad(7)).toEqual('07')
  })
})
