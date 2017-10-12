/**
 * 
 */
import { definedTypeValue } from './basicCheck';

const schemaNumber = {
  type: 'object',
  properties: {
    type: {
      type: 'string'
    },
    minimum: {
      type: 'number'
    },
    maximum: {
      type: 'number'
    },
    exclusiveMinimum: {
      type: 'boolean'
    },
    exclusiveMaximum: {
      type: 'boolean'
    },
    multipleOf: {
      type: 'number'
    },
    enumerate: {
      type: 'array'
    }
  },
  required: ['type']
};

const typeNumber = {
  minimum: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( definedTypeValue(schema, 'minimum', 'number') ) {
      if( 
        (definedTypeValue(schema, 'exclusiveMinimum', 'boolean', true) && value <= schema.minimum) 
        || value < schema.minimum 
      ) {
        rtrn.valid = false;
        rtrn.failures.self.push('number lower than allowed (' + schema.minimum + ')');
      }
    }
    return rtrn;
  },
  maximum: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( definedTypeValue(schema, 'maximum', 'number') ) {
      if( 
        (definedTypeValue(schema, 'exclusiveMaximum', 'boolean', true) && value <= schema.maximum) 
        || value < schema.maximum 
      ) {
        rtrn.valid = false;
        rtrn.failures.self.push('number higher than allowed (' + schema.maximum + ')');
      }
    }
    return rtrn;
  },
  multipleOf: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( definedTypeValue(schema, 'multipleOf', 'number') && value % schema.multipleOf !== 0) {
      rtrn.valid = false,
      rtrn.failures.self.push('value must be multiple of ' + schema.multipleOf);
    }
    return rtrn;
  },
  enumerate: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( definedTypeValue(schema, 'enumerate', 'array') && schema.enumerate.indexOf(value) === -1) {
      rtrn.valid = false,
      rtrn.failures.self.push('value must be one of enumerated: [' + schema.enumerate.join(',') + ']');
    }
    return rtrn;
  },

};

export {typeNumber, schemaNumber};