import { emojiKiller } from '../src'

describe('emojiKiller', () => {
  it('should kill emojis in a string', () => {
    expect(emojiKiller('🎉Party 🚩Flags! 🚀Rockets!')).toEqual('Party Flags! Rockets!')
  })
  it('should kill emojis in a string and replace by a set replacement value', () => {
    expect(emojiKiller('🎉 Party 🚩 Flags! 🚀 Rockets!', 'X')).toEqual(
      'X Party X Flags! X Rockets!',
    )
  })
})
