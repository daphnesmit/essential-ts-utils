import { pushUnique } from '../src'

const uniqueObject = {
  firstName: 'Maarten',
  lastName: 'Smit',
  age: 30,
}

const existingObject = {
  firstName: 'Daphne',
  lastName: 'Smit',
  age: 32,
}

const array = [
  {
    firstName: 'Daphne',
    lastName: 'Smit',
    age: 32,
  },
  {
    firstName: 'Matt',
    lastName: 'Van Voorst',
    age: 30,
  },
]

describe('pushUnique', () => {
  it('should push an object in an array if unique', () => {
    expect(pushUnique(array, uniqueObject)).toEqual([
      {
        firstName: 'Daphne',
        lastName: 'Smit',
        age: 32,
      },
      {
        firstName: 'Matt',
        lastName: 'Van Voorst',
        age: 30,
      },
      {
        firstName: 'Maarten',
        lastName: 'Smit',
        age: 30,
      },
    ])
  })
  it('should not push an object in an array if unique', () => {
    expect(pushUnique(array, existingObject)).toEqual([
      {
        firstName: 'Daphne',
        lastName: 'Smit',
        age: 32,
      },
      {
        firstName: 'Matt',
        lastName: 'Van Voorst',
        age: 30,
      },
    ])
  })
  it('should push an object in an array if unique', () => {
    expect(pushUnique(array, { name: 'Some Name' })).toEqual([
      {
        firstName: 'Daphne',
        lastName: 'Smit',
        age: 32,
      },
      {
        firstName: 'Matt',
        lastName: 'Van Voorst',
        age: 30,
      },
      { name: 'Some Name' },
    ])
  })
  it('should push any value in an array if unique', () => {
    expect(pushUnique(array, 'Some Name')).toEqual([
      {
        firstName: 'Daphne',
        lastName: 'Smit',
        age: 32,
      },
      {
        firstName: 'Matt',
        lastName: 'Van Voorst',
        age: 30,
      },
      'Some Name',
    ])
  })
})
