import { ucfirst } from '../src'

describe('ucfirst', () => {
  it('should uppercase the first character of a string', () => {
    expect(ucfirst('daphne')).toEqual('Daphne')
  })
  it('should uppercase the first character of a string', () => {
    expect(ucfirst('people are crazy!')).toEqual('People are crazy!')
  })
  it('should uppercase the first character of a string', () => {
    expect(ucfirst('typescript: you are so powerfull!')).toEqual(
      'Typescript: you are so powerfull!',
    )
  })
})
