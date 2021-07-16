const {
  filter,
  map
} = require('./01_callbacks_in_arrays')

describe('Handle Arrays with callbacks', () => {
  it('01 - filter should return new list with with values < 100K', () => {
    const items = [
      { name: 'Bose Subwoofer', value: 120000 },
      { name: 'Samsung Subwoofer', value: 99990 },
      { name: 'JBL Subwoofer', value: 90000 }
    ];
    const filteredItems = filter(items, (item) => item.value < 100000)
  
    expect(filteredItems).toEqual([
      { name: 'Samsung Subwoofer', value: 99990 },
      { name: 'JBL Subwoofer', value: 90000 }
    ])
  })
  
  it('02 - map should return new list with the names', () => {
    const items = [
      { name: 'Bose Subwoofer', value: 120000 },
      { name: 'Samsung Subwoofer', value: 99990 },
      { name: 'JBL Subwoofer', value: 90000 }
    ]
    const itemNames = (item) => item.name
  
    const mappedList = map(items, itemNames)
  
    expect(mappedList).toEqual([
      'Bose Subwoofer',
      'Samsung Subwoofer',
      'JBL Subwoofer'
    ])
  })
})


