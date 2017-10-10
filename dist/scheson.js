var Scheson =
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
      if ( Scheson.types.hasOwnProperty[typeName] && !force) {
        throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
      }
      if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(typeName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(obj, 'object')) {
        Object.defineProperty(Scheson.types, typeName, {
          enumerable: true,
          configurable: true,
          value: obj
        });
        if (arguments.length > 2) {
          rtrn = Scheson.pushSuperSchema(typeName, arguments[2], force);
        }
      }
      else {
        // throw new TypeError('bad types at Scheson.pushType');
        console.error('bad types at Scheson.pushType');
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
      if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(validatorName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
        Object.defineProperty(Scheson.types[typeName], validatorName, {
          enumerable: true,
          configurable: true,
          value: fn
        });
      }
      else {
        throw new TypeError('bad types at Scheson.pushTypeValidator');
      }
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
      if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(formatName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
        Object.defineProperty(Scheson.stringFormats, formatName, {
          enumerable: true,
          configurable: true,
          value: fn
        });
        return true;
      }
      else {
        // throw new TypeError('bad types at Scheson.pushStringFormat', varType.get(formatName), varType.get(fn));
        console.error('bad types at Scheson.pushStringFormat', __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].get(formatName), __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].get(fn));
      }
    }
  },
  pushSuperSchema: {
    enumerable: true,
    value: function(typeName, obj/*, force*/) {
      const force = arguments.length > 2 ? arguments[2] : null;
      if ( Scheson.superSchemas.hasOwnProperty[typeName] && !force) {
        throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
      }
      if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(typeName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(obj, 'object')) {
        Object.defineProperty(Scheson.superSchemas, typeName, {
          enumerable: true,
          configurable: true,
          value: obj
        });
        return true;
      }
      else {
        // throw new TypeError('bad types at Scheson.pushSuperSchema');
        console.error('bad types at Scheson.pushSuperSchema');
      }
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

        const getRtrn = (Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["a" /* hasLogicDoors */])(schema)) 
          ? Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["b" /* logicDoors */])(value, schema, sweepCheckers)
          : sweepCheckers(value, schema);
        rtrn.valid = getRtrn.valid;
        rtrn.failures = getRtrn.failures;
      }
      return rtrn;
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
  console.log('logicDoors');
  const rtrn = {valid: true, failures: []};

  // OR
  if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'anyOf', 'array') ) {
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
  if ( rtrn.valid && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'allOf', 'array') ) {
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
  if ( rtrn.valid && Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'not', 'array') ) {
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
      rtrn.failures.push('Only one criterion should match');			
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
  pushSuperSchema = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushSuperSchema, 
  pushStringFormat = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].pushStringFormat,
  check = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Scheson */].check,
  jType = __WEBPACK_IMPORTED_MODULE_1__basicCheck__["b" /* varType */];
/* harmony export (immutable) */ __webpack_exports__["types"] = types;

/* harmony export (immutable) */ __webpack_exports__["superSchemas"] = superSchemas;

/* harmony export (immutable) */ __webpack_exports__["getStringFormats"] = getStringFormats;

/* harmony export (immutable) */ __webpack_exports__["pushType"] = pushType;

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
  if(Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */])(patt, 'string')) {
    patt = new RegExp(patt);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */])(patt, 'regexp')) {
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
      if( (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'exclusiveMinimum', 'boolean', true) && value <= schema.minimum) 
   || value < schema.minimum ) {
        rtrn.valid = false;
        rtrn.failures.push('number lower than allowed (' + schema.minimum + ')');
      }
    }
    return rtrn;
  },
  maximum: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'maximum', 'number') ) {
      if( (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'exclusiveMaximum', 'boolean', true) && value <= schema.maximum) 
   || value < schema.maximum ) {
        rtrn.valid = false;
        rtrn.failures.push('number higher than allowed (' + schema.maximum + ')');
      }
    }
    return rtrn;
  },
  multipleOf: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'multipleOf', 'number') && value % schema.multipleOf !== 0) {
      rtrn.valid = false,
      rtrn.failures.push('value must be multiple of ' + schema.multipleOf);
    }
    return rtrn;
  },
  enumerate: function(value, schema) {
    const rtrn = { valid: true, failures: { self:[], children: {}} };		
    if( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'enumerate', 'array') && schema.enumerate.indexOf(value) === -1) {
      rtrn.valid = false,
      rtrn.failures.push('value must be one of enumerated: [' + schema.enumerate.join(',') + ']');
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
      rtrn.failures.children = Object(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* appendChildFailures */])(rtrn.failures.children, idx, getRtrn.failures);				
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
    if ( Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'additionalProperties', 'boolean') && !schema.additionalProperties
   && Object.keys(value).some( function(item) {
     return ( !Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema, 'properties', 'object') || Object.keys(schema.properties).indexOf(item) === -1);
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
            rtrn.failures.children = Object(__WEBPACK_IMPORTED_MODULE_2__base__["b" /* appendChildFailures */])(rtrn.children, key, getRtrn.failures);
          }
        }
      });
    }
    return rtrn;
  }
};



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTA0NTJjZDhkZDQ1OWVhNmI2OWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2ljQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljRG9vcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5nRm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZU51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxZQUFZO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R29DO0FBQ0E7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QjtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5Qix1QkFBdUI7O0FBRWxFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY2hlc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTA0NTJjZDhkZDQ1OWVhNmI2OWQiLCJjb25zdCB2YXJUeXBlID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyh2YXJUeXBlLCB7XG4gIGdldDoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHZhbHVlIC8qLCBsb3dlcmNhc2UgKi8pIHtcbiAgICAgIGxldCBydHJuID0gL1xccyhcXHcrKV0vaS5leGVjKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkpWzFdOyAvLyBUT0RPOiB0ZXN0IGluIE1TSUUgZm9yIE5vZGVDb2xsZWN0aW9uXG4gICAgICBydHJuID0gKC9FdmVudC8udGVzdChydHJuKSkgPyAnRXZlbnQuJyArIHJ0cm4gOiBydHJuO1xuICAgICAgcnRybiA9IChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0pID8gcnRybi50b0xvd2VyQ2FzZSgpIDogcnRybjtcbiAgICAgIGlmKHJ0cm4gPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkgeyAvLyBOYU4gY29ycmVjdGlvblxuICAgICAgICBydHJuID0gKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSkgPyAnbmFuJyA6ICdOYU4nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJ0cm47XG4gICAgfVxuICB9LFxuICBpczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCB0eXBlKSB7XG4gICAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgYXJnVHlwZSA9IHZhclR5cGUuZ2V0KHZhbHVlLCB0cnVlKTtcbiAgICAgIGlmKHR5cGUgPT09ICdldmVudCcpe1xuICAgICAgICByZXR1cm4gL2V2ZW50JC9pLnRlc3QoYXJnVHlwZSk7XG4gICAgICB9XG4gICAgICAgaWYodHlwZSA9PT0gJ2Vycm9yJyl7XG4gICAgICAgIHJldHVybiAvZXJyb3IkL2kudGVzdChhcmdUeXBlKTtcbiAgICAgIH1cbiAgICAgIGlmKCBhcmdUeXBlID09PSAnaHRtbGNvbGxlY3Rpb24nIHx8IGFyZ1R5cGUgPT09ICdub2RlbGlzdCcpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlID09PSAnaHRtbGNvbGxlY3Rpb24nIHx8IHR5cGUgPT09ICdub2RlbGlzdCcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdub2RlJykge1xuICAgICAgICByZXR1cm4gKGFyZ1R5cGUgPT09ICdodG1sZWxlbWVudCcgJiYgdmFyVHlwZS5pcyh2YWx1ZS5ub2RlVHlwZSwgJ251bWJlcicpICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnVHlwZSA9PSB0eXBlO1xuICAgIH1cbiAgfSxcbiAgaXNCdWlsdEluOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIC8vIFRPRE86IGlmIGl0IGlzIHBvc3NpYmxlLCBzdXBlcnNlZCB0aGlzIGZ1bmN0aW9uIGJ5IGFuIGF1dG9tYXRpYyB3YXkgdG8gY2hlY2sgc3VwcG9ydGVkIGJ1aWx0LWluc1xuICAgICAgLy8gd2l0aCB0aGUgcmVzcGVjdGl2ZSBjb3JyZWN0aW9uc1xuICAgICAgY29uc3QgYnVpbHRJbnMgPSBbJ251bGwnLCAnYm9vbGVhbicsICdudW1iZXInLCAnbmFuJywgJ3N0cmluZycsICdhcnJheScsICdvYmplY3QnLFxuICAgICAgICAnZnVuY3Rpb24nLCAnZGF0ZScsICdyZWdleHAnLCAnaHRtbGNvbGxlY3Rpb24nLCAnaHRtbGVsZW1lbnQnLCAnbm9kZWxpc3QnLCAnbm9kZScsXG4gICAgICAgICdwcm9taXNlJywgJ2FycmF5YnVmZmVyJywgJ3JlZmxlY3QnLCAnbWFwJywgJ3dlYWsnLCAnd2Vha21hcCcsICdzZXQnLCAnc3ltYm9sJyxcbiAgICAgICAgJ3htbGh0dHByZXF1ZXN0JyxcbiAgICAgICAgJ2V2ZW50JywgJ21vdXNlZXZlbnQnLCAnYW5pbWF0aW9uZXZlbnQnLCAnd2hlZWxldmVudCcsICdrZXlib2FyZGV2ZW50JyxcbiAgICAgICAgJ2Vycm9yJywgJ3R5cGVlcnJvcicsICdyYW5nZWVycm9yJywgJ3JlZmVyZW5jZWVycm9yJ107XG4gICAgICAgIHJldHVybiBidWlsdElucy5pbmRleE9mKHR5cGUudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9XG4gIH0sXG4gIHBhcnNlU3RyaW5nOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBpZiAodmFyVHlwZS5pcyhzdHIsICdzdHJpbmcnKSkge1xuICAgICAgICBjb25zdCBlbGVtZW50YWxzID0ge1xuICAgICAgICAgICdudWxsJzogbnVsbCxcbiAgICAgICAgICAnZmFsc2UnOiBmYWxzZSxcbiAgICAgICAgICAndHJ1ZSc6IHRydWUsXG4gICAgICAgICAgJ25hbic6IE5hTixcbiAgICAgICAgICAnaW5maW5pdHknOiBJbmZpbml0eVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZWxlbWVudGFscy5oYXNPd25Qcm9wZXJ0eShzdHIudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBzdHIgPSBlbGVtZW50YWxzW3N0ci50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZUZsb2F0KHN0cikpKSB7XG4gICAgICAgICAgICBzdHIgPSBwYXJzZUZsb2F0KHN0cik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKC9eXFxzKlxcWygufFxcbnxcXHIpKlxcXVxccyokL2dtLnRlc3Qoc3RyKSB8fCAvXlxccypcXHsoLnxcXG58XFxyKSpcXH1cXHMqJC9nbS50ZXN0KHN0cikpe1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0ciA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigndmFyVHlwZS5wYXJzZVN0cmluZyB1c2VkIHdpdGggbm9uLXN0cmluZyB2YWx1ZScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkZWZpbmVkVHlwZVZhbHVlKG9iaiwgcHJvcCAvKiwgdHlwZSwgdmFsdWUqLykge1xuICBsZXQgcnRybiA9IHRydWU7XG4gIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgdmFyVHlwZS5pcyhhcmd1bWVudHNbMl0sICdzdHJpbmcnKSApe1xuICAgICAgaWYoIXZhclR5cGUuaXMob2JqW3Byb3BdLCBhcmd1bWVudHNbMl0pKXtcbiAgICAgICAgcnRybiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIHJ0cm4gJiYgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgb2JqW3Byb3BdICE9PSBhcmd1bWVudHNbM10pIHtcbiAgICAgIHJ0cm4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcnRybiA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG5leHBvcnQge3ZhclR5cGUsIGRlZmluZWRUeXBlVmFsdWV9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2ljQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgdmFyVHlwZSwgZGVmaW5lZFR5cGVWYWx1ZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBsb2dpY0Rvb3JzLCBoYXNMb2dpY0Rvb3JzIH0gZnJvbSAnLi9sb2dpY0Rvb3JzJztcblxuY29uc3QgU2NoZXNvbiA9IHt9O1xuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZEZhaWx1cmVzKGNoaWxkcmVuT2JqLCBrZXksIGZhaWx1cmVzKSB7XG4gIGlmICggIWNoaWxkcmVuT2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBjaGlsZHJlbk9ialtrZXldID0geyBzZWxmOiBbXSwgY2hpbGRyZW46IHt9fTtcbiAgfVxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjaGlsZHJlbk9ialtrZXldLmZhaWx1cmVzLnNlbGYsIGZhaWx1cmVzLnNlbGYpO1xuICBpZiAoT2JqZWN0LmtleXMoZmFpbHVyZXMuY2hpbGRyZW4pLmxlbmd0aCA+IDApIHtcbiAgICBPYmplY3Qua2V5cyhmYWlsdXJlcy5jaGlsZHJlbikuZm9yRWFjaCggZnVuY3Rpb24gKGNoaWxkS2V5KSB7XG4gICAgICBmYWlsdXJlcy5jaGlsZHJlbiA9IGFwcGVuZENoaWxkRmFpbHVyZXMoZmFpbHVyZXMuY2hpbGRyZW4sIGNoaWxkS2V5LCBmYWlsdXJlcy5jaGlsZHJlbik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuT2JqO1xufVxuXG5mdW5jdGlvbiBhbGxSZXF1aXJlZCh2YWx1ZSwgc2NoZW1hKSB7XG4gIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczoge3NlbGY6W10sIGNoaWxkcmVuOltdfX07XG4gIGNvbnN0IG1pc3NpbmdQcm9wID0gZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdyZXF1aXJlZCcsICdhcnJheScpIFxuICAgID8gc2NoZW1hLnJlcXVpcmVkLnNvbWUoIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiAhdmFsdWUuaGFzT3duUHJvcGVydHkoaXRlbSk7XG4gICAgfSlcbiAgICA6IGZhbHNlO1xuICBpZiAobWlzc2luZ1Byb3ApIHtcbiAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ3RoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgcmVxdWlyZWQ6ICcgKyBzY2hlbWEucmVxdWlyZWQuam9pbignLCAnKSk7XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmZ1bmN0aW9uIHN3ZWVwQ2hlY2tlcnModmFsdWUsIHNjaGVtYSl7XG4gIGNvbnN0IHJ0cm4gPSB7XG4gICAgdmFsaWQ6IHRydWUsIFxuICAgIGZhaWx1cmVzOiB7XG4gICAgICBzZWxmOiBbXSxcbiAgICAgIGNoaWxkcmVuOiB7fVxuICAgIH1cbiAgfTtcbiAgaWYgKCB2YXJUeXBlLmlzQnVpbHRJbihzY2hlbWEudHlwZSkgJiYgIXZhclR5cGUuaXModmFsdWUsIHNjaGVtYS50eXBlKSkge1xuICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnYmFkIHR5cGUsIGl0IHNob3VsZCBiZSAnICsgc2NoZW1hLnR5cGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIGlmKCBTY2hlc29uLnR5cGVzLmhhc093blByb3BlcnR5KHNjaGVtYS50eXBlKSkge1xuICAgICAgY29uc3QgYWxsUmVxID0gYWxsUmVxdWlyZWQodmFsdWUsIHNjaGVtYSk7XG4gICAgICBpZiAoICFhbGxSZXEudmFsaWQgKSB7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcy5zZWxmLCBhbGxSZXEuZmFpbHVyZXMuc2VsZik7ICAgICBcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKFNjaGVzb24udHlwZXNbc2NoZW1hLnR5cGVdKS5mb3JFYWNoKCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgY29uc3QgZ2V0UnRybiA9IFNjaGVzb24udHlwZXNbc2NoZW1hLnR5cGVdW2tleV0odmFsdWUsIHNjaGVtYSk7XG4gICAgICAgIGlmKHJ0cm4udmFsaWQpIHtcbiAgICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgfVxuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLnNlbGYsIGdldFJ0cm4uZmFpbHVyZXMuc2VsZik7XG4gICAgICAgIE9iamVjdC5rZXlzKGdldFJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4pLmZvckVhY2goIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIGlmICggcnRybi5mYWlsdXJlcy5jaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV0sIGdldFJ0cm4uZmFpbHVyZXMuY2hpbGRyZW5ba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcnRybi5mYWlsdXJlcy5jaGlsZHJlbltrZXldID0gZ2V0UnRybi5mYWlsdXJlcy5jaGlsZHJlbltrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU2NoZXNvbiwge1xuICB0eXBlczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHt9XG4gIH0sXG4gIHN0cmluZ0Zvcm1hdHM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7fVx0XG4gIH0sXG4gIHN1cGVyU2NoZW1hczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHt9XG4gIH0sXG4gIHB1c2hUeXBlOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odHlwZU5hbWUsIG9iai8qLCBzdXBlclNjaGVtYSwgZm9yY2UqLykge1xuICAgICAgY29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG4gICAgICBsZXQgcnRybiA9IHRydWU7XG4gICAgICBpZiAoIFNjaGVzb24udHlwZXMuaGFzT3duUHJvcGVydHlbdHlwZU5hbWVdICYmICFmb3JjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCB2YXJUeXBlLmlzKHR5cGVOYW1lLCAnc3RyaW5nJykgJiYgdmFyVHlwZS5pcyhvYmosICdvYmplY3QnKSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi50eXBlcywgdHlwZU5hbWUsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogb2JqXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBydHJuID0gU2NoZXNvbi5wdXNoU3VwZXJTY2hlbWEodHlwZU5hbWUsIGFyZ3VtZW50c1syXSwgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGUnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cbiAgfSxcbiAgcHVzaFR5cGVWYWxpZGF0b3I6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgdmFsaWRhdG9yTmFtZSwgZm4vKiwgZm9yY2UqLykge1xuICAgICAgY29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG4gICAgICBsZXQgcnRybiA9IHRydWU7XG4gICAgICBpZiAoICFTY2hlc29uLnR5cGVzLmhhc093blByb3BlcnR5W3R5cGVOYW1lXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBkb2VzblxcJ3QgZXhpc3RzLCBhZGQgaXQgZmlyc3Qgd2l0aCBwdXNoVHlwZScpO1xuICAgICAgfVxuICAgICAgaWYgKCBTY2hlc29uLnR5cGVzW3R5cGVOYW1lXS5oYXNPd25Qcm9wZXJ0eVt2YWxpZGF0b3JOYW1lXSAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB2YWxpZGF0b3JOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCB2YXJUeXBlLmlzKHZhbGlkYXRvck5hbWUsICdzdHJpbmcnKSAmJiB2YXJUeXBlLmlzKGZuLCAnZnVuY3Rpb24nKSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi50eXBlc1t0eXBlTmFtZV0sIHZhbGlkYXRvck5hbWUsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogZm5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGVWYWxpZGF0b3InKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cdFx0XG4gIH0sXG4gIHB1c2hTdHJpbmdGb3JtYXQ6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbihmb3JtYXROYW1lLCBmbi8qLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAgIGlmICggU2NoZXNvbi5zdHJpbmdGb3JtYXRzLmhhc093blByb3BlcnR5W2Zvcm1hdE5hbWVdICYmICFmb3JjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGZvcm1hdE5hbWUgKyAnIGFscmVhZHkgZXhpc3RzLCB0cnkgd2l0aCB0aGUgZm9yY2UgcGFyYW1ldGVyIHRvIG92ZXJ3cml0ZSBpdCcpO1xuICAgICAgfVxuICAgICAgaWYoIHZhclR5cGUuaXMoZm9ybWF0TmFtZSwgJ3N0cmluZycpICYmIHZhclR5cGUuaXMoZm4sICdmdW5jdGlvbicpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlc29uLnN0cmluZ0Zvcm1hdHMsIGZvcm1hdE5hbWUsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogZm5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hTdHJpbmdGb3JtYXQnLCB2YXJUeXBlLmdldChmb3JtYXROYW1lKSwgdmFyVHlwZS5nZXQoZm4pKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdCcsIHZhclR5cGUuZ2V0KGZvcm1hdE5hbWUpLCB2YXJUeXBlLmdldChmbikpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcHVzaFN1cGVyU2NoZW1hOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odHlwZU5hbWUsIG9iai8qLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAgIGlmICggU2NoZXNvbi5zdXBlclNjaGVtYXMuaGFzT3duUHJvcGVydHlbdHlwZU5hbWVdICYmICFmb3JjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCB2YXJUeXBlLmlzKHR5cGVOYW1lLCAnc3RyaW5nJykgJiYgdmFyVHlwZS5pcyhvYmosICdvYmplY3QnKSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi5zdXBlclNjaGVtYXMsIHR5cGVOYW1lLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IG9ialxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFN1cGVyU2NoZW1hJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hTdXBlclNjaGVtYScpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjaGVjazoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEsIGNoZWNrU2NoZW1hKSB7XG4gICAgICBjb25zdCBydHJuID0geyB2YWxpZDp0cnVlLCBmYWlsdXJlczp7fSwgZXJyb3JzOiB7fX07XG4gICAgICBpZiAoY2hlY2tTY2hlbWEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrU2NoZW1hJyk7XG4gICAgICAgIGNvbnN0IGdldFJ0cm4gPSBTY2hlc29uLmNoZWNrKHNjaGVtYSwgU2NoZXNvbi5zdXBlclNjaGVtYXMucm9vdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY2hlbWE6Jywgc2NoZW1hLCAnc3VwZXJzY2hlbWE6JywgU2NoZXNvbi5zdXBlclNjaGVtYXMucm9vdCk7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgICBydHJuLmVycm9ycyA9IGdldFJ0cm4uZmFpbHVyZXM7XG4gICAgICB9XG4gICAgICBpZiAocnRybi52YWxpZCkge1xuXG4gICAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEpKSBcbiAgICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIHNjaGVtYSwgc3dlZXBDaGVja2VycylcbiAgICAgICAgICA6IHN3ZWVwQ2hlY2tlcnModmFsdWUsIHNjaGVtYSk7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgICBydHJuLmZhaWx1cmVzID0gZ2V0UnRybi5mYWlsdXJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cbiAgfVxufSk7XG5cblxuZXhwb3J0IHsgU2NoZXNvbiwgYXBwZW5kQ2hpbGRGYWlsdXJlcyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSwgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5cbi8qKlxuICogY2hlY2sgaWYgdGhlIG9iamVjdCBoYXMgZGVmaW5lZCBhdCBsZWFzdCBvbmUgbG9naWMgZG9vclxuICogQHBhcmFtICB7T2JqZWN0fSAgc2NoZW1hIHRoZSBvYmplY3QgdG8gY2hlY2sgaW5zaWRlXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgSGFzIG9yIG5vdCwgdGhpcyBpcyB0aGUgcXVlc3Rpb25cbiAqL1xuZnVuY3Rpb24gaGFzTG9naWNEb29ycyhzY2hlbWEpIHtcbiAgbGV0IHJ0cm4gPSBmYWxzZTtcbiAgaWYgKHZhclR5cGUuaXMoc2NoZW1hLCAnb2JqZWN0JykpIHtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYW55T2YnLCAnYXJyYXknKSBcbiAgfHwgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhbGxPZicsICdhcnJheScpXG4gIHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnb25lT2YnLCAnYXJyYXknKVxuICB8fCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ25vdCcsICdhcnJheScpKSB7XG4gICAgICBydHJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbi8qKlxuICogdmFsaWRhdGUgdmFsdWUgYWdhaW5zdCBkaWZmZXJlbnQgc2NlbmFyaW9zIG9mIGxvZ2ljIGRvb3JzXG4gKiBcbiAqIEBwYXJhbSAge0FueX0gICB2YWx1ZSAgICAgICB0byB2YWxpZGF0ZSBhZ2FpbnN0XG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2NoZW1hICAgV2l0aCBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdGFueU9mIChPUilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdGFsbE9mIChBTkQpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtBcnJheX0gXHRub3QgXHQoTk9SKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0b25lT2YgKFhPUilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e09iamVjdH0gXHRuT2YgIChzcGVjaWFsIFhPUikgd2l0aCBmb2xsb3dpbmcgcHJvcGVydGllc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHtBcnJheX1cdFx0bGlzdCAocmVxdWlyZWQpIHZhbGlkYXRpb24gY3JpdGVyaWFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHtOdW1iZXJ9XHRtaW5pbXVtXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0e051bWJlcn0gXHRtYXhpbXVtXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbG9naWNEb29ycyh2YWx1ZSwgc2NoZW1hLCBjYWxsYmFjaykge1xuICBjb25zb2xlLmxvZygnbG9naWNEb29ycycpO1xuICBjb25zdCBydHJuID0ge3ZhbGlkOiB0cnVlLCBmYWlsdXJlczogW119O1xuXG4gIC8vIE9SXG4gIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhbnlPZicsICdhcnJheScpICkge1xuICAgIHJ0cm4udmFsaWQgPSBzY2hlbWEuYW55T2Yuc29tZShmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmKCFydHJuLnZhbGlkKXtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnQXQgbGVhc3Qgb25lIGNyaXRlcmlvbiBzaG91bGQgbWF0Y2gnKTtcbiAgICB9XG4gIH1cblxuICAvLyBBTkRcbiAgaWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWxsT2YnLCAnYXJyYXknKSApIHtcbiAgICBydHJuLnZhbGlkID0gIXNjaGVtYS5hbnlPZi5zb21lKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcbiAgICAgICAgOiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcblxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcywgZ2V0UnRybi5mYWlsdXJlcyk7XG5cbiAgICAgIGlmIChnZXRSdHJuLnZhbGlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmKCFydHJuLnZhbGlkKXtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnQWxsIGNyaXRlcmlhIHNob3VsZCBtYXRjaCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5PUlxuICBpZiAoIHJ0cm4udmFsaWQgJiYgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdub3QnLCAnYXJyYXknKSApIHtcbiAgICBydHJuLnZhbGlkID0gIXNjaGVtYS5hbnlPZi5zb21lKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcbiAgICAgICAgOiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcblxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcywgZ2V0UnRybi5mYWlsdXJlcyk7XG5cbiAgICAgIGlmIChnZXRSdHJuLnZhbGlkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGlmKCFydHJuLnZhbGlkKXtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnTm9uZSBvZiBjcml0ZXJpYSBzaG91bGQgbWF0Y2gnKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIFhPUlxuICBpZiAoIHJ0cm4udmFsaWQgJiYgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdvbmVPZicsICdhcnJheScpICkge1xuICAgIGxldCBjb3VudGVyVHJ1ZSA9IDA7XG4gICAgc2NoZW1hLmFueU9mLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuICAgICAgICA6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuXG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICBjb3VudGVyVHJ1ZSsrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb3VudGVyVHJ1ZSA9PT0gMSkge1xuICAgICAgcnRybi52YWxpZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdPbmx5IG9uZSBjcml0ZXJpb24gc2hvdWxkIG1hdGNoJyk7XHRcdFx0XG4gICAgfVxuICB9XG5cdFxuICAvLyBYT1IgcGx1c1xuICBpZiAoIHJ0cm4udmFsaWQgJiYgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICduT2YnLCAnb2JqZWN0JykgXG4gICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ2xpc3QnLCAnYXJyYXknKVxuICAmJiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ21pbmltdW0nLCAnbnVtYmVyJykgfHwgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWF4aW11bScsICdudW1iZXInKSlcbiAgKSB7XG4gICAgY29uc3QgbWluaW11bSA9IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ21pbmltdW0nLCAnbnVtYmVyJykgPyBzY2hlbWEubk9mLm1pbmltdW0gOiAwO1xuICAgIGNvbnN0IG1heGltdW0gPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtYXhpbXVtJywgJ251bWJlcicpID8gc2NoZW1hLm5PZi5tYXhpbXVtIDogc2NoZW1hLm5PZi5saXN0Lmxlbmd0aDtcbiAgICBsZXQgY291bnRlclRydWUgPSAwO1xuICAgIHNjaGVtYS5hbnlPZi5saXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuICAgICAgICA6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuICAgICAgaWYgKGdldFJ0cm4udmFsaWQpIHtcbiAgICAgICAgY291bnRlclRydWUrKztcbiAgICAgIH1cbiAgICAgIHJ0cm4uZXJyb3JzID0gcnRybi5lcnJvcnMuY29uY2F0KGdldFJ0cm4uZXJyb3JzKTtcdFx0XHRcbiAgICB9KTtcbiAgICBpZiAoY291bnRlclRydWUgPj0gbWluaW11bSAmJiBjb3VudGVyVHJ1ZSA8PSBtYXhpbXVtKSB7XG4gICAgICBydHJuLnZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ0NyaXRlcmlhIHRvIG1hdGNoIG11c3QgYmV0d2VlbiAnICsgbWluaW11bSArICcgYW5kICcgKyBtYXhpbXVtKTtcdFx0XHRcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBydHJuO1xufVxuXG5leHBvcnQge2hhc0xvZ2ljRG9vcnMsIGxvZ2ljRG9vcnN9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xvZ2ljRG9vcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU2NoZXNvbiB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyB2YXJUeXBlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IHN0cmluZ0Zvcm1hdHMgfSBmcm9tICcuL3N0cmluZ0Zvcm1hdHMnO1xuaW1wb3J0IHsgdHlwZVN0cmluZywgc2NoZW1hU3RyaW5nIH0gZnJvbSAnLi90eXBlU3RyaW5nJztcbmltcG9ydCB7IHR5cGVOdW1iZXIsIHNjaGVtYU51bWJlciB9IGZyb20gJy4vdHlwZU51bWJlcic7XG5pbXBvcnQgeyB0eXBlQXJyYXksIHNjaGVtYUFycmF5IH0gZnJvbSAnLi90eXBlQXJyYXknO1xuaW1wb3J0IHsgdHlwZU9iamVjdCwgc2NoZW1hT2JqZWN0IH0gZnJvbSAnLi90eXBlT2JqZWN0JztcblxuY29uc3QgdHlwZVZhbGlkYXRvcnMgPSB7XG4gICdzdHJpbmcnOiB0eXBlU3RyaW5nLFxuICAnbnVtYmVyJzogdHlwZU51bWJlcixcbiAgJ2FycmF5JzogdHlwZUFycmF5LFxuICAnb2JqZWN0JzogdHlwZU9iamVjdFxufTtcbmNvbnN0IHR5cGVTdXBlclNjaGVtYXMgPSB7XG4gICdzdHJpbmcnOiBzY2hlbWFTdHJpbmcsXG4gICdudW1iZXInOiBzY2hlbWFOdW1iZXIsXG4gICdhcnJheSc6IHNjaGVtYUFycmF5LFxuICAnb2JqZWN0Jzogc2NoZW1hT2JqZWN0XG59O1xuXG5cbk9iamVjdC5rZXlzKHN0cmluZ0Zvcm1hdHMpLmZvckVhY2goIGZ1bmN0aW9uIChrZXkpIHtcbiAgU2NoZXNvbi5wdXNoU3RyaW5nRm9ybWF0KGtleSwgc3RyaW5nRm9ybWF0c1trZXldKTtcbn0pO1xuXG4vKipcbiAqIGJvb2xlYW4gc3VwZXIgU2NoZW1hXG4gKi9cbnR5cGVTdXBlclNjaGVtYXNbJ2Jvb2xlYW4nXSA9IHtcbiAgdHlwZTogJ3N0cmluZydcbn07XG5cbi8qKlxuICogYm9vbGVhbiBzdXBlciBTY2hlbWFcbiAqL1xudHlwZVN1cGVyU2NoZW1hc1snbnVsbCddID0ge1xuICB0eXBlOiAnc3RyaW5nJ1xufTtcblxuLy8gYWRkIGJ1aWx0LWluIHR5cGVzIGFuZCBzdXBlclNjaGVtYXNcblxuT2JqZWN0LmtleXModHlwZVZhbGlkYXRvcnMpLmZvckVhY2goIGZ1bmN0aW9uKHR5cGUpIHtcbiAgU2NoZXNvbi5wdXNoVHlwZSh0eXBlLCB0eXBlVmFsaWRhdG9yc1t0eXBlXSwgdHlwZVN1cGVyU2NoZW1hc1t0eXBlXSk7XG59KTtcblxuLy8gYWRkIHJvb3Qgc3VwZXIgc2NoZW1hXG5TY2hlc29uLnB1c2hTdXBlclNjaGVtYSgncm9vdCcsIHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICB9LFxuICByZXF1aXJlZDogWydpZCcsICd0eXBlJ11cbn0pO1xuXG5leHBvcnQgY29uc3QgdHlwZXMgPSBTY2hlc29uLnR5cGVzLCBcbiAgc3VwZXJTY2hlbWFzID0gU2NoZXNvbi5zdXBlclNjaGVtYXMsIFxuICBnZXRTdHJpbmdGb3JtYXRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBTY2hlc29uLnN0cmluZ0Zvcm1hdHM7XG4gIH0sXG4gIHB1c2hUeXBlID0gU2NoZXNvbi5wdXNoVHlwZSwgXG4gIHB1c2hTdXBlclNjaGVtYSA9IFNjaGVzb24ucHVzaFN1cGVyU2NoZW1hLCBcbiAgcHVzaFN0cmluZ0Zvcm1hdCA9IFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdCxcbiAgY2hlY2sgPSBTY2hlc29uLmNoZWNrLFxuICBqVHlwZSA9IHZhclR5cGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHN0cmluZ0Zvcm1hdHMgPSB7XG5cbiAgJ2RhdGUtdGltZSc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGxldCBydHJuID0gZmFsc2U7XG4gICAgY29uc3QgYmFzZVRlc3QgPSAvXFxkezR9LShcXGR7Mn0pLShcXGR7Mn0pKFtUdF0oXFxkezJ9KTooXFxkezJ9KSg6KFxcZHsyfSkoLlxcZHsyLDR9KT9belpdPyk/KT8vLmV4ZWModmFsdWUpO1xuICAgIGlmKGJhc2VUZXN0ICYmICFpc05hTihEYXRlLnBhcnNlKHZhbHVlKSkpe1xuICAgICAgcnRybiA9IHRydWU7XHRcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG4gIGhvc3RuYW1lOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gL14oXFx3KFtcXHdcXC1dezAsNjF9XFx3KT9cXC4pK1thLXpdezIsNn0kL2kudGVzdCh2YWx1ZSk7XG4gIH0sXG4gIC8qKlxuXHQgKiB0aGFua3MgdG8ganRlZXV3ZW4gaHR0cDovL3d3dy5yZWdleGxpYi5jb20vVXNlclBhdHRlcm5zLmFzcHg/YXV0aG9ySWQ9YjE1MzFmNDAtYzA0Ni00MjUzLTk4MDAtYjRmZjQxOWMwMWIyXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IFxuXHQgKi9cbiAgaXB2NDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzAtOV17MSwyfSkoXFwuKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzAtOV17MSwyfSkpezN9JC8udGVzdCh2YWx1ZSk7XG4gIH0sXG4gIC8qKlxuXHQgKiBUaGFuayB0byBqdGVldXdlblxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBcblx0ICovXG4gIGlwdjY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF5cXGR7MjB9JCl8KF4oKDpbYS1mQS1GMC05XXsxLDR9KXs2fXw6OilmZmZmOigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKFxcLigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKXszfSQpfCheKCg6W2EtZkEtRjAtOV17MSw0fSl7Nn18OjopZmZmZig6W2EtZkEtRjAtOV17MSw0fSl7Mn0kKXwoXihbYS1mQS1GMC05XXsxLDR9KSAoOlthLWZBLUYwLTldezEsNH0pezd9JCl8KF46KDpbYS1mQS1GMC05XXsxLDR9KDo6KT8pezEsNn0kKXwoXigoOjopP1thLWZBLUYwLTldezEsNH06KXsxLDZ9OiQpfCheOjokKScpO1xuICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcdFx0XG4gIH0sXG4gIHVyaTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKChodHRwfGh0dHBzfGZ0cCk6XFwvXFwvKT8oKC4qPyk6KC4qPylAKT8oXFx3W1xcd1xcLV17MCw2MX1bXFx3XSkoKFxcLlxcd1tcXHdcXC1dezAsNjF9XFx3KikoOihbMC05XXsxLDV9KSk/KChcXC8uKj8pKFxcPyguKj8pKT8oXFwjKC4qKSk/KT8kJywgJ2knKTtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG4gIH0sXG4gIC8qKlxuXHQgKiBzaW1wbGlmaWVkIHZlcnNpb24gb2YgZW1haWwgdmFsaWRhdGlvbi4gSXQgaXMgbm90IHN0cmljdCBjb21wbGlhbnQgd2l0aCByZmM1MzIyIFxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IFx0dmFsdWUgdG8gdmFsaWRhdGVcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cblx0ICovXG4gIGVtYWlsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgXHRjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKCcvXigoKFthLXpdfFxcZHxbISNcXCQlJlxcdTAwMjdcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpdfFxcZHxbISNcXCQlJlxcdTAwMjdcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJCcsJ2knKTtcbiAgXHRyZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHN0cmluZ0Zvcm1hdHMgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHJpbmdGb3JtYXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgbG9naWNEb29ycywgaGFzTG9naWNEb29ycyB9IGZyb20gJy4vbG9naWNEb29ycyc7XG5pbXBvcnQgeyBTY2hlc29uIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3Qgc2NoZW1hU3RyaW5nID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBtaW5MZW5ndGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbXVsdGlwbGVPZjogMSxcbiAgICAgIG1pbmltdW06IDBcbiAgICB9LFxuICAgIG1heExlbmd0aDoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBtdWx0aXBsZU9mOiAxLFxuICAgICAgbWluaW11bTogMFxuICAgIH0sXG4gICAgcGF0dGVybjoge1xuICAgICAgdHlwZToge1xuICAgICAgICBvbmVPZjogWydzdHJpbmcnLCAncmVnZXhwJywgJ29iamVjdCddXG4gICAgICB9XG4gICAgfSxcbiAgICBlbnVtZXJhdGU6IHtcbiAgICAgIHR5cGU6ICdhcnJheSdcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgdHlwZToge1xuICAgICAgICBvbmVPZjogWydzdHJpbmcnLCAnb2JqZWN0J11cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuXG4vKipcbiAqIHRlc3QgdmFsdWUgYWdhaW5zdCBwYXR0ZXJuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgdG8gdGVzdFxuICogQHBhcmFtICB7UmVnRXhwfSBwYXR0ICBQYXR0ZXJuIHRvIHVzZVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuICovXG5mdW5jdGlvbiBwYXR0ZXJuVGVzdCh2YWx1ZSwgcGF0dCkge1xuICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcbiAgaWYodmFyVHlwZShwYXR0LCAnc3RyaW5nJykpIHtcbiAgICBwYXR0ID0gbmV3IFJlZ0V4cChwYXR0KTtcbiAgfVxuICBpZiAodmFyVHlwZShwYXR0LCAncmVnZXhwJykpIHtcbiAgICBpZiAoIXBhdHQudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgndGhlIHRleHQgbXVzdCBmaXQgdGhlIHBhdHRlcm4gYXQgc2NoZW1hJyk7XHRcdFx0XHRcdFx0XHRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRlc3QodmFsdWUsIGZvcm1hdCkge1xuICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcbiAgaWYoIFNjaGVzb24uc3RyaW5nRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpKSB7XG4gICAgaWYgKCAhU2NoZXNvbi5zdHJpbmdGb3JtYXRzW2Zvcm1hdF0odmFsdWUpICkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdzdHJpbmcgdmFsdWUgZG9lc25cXCd0IGZpdCB3aXRoICcgKyBmb3JtYXQgKyAnIHNwZWNpZmljYXRpb24nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmNvbnN0IHR5cGVTdHJpbmcgPSB7XG4gIG1pbkxlbmd0aDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21pbkxlbmd0aCcsICdudW1iZXInKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWluTGVuZ3RoKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyBzaG9ydGVyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5taW5MZW5ndGggKyAnKScpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcdFx0XG4gIH0sXG4gIG1heExlbmd0aDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21heExlbmd0aCcsICdudW1iZXInKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWF4TGVuZ3RoKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyBsb25nZXIgdGhhbiBhbGxvd2VkICgnICsgc2NoZW1hLm1heExlbmd0aCArICcpJyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1x0XHRcbiAgfSxcbiAgZW51bWFyYXRlOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdlbnVtZXJhdGUnLCAnYXJyYXknKSAmJiBzY2hlbWEuZW51bWVyYXRlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlLFxuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG9uZSBvZiBlbnVtZXJhdGVkOiBbJyArIHNjaGVtYS5lbnVtZXJhdGUuam9pbignLCAnKSArICddJyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1x0XHRcbiAgfSxcbiAgcGF0dGVybjogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAncGF0dGVybicpKSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hLnBhdHRlcm4pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEucGF0dGVybiwgcGF0dGVyblRlc3QpXG4gICAgICAgIDogcGF0dGVyblRlc3QodmFsdWUsIHNjaGVtYS5wYXR0ZXJuKTtcbiAgICAgIGlmKHJ0cm4udmFsaWQpe1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcdFx0XG4gIH0sXG4gIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdmb3JtYXQnKSkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKHNjaGVtYS5mb3JtYXQpKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEuZm9ybWF0LCBmb3JtYXRUZXN0KVxuICAgICAgICA6IHBhdHRlcm5UZXN0KHZhbHVlLCBzY2hlbWEuZm9ybWF0KTtcbiAgICAgIGlmKHJ0cm4udmFsaWQpe1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG59O1xuXG5leHBvcnQge3R5cGVTdHJpbmcsIHNjaGVtYVN0cmluZ307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZVN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFxuICovXG5pbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcblxuY29uc3Qgc2NoZW1hTnVtYmVyID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBtaW5pbXVtOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgbWF4aW11bToge1xuICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9LFxuICAgIGV4Y2x1c2l2ZU1pbmltdW06IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZXhjbHVzaXZlTWF4aW11bToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBtdWx0aXBsZU9mOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgZW51bWVyYXRlOiB7XG4gICAgICB0eXBlOiAnYXJyYXknXG4gICAgfVxuICB9LFxuICByZXF1aXJlZDogWyd0eXBlJ11cbn07XG5cbmNvbnN0IHR5cGVOdW1iZXIgPSB7XG4gIG1pbmltdW06IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWluaW11bScsICdudW1iZXInKSApIHtcbiAgICAgIGlmKCAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdleGNsdXNpdmVNaW5pbXVtJywgJ2Jvb2xlYW4nLCB0cnVlKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWluaW11bSkgXG4gICB8fCB2YWx1ZSA8IHNjaGVtYS5taW5pbXVtICkge1xuICAgICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnbnVtYmVyIGxvd2VyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5taW5pbXVtICsgJyknKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG4gIG1heGltdW06IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4aW11bScsICdudW1iZXInKSApIHtcbiAgICAgIGlmKCAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdleGNsdXNpdmVNYXhpbXVtJywgJ2Jvb2xlYW4nLCB0cnVlKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWF4aW11bSkgXG4gICB8fCB2YWx1ZSA8IHNjaGVtYS5tYXhpbXVtICkge1xuICAgICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnbnVtYmVyIGhpZ2hlciB0aGFuIGFsbG93ZWQgKCcgKyBzY2hlbWEubWF4aW11bSArICcpJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuICBtdWx0aXBsZU9mOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ211bHRpcGxlT2YnLCAnbnVtYmVyJykgJiYgdmFsdWUgJSBzY2hlbWEubXVsdGlwbGVPZiAhPT0gMCkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlLFxuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZik7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuICBlbnVtZXJhdGU6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdlbnVtZXJhdGUnLCAnYXJyYXknKSAmJiBzY2hlbWEuZW51bWVyYXRlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlLFxuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG9uZSBvZiBlbnVtZXJhdGVkOiBbJyArIHNjaGVtYS5lbnVtZXJhdGUuam9pbignLCcpICsgJ10nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbn07XG5cbmV4cG9ydCB7dHlwZU51bWJlciwgc2NoZW1hTnVtYmVyfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90eXBlTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgU2NoZXNvbiwgYXBwZW5kQ2hpbGRGYWlsdXJlcyB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHNjaGVtYUFycmF5ID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBtaW5JdGVtczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBtaW5pbXVtOiAwLFxuICAgICAgbXVsdGlwbGVPZjogMVxuICAgIH0sXG4gICAgbWF4SXRlbXM6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICAgIG11bHRpcGxlT2Y6IDFcbiAgICB9LFxuICAgIHVuaXF1ZUl0ZW1zOiB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIGFueU9mOiBbXG4gICAgICAgICAgJ2Jvb2xlYW4nLFx0Ly8gZm9yIHdob2xlIHZhbHVlIGNoZWNrXG4gICAgICAgICAgJ3N0cmluZydcdFx0Ly8gZm9yIGFuIHNwZWNpZmljIHByb3BlcnR5IGl0ZW1zXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZGl0aW9uYWxJdGVtczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgdHlwZToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuY29uc3QgdHlwZUFycmF5ID0ge1xuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgdmFsdWUgaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkLCB1c2VkIHdoZW4gc2NoZW1hIGhhcyBmaXhlZCBpdGVtc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIGFkZGl0aW9uYWxJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgY29uc3QgaXRlbXNOdW0gPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2l0ZW1zJywgJ2FycmF5JykgPyBzY2hlbWEuaXRlbXMubGVuZ3RoOiAwO1xuXG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FkZGl0aW9uYWxJdGVtcycsICdib29sZWFuJykgJiYgIXNjaGVtYS5hZGRpdGlvbmFsSXRlbXNcbiAgICYmIHZhbHVlLmxlbmd0aCA+IGl0ZW1zTnVtKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbm8gYWRkaXRpb25hbCBpdGVtcyBhbGxvd2VkJyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayB0aGUgdmFsdWUncyBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgbWluSXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtaW5JdGVtcycsICdudW1iZXInKSAmJiB2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMpIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgdmFsdWUgaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkLCB1c2VkIHdoZW4gc2NoZW1hIGhhcyBmaXhlZCBpdGVtc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIG1heEl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4SXRlbXMnLCAnbnVtYmVyJykgJiYgdmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1heEl0ZW1zKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnaXRlbXMgaW4gYXJyYXkgc2hvdWxkIGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgaXRlbXMgb2YgdGhlIHZhbHVlIGFyZSB1bmlxdWUsIGVudGlyZWx5IG9yIGluIGEgcHJvcGVydHlcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICB1bmlxdWVJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3VuaXF1ZUl0ZW1zJykpIHtcbiAgICAgIGNvbnN0IHdpdG5lc3MgPSBbXTtcbiAgICAgIHJ0cm4udmFsaWQgPSAhdmFsdWUuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdmFyVHlwZShzY2hlbWEudW5pcXVlSXRlbXMsICdzdHJpbmcnKSA/IGl0ZW1bc2NoZW1hLnVuaXF1ZUl0ZW1zXSA6IGl0ZW07XG4gICAgICAgIGlmICggd2l0bmVzcy5pbmRleE9mKGVsZW1lbnQpID4gLTEpIHtcbiAgICAgICAgICB3aXRuZXNzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgdW5pcXVlJyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgaXRlbXMgb2YgdGhlIHZhbHVlIGFyZSB1bmlxdWUsIGVudGlyZWx5IG9yIGluIGEgcHJvcGVydHlcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBpdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUl0ID0gdmFyVHlwZS5pcyhzY2hlbWEuaXRlbXMsICdhcnJheScpID8gc2NoZW1hLml0ZW1zW2lkeF0gOiBzY2hlbWEuaXRlbXM7XG4gICAgICBjb25zdCBnZXRSdHJuID0gU2NoZXNvbi5jaGVjayhpdGVtLCBzY2hlbWFJdCk7XG4gICAgICBpZiAoIHJ0cm4udmFsaWQgKXtcbiAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICB9XG4gICAgICBydHJuLmZhaWx1cmVzLmNoaWxkcmVuID0gYXBwZW5kQ2hpbGRGYWlsdXJlcyhydHJuLmZhaWx1cmVzLmNoaWxkcmVuLCBpZHgsIGdldFJ0cm4uZmFpbHVyZXMpO1x0XHRcdFx0XG4gICAgfSk7XG4gICAgcmV0dXJuIHJ0cm47XG4gIH1cbn07XG5cbmV4cG9ydCB7dHlwZUFycmF5LCBzY2hlbWFBcnJheX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgbG9naWNEb29ycywgaGFzTG9naWNEb29ycyB9IGZyb20gJy4vbG9naWNEb29ycyc7XG5pbXBvcnQgeyBTY2hlc29uLCBhcHBlbmRDaGlsZEZhaWx1cmVzIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3Qgc2NoZW1hT2JqZWN0ID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0J1xuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdhcnJheSdcbiAgICB9LFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuY29uc3QgdHlwZU9iamVjdCA9IHtcblxuICAvKipcblx0ICogY2hlY2sgdGhlcmUgYXJlIG1vcmUgcHJvcGVydGllcyB0aGFuIGFsbG93ZWRcblx0ICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFTdHJpbmdcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWRkaXRpb25hbFByb3BlcnRpZXMnLCAnYm9vbGVhbicpICYmICFzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICYmIE9iamVjdC5rZXlzKHZhbHVlKS5zb21lKCBmdW5jdGlvbihpdGVtKSB7XG4gICAgIHJldHVybiAoICFkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3Byb3BlcnRpZXMnLCAnb2JqZWN0JykgfHwgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmluZGV4T2YoaXRlbSkgPT09IC0xKTtcbiAgIH0pXG4gICAgKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbm8gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFsbG93ZWQnKTtcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbiAgLyoqXG5cdCAqIGNoZWNrIHRoZSB2YWx1ZSdzIHByb3BlcnRpZXNcblx0ICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyB0byBzY2hlbWFPYmplY3Rcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIHByb3BlcnRpZXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuXG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3Byb3BlcnRpZXMnLCAnb2JqZWN0JykgKSB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCggZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUodmFsdWUsIGtleSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XS50eXBlKSApIHtcblxuICAgICAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEucHJvcGVydGllc1trZXldKSkgXG4gICAgICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWVba2V5XSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSwgU2NoZXNvbi5jaGVjaylcbiAgICAgICAgICAgIDogU2NoZXNvbi5jaGVjayh2YWx1ZVtrZXldLCBzY2hlbWEucHJvcGVydGllc1trZXldKTtcblxuICAgICAgICAgIGlmKCFnZXRSdHJuLnZhbGlkKXtcbiAgICAgICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgICAgICAgcnRybi5mYWlsdXJlcy5jaGlsZHJlbiA9IGFwcGVuZENoaWxkRmFpbHVyZXMocnRybi5jaGlsZHJlbiwga2V5LCBnZXRSdHJuLmZhaWx1cmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfVxufTtcblxuZXhwb3J0IHt0eXBlT2JqZWN0LCBzY2hlbWFPYmplY3R9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==