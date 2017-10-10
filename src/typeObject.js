/**
 * 
 */
import { definedTypeValue } from './basicCheck';
import { logicDoors, hasLogicDoors } from './logicDoors';
import { Scheson, appendChildFailures } from './base';

const schemaObject = {
  type: 'object',
  properties: {
    type: {
      type: 'string'
    },
    properties: {
      type: 'object'
    },
    required: {
      type: 'array'
    },
    additionalProperties: {
      type: 'boolean'
    }
  },
  required: ['type']
};

const typeObject = {

  /**
	 * check there are more properties than allowed
	 * @param  {Object} value  The value to check
	 * @param  {Object} schema according schemaString
	 * @return {Object}        validation object
	 */
  additionalProperties: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    if ( 
      definedTypeValue(schema, 'additionalProperties', 'boolean') && !schema.additionalProperties
      && Object.keys(value).some( function(item) {
        return ( 
          !definedTypeValue(schema, 'properties', 'object') 
          || Object.keys(schema.properties).indexOf(item) === -1
        );
      })
    ) {
      rtrn.failures.self.push('no additional properties allowed');			
    }
    return rtrn;
  },

  /**
	 * check the value's properties
	 * @param  {Object} value  The value to check
	 * @param  {Object} schema according to schemaObject
	 * @return {Object}        validation object
	 */
  properties: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };

    if ( definedTypeValue(schema, 'properties', 'object') ) {
      Object.keys(schema.properties).forEach( function (key) {
        if ( definedTypeValue(value, key, schema.properties[key].type) ) {

          const getRtrn = (hasLogicDoors(schema.properties[key])) 
            ? logicDoors(value[key], schema.properties[key], Scheson.check)
            : Scheson.check(value[key], schema.properties[key]);

          if(!getRtrn.valid){
            rtrn.valid = getRtrn.valid;
            rtrn.failures.children = appendChildFailures(rtrn.children, key, getRtrn.failures);
          }
        }
      });
    }
    return rtrn;
  }
};

export {typeObject, schemaObject};