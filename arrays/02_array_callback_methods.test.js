const {
  filterByAdults,
  getListsByAge
} = require('./02_array_callback_methods')

describe('Use callback methods in array', () => {
  it('01 - filter users using filter with predicate', () => {
    expect(filterByAdults()).toEqual([
      { id: 1, name: 'Bulma Perez', age: 22, email: '' },
      { id: 2, name: 'Goku Gonzalez', age: 33, email: '' },
    ])
  })

  it('02 - get lists with properties adultsPeople and underagePeople', () => {
    const {
      adultsPeople,
      underagePeople
    } = getListsByAge()
    expect(adultsPeople).toEqual([
      { id: 1, name: 'Bulma Perez', age: 22, email: '', freeBeverage: 'Alcohol' },
      { id: 2, name: 'Goku Gonzalez', age: 33, email: '', freeBeverage: 'Alcohol' },
    ])
    expect(underagePeople).toEqual([
      { id: 3, name: 'Gohan Valdevenito', age: 12, email: '', freeBeverage: 'Juice' }
    ])
  })
})