import { definedTypeValue, varType } from './basicCheck';

/**
 * check if the object has defined at least one logic door
 * @param  {Object}  schema the object to check inside
 * @return {Boolean}        Has or not, this is the question
 */
function hasLogicDoors(schema) {
  let rtrn = false;
  if (varType.is(schema, 'object')) {
    if ( definedTypeValue(schema, 'anyOf', 'array') 
  || definedTypeValue(schema, 'allOf', 'array')
  || definedTypeValue(schema, 'oneOf', 'array')
  || definedTypeValue(schema, 'not', 'array')) {
      rtrn = true;
    }
  }
  return rtrn;
}

/**
 * validate value against different scenarios of logic doors
 * 
 * @param  {Any}   value       to validate against
 * @param  {Object}   schema   With one or more of the following properties
 *                             		{Array} 	anyOf (OR)
 *                             		{Array} 	allOf (AND)
 *                             		{Array} 	not 	(NOR)
 *                             		{Array} 	oneOf (XOR)
 *                             		{Object} 	nOf  (special XOR) with following properties
 *                             			{Array}		list (required) validation criteria
 *                                	{Number}	minimum
 *                             			{Number} 	maximum
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function logicDoors(value, schema, callback) {
  const rtrn = {valid: true, failures: []};

  // OR
  if ( definedTypeValue(schema, 'anyOf', 'array') ) {
    rtrn.valid = schema.anyOf.some(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);

      Array.prototype.push.apply(rtrn.failures, getRtrn.failures);

      if (getRtrn.valid) {
        return true;
      }
      return false;
    });

    if(!rtrn.valid){
      rtrn.failures.push('At least one criterion should match');
    }
  }

  // AND
  if ( rtrn.valid && definedTypeValue(schema, 'allOf', 'array') ) {
    rtrn.valid = !schema.anyOf.some(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);

      Array.prototype.push.apply(rtrn.failures, getRtrn.failures);

      if (getRtrn.valid) {
        return false;
      }
      return true;
    });
    if(!rtrn.valid){
      rtrn.failures.push('All criteria should match');
    }
  }

  // NOR
  if ( rtrn.valid && definedTypeValue(schema, 'not', 'array') ) {
    rtrn.valid = !schema.anyOf.some(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);

      Array.prototype.push.apply(rtrn.failures, getRtrn.failures);

      if (getRtrn.valid) {
        return true;
      }
      return false;
    });
    if(!rtrn.valid){
      rtrn.failures.push('None of criteria should match');
    }
  }


  // XOR
  if ( rtrn.valid && definedTypeValue(schema, 'oneOf', 'array') ) {
    let counterTrue = 0;
    schema.anyOf.forEach(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);

      if (getRtrn.valid) {
        counterTrue++;
      }
    });
    if (counterTrue === 1) {
      rtrn.valid = true;
    }
    else {
      rtrn.failures.push('Only one criterion should match');			
    }
  }
	
  // XOR plus
  if ( rtrn.valid && definedTypeValue(schema, 'nOf', 'object') 
  && definedTypeValue(schema.nOf, 'list', 'array')
  && ( definedTypeValue(schema.nOf, 'minimum', 'number') || definedTypeValue(schema.nOf, 'maximum', 'number'))
  ) {
    const minimum = definedTypeValue(schema.nOf, 'minimum', 'number') ? schema.nOf.minimum : 0;
    const maximum = definedTypeValue(schema.nOf, 'maximum', 'number') ? schema.nOf.maximum : schema.nOf.list.length;
    let counterTrue = 0;
    schema.anyOf.list.forEach(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);
      if (getRtrn.valid) {
        counterTrue++;
      }
      rtrn.errors = rtrn.errors.concat(getRtrn.errors);			
    });
    if (counterTrue >= minimum && counterTrue <= maximum) {
      rtrn.valid = true;
    }
    else {
      rtrn.failures.push('Criteria to match must between ' + minimum + ' and ' + maximum);			
    }

  }

  return rtrn;
}

export {hasLogicDoors, logicDoors};