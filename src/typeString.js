/**
 * 
 */
import { definedTypeValue, varType } from './basicCheck';
import { logicDoors, hasLogicDoors } from './logicDoors';
import { Scheson } from './base';

const schemaString = {
  type: 'object',
  properties: {
    type: {
      type: 'string'
    },
    minLength: {
      type: 'number',
      multipleOf: 1,
      minimum: 0
    },
    maxLength: {
      type: 'number',
      multipleOf: 1,
      minimum: 0
    },
    pattern: {
      type: {
        oneOf: ['string', 'regexp', 'object']
      }
    },
    enumerate: {
      type: 'array'
    },
    format: {
      type: {
        oneOf: ['string', 'object']
      }
    }
  },
  required: ['type']
};


/**
 * test value against pattern
 * @param  {String} value The string to test
 * @param  {RegExp} patt  Pattern to use
 * @return {Object}       validation object
 */
function patternTest(value, patt) {
  const rtrn = { valid: true, failures: []};
  if(varType(patt, 'string')) {
    patt = new RegExp(patt);
  }
  if (varType(patt, 'regexp')) {
    if (!patt.test(value)) {
      rtrn.valid = false;
      rtrn.failures.push('the text must fit the pattern at schema');							
    }
  }
  return rtrn;
}

function formatTest(value, format) {
  const rtrn = { valid: true, failures: []};
  if( Scheson.stringFormats.hasOwnProperty(format)) {
    if ( !Scheson.stringFormats[format](value) ) {
      rtrn.valid = false;
      rtrn.failures.push('string value doesn\'t fit with ' + format + ' specification');
    }
  }
  return rtrn;
}

const typeString = {
  minLength: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( definedTypeValue(schema, 'minLength', 'number') && value <= schema.minLength) {
      rtrn.valid = false;
      rtrn.failures.push('string shorter than allowed (' + schema.minLength + ')');
    }
    return rtrn;		
  },
  maxLength: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( definedTypeValue(schema, 'maxLength', 'number') && value <= schema.maxLength) {
      rtrn.valid = false;
      rtrn.failures.push('string longer than allowed (' + schema.maxLength + ')');
    }
    return rtrn;		
  },
  enumarate: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( definedTypeValue(schema, 'enumerate', 'array') && schema.enumerate.indexOf(value) === -1) {
      rtrn.valid = false,
      rtrn.failures.push('value must be one of enumerated: [' + schema.enumerate.join(', ') + ']');
    }
    return rtrn;		
  },
  pattern: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( definedTypeValue(schema, 'pattern')) {
      const getRtrn = (hasLogicDoors(schema.pattern)) 
        ? logicDoors(value, schema.pattern, patternTest)
        : patternTest(value, schema.pattern);
      if(rtrn.valid){
        rtrn.valid = getRtrn.valid;
      }
      Array.prototype.push.apply(rtrn.failures, getRtrn.failures);
    }
    return rtrn;		
  },
  format: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    if (definedTypeValue(schema, 'format')) {
      const getRtrn = (hasLogicDoors(schema.format)) 
        ? logicDoors(value, schema.format, formatTest)
        : patternTest(value, schema.format);
      if(rtrn.valid){
        rtrn.valid = getRtrn.valid;
      }
      Array.prototype.push.apply(rtrn.failures, getRtrn.failures);

    }
    return rtrn;
  },

};

export {typeString, schemaString};