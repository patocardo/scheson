import { Scheson } from './base';
import { varType } from './basicCheck';
import { stringFormats } from './stringFormats';
import { typeString, schemaString } from './typeString';
import { typeNumber, schemaNumber } from './typeNumber';
import { typeArray, schemaArray } from './typeArray';
import { typeObject, schemaObject } from './typeObject';

const typeValidators = {
  'string': typeString,
  'number': typeNumber,
  'array': typeArray,
  'object': typeObject
};
const typeSuperSchemas = {
  'string': schemaString,
  'number': schemaNumber,
  'array': schemaArray,
  'object': schemaObject
};


Object.keys(stringFormats).forEach( function (key) {
  Scheson.pushStringFormat(key, stringFormats[key]);
});

/**
 * boolean super Schema
 */
typeSuperSchemas['boolean'] = {
  type: 'string'
};

/**
 * boolean super Schema
 */
typeSuperSchemas['null'] = {
  type: 'string'
};

// add built-in types and superSchemas

Object.keys(typeValidators).forEach( function(type) {
  Scheson.pushType(type, typeValidators[type], typeSuperSchemas[type]);
});

// add root super schema
Scheson.pushSuperSchema('root', {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
  },
  required: ['id', 'type']
});

/*function schesonClass() {
}
schesonClass.prototype.types = Scheson.types;

module.exports = schesonClass;
*/
export const types = Scheson.types, 
  superSchemas = Scheson.superSchemas, 
  getStringFormats = function () {
    return Scheson.stringFormats;
  },
  pushType = Scheson.pushType, 
  pushSuperSchema = Scheson.pushSuperSchema, 
  pushStringFormat = Scheson.pushStringFormat,
  check = Scheson.check,
  jType = varType;