this["Scheson"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return varType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return definedTypeValue; });
const varType = {};
Object.defineProperties(varType, {
  get: {
    enumerable: true,
    value: function(value /*, lowercase */) {
      let rtrn = /\s(\w+)]/i.exec(Object.prototype.toString.call(value))[1]; // TODO: test in MSIE for NodeCollection
      rtrn = (/Event/.test(rtrn)) ? 'Event.' + rtrn : rtrn;
      rtrn = (arguments.length > 1 && arguments[1]) ? rtrn.toLowerCase() : rtrn;
      if(rtrn === 'number' && isNaN(value)) { // NaN correction
        rtrn = (arguments.length > 1 && arguments[1]) ? 'nan' : 'NaN';
      }
      return rtrn;
    }
  },
  is: {
    enumerable: true,
    value: function(value, type) {
      type = type.toLowerCase();
      const argType = varType.get(value, true);
      if(type === 'event'){
        return /event$/i.test(argType);
      }
       if(type === 'error'){
        return /error$/i.test(argType);
      }
      if( argType === 'htmlcollection' || argType === 'nodelist') {
        return (type === 'htmlcollection' || type === 'nodelist');
      }
      if (type === 'node') {
        return (argType === 'htmlelement' && varType.is(value.nodeType, 'number') );
      }
      return argType == type;
    }
  },
  isBuiltIn: {
    enumerable: true,
    value: function (type) {
      // TODO: if it is possible, supersed this function by an automatic way to check supported built-ins
      // with the respective corrections
      const builtIns = ['null', 'boolean', 'number', 'nan', 'string', 'array', 'object',
        'function', 'date', 'regexp', 'htmlcollection', 'htmlelement', 'nodelist', 'node',
        'promise', 'arraybuffer', 'reflect', 'map', 'weak', 'weakmap', 'set', 'symbol',
        'xmlhttprequest',
        'event', 'mouseevent', 'animationevent', 'wheelevent', 'keyboardevent',
        'error', 'typeerror', 'rangeerror', 'referenceerror'];
        return builtIns.indexOf(type.toLowerCase()) > -1;
    }
  },
  parseString: {
    enumerable: true,
    value: function(str) {
      if (varType.is(str, 'string')) {
        const elementals = {
          'null': null,
          'false': false,
          'true': true,
          'nan': NaN,
          'infinity': Infinity
        };
        if (elementals.hasOwnProperty(str.toLowerCase())) {
          str = elementals[str.toLowerCase()];
        }
        else {
          if (!Number.isNaN(parseFloat(str))) {
            str = parseFloat(str);
          }
          else {
            if (/^\s*\[(.|\n|\r)*\]\s*$/gm.test(str) || /^\s*\{(.|\n|\r)*\}\s*$/gm.test(str)){
              try {
                str = JSON.parse(str);
              }
              catch (e) {
                console.error(e);
              }
            }
          }          
        }
      }
      else {
        console.error('varType.parseString used with non-string value');
      }
      return str;
    }
  }
});

function definedTypeValue(obj, prop /*, type, value*/) {
  let rtrn = true;
  if (obj.hasOwnProperty(prop)) {
    if (arguments.length > 2 && varType.is(arguments[2], 'string') ){
      if(!varType.is(obj[prop], arguments[2])){
        rtrn = false;
      }
    }
    if ( rtrn && arguments.length > 3 && obj[prop] !== arguments[3]) {
      rtrn = false;
    }
  }
  else {
    rtrn = false;
  }
  return rtrn;
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appendChildFailures; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logicDoors__ = __webpack_require__(2);



const Scheson = {};

function appendChildFailures(childrenObj, key, failures) {
  if ( !childrenObj.hasOwnProperty(key)) {
    childrenObj[key] = { self: [], children: {}};
  }
  Array.prototype.push.apply(childrenObj[key].self, failures.self);
  if (Object.keys(failures.children).length > 0) {
    Object.keys(failures.children).forEach( function (childKey) {
      failures.children = appendChildFailures(failures.children, childKey, failures.children);
    });
  }
  return childrenObj;
}

function allRequired(value, schema) {
  const rtrn = { valid: true, failures: {self:[], children:[]}};
  const missingProp = Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'required', 'array') 
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
  if ( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].isBuiltIn(schema.type) && !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(value, schema.type)) {
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
      if ( Scheson.types.hasOwnProperty(typeName) && !force) {
        throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(typeName, 'string') || !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(obj, 'object')) {
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
      if ( !Scheson.types.hasOwnProperty(typeName)) {
        throw new Error( typeName + ' doesn\'t exists, add it first with pushType');
      }
      if ( Scheson.types[typeName].hasOwnProperty(validatorName) && !force) {
        throw new Error( validatorName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(validatorName, 'string') || !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
        throw new TypeError('bad types at Scheson.pushTypeValidator');
      }
      if( fn.length !== 2 ) {
        throw new TypeError('fn should have 2 arguments at Scheson.pushTypeValidator(typeName, validatorName, fn)');
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
      if ( Scheson.stringFormats.hasOwnProperty(formatName) && !force) {
        throw new Error( formatName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(formatName, 'string') || !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
        // throw new TypeError('bad types at Scheson.pushStringFormat', varType.get(formatName), varType.get(fn));
        console.error('bad types at Scheson.pushStringFormat', __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].get(formatName), __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].get(fn));
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
      if ( Scheson.superSchemas.hasOwnProperty(typeName) && !force) {
        throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(typeName, 'string') || !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(obj, 'object')) {
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
        const getRtrn = Scheson.check(schema, Scheson.superSchemas.root);
        rtrn.valid = getRtrn.valid;
        rtrn.errors = getRtrn.failures;
      }
      if (rtrn.valid) {

        const getRtrn = (Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["a" /* hasLogicDoors */])(schema)) 
          ? Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["b" /* logicDoors */])(value, schema, sweepCheckers)
          : sweepCheckers(value, schema);
        rtrn.valid = getRtrn.valid;
        rtrn.failures = getRtrn.failures;
      }
      return rtrn;
    }
  },

  validObjectCleaner: {
    enumerable: true,
    value: function(validObj) {
      if( !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(validOb, 'object')) {
        console.error('validObj must be an object');
        return false;
      }
      // TODO: walk the object tree and clean empty parts 
    }
  }
});




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasLogicDoors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logicDoors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);


/**
 * check if the object has defined at least one logic door
 * @param  {Object}  schema the object to check inside
 * @return {Boolean}        Has or not, this is the question
 */
function hasLogicDoors(schema) {
  let rtrn = false;
  if (__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(schema, 'object')) {
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'anyOf', 'array') 
  || Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'allOf', 'array')
  || Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'oneOf', 'array')
  || Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'not', 'array')) {
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
  const rtrn = {valid: true, failures: {self:[], children:{}}};

  // OR
  if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'anyOf', 'array') ) {
    const tempFailures = [];
    rtrn.valid = schema.anyOf.some(function(item) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item);

      if (getRtrn.valid) {
        return true;
      }
      Array.prototype.push.apply(tempFailures, getRtrn.failures.self);

      return false;
    });

    if(!rtrn.valid){
      Array.prototype.push.apply(rtrn.failures.self, tempFailures);
      rtrn.failures.self.push('At least one criterion should match');
    }
  }

  // AND
  if ( rtrn.valid && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'allOf', 'array') ) {
    rtrn.valid = schema.anyOf.every(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);

      if (!getRtrn.valid) {
        return false;
        Array.prototype.push.apply(rtrn.failures.self, getRtrn.failures.self);
      }
      return true;
    });
    if(!rtrn.valid){
      rtrn.failures.self.push('All criteria should match');
    }
  }

  // NOR
  if ( rtrn.valid && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'not', 'array') ) {
    rtrn.valid = !schema.anyOf.some(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);

      if (getRtrn.valid) {
        return true;
        Array.prototype.push.apply(rtrn.failures.self, getRtrn.failures.self);
      }
      return false;
    });
    if(!rtrn.valid){
      rtrn.failures.self.push('None of criteria should match');
    }
  }


  // XOR
  if ( rtrn.valid && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'oneOf', 'array') ) {
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
      rtrn.failures.self.push('Only one criterion should match');			
    }
  }
	
  // XOR plus
  if ( rtrn.valid && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'nOf', 'object') 
  && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema.nOf, 'list', 'array')
  && ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema.nOf, 'minimum', 'number') || Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema.nOf, 'maximum', 'number'))
  ) {
    const minimum = Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema.nOf, 'minimum', 'number') ? schema.nOf.minimum : 0;
    const maximum = Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema.nOf, 'maximum', 'number') ? schema.nOf.maximum : schema.nOf.list.length;
    let counterTrue = 0;
    schema.nOf.list.forEach(function(item, idx) {
      const getRtrn = (hasLogicDoors(item)) 
        ? logicDoors(value, item, callback)
        : callback(value, item, idx);
      if (getRtrn.valid) {
        counterTrue++;
      }
    });
    if (counterTrue >= minimum && counterTrue <= maximum) {
      rtrn.valid = true;
    }
    else {
      rtrn.failures.self.push('Criteria to match must be between ' + minimum + ' and ' + maximum);			
    }

  }

  return rtrn;
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stringFormats__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeString__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeNumber__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeArray__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeObject__ = __webpack_require__(8);








const typeValidators = {
  'string': __WEBPACK_IMPORTED_MODULE_3__typeString__["b" /* typeString */],
  'number': __WEBPACK_IMPORTED_MODULE_4__typeNumber__["b" /* typeNumber */],
  'array': __WEBPACK_IMPORTED_MODULE_5__typeArray__["b" /* typeArray */],
  'object': __WEBPACK_IMPORTED_MODULE_6__typeObject__["b" /* typeObject */]
};
const typeSuperSchemas = {
  'string': __WEBPACK_IMPORTED_MODULE_3__typeString__["a" /* schemaString */],
  'number': __WEBPACK_IMPORTED_MODULE_4__typeNumber__["a" /* schemaNumber */],
  'array': __WEBPACK_IMPORTED_MODULE_5__typeArray__["a" /* schemaArray */],
  'object': __WEBPACK_IMPORTED_MODULE_6__typeObject__["a" /* schemaObject */]
};


Object.keys(__WEBPACK_IMPORTED_MODULE_2__stringFormats__["a" /* stringFormats */]).forEach( function (key) {
  __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushStringFormat(key, __WEBPACK_IMPORTED_MODULE_2__stringFormats__["a" /* stringFormats */][key]);
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
  __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushType(type, typeValidators[type], typeSuperSchemas[type]);
});

// add root super schema
__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushSuperSchema('root', {
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

const types = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].types, 
  superSchemas = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].superSchemas, 
  getStringFormats = function () {
    return __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].stringFormats;
  },
  pushType = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushType,
  pushTypeValidator = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushTypeValidator,
  pushSuperSchema = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushSuperSchema, 
  pushStringFormat = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushStringFormat,
  check = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].check,
  jType = __WEBPACK_IMPORTED_MODULE_1__basicCheck__["b" /* varType */];
/* harmony export (immutable) */ __webpack_exports__["types"] = types;

/* harmony export (immutable) */ __webpack_exports__["superSchemas"] = superSchemas;

/* harmony export (immutable) */ __webpack_exports__["getStringFormats"] = getStringFormats;

/* harmony export (immutable) */ __webpack_exports__["pushType"] = pushType;

/* harmony export (immutable) */ __webpack_exports__["pushTypeValidator"] = pushTypeValidator;

/* harmony export (immutable) */ __webpack_exports__["pushSuperSchema"] = pushSuperSchema;

/* harmony export (immutable) */ __webpack_exports__["pushStringFormat"] = pushStringFormat;

/* harmony export (immutable) */ __webpack_exports__["check"] = check;

/* harmony export (immutable) */ __webpack_exports__["jType"] = jType;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stringFormats; });
const stringFormats = {

  'date-time': function (value) {
    let rtrn = false;
    const baseTest = /\d{4}-(\d{2})-(\d{2})([Tt](\d{2}):(\d{2})(:(\d{2})(.\d{2,4})?[zZ]?)?)?/.exec(value);
    if(baseTest && !isNaN(Date.parse(value))){
      rtrn = true;				
    }
    return rtrn;
  },
  hostname: function (value) {
    return /^(\w([\w\-]{0,61}\w)?\.)+[a-z]{2,6}$/i.test(value);
  },
  /**
	 * thanks to jteeuwen http://www.regexlib.com/UserPatterns.aspx?authorId=b1531f40-c046-4253-9800-b4ff419c01b2
	 * @param  {String} value 
	 * @return {Boolean} 
	 */
  ipv4: function (value) {
    return /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})){3}$/.test(value);
  },
  /**
	 * Thank to jteeuwen
	 * @param  {String} value 
	 * @return {Boolean} 
	 */
  ipv6: function (value) {
    const regex = new RegExp('(^\d{20}$)|(^((:[a-fA-F0-9]{1,4}){6}|::)ffff:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]{1,2})){3}$)|(^((:[a-fA-F0-9]{1,4}){6}|::)ffff(:[a-fA-F0-9]{1,4}){2}$)|(^([a-fA-F0-9]{1,4}) (:[a-fA-F0-9]{1,4}){7}$)|(^:(:[a-fA-F0-9]{1,4}(::)?){1,6}$)|(^((::)?[a-fA-F0-9]{1,4}:){1,6}:$)|(^::$)');
    return regex.test(value);		
  },
  uri: function (value) {
    const regex = new RegExp('^((http|https|ftp):\/\/)?((.*?):(.*?)@)?(\w[\w\-]{0,61}[\w])((\.\w[\w\-]{0,61}\w*)(:([0-9]{1,5}))?((\/.*?)(\?(.*?))?(\#(.*))?)?$', 'i');
    return regex.test(value);
  },
  /**
	 * simplified version of email validation. It is not strict compliant with rfc5322 
	 * @param  {String} 	value to validate
	 * @return {Boolean}
	 */
  email: function (value) {
  	const regexp = new RegExp('/^((([a-z]|\d|[!#\$%&\u0027\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&\u0027\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$','i');
  	return regex.test(value);
  }
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaString; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logicDoors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
/**
 * 
 */




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
  if(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(patt, 'string')) {
    patt = new RegExp(patt);
  }
  if (__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(patt, 'regexp')) {
    if (!patt.test(value)) {
      rtrn.valid = false;
      rtrn.failures.push('the text must fit the pattern at schema');							
    }
  }
  return rtrn;
}

function formatTest(value, format) {
  const rtrn = { valid: true, failures: []};
  if( __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Scheson */].stringFormats.hasOwnProperty(format)) {
    if ( !__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Scheson */].stringFormats[format](value) ) {
      rtrn.valid = false;
      rtrn.failures.push('string value doesn\'t fit with ' + format + ' specification');
    }
  }
  return rtrn;
}

const typeString = {
  minLength: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'minLength', 'number') && value <= schema.minLength) {
      rtrn.valid = false;
      rtrn.failures.push('string shorter than allowed (' + schema.minLength + ')');
    }
    return rtrn;		
  },
  maxLength: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'maxLength', 'number') && value <= schema.maxLength) {
      rtrn.valid = false;
      rtrn.failures.push('string longer than allowed (' + schema.maxLength + ')');
    }
    return rtrn;		
  },
  enumarate: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'enumerate', 'array') && schema.enumerate.indexOf(value) === -1) {
      rtrn.valid = false,
      rtrn.failures.push('value must be one of enumerated: [' + schema.enumerate.join(', ') + ']');
    }
    return rtrn;		
  },
  pattern: function(value, schema){
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'pattern')) {
      const getRtrn = (Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["a" /* hasLogicDoors */])(schema.pattern)) 
        ? Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["b" /* logicDoors */])(value, schema.pattern, patternTest)
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
    if (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'format')) {
      const getRtrn = (Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["a" /* hasLogicDoors */])(schema.format)) 
        ? Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["b" /* logicDoors */])(value, schema.format, formatTest)
        : patternTest(value, schema.format);
      if(rtrn.valid){
        rtrn.valid = getRtrn.valid;
      }
      Array.prototype.push.apply(rtrn.failures, getRtrn.failures);

    }
    return rtrn;
  },

};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/**
 * 
 */


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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'minimum', 'number') ) {
      if( 
        (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'exclusiveMinimum', 'boolean', true) && value <= schema.minimum) 
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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'maximum', 'number') ) {
      if( 
        (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'exclusiveMaximum', 'boolean', true) && value <= schema.maximum) 
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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'multipleOf', 'number') && value % schema.multipleOf !== 0) {
      rtrn.valid = false,
      rtrn.failures.self.push('value must be multiple of ' + schema.multipleOf);
    }
    return rtrn;
  },
  enumerate: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'enumerate', 'array') && schema.enumerate.indexOf(value) === -1) {
      rtrn.valid = false,
      rtrn.failures.self.push('value must be one of enumerated: [' + schema.enumerate.join(',') + ']');
    }
    return rtrn;
  },

};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);
/**
 * 
 */



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
    const itemsNum = Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'items', 'array') ? schema.items.length: 0;

    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'additionalItems', 'boolean') && !schema.additionalItems
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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'minItems', 'number') && value.length < schema.minItems) {
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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'maxItems', 'number') && value.length < schema.maxItems) {
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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'uniqueItems')) {
      const witness = [];
      rtrn.valid = !value.some(function (item) {
        const element = Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */])(schema.uniqueItems, 'string') ? item[schema.uniqueItems] : item;
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
      const schemaIt = __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(schema.items, 'array') ? schema.items[idx] : schema.items;
      const getRtrn = __WEBPACK_IMPORTED_MODULE_1__base__["a" /* Scheson */].check(item, schemaIt);
      if ( rtrn.valid ){
        rtrn.valid = getRtrn.valid;
      }
      rtrn.failures.children = Object(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* appendChildFailures */])(rtrn.failures.children, key, getRtrn.failures);              
    });
    return rtrn;
  }
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logicDoors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
/**
 * 
 */




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
      Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'additionalProperties', 'boolean') && !schema.additionalProperties
      && Object.keys(value).some( function(item) {
        return ( 
          !Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'properties', 'object') 
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

    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'properties', 'object') ) {
      Object.keys(schema.properties).forEach( function (key) {
        if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(value, key, schema.properties[key].type) ) {

          const getRtrn = (Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["a" /* hasLogicDoors */])(schema.properties[key])) 
            ? Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["b" /* logicDoors */])(value[key], schema.properties[key], __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Scheson */].check)
            : __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Scheson */].check(value[key], schema.properties[key]);

          if(!getRtrn.valid){
            
            rtrn.valid = getRtrn.valid;
            rtrn.failures.children = Object(__WEBPACK_IMPORTED_MODULE_2__base__["b" /* appendChildFailures */])(rtrn.failures.children, key, getRtrn.failures);              
          }
        }
      });
    }
    return rtrn;
  }
};



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE1MWJkMjkwZDU4MjY2M2Y2MzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2ljQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljRG9vcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5nRm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZU51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxZQUFZO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R29DO0FBQ0E7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxrRTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5Qix1QkFBdUI7O0FBRWxFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwrSjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NoZXNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlhNTFiZDI5MGQ1ODI2NjNmNjMyIiwiY29uc3QgdmFyVHlwZSA9IHt9O1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXModmFyVHlwZSwge1xuICBnZXQ6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih2YWx1ZSAvKiwgbG93ZXJjYXNlICovKSB7XG4gICAgICBsZXQgcnRybiA9IC9cXHMoXFx3KyldL2kuZXhlYyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpKVsxXTsgLy8gVE9ETzogdGVzdCBpbiBNU0lFIGZvciBOb2RlQ29sbGVjdGlvblxuICAgICAgcnRybiA9ICgvRXZlbnQvLnRlc3QocnRybikpID8gJ0V2ZW50LicgKyBydHJuIDogcnRybjtcbiAgICAgIHJ0cm4gPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdKSA/IHJ0cm4udG9Mb3dlckNhc2UoKSA6IHJ0cm47XG4gICAgICBpZihydHJuID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpIHsgLy8gTmFOIGNvcnJlY3Rpb25cbiAgICAgICAgcnRybiA9IChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0pID8gJ25hbicgOiAnTmFOJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cbiAgfSxcbiAgaXM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgdHlwZSkge1xuICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGFyZ1R5cGUgPSB2YXJUeXBlLmdldCh2YWx1ZSwgdHJ1ZSk7XG4gICAgICBpZih0eXBlID09PSAnZXZlbnQnKXtcbiAgICAgICAgcmV0dXJuIC9ldmVudCQvaS50ZXN0KGFyZ1R5cGUpO1xuICAgICAgfVxuICAgICAgIGlmKHR5cGUgPT09ICdlcnJvcicpe1xuICAgICAgICByZXR1cm4gL2Vycm9yJC9pLnRlc3QoYXJnVHlwZSk7XG4gICAgICB9XG4gICAgICBpZiggYXJnVHlwZSA9PT0gJ2h0bWxjb2xsZWN0aW9uJyB8fCBhcmdUeXBlID09PSAnbm9kZWxpc3QnKSB7XG4gICAgICAgIHJldHVybiAodHlwZSA9PT0gJ2h0bWxjb2xsZWN0aW9uJyB8fCB0eXBlID09PSAnbm9kZWxpc3QnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgcmV0dXJuIChhcmdUeXBlID09PSAnaHRtbGVsZW1lbnQnICYmIHZhclR5cGUuaXModmFsdWUubm9kZVR5cGUsICdudW1iZXInKSApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ1R5cGUgPT0gdHlwZTtcbiAgICB9XG4gIH0sXG4gIGlzQnVpbHRJbjoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAvLyBUT0RPOiBpZiBpdCBpcyBwb3NzaWJsZSwgc3VwZXJzZWQgdGhpcyBmdW5jdGlvbiBieSBhbiBhdXRvbWF0aWMgd2F5IHRvIGNoZWNrIHN1cHBvcnRlZCBidWlsdC1pbnNcbiAgICAgIC8vIHdpdGggdGhlIHJlc3BlY3RpdmUgY29ycmVjdGlvbnNcbiAgICAgIGNvbnN0IGJ1aWx0SW5zID0gWydudWxsJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ25hbicsICdzdHJpbmcnLCAnYXJyYXknLCAnb2JqZWN0JyxcbiAgICAgICAgJ2Z1bmN0aW9uJywgJ2RhdGUnLCAncmVnZXhwJywgJ2h0bWxjb2xsZWN0aW9uJywgJ2h0bWxlbGVtZW50JywgJ25vZGVsaXN0JywgJ25vZGUnLFxuICAgICAgICAncHJvbWlzZScsICdhcnJheWJ1ZmZlcicsICdyZWZsZWN0JywgJ21hcCcsICd3ZWFrJywgJ3dlYWttYXAnLCAnc2V0JywgJ3N5bWJvbCcsXG4gICAgICAgICd4bWxodHRwcmVxdWVzdCcsXG4gICAgICAgICdldmVudCcsICdtb3VzZWV2ZW50JywgJ2FuaW1hdGlvbmV2ZW50JywgJ3doZWVsZXZlbnQnLCAna2V5Ym9hcmRldmVudCcsXG4gICAgICAgICdlcnJvcicsICd0eXBlZXJyb3InLCAncmFuZ2VlcnJvcicsICdyZWZlcmVuY2VlcnJvciddO1xuICAgICAgICByZXR1cm4gYnVpbHRJbnMuaW5kZXhPZih0eXBlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuICB9LFxuICBwYXJzZVN0cmluZzoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgaWYgKHZhclR5cGUuaXMoc3RyLCAnc3RyaW5nJykpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudGFscyA9IHtcbiAgICAgICAgICAnbnVsbCc6IG51bGwsXG4gICAgICAgICAgJ2ZhbHNlJzogZmFsc2UsXG4gICAgICAgICAgJ3RydWUnOiB0cnVlLFxuICAgICAgICAgICduYW4nOiBOYU4sXG4gICAgICAgICAgJ2luZmluaXR5JzogSW5maW5pdHlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVsZW1lbnRhbHMuaGFzT3duUHJvcGVydHkoc3RyLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgc3RyID0gZWxlbWVudGFsc1tzdHIudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VGbG9hdChzdHIpKSkge1xuICAgICAgICAgICAgc3RyID0gcGFyc2VGbG9hdChzdHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgvXlxccypcXFsoLnxcXG58XFxyKSpcXF1cXHMqJC9nbS50ZXN0KHN0cikgfHwgL15cXHMqXFx7KC58XFxufFxccikqXFx9XFxzKiQvZ20udGVzdChzdHIpKXtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdHIgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZhclR5cGUucGFyc2VTdHJpbmcgdXNlZCB3aXRoIG5vbi1zdHJpbmcgdmFsdWUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gZGVmaW5lZFR5cGVWYWx1ZShvYmosIHByb3AgLyosIHR5cGUsIHZhbHVlKi8pIHtcbiAgbGV0IHJ0cm4gPSB0cnVlO1xuICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIHZhclR5cGUuaXMoYXJndW1lbnRzWzJdLCAnc3RyaW5nJykgKXtcbiAgICAgIGlmKCF2YXJUeXBlLmlzKG9ialtwcm9wXSwgYXJndW1lbnRzWzJdKSl7XG4gICAgICAgIHJ0cm4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCBydHJuICYmIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIG9ialtwcm9wXSAhPT0gYXJndW1lbnRzWzNdKSB7XG4gICAgICBydHJuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJ0cm4gPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuZXhwb3J0IHt2YXJUeXBlLCBkZWZpbmVkVHlwZVZhbHVlfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNpY0NoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHZhclR5cGUsIGRlZmluZWRUeXBlVmFsdWUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgbG9naWNEb29ycywgaGFzTG9naWNEb29ycyB9IGZyb20gJy4vbG9naWNEb29ycyc7XG5cbmNvbnN0IFNjaGVzb24gPSB7fTtcblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRGYWlsdXJlcyhjaGlsZHJlbk9iaiwga2V5LCBmYWlsdXJlcykge1xuICBpZiAoICFjaGlsZHJlbk9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgY2hpbGRyZW5PYmpba2V5XSA9IHsgc2VsZjogW10sIGNoaWxkcmVuOiB7fX07XG4gIH1cbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY2hpbGRyZW5PYmpba2V5XS5zZWxmLCBmYWlsdXJlcy5zZWxmKTtcbiAgaWYgKE9iamVjdC5rZXlzKGZhaWx1cmVzLmNoaWxkcmVuKS5sZW5ndGggPiAwKSB7XG4gICAgT2JqZWN0LmtleXMoZmFpbHVyZXMuY2hpbGRyZW4pLmZvckVhY2goIGZ1bmN0aW9uIChjaGlsZEtleSkge1xuICAgICAgZmFpbHVyZXMuY2hpbGRyZW4gPSBhcHBlbmRDaGlsZEZhaWx1cmVzKGZhaWx1cmVzLmNoaWxkcmVuLCBjaGlsZEtleSwgZmFpbHVyZXMuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjaGlsZHJlbk9iajtcbn1cblxuZnVuY3Rpb24gYWxsUmVxdWlyZWQodmFsdWUsIHNjaGVtYSkge1xuICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHtzZWxmOltdLCBjaGlsZHJlbjpbXX19O1xuICBjb25zdCBtaXNzaW5nUHJvcCA9IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAncmVxdWlyZWQnLCAnYXJyYXknKSBcbiAgICA/IHNjaGVtYS5yZXF1aXJlZC5zb21lKCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gIXZhbHVlLmhhc093blByb3BlcnR5KGl0ZW0pO1xuICAgIH0pXG4gICAgOiBmYWxzZTtcbiAgaWYgKG1pc3NpbmdQcm9wKSB7XG4gICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCd0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIHJlcXVpcmVkOiAnICsgc2NoZW1hLnJlcXVpcmVkLmpvaW4oJywgJykpO1xuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG5mdW5jdGlvbiBzd2VlcENoZWNrZXJzKHZhbHVlLCBzY2hlbWEpe1xuICBjb25zdCBydHJuID0ge1xuICAgIHZhbGlkOiB0cnVlLCBcbiAgICBmYWlsdXJlczoge1xuICAgICAgc2VsZjogW10sXG4gICAgICBjaGlsZHJlbjoge31cbiAgICB9XG4gIH07XG4gIGlmICggdmFyVHlwZS5pc0J1aWx0SW4oc2NoZW1hLnR5cGUpICYmICF2YXJUeXBlLmlzKHZhbHVlLCBzY2hlbWEudHlwZSkpIHtcbiAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ2JhZCB0eXBlLCBpdCBzaG91bGQgYmUgJyArIHNjaGVtYS50eXBlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpZiggU2NoZXNvbi50eXBlcy5oYXNPd25Qcm9wZXJ0eShzY2hlbWEudHlwZSkpIHtcbiAgICAgIGNvbnN0IGFsbFJlcSA9IGFsbFJlcXVpcmVkKHZhbHVlLCBzY2hlbWEpO1xuICAgICAgaWYgKCAhYWxsUmVxLnZhbGlkICkge1xuICAgICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuc2VsZiwgYWxsUmVxLmZhaWx1cmVzLnNlbGYpOyAgICAgXG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhTY2hlc29uLnR5cGVzW3NjaGVtYS50eXBlXSkuZm9yRWFjaCggZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGNvbnN0IGdldFJ0cm4gPSBTY2hlc29uLnR5cGVzW3NjaGVtYS50eXBlXVtrZXldKHZhbHVlLCBzY2hlbWEpO1xuICAgICAgICBpZihydHJuLnZhbGlkKSB7XG4gICAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcy5zZWxmLCBnZXRSdHJuLmZhaWx1cmVzLnNlbGYpO1xuICAgICAgICBPYmplY3Qua2V5cyhnZXRSdHJuLmZhaWx1cmVzLmNoaWxkcmVuKS5mb3JFYWNoKCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBpZiAoIHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcy5jaGlsZHJlbltrZXldLCBnZXRSdHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW5ba2V5XSA9IGdldFJ0cm4uZmFpbHVyZXMuY2hpbGRyZW5ba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNjaGVzb24sIHtcbiAgdHlwZXM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7fVxuICB9LFxuICBzdHJpbmdGb3JtYXRzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge31cdFxuICB9LFxuICBzdXBlclNjaGVtYXM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7fVxuICB9LFxuICBwdXNoVHlwZToge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHR5cGVOYW1lLCBvYmovKiwgc3VwZXJTY2hlbWEsIGZvcmNlKi8pIHtcbiAgICAgIGNvbnN0IGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuICAgICAgbGV0IHJ0cm4gPSB0cnVlO1xuICAgICAgaWYgKCBTY2hlc29uLnR5cGVzLmhhc093blByb3BlcnR5KHR5cGVOYW1lKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0eXBlTmFtZSArICcgYWxyZWFkeSBleGlzdHMsIHRyeSB3aXRoIHRoZSBmb3JjZSBwYXJhbWV0ZXIgdG8gb3ZlcndyaXRlIGl0Jyk7XG4gICAgICB9XG4gICAgICBpZiggIXZhclR5cGUuaXModHlwZU5hbWUsICdzdHJpbmcnKSB8fCAhdmFyVHlwZS5pcyhvYmosICdvYmplY3QnKSkge1xuICAgICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgdHlwZXMgYXQgU2NoZXNvbi5wdXNoVHlwZScpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdiYWQgdHlwZXMgYXQgU2NoZXNvbi5wdXNoVHlwZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlc29uLnR5cGVzLCB0eXBlTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBvYmpcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgcnRybiA9IFNjaGVzb24ucHVzaFN1cGVyU2NoZW1hKHR5cGVOYW1lLCBhcmd1bWVudHNbMl0sIGZvcmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ0cm47XG4gICAgfVxuICB9LFxuICBwdXNoVHlwZVZhbGlkYXRvcjoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHR5cGVOYW1lLCB2YWxpZGF0b3JOYW1lLCBmbi8qLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIGxldCBydHJuID0gdHJ1ZTtcbiAgICAgIGlmICggIVNjaGVzb24udHlwZXMuaGFzT3duUHJvcGVydHkodHlwZU5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggdHlwZU5hbWUgKyAnIGRvZXNuXFwndCBleGlzdHMsIGFkZCBpdCBmaXJzdCB3aXRoIHB1c2hUeXBlJyk7XG4gICAgICB9XG4gICAgICBpZiAoIFNjaGVzb24udHlwZXNbdHlwZU5hbWVdLmhhc093blByb3BlcnR5KHZhbGlkYXRvck5hbWUpICYmICFmb3JjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHZhbGlkYXRvck5hbWUgKyAnIGFscmVhZHkgZXhpc3RzLCB0cnkgd2l0aCB0aGUgZm9yY2UgcGFyYW1ldGVyIHRvIG92ZXJ3cml0ZSBpdCcpO1xuICAgICAgfVxuICAgICAgaWYoICF2YXJUeXBlLmlzKHZhbGlkYXRvck5hbWUsICdzdHJpbmcnKSB8fCAhdmFyVHlwZS5pcyhmbiwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGVWYWxpZGF0b3InKTtcbiAgICAgIH1cbiAgICAgIGlmKCBmbi5sZW5ndGggIT09IDIgKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZuIHNob3VsZCBoYXZlIDIgYXJndW1lbnRzIGF0IFNjaGVzb24ucHVzaFR5cGVWYWxpZGF0b3IodHlwZU5hbWUsIHZhbGlkYXRvck5hbWUsIGZuKScpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi50eXBlc1t0eXBlTmFtZV0sIHZhbGlkYXRvck5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZm5cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcnRybjtcbiAgICB9XHRcdFxuICB9LFxuICBwdXNoU3RyaW5nRm9ybWF0OiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24oZm9ybWF0TmFtZSwgZm4vKiwgZm9yY2UqLykge1xuICAgICAgY29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgICBpZiAoIFNjaGVzb24uc3RyaW5nRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShmb3JtYXROYW1lKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBmb3JtYXROYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCAhdmFyVHlwZS5pcyhmb3JtYXROYW1lLCAnc3RyaW5nJykgfHwgIXZhclR5cGUuaXMoZm4sICdmdW5jdGlvbicpKSB7XG4gICAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hTdHJpbmdGb3JtYXQnLCB2YXJUeXBlLmdldChmb3JtYXROYW1lKSwgdmFyVHlwZS5nZXQoZm4pKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdCcsIHZhclR5cGUuZ2V0KGZvcm1hdE5hbWUpLCB2YXJUeXBlLmdldChmbikpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi5zdHJpbmdGb3JtYXRzLCBmb3JtYXROYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZuXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcHVzaFN1cGVyU2NoZW1hOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odHlwZU5hbWUsIG9iai8qLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAgIGlmICggU2NoZXNvbi5zdXBlclNjaGVtYXMuaGFzT3duUHJvcGVydHkodHlwZU5hbWUpICYmICFmb3JjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCAhdmFyVHlwZS5pcyh0eXBlTmFtZSwgJ3N0cmluZycpIHx8ICF2YXJUeXBlLmlzKG9iaiwgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hTdXBlclNjaGVtYScpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdiYWQgdHlwZXMgYXQgU2NoZXNvbi5wdXNoU3VwZXJTY2hlbWEnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVzb24uc3VwZXJTY2hlbWFzLCB0eXBlTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBvYmpcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuXG4gIGNoZWNrOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSwgY2hlY2tTY2hlbWEpIHtcbiAgICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOnRydWUsIGZhaWx1cmVzOnt9LCBlcnJvcnM6IHt9fTtcbiAgICAgIGlmIChjaGVja1NjaGVtYSkge1xuICAgICAgICBjb25zdCBnZXRSdHJuID0gU2NoZXNvbi5jaGVjayhzY2hlbWEsIFNjaGVzb24uc3VwZXJTY2hlbWFzLnJvb3QpO1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgcnRybi5lcnJvcnMgPSBnZXRSdHJuLmZhaWx1cmVzO1xuICAgICAgfVxuICAgICAgaWYgKHJ0cm4udmFsaWQpIHtcblxuICAgICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hKSkgXG4gICAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEsIHN3ZWVwQ2hlY2tlcnMpXG4gICAgICAgICAgOiBzd2VlcENoZWNrZXJzKHZhbHVlLCBzY2hlbWEpO1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgcnRybi5mYWlsdXJlcyA9IGdldFJ0cm4uZmFpbHVyZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcnRybjtcbiAgICB9XG4gIH0sXG5cbiAgdmFsaWRPYmplY3RDbGVhbmVyOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsaWRPYmopIHtcbiAgICAgIGlmKCAhdmFyVHlwZS5pcyh2YWxpZE9iLCAnb2JqZWN0JykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigndmFsaWRPYmogbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogd2FsayB0aGUgb2JqZWN0IHRyZWUgYW5kIGNsZWFuIGVtcHR5IHBhcnRzIFxuICAgIH1cbiAgfVxufSk7XG5cblxuZXhwb3J0IHsgU2NoZXNvbiwgYXBwZW5kQ2hpbGRGYWlsdXJlcyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSwgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5cbi8qKlxuICogY2hlY2sgaWYgdGhlIG9iamVjdCBoYXMgZGVmaW5lZCBhdCBsZWFzdCBvbmUgbG9naWMgZG9vclxuICogQHBhcmFtICB7T2JqZWN0fSAgc2NoZW1hIHRoZSBvYmplY3QgdG8gY2hlY2sgaW5zaWRlXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgSGFzIG9yIG5vdCwgdGhpcyBpcyB0aGUgcXVlc3Rpb25cbiAqL1xuZnVuY3Rpb24gaGFzTG9naWNEb29ycyhzY2hlbWEpIHtcbiAgbGV0IHJ0cm4gPSBmYWxzZTtcbiAgaWYgKHZhclR5cGUuaXMoc2NoZW1hLCAnb2JqZWN0JykpIHtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYW55T2YnLCAnYXJyYXknKSBcbiAgfHwgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhbGxPZicsICdhcnJheScpXG4gIHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnb25lT2YnLCAnYXJyYXknKVxuICB8fCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ25vdCcsICdhcnJheScpKSB7XG4gICAgICBydHJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbi8qKlxuICogdmFsaWRhdGUgdmFsdWUgYWdhaW5zdCBkaWZmZXJlbnQgc2NlbmFyaW9zIG9mIGxvZ2ljIGRvb3JzXG4gKiBcbiAqIEBwYXJhbSAge0FueX0gICB2YWx1ZSAgICAgICB0byB2YWxpZGF0ZSBhZ2FpbnN0XG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2NoZW1hICAgV2l0aCBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdGFueU9mIChPUilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdGFsbE9mIChBTkQpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtBcnJheX0gXHRub3QgXHQoTk9SKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0b25lT2YgKFhPUilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e09iamVjdH0gXHRuT2YgIChzcGVjaWFsIFhPUikgd2l0aCBmb2xsb3dpbmcgcHJvcGVydGllc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHtBcnJheX1cdFx0bGlzdCAocmVxdWlyZWQpIHZhbGlkYXRpb24gY3JpdGVyaWFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHtOdW1iZXJ9XHRtaW5pbXVtXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0e051bWJlcn0gXHRtYXhpbXVtXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbG9naWNEb29ycyh2YWx1ZSwgc2NoZW1hLCBjYWxsYmFjaykge1xuICBjb25zdCBydHJuID0ge3ZhbGlkOiB0cnVlLCBmYWlsdXJlczoge3NlbGY6W10sIGNoaWxkcmVuOnt9fX07XG5cbiAgLy8gT1JcbiAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FueU9mJywgJ2FycmF5JykgKSB7XG4gICAgY29uc3QgdGVtcEZhaWx1cmVzID0gW107XG4gICAgcnRybi52YWxpZCA9IHNjaGVtYS5hbnlPZi5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0pO1xuXG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRlbXBGYWlsdXJlcywgZ2V0UnRybi5mYWlsdXJlcy5zZWxmKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYoIXJ0cm4udmFsaWQpe1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcy5zZWxmLCB0ZW1wRmFpbHVyZXMpO1xuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ0F0IGxlYXN0IG9uZSBjcml0ZXJpb24gc2hvdWxkIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQU5EXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FsbE9mJywgJ2FycmF5JykgKSB7XG4gICAgcnRybi52YWxpZCA9IHNjaGVtYS5hbnlPZi5ldmVyeShmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cbiAgICAgIGlmICghZ2V0UnRybi52YWxpZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuc2VsZiwgZ2V0UnRybi5mYWlsdXJlcy5zZWxmKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmKCFydHJuLnZhbGlkKXtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdBbGwgY3JpdGVyaWEgc2hvdWxkIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTk9SXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ25vdCcsICdhcnJheScpICkge1xuICAgIHJ0cm4udmFsaWQgPSAhc2NoZW1hLmFueU9mLnNvbWUoZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuICAgICAgICA6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuXG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcy5zZWxmLCBnZXRSdHJuLmZhaWx1cmVzLnNlbGYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGlmKCFydHJuLnZhbGlkKXtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdOb25lIG9mIGNyaXRlcmlhIHNob3VsZCBtYXRjaCcpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gWE9SXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ29uZU9mJywgJ2FycmF5JykgKSB7XG4gICAgbGV0IGNvdW50ZXJUcnVlID0gMDtcbiAgICBzY2hlbWEuYW55T2YuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cbiAgICAgIGlmIChnZXRSdHJuLnZhbGlkKSB7XG4gICAgICAgIGNvdW50ZXJUcnVlKys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ZXJUcnVlID09PSAxKSB7XG4gICAgICBydHJuLnZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnT25seSBvbmUgY3JpdGVyaW9uIHNob3VsZCBtYXRjaCcpO1x0XHRcdFxuICAgIH1cbiAgfVxuXHRcbiAgLy8gWE9SIHBsdXNcbiAgaWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbk9mJywgJ29iamVjdCcpIFxuICAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdsaXN0JywgJ2FycmF5JylcbiAgJiYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtaW5pbXVtJywgJ251bWJlcicpIHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ21heGltdW0nLCAnbnVtYmVyJykpXG4gICkge1xuICAgIGNvbnN0IG1pbmltdW0gPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtaW5pbXVtJywgJ251bWJlcicpID8gc2NoZW1hLm5PZi5taW5pbXVtIDogMDtcbiAgICBjb25zdCBtYXhpbXVtID0gZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWF4aW11bScsICdudW1iZXInKSA/IHNjaGVtYS5uT2YubWF4aW11bSA6IHNjaGVtYS5uT2YubGlzdC5sZW5ndGg7XG4gICAgbGV0IGNvdW50ZXJUcnVlID0gMDtcbiAgICBzY2hlbWEubk9mLmxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICBjb3VudGVyVHJ1ZSsrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb3VudGVyVHJ1ZSA+PSBtaW5pbXVtICYmIGNvdW50ZXJUcnVlIDw9IG1heGltdW0pIHtcbiAgICAgIHJ0cm4udmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdDcml0ZXJpYSB0byBtYXRjaCBtdXN0IGJlIGJldHdlZW4gJyArIG1pbmltdW0gKyAnIGFuZCAnICsgbWF4aW11bSk7XHRcdFx0XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gcnRybjtcbn1cblxuZXhwb3J0IHtoYXNMb2dpY0Rvb3JzLCBsb2dpY0Rvb3JzfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sb2dpY0Rvb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNjaGVzb24gfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBzdHJpbmdGb3JtYXRzIH0gZnJvbSAnLi9zdHJpbmdGb3JtYXRzJztcbmltcG9ydCB7IHR5cGVTdHJpbmcsIHNjaGVtYVN0cmluZyB9IGZyb20gJy4vdHlwZVN0cmluZyc7XG5pbXBvcnQgeyB0eXBlTnVtYmVyLCBzY2hlbWFOdW1iZXIgfSBmcm9tICcuL3R5cGVOdW1iZXInO1xuaW1wb3J0IHsgdHlwZUFycmF5LCBzY2hlbWFBcnJheSB9IGZyb20gJy4vdHlwZUFycmF5JztcbmltcG9ydCB7IHR5cGVPYmplY3QsIHNjaGVtYU9iamVjdCB9IGZyb20gJy4vdHlwZU9iamVjdCc7XG5cbmNvbnN0IHR5cGVWYWxpZGF0b3JzID0ge1xuICAnc3RyaW5nJzogdHlwZVN0cmluZyxcbiAgJ251bWJlcic6IHR5cGVOdW1iZXIsXG4gICdhcnJheSc6IHR5cGVBcnJheSxcbiAgJ29iamVjdCc6IHR5cGVPYmplY3Rcbn07XG5jb25zdCB0eXBlU3VwZXJTY2hlbWFzID0ge1xuICAnc3RyaW5nJzogc2NoZW1hU3RyaW5nLFxuICAnbnVtYmVyJzogc2NoZW1hTnVtYmVyLFxuICAnYXJyYXknOiBzY2hlbWFBcnJheSxcbiAgJ29iamVjdCc6IHNjaGVtYU9iamVjdFxufTtcblxuXG5PYmplY3Qua2V5cyhzdHJpbmdGb3JtYXRzKS5mb3JFYWNoKCBmdW5jdGlvbiAoa2V5KSB7XG4gIFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdChrZXksIHN0cmluZ0Zvcm1hdHNba2V5XSk7XG59KTtcblxuLyoqXG4gKiBib29sZWFuIHN1cGVyIFNjaGVtYVxuICovXG50eXBlU3VwZXJTY2hlbWFzWydib29sZWFuJ10gPSB7XG4gIHR5cGU6ICdzdHJpbmcnXG59O1xuXG4vKipcbiAqIGJvb2xlYW4gc3VwZXIgU2NoZW1hXG4gKi9cbnR5cGVTdXBlclNjaGVtYXNbJ251bGwnXSA9IHtcbiAgdHlwZTogJ3N0cmluZydcbn07XG5cbi8vIGFkZCBidWlsdC1pbiB0eXBlcyBhbmQgc3VwZXJTY2hlbWFzXG5cbk9iamVjdC5rZXlzKHR5cGVWYWxpZGF0b3JzKS5mb3JFYWNoKCBmdW5jdGlvbih0eXBlKSB7XG4gIFNjaGVzb24ucHVzaFR5cGUodHlwZSwgdHlwZVZhbGlkYXRvcnNbdHlwZV0sIHR5cGVTdXBlclNjaGVtYXNbdHlwZV0pO1xufSk7XG5cbi8vIGFkZCByb290IHN1cGVyIHNjaGVtYVxuU2NoZXNvbi5wdXNoU3VwZXJTY2hlbWEoJ3Jvb3QnLCB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnaWQnLCAndHlwZSddXG59KTtcblxuZXhwb3J0IGNvbnN0IHR5cGVzID0gU2NoZXNvbi50eXBlcywgXG4gIHN1cGVyU2NoZW1hcyA9IFNjaGVzb24uc3VwZXJTY2hlbWFzLCBcbiAgZ2V0U3RyaW5nRm9ybWF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gU2NoZXNvbi5zdHJpbmdGb3JtYXRzO1xuICB9LFxuICBwdXNoVHlwZSA9IFNjaGVzb24ucHVzaFR5cGUsXG4gIHB1c2hUeXBlVmFsaWRhdG9yID0gU2NoZXNvbi5wdXNoVHlwZVZhbGlkYXRvcixcbiAgcHVzaFN1cGVyU2NoZW1hID0gU2NoZXNvbi5wdXNoU3VwZXJTY2hlbWEsIFxuICBwdXNoU3RyaW5nRm9ybWF0ID0gU2NoZXNvbi5wdXNoU3RyaW5nRm9ybWF0LFxuICBjaGVjayA9IFNjaGVzb24uY2hlY2ssXG4gIGpUeXBlID0gdmFyVHlwZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgc3RyaW5nRm9ybWF0cyA9IHtcblxuICAnZGF0ZS10aW1lJzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgbGV0IHJ0cm4gPSBmYWxzZTtcbiAgICBjb25zdCBiYXNlVGVzdCA9IC9cXGR7NH0tKFxcZHsyfSktKFxcZHsyfSkoW1R0XShcXGR7Mn0pOihcXGR7Mn0pKDooXFxkezJ9KSguXFxkezIsNH0pP1t6Wl0/KT8pPy8uZXhlYyh2YWx1ZSk7XG4gICAgaWYoYmFzZVRlc3QgJiYgIWlzTmFOKERhdGUucGFyc2UodmFsdWUpKSl7XG4gICAgICBydHJuID0gdHJ1ZTtcdFx0XHRcdFxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcbiAgaG9zdG5hbWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAvXihcXHcoW1xcd1xcLV17MCw2MX1cXHcpP1xcLikrW2Etel17Miw2fSQvaS50ZXN0KHZhbHVlKTtcbiAgfSxcbiAgLyoqXG5cdCAqIHRoYW5rcyB0byBqdGVldXdlbiBodHRwOi8vd3d3LnJlZ2V4bGliLmNvbS9Vc2VyUGF0dGVybnMuYXNweD9hdXRob3JJZD1iMTUzMWY0MC1jMDQ2LTQyNTMtOTgwMC1iNGZmNDE5YzAxYjJcblx0ICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gXG5cdCAqL1xuICBpcHY0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gL14oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMC05XXsxLDJ9KShcXC4oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMC05XXsxLDJ9KSl7M30kLy50ZXN0KHZhbHVlKTtcbiAgfSxcbiAgLyoqXG5cdCAqIFRoYW5rIHRvIGp0ZWV1d2VuXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IFxuXHQgKi9cbiAgaXB2NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCcoXlxcZHsyMH0kKXwoXigoOlthLWZBLUYwLTldezEsNH0pezZ9fDo6KWZmZmY6KDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzAtOV17MSwyfSkoXFwuKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzAtOV17MSwyfSkpezN9JCl8KF4oKDpbYS1mQS1GMC05XXsxLDR9KXs2fXw6OilmZmZmKDpbYS1mQS1GMC05XXsxLDR9KXsyfSQpfCheKFthLWZBLUYwLTldezEsNH0pICg6W2EtZkEtRjAtOV17MSw0fSl7N30kKXwoXjooOlthLWZBLUYwLTldezEsNH0oOjopPyl7MSw2fSQpfCheKCg6Oik/W2EtZkEtRjAtOV17MSw0fTopezEsNn06JCl8KF46OiQpJyk7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1x0XHRcbiAgfSxcbiAgdXJpOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oKGh0dHB8aHR0cHN8ZnRwKTpcXC9cXC8pPygoLio/KTooLio/KUApPyhcXHdbXFx3XFwtXXswLDYxfVtcXHddKSgoXFwuXFx3W1xcd1xcLV17MCw2MX1cXHcqKSg6KFswLTldezEsNX0pKT8oKFxcLy4qPykoXFw/KC4qPykpPyhcXCMoLiopKT8pPyQnLCAnaScpO1xuICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcbiAgfSxcbiAgLyoqXG5cdCAqIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiBlbWFpbCB2YWxpZGF0aW9uLiBJdCBpcyBub3Qgc3RyaWN0IGNvbXBsaWFudCB3aXRoIHJmYzUzMjIgXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gXHR2YWx1ZSB0byB2YWxpZGF0ZVxuXHQgKiBAcmV0dXJuIHtCb29sZWFufVxuXHQgKi9cbiAgZW1haWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBcdGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoJy9eKCgoW2Etel18XFxkfFshI1xcJCUmXFx1MDAyN1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKyhcXC4oW2Etel18XFxkfFshI1xcJCUmXFx1MDAyN1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKykqKXwoKFxceDIyKSgoKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KChbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3Zl18XFx4MjF8W1xceDIzLVxceDViXXxbXFx4NWQtXFx4N2VdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoXFxcXChbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpKSooKChcXHgyMHxcXHgwOSkqKFxceDBkXFx4MGEpKT8oXFx4MjB8XFx4MDkpKyk/KFxceDIyKSkpQCgoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkkJywnaScpO1xuICBcdHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgc3RyaW5nRm9ybWF0cyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0cmluZ0Zvcm1hdHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBcbiAqL1xuaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSwgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBsb2dpY0Rvb3JzLCBoYXNMb2dpY0Rvb3JzIH0gZnJvbSAnLi9sb2dpY0Rvb3JzJztcbmltcG9ydCB7IFNjaGVzb24gfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBzY2hlbWFTdHJpbmcgPSB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIG1pbkxlbmd0aDoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBtdWx0aXBsZU9mOiAxLFxuICAgICAgbWluaW11bTogMFxuICAgIH0sXG4gICAgbWF4TGVuZ3RoOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG11bHRpcGxlT2Y6IDEsXG4gICAgICBtaW5pbXVtOiAwXG4gICAgfSxcbiAgICBwYXR0ZXJuOiB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIG9uZU9mOiBbJ3N0cmluZycsICdyZWdleHAnLCAnb2JqZWN0J11cbiAgICAgIH1cbiAgICB9LFxuICAgIGVudW1lcmF0ZToge1xuICAgICAgdHlwZTogJ2FycmF5J1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIG9uZU9mOiBbJ3N0cmluZycsICdvYmplY3QnXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVxdWlyZWQ6IFsndHlwZSddXG59O1xuXG5cbi8qKlxuICogdGVzdCB2YWx1ZSBhZ2FpbnN0IHBhdHRlcm5cbiAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgVGhlIHN0cmluZyB0byB0ZXN0XG4gKiBAcGFyYW0gIHtSZWdFeHB9IHBhdHQgIFBhdHRlcm4gdG8gdXNlXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHBhdHRlcm5UZXN0KHZhbHVlLCBwYXR0KSB7XG4gIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogW119O1xuICBpZih2YXJUeXBlLmlzKHBhdHQsICdzdHJpbmcnKSkge1xuICAgIHBhdHQgPSBuZXcgUmVnRXhwKHBhdHQpO1xuICB9XG4gIGlmICh2YXJUeXBlLmlzKHBhdHQsICdyZWdleHAnKSkge1xuICAgIGlmICghcGF0dC50ZXN0KHZhbHVlKSkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCd0aGUgdGV4dCBtdXN0IGZpdCB0aGUgcGF0dGVybiBhdCBzY2hlbWEnKTtcdFx0XHRcdFx0XHRcdFxuICAgIH1cbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGVzdCh2YWx1ZSwgZm9ybWF0KSB7XG4gIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogW119O1xuICBpZiggU2NoZXNvbi5zdHJpbmdGb3JtYXRzLmhhc093blByb3BlcnR5KGZvcm1hdCkpIHtcbiAgICBpZiAoICFTY2hlc29uLnN0cmluZ0Zvcm1hdHNbZm9ybWF0XSh2YWx1ZSkgKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyB2YWx1ZSBkb2VzblxcJ3QgZml0IHdpdGggJyArIGZvcm1hdCArICcgc3BlY2lmaWNhdGlvbicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuY29uc3QgdHlwZVN0cmluZyA9IHtcbiAgbWluTGVuZ3RoOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWluTGVuZ3RoJywgJ251bWJlcicpICYmIHZhbHVlIDw9IHNjaGVtYS5taW5MZW5ndGgpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnc3RyaW5nIHNob3J0ZXIgdGhhbiBhbGxvd2VkICgnICsgc2NoZW1hLm1pbkxlbmd0aCArICcpJyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1x0XHRcbiAgfSxcbiAgbWF4TGVuZ3RoOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4TGVuZ3RoJywgJ251bWJlcicpICYmIHZhbHVlIDw9IHNjaGVtYS5tYXhMZW5ndGgpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnc3RyaW5nIGxvbmdlciB0aGFuIGFsbG93ZWQgKCcgKyBzY2hlbWEubWF4TGVuZ3RoICsgJyknKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XHRcdFxuICB9LFxuICBlbnVtYXJhdGU6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpe1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2VudW1lcmF0ZScsICdhcnJheScpICYmIHNjaGVtYS5lbnVtZXJhdGUuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2UsXG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3ZhbHVlIG11c3QgYmUgb25lIG9mIGVudW1lcmF0ZWQ6IFsnICsgc2NoZW1hLmVudW1lcmF0ZS5qb2luKCcsICcpICsgJ10nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XHRcdFxuICB9LFxuICBwYXR0ZXJuOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdwYXR0ZXJuJykpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEucGF0dGVybikpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIHNjaGVtYS5wYXR0ZXJuLCBwYXR0ZXJuVGVzdClcbiAgICAgICAgOiBwYXR0ZXJuVGVzdCh2YWx1ZSwgc2NoZW1hLnBhdHRlcm4pO1xuICAgICAgaWYocnRybi52YWxpZCl7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgfVxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcywgZ2V0UnRybi5mYWlsdXJlcyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1x0XHRcbiAgfSxcbiAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGlmIChkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2Zvcm1hdCcpKSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hLmZvcm1hdCkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIHNjaGVtYS5mb3JtYXQsIGZvcm1hdFRlc3QpXG4gICAgICAgIDogcGF0dGVyblRlc3QodmFsdWUsIHNjaGVtYS5mb3JtYXQpO1xuICAgICAgaWYocnRybi52YWxpZCl7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgfVxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcywgZ2V0UnRybi5mYWlsdXJlcyk7XG5cbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbn07XG5cbmV4cG9ydCB7dHlwZVN0cmluZywgc2NoZW1hU3RyaW5nfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90eXBlU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuXG5jb25zdCBzY2hlbWFOdW1iZXIgPSB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIG1pbmltdW06IHtcbiAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSxcbiAgICBtYXhpbXVtOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgZXhjbHVzaXZlTWluaW11bToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBleGNsdXNpdmVNYXhpbXVtOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIG11bHRpcGxlT2Y6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSxcbiAgICBlbnVtZXJhdGU6IHtcbiAgICAgIHR5cGU6ICdhcnJheSdcbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuY29uc3QgdHlwZU51bWJlciA9IHtcbiAgbWluaW11bTogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtaW5pbXVtJywgJ251bWJlcicpICkge1xuICAgICAgaWYoIFxuICAgICAgICAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdleGNsdXNpdmVNaW5pbXVtJywgJ2Jvb2xlYW4nLCB0cnVlKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWluaW11bSkgXG4gICAgICAgIHx8IHZhbHVlIDwgc2NoZW1hLm1pbmltdW0gXG4gICAgICApIHtcbiAgICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbnVtYmVyIGxvd2VyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5taW5pbXVtICsgJyknKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG4gIG1heGltdW06IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4aW11bScsICdudW1iZXInKSApIHtcbiAgICAgIGlmKCBcbiAgICAgICAgKGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZXhjbHVzaXZlTWF4aW11bScsICdib29sZWFuJywgdHJ1ZSkgJiYgdmFsdWUgPD0gc2NoZW1hLm1heGltdW0pIFxuICAgICAgICB8fCB2YWx1ZSA8IHNjaGVtYS5tYXhpbXVtIFxuICAgICAgKSB7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ251bWJlciBoaWdoZXIgdGhhbiBhbGxvd2VkICgnICsgc2NoZW1hLm1heGltdW0gKyAnKScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcbiAgbXVsdGlwbGVPZjogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtdWx0aXBsZU9mJywgJ251bWJlcicpICYmIHZhbHVlICUgc2NoZW1hLm11bHRpcGxlT2YgIT09IDApIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZSxcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCd2YWx1ZSBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZik7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuICBlbnVtZXJhdGU6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdlbnVtZXJhdGUnLCAnYXJyYXknKSAmJiBzY2hlbWEuZW51bWVyYXRlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlLFxuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ3ZhbHVlIG11c3QgYmUgb25lIG9mIGVudW1lcmF0ZWQ6IFsnICsgc2NoZW1hLmVudW1lcmF0ZS5qb2luKCcsJykgKyAnXScpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxufTtcblxuZXhwb3J0IHt0eXBlTnVtYmVyLCBzY2hlbWFOdW1iZXJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVOdW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBcbiAqL1xuaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSwgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBTY2hlc29uLCBhcHBlbmRDaGlsZEZhaWx1cmVzIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3Qgc2NoZW1hQXJyYXkgPSB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIG1pbkl0ZW1zOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG1pbmltdW06IDAsXG4gICAgICBtdWx0aXBsZU9mOiAxXG4gICAgfSxcbiAgICBtYXhJdGVtczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBtaW5pbXVtOiAwLFxuICAgICAgbXVsdGlwbGVPZjogMVxuICAgIH0sXG4gICAgdW5pcXVlSXRlbXM6IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICAnYm9vbGVhbicsXHQvLyBmb3Igd2hvbGUgdmFsdWUgY2hlY2tcbiAgICAgICAgICAnc3RyaW5nJ1x0XHQvLyBmb3IgYW4gc3BlY2lmaWMgcHJvcGVydHkgaXRlbXNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkaXRpb25hbEl0ZW1zOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIGFueU9mOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVxdWlyZWQ6IFsndHlwZSddXG59O1xuXG5jb25zdCB0eXBlQXJyYXkgPSB7XG5cbiAgLyoqXG5cdCAqIGNoZWNrIGlmIHRoZSB2YWx1ZSBoYXMgbW9yZSBpdGVtcyB0aGFuIGFsbG93ZWQsIHVzZWQgd2hlbiBzY2hlbWEgaGFzIGZpeGVkIGl0ZW1zXG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgYWRkaXRpb25hbEl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBjb25zdCBpdGVtc051bSA9IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnaXRlbXMnLCAnYXJyYXknKSA/IHNjaGVtYS5pdGVtcy5sZW5ndGg6IDA7XG5cbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWRkaXRpb25hbEl0ZW1zJywgJ2Jvb2xlYW4nKSAmJiAhc2NoZW1hLmFkZGl0aW9uYWxJdGVtc1xuICAgJiYgdmFsdWUubGVuZ3RoID4gaXRlbXNOdW0pIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdubyBhZGRpdGlvbmFsIGl0ZW1zIGFsbG93ZWQnKTtcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbiAgLyoqXG5cdCAqIGNoZWNrIHRoZSB2YWx1ZSdzIHByb3BlcnRpZXNcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBtaW5JdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21pbkl0ZW1zJywgJ251bWJlcicpICYmIHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5taW5JdGVtcykge1xuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ2l0ZW1zIGluIGFycmF5IHNob3VsZCBiZSBhdCBsZWFzdCAnICsgc2NoZW1hLm1pbkl0ZW1zKTtcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbiAgLyoqXG5cdCAqIGNoZWNrIGlmIHRoZSB2YWx1ZSBoYXMgbW9yZSBpdGVtcyB0aGFuIGFsbG93ZWQsIHVzZWQgd2hlbiBzY2hlbWEgaGFzIGZpeGVkIGl0ZW1zXG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgbWF4SXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtYXhJdGVtcycsICdudW1iZXInKSAmJiB2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWF4SXRlbXMpIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgYmUgYXQgbW9zdCAnICsgc2NoZW1hLm1heEl0ZW1zKTtcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbiAgLyoqXG5cdCAqIGNoZWNrIGlmIHRoZSBpdGVtcyBvZiB0aGUgdmFsdWUgYXJlIHVuaXF1ZSwgZW50aXJlbHkgb3IgaW4gYSBwcm9wZXJ0eVxuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIHVuaXF1ZUl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAndW5pcXVlSXRlbXMnKSkge1xuICAgICAgY29uc3Qgd2l0bmVzcyA9IFtdO1xuICAgICAgcnRybi52YWxpZCA9ICF2YWx1ZS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB2YXJUeXBlKHNjaGVtYS51bmlxdWVJdGVtcywgJ3N0cmluZycpID8gaXRlbVtzY2hlbWEudW5pcXVlSXRlbXNdIDogaXRlbTtcbiAgICAgICAgaWYgKCB3aXRuZXNzLmluZGV4T2YoZWxlbWVudCkgPiAtMSkge1xuICAgICAgICAgIHdpdG5lc3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ2l0ZW1zIGluIGFycmF5IHNob3VsZCB1bmlxdWUnKTtcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbiAgLyoqXG5cdCAqIGNoZWNrIGlmIHRoZSBpdGVtcyBvZiB0aGUgdmFsdWUgYXJlIHVuaXF1ZSwgZW50aXJlbHkgb3IgaW4gYSBwcm9wZXJ0eVxuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIGl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgY29uc3Qgc2NoZW1hSXQgPSB2YXJUeXBlLmlzKHNjaGVtYS5pdGVtcywgJ2FycmF5JykgPyBzY2hlbWEuaXRlbXNbaWR4XSA6IHNjaGVtYS5pdGVtcztcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSBTY2hlc29uLmNoZWNrKGl0ZW0sIHNjaGVtYUl0KTtcbiAgICAgIGlmICggcnRybi52YWxpZCApe1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgIH1cbiAgICAgIHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4gPSBhcHBlbmRDaGlsZEZhaWx1cmVzKHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4sIGtleSwgZ2V0UnRybi5mYWlsdXJlcyk7ICAgICAgICAgICAgICBcbiAgICB9KTtcbiAgICByZXR1cm4gcnRybjtcbiAgfVxufTtcblxuZXhwb3J0IHt0eXBlQXJyYXksIHNjaGVtYUFycmF5fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90eXBlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBcbiAqL1xuaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBsb2dpY0Rvb3JzLCBoYXNMb2dpY0Rvb3JzIH0gZnJvbSAnLi9sb2dpY0Rvb3JzJztcbmltcG9ydCB7IFNjaGVzb24sIGFwcGVuZENoaWxkRmFpbHVyZXMgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBzY2hlbWFPYmplY3QgPSB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogJ2FycmF5J1xuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH1cbiAgfSxcbiAgcmVxdWlyZWQ6IFsndHlwZSddXG59O1xuXG5jb25zdCB0eXBlT2JqZWN0ID0ge1xuXG4gIC8qKlxuXHQgKiBjaGVjayB0aGVyZSBhcmUgbW9yZSBwcm9wZXJ0aWVzIHRoYW4gYWxsb3dlZFxuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYVN0cmluZ1xuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGlmICggXG4gICAgICBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FkZGl0aW9uYWxQcm9wZXJ0aWVzJywgJ2Jvb2xlYW4nKSAmJiAhc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzXG4gICAgICAmJiBPYmplY3Qua2V5cyh2YWx1ZSkuc29tZSggZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAhZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdwcm9wZXJ0aWVzJywgJ29iamVjdCcpIFxuICAgICAgICAgIHx8IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5pbmRleE9mKGl0ZW0pID09PSAtMVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdubyBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYWxsb3dlZCcpO1x0XHRcdFxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxuICAvKipcblx0ICogY2hlY2sgdGhlIHZhbHVlJ3MgcHJvcGVydGllc1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHRvIHNjaGVtYU9iamVjdFxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgcHJvcGVydGllczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG5cbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAncHJvcGVydGllcycsICdvYmplY3QnKSApIHtcbiAgICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZSh2YWx1ZSwga2V5LCBzY2hlbWEucHJvcGVydGllc1trZXldLnR5cGUpICkge1xuXG4gICAgICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0pKSBcbiAgICAgICAgICAgID8gbG9naWNEb29ycyh2YWx1ZVtrZXldLCBzY2hlbWEucHJvcGVydGllc1trZXldLCBTY2hlc29uLmNoZWNrKVxuICAgICAgICAgICAgOiBTY2hlc29uLmNoZWNrKHZhbHVlW2tleV0sIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0pO1xuXG4gICAgICAgICAgaWYoIWdldFJ0cm4udmFsaWQpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgICAgIHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4gPSBhcHBlbmRDaGlsZEZhaWx1cmVzKHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4sIGtleSwgZ2V0UnRybi5mYWlsdXJlcyk7ICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfVxufTtcblxuZXhwb3J0IHt0eXBlT2JqZWN0LCBzY2hlbWFPYmplY3R9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==