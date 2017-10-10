/**
 * 
 */
import { definedTypeValue, varType } from './basicCheck';
import { Scheson, appendChildFailures } from './base';

const schemaArray = {
  type: 'object',
  properties: {
    type: {
      type: 'string'
    },
    minItems: {
      type: 'number',
      minimum: 0,
      multipleOf: 1
    },
    maxItems: {
      type: 'number',
      minimum: 0,
      multipleOf: 1
    },
    uniqueItems: {
      type: {
        anyOf: [
          'boolean',	// for whole value check
          'string'		// for an specific property items
        ]
      }
    },
    additionalItems: {
      type: 'boolean'
    },
    items: {
      type: {
        anyOf: [
          {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          {
            type: 'object'
          }
        ]
      }
    }
  },
  required: ['type']
};

const typeArray = {

  /**
	 * check if the value has more items than allowed, used when schema has fixed items
	 * @param  {Array} value  The value to check
	 * @param  {Object} schema according schemaArray
	 * @return {Object}        validation object
	 */
  additionalItems: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    const itemsNum = definedTypeValue(schema, 'items', 'array') ? schema.items.length: 0;

    if ( definedTypeValue(schema, 'additionalItems', 'boolean') && !schema.additionalItems
   && value.length > itemsNum) {
      rtrn.failures.self.push('no additional items allowed');			
    }
    return rtrn;
  },

  /**
	 * check the value's properties
	 * @param  {Array} value  The value to check
	 * @param  {Object} schema according schemaArray
	 * @return {Object}        validation object
	 */
  minItems: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    if ( definedTypeValue(schema, 'minItems', 'number') && value.length < schema.minItems) {
      rtrn.failures.self.push('items in array should be at least ' + schema.minItems);			
    }
    return rtrn;
  },

  /**
	 * check if the value has more items than allowed, used when schema has fixed items
	 * @param  {Array} value  The value to check
	 * @param  {Object} schema according schemaArray
	 * @return {Object}        validation object
	 */
  maxItems: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    if ( definedTypeValue(schema, 'maxItems', 'number') && value.length < schema.maxItems) {
      rtrn.failures.self.push('items in array should be at most ' + schema.maxItems);			
    }
    return rtrn;
  },

  /**
	 * check if the items of the value are unique, entirely or in a property
	 * @param  {Array} value  The value to check
	 * @param  {Object} schema according schemaArray
	 * @return {Object}        validation object
	 */
  uniqueItems: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    if ( definedTypeValue(schema, 'uniqueItems')) {
      const witness = [];
      rtrn.valid = !value.some(function (item) {
        const element = varType(schema.uniqueItems, 'string') ? item[schema.uniqueItems] : item;
        if ( witness.indexOf(element) > -1) {
          witness.push(element);
          return false;
        }
        else {
          return true;
        }
      });
      rtrn.failures.self.push('items in array should unique');			
    }
    return rtrn;
  },

  /**
	 * check if the items of the value are unique, entirely or in a property
	 * @param  {Array} value  The value to check
	 * @param  {Object} schema according schemaArray
	 * @return {Object}        validation object
	 */
  items: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };
    value.forEach(function(item, idx) {
      const schemaIt = varType.is(schema.items, 'array') ? schema.items[idx] : schema.items;
      const getRtrn = Scheson.check(item, schemaIt);
      if ( rtrn.valid ){
        rtrn.valid = getRtrn.valid;
      }
      rtrn.failures.children = appendChildFailures(rtrn.failures.children, idx, getRtrn.failures);				
    });
    return rtrn;
  }
};

export {typeArray, schemaArray};