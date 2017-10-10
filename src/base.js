import { varType, definedTypeValue } from './basicCheck';
import { logicDoors, hasLogicDoors } from './logicDoors';

const Scheson = {};

function appendChildFailures(childrenObj, key, failures) {
  if ( !childrenObj.hasOwnProperty(key)) {
    childrenObj[key] = { self: [], children: {}};
  }
  Array.prototype.push.apply(childrenObj[key].failures.self, failures.self);
  if (Object.keys(failures.children).length > 0) {
    Object.keys(failures.children).forEach( function (childKey) {
      failures.children = appendChildFailures(failures.children, childKey, failures.children);
    });
  }
  return childrenObj;
}

function allRequired(value, schema) {
  const rtrn = { valid: true, failures: {self:[], children:[]}};
  const missingProp = definedTypeValue(schema, 'required', 'array') 
    ? schema.required.some( function(item) {
      return !value.hasOwnProperty(item);
    })
    : false;
  if (missingProp) {
    rtrn.valid = false;
    rtrn.failures.self.push('the following properties are required: ' + schema.required.join(', '));
  }
  return rtrn;
}

function sweepCheckers(value, schema){
  const rtrn = {
    valid: true, 
    failures: {
      self: [],
      children: {}
    }
  };
  if ( varType.isBuiltIn(schema.type) && !varType.is(value, schema.type)) {
    rtrn.valid = false;
    rtrn.failures.self.push('bad type, it should be ' + schema.type);
  }
  else {
    if( Scheson.types.hasOwnProperty(schema.type)) {
      const allReq = allRequired(value, schema);
      if ( !allReq.valid ) {
        rtrn.valid = false;
        Array.prototype.push.apply(rtrn.failures.self, allReq.failures.self);     
      }
      Object.keys(Scheson.types[schema.type]).forEach( function(key) {
        const getRtrn = Scheson.types[schema.type][key](value, schema);
        if(rtrn.valid) {
          rtrn.valid = getRtrn.valid;
        }
        Array.prototype.push.apply(rtrn.failures.self, getRtrn.failures.self);
        Object.keys(getRtrn.failures.children).forEach( function(key) {
          if ( rtrn.failures.children.hasOwnProperty(key)) {
            Array.prototype.push.apply(rtrn.failures.children[key], getRtrn.failures.children[key]);
          }
          else {
            rtrn.failures.children[key] = getRtrn.failures.children[key];
          }
        });
      });
    }

  }
  return rtrn;
}

Object.defineProperties(Scheson, {
  types: {
    enumerable: true,
    value: {}
  },
  stringFormats: {
    enumerable: true,
    value: {}	
  },
  superSchemas: {
    enumerable: true,
    value: {}
  },
  pushType: {
    enumerable: true,
    value: function(typeName, obj/*, superSchema, force*/) {
      const force = arguments.length > 3 ? arguments[3] : null;
      let rtrn = true;
      if ( Scheson.types.hasOwnProperty[typeName] && !force) {
        throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !varType.is(typeName, 'string') || !varType.is(obj, 'object')) {
        // throw new TypeError('bad types at Scheson.pushType');
        console.error('bad types at Scheson.pushType');
        return false;
      }

      Object.defineProperty(Scheson.types, typeName, {
        enumerable: true,
        configurable: true,
        value: obj
      });

      if (arguments.length > 2) {
        rtrn = Scheson.pushSuperSchema(typeName, arguments[2], force);
      }

      return rtrn;
    }
  },
  pushTypeValidator: {
    enumerable: true,
    value: function(typeName, validatorName, fn/*, force*/) {
      const force = arguments.length > 3 ? arguments[3] : null;
      let rtrn = true;
      if ( !Scheson.types.hasOwnProperty[typeName]) {
        throw new Error( typeName + ' doesn\'t exists, add it first with pushType');
      }
      if ( Scheson.types[typeName].hasOwnProperty[validatorName] && !force) {
        throw new Error( validatorName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !varType.is(validatorName, 'string') || !varType.is(fn, 'function')) {
        throw new TypeError('bad types at Scheson.pushTypeValidator');
      }

      Object.defineProperty(Scheson.types[typeName], validatorName, {
        enumerable: true,
        configurable: true,
        value: fn
      });

      return rtrn;
    }		
  },
  pushStringFormat: {
    enumerable: true,
    value: function(formatName, fn/*, force*/) {
      const force = arguments.length > 2 ? arguments[2] : null;
      if ( Scheson.stringFormats.hasOwnProperty[formatName] && !force) {
        throw new Error( formatName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !varType.is(formatName, 'string') || !varType.is(fn, 'function')) {
        // throw new TypeError('bad types at Scheson.pushStringFormat', varType.get(formatName), varType.get(fn));
        console.error('bad types at Scheson.pushStringFormat', varType.get(formatName), varType.get(fn));
        return false;
      }
      Object.defineProperty(Scheson.stringFormats, formatName, {
        enumerable: true,
        configurable: true,
        value: fn
      });
      return true;
    }
  },
  pushSuperSchema: {
    enumerable: true,
    value: function(typeName, obj/*, force*/) {
      const force = arguments.length > 2 ? arguments[2] : null;
      if ( Scheson.superSchemas.hasOwnProperty[typeName] && !force) {
        throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !varType.is(typeName, 'string') || !varType.is(obj, 'object')) {
        // throw new TypeError('bad types at Scheson.pushSuperSchema');
        console.error('bad types at Scheson.pushSuperSchema');
        return false;
      }
      Object.defineProperty(Scheson.superSchemas, typeName, {
        enumerable: true,
        configurable: true,
        value: obj
      });
      return true;
    }
  },

  check: {
    enumerable: true,
    value: function(value, schema, checkSchema) {
      const rtrn = { valid:true, failures:{}, errors: {}};
      if (checkSchema) {
        // console.log('checkSchema');
        const getRtrn = Scheson.check(schema, Scheson.superSchemas.root);
        console.log('schema:', schema, 'superschema:', Scheson.superSchemas.root);
        rtrn.valid = getRtrn.valid;
        rtrn.errors = getRtrn.failures;
      }
      if (rtrn.valid) {

        const getRtrn = (hasLogicDoors(schema)) 
          ? logicDoors(value, schema, sweepCheckers)
          : sweepCheckers(value, schema);
        rtrn.valid = getRtrn.valid;
        rtrn.failures = getRtrn.failures;
      }
      return rtrn;
    }
  }
});


export { Scheson, appendChildFailures };