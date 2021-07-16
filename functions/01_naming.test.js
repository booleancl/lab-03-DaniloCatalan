const {
  namedFunctions,
  expressionFunctions
} = require('./01_naming')

describe('Functions', () => {
  const {
    normalFunction,
    anonymousFunction
  } = namedFunctions();

  it('01 - functions can be declared in different ways and always set the name property even in "anonymous" functions', () => {
    expect(normalFunction.constructor).toBe(Function)
    
    expect(normalFunction.name).toEqual('normalFunction')
    expect(typeof normalFunction).toEqual('function')
    expect(anonymousFunction.name).toEqual('anonymousFunction')
    expect(typeof anonymousFunction).toEqual('function')
  })

  it('02 - functions are declared as expressions get empty string name', () => {
    const anonymousFunction = expressionFunctions();

    expect(anonymousFunction.name).toEqual('')
    expect(typeof anonymousFunction).toEqual('function')
  })
})
