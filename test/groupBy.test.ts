import { groupBy } from '../src'

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
  {
    firstName: 'Maarten',
    lastName: 'Smit',
    age: 30,
  },
]

describe('groupBy', () => {
  it('should group an array by property and return a grouped object', () => {
    expect(groupBy(array, (i) => i.lastName)).toEqual({
      Smit: [
        { firstName: 'Daphne', lastName: 'Smit', age: 32 },
        { firstName: 'Maarten', lastName: 'Smit', age: 30 },
      ],
      'Van Voorst': [{ firstName: 'Matt', lastName: 'Van Voorst', age: 30 }],
    })
  })
  it('should group an array by property and return a grouped object', () => {
    expect(groupBy(array, (i) => i.age)).toEqual({
      '30': [
        { firstName: 'Matt', lastName: 'Van Voorst', age: 30 },
        { firstName: 'Maarten', lastName: 'Smit', age: 30 },
      ],
      '32': [{ firstName: 'Daphne', lastName: 'Smit', age: 32 }],
    })
  })
})
