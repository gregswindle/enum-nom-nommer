const enumFactory = require('..')

describe('enumFactory', () => {
  describe('creates enumerations such as', () => {
    test('numeric enums', () => {
      const levels = {
        debug: 5, error: 0, http: 3, info: 2, silly: 6, verbose: 4, warn: 1
      }
      const logLevelEnum = enumFactory.create(levels)
      expect(logLevelEnum).toEqual({
        0: 'error',
        1: 'warn',
        2: 'info',
        3: 'http',
        4: 'verbose',
        5: 'debug',
        6: 'silly',
        debug: 5,
        error: 0,
        http: 3,
        info: 2,
        silly: 6,
        verbose: 4,
        warn: 1
      })
    })
    test('mixed-type enums', () => {
      const validSignatureTypes = {
        MATCH: 'match',
        REGEX: 'regex',
        match: 0,
        regex: 1
      }
      const validTypesEnum = enumFactory.create(validSignatureTypes)
      const expected = {
        '0': 'match',
        '1': 'regex',
        'MATCH': 'match',
        'match': 0,
        'REGEX': 'regex',
        'regex': 1
      }
      expect(validTypesEnum).toEqual(expected)
    })
  })
})
