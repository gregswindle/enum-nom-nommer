const get = require('lodash.get')
const parseNumeric = require('parse-numeric')
const set = require('lodash.set')

const enumFactory = {
  create (object, assignObject = {
  }) {
    const enumObject = Object.assign({
    }, assignObject)
    for (let prop in object) {
      prop = parseNumeric(prop)
      const val = get(object, prop)
      set(enumObject, prop, val)
      set(enumObject, val, prop)
    }
    return enumObject
  }
}

module.exports = enumFactory
