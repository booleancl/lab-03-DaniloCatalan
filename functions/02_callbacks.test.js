const {
  useCallbacksAsDataType,
  forEach
} = require('./02_callbacks')

describe('Callbacks', () => {
  it('01 - function can be used as any data type like members of array', () => {
    expect(useCallbacksAsDataType()).toEqual('Callbacks are powerful')
  })

  it('02 - callback is called in iterations with arguments',() => {
    const array = [1, 2, 3]
    const spy = jest.fn()

    forEach(array, spy)

    expect(spy).toHaveBeenCalledWith(array[0], 0)
    expect(spy).toHaveBeenCalledWith(array[1], 1)
    expect(spy).toHaveBeenCalledWith(array[2], 2)
    // expect(spy).toHaveBeenNthCalledWith(1, 1, 0)
    // expect(spy).toHaveBeenNthCalledWith(2, 2, 1)
    // expect(spy).toHaveBeenNthCalledWith(3, 3, 2)
    // expect(spy).toHaveBeenCalledTimes(3)
  })
})
