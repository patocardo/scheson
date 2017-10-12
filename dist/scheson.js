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

/*function schesonClass() {
}
schesonClass.prototype.types = Scheson.types;

module.exports = schesonClass;
*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTMyZWVkZDRmNmU0ZGJlOTUxOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2ljQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljRG9vcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5nRm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZU51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxZQUFZO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R29DO0FBQ0E7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCLHVCQUF1Qjs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjaGVzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMzJlZWRkNGY2ZTRkYmU5NTE5MCIsImNvbnN0IHZhclR5cGUgPSB7fTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHZhclR5cGUsIHtcbiAgZ2V0OiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUgLyosIGxvd2VyY2FzZSAqLykge1xuICAgICAgbGV0IHJ0cm4gPSAvXFxzKFxcdyspXS9pLmV4ZWMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSlbMV07IC8vIFRPRE86IHRlc3QgaW4gTVNJRSBmb3IgTm9kZUNvbGxlY3Rpb25cbiAgICAgIHJ0cm4gPSAoL0V2ZW50Ly50ZXN0KHJ0cm4pKSA/ICdFdmVudC4nICsgcnRybiA6IHJ0cm47XG4gICAgICBydHJuID0gKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSkgPyBydHJuLnRvTG93ZXJDYXNlKCkgOiBydHJuO1xuICAgICAgaWYocnRybiA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSB7IC8vIE5hTiBjb3JyZWN0aW9uXG4gICAgICAgIHJ0cm4gPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdKSA/ICduYW4nIDogJ05hTic7XG4gICAgICB9XG4gICAgICByZXR1cm4gcnRybjtcbiAgICB9XG4gIH0sXG4gIGlzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUsIHR5cGUpIHtcbiAgICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBhcmdUeXBlID0gdmFyVHlwZS5nZXQodmFsdWUsIHRydWUpO1xuICAgICAgaWYodHlwZSA9PT0gJ2V2ZW50Jyl7XG4gICAgICAgIHJldHVybiAvZXZlbnQkL2kudGVzdChhcmdUeXBlKTtcbiAgICAgIH1cbiAgICAgICBpZih0eXBlID09PSAnZXJyb3InKXtcbiAgICAgICAgcmV0dXJuIC9lcnJvciQvaS50ZXN0KGFyZ1R5cGUpO1xuICAgICAgfVxuICAgICAgaWYoIGFyZ1R5cGUgPT09ICdodG1sY29sbGVjdGlvbicgfHwgYXJnVHlwZSA9PT0gJ25vZGVsaXN0Jykge1xuICAgICAgICByZXR1cm4gKHR5cGUgPT09ICdodG1sY29sbGVjdGlvbicgfHwgdHlwZSA9PT0gJ25vZGVsaXN0Jyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHJldHVybiAoYXJnVHlwZSA9PT0gJ2h0bWxlbGVtZW50JyAmJiB2YXJUeXBlLmlzKHZhbHVlLm5vZGVUeXBlLCAnbnVtYmVyJykgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdUeXBlID09IHR5cGU7XG4gICAgfVxuICB9LFxuICBpc0J1aWx0SW46IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgLy8gVE9ETzogaWYgaXQgaXMgcG9zc2libGUsIHN1cGVyc2VkIHRoaXMgZnVuY3Rpb24gYnkgYW4gYXV0b21hdGljIHdheSB0byBjaGVjayBzdXBwb3J0ZWQgYnVpbHQtaW5zXG4gICAgICAvLyB3aXRoIHRoZSByZXNwZWN0aXZlIGNvcnJlY3Rpb25zXG4gICAgICBjb25zdCBidWlsdElucyA9IFsnbnVsbCcsICdib29sZWFuJywgJ251bWJlcicsICduYW4nLCAnc3RyaW5nJywgJ2FycmF5JywgJ29iamVjdCcsXG4gICAgICAgICdmdW5jdGlvbicsICdkYXRlJywgJ3JlZ2V4cCcsICdodG1sY29sbGVjdGlvbicsICdodG1sZWxlbWVudCcsICdub2RlbGlzdCcsICdub2RlJyxcbiAgICAgICAgJ3Byb21pc2UnLCAnYXJyYXlidWZmZXInLCAncmVmbGVjdCcsICdtYXAnLCAnd2VhaycsICd3ZWFrbWFwJywgJ3NldCcsICdzeW1ib2wnLFxuICAgICAgICAneG1saHR0cHJlcXVlc3QnLFxuICAgICAgICAnZXZlbnQnLCAnbW91c2VldmVudCcsICdhbmltYXRpb25ldmVudCcsICd3aGVlbGV2ZW50JywgJ2tleWJvYXJkZXZlbnQnLFxuICAgICAgICAnZXJyb3InLCAndHlwZWVycm9yJywgJ3JhbmdlZXJyb3InLCAncmVmZXJlbmNlZXJyb3InXTtcbiAgICAgICAgcmV0dXJuIGJ1aWx0SW5zLmluZGV4T2YodHlwZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cbiAgfSxcbiAgcGFyc2VTdHJpbmc6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGlmICh2YXJUeXBlLmlzKHN0ciwgJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRhbHMgPSB7XG4gICAgICAgICAgJ251bGwnOiBudWxsLFxuICAgICAgICAgICdmYWxzZSc6IGZhbHNlLFxuICAgICAgICAgICd0cnVlJzogdHJ1ZSxcbiAgICAgICAgICAnbmFuJzogTmFOLFxuICAgICAgICAgICdpbmZpbml0eSc6IEluZmluaXR5XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlbGVtZW50YWxzLmhhc093blByb3BlcnR5KHN0ci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIHN0ciA9IGVsZW1lbnRhbHNbc3RyLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpIHtcbiAgICAgICAgICAgIHN0ciA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoL15cXHMqXFxbKC58XFxufFxccikqXFxdXFxzKiQvZ20udGVzdChzdHIpIHx8IC9eXFxzKlxceygufFxcbnxcXHIpKlxcfVxccyokL2dtLnRlc3Qoc3RyKSl7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RyID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCd2YXJUeXBlLnBhcnNlU3RyaW5nIHVzZWQgd2l0aCBub24tc3RyaW5nIHZhbHVlJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRlZmluZWRUeXBlVmFsdWUob2JqLCBwcm9wIC8qLCB0eXBlLCB2YWx1ZSovKSB7XG4gIGxldCBydHJuID0gdHJ1ZTtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiB2YXJUeXBlLmlzKGFyZ3VtZW50c1syXSwgJ3N0cmluZycpICl7XG4gICAgICBpZighdmFyVHlwZS5pcyhvYmpbcHJvcF0sIGFyZ3VtZW50c1syXSkpe1xuICAgICAgICBydHJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICggcnRybiAmJiBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBvYmpbcHJvcF0gIT09IGFyZ3VtZW50c1szXSkge1xuICAgICAgcnRybiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBydHJuID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmV4cG9ydCB7dmFyVHlwZSwgZGVmaW5lZFR5cGVWYWx1ZX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzaWNDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB2YXJUeXBlLCBkZWZpbmVkVHlwZVZhbHVlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IGxvZ2ljRG9vcnMsIGhhc0xvZ2ljRG9vcnMgfSBmcm9tICcuL2xvZ2ljRG9vcnMnO1xuXG5jb25zdCBTY2hlc29uID0ge307XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkRmFpbHVyZXMoY2hpbGRyZW5PYmosIGtleSwgZmFpbHVyZXMpIHtcbiAgaWYgKCAhY2hpbGRyZW5PYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIGNoaWxkcmVuT2JqW2tleV0gPSB7IHNlbGY6IFtdLCBjaGlsZHJlbjoge319O1xuICB9XG4gIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNoaWxkcmVuT2JqW2tleV0uZmFpbHVyZXMuc2VsZiwgZmFpbHVyZXMuc2VsZik7XG4gIGlmIChPYmplY3Qua2V5cyhmYWlsdXJlcy5jaGlsZHJlbikubGVuZ3RoID4gMCkge1xuICAgIE9iamVjdC5rZXlzKGZhaWx1cmVzLmNoaWxkcmVuKS5mb3JFYWNoKCBmdW5jdGlvbiAoY2hpbGRLZXkpIHtcbiAgICAgIGZhaWx1cmVzLmNoaWxkcmVuID0gYXBwZW5kQ2hpbGRGYWlsdXJlcyhmYWlsdXJlcy5jaGlsZHJlbiwgY2hpbGRLZXksIGZhaWx1cmVzLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5PYmo7XG59XG5cbmZ1bmN0aW9uIGFsbFJlcXVpcmVkKHZhbHVlLCBzY2hlbWEpIHtcbiAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7c2VsZjpbXSwgY2hpbGRyZW46W119fTtcbiAgY29uc3QgbWlzc2luZ1Byb3AgPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3JlcXVpcmVkJywgJ2FycmF5JykgXG4gICAgPyBzY2hlbWEucmVxdWlyZWQuc29tZSggZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShpdGVtKTtcbiAgICB9KVxuICAgIDogZmFsc2U7XG4gIGlmIChtaXNzaW5nUHJvcCkge1xuICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgndGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSByZXF1aXJlZDogJyArIHNjaGVtYS5yZXF1aXJlZC5qb2luKCcsICcpKTtcbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuZnVuY3Rpb24gc3dlZXBDaGVja2Vycyh2YWx1ZSwgc2NoZW1hKXtcbiAgY29uc3QgcnRybiA9IHtcbiAgICB2YWxpZDogdHJ1ZSwgXG4gICAgZmFpbHVyZXM6IHtcbiAgICAgIHNlbGY6IFtdLFxuICAgICAgY2hpbGRyZW46IHt9XG4gICAgfVxuICB9O1xuICBpZiAoIHZhclR5cGUuaXNCdWlsdEluKHNjaGVtYS50eXBlKSAmJiAhdmFyVHlwZS5pcyh2YWx1ZSwgc2NoZW1hLnR5cGUpKSB7XG4gICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdiYWQgdHlwZSwgaXQgc2hvdWxkIGJlICcgKyBzY2hlbWEudHlwZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYoIFNjaGVzb24udHlwZXMuaGFzT3duUHJvcGVydHkoc2NoZW1hLnR5cGUpKSB7XG4gICAgICBjb25zdCBhbGxSZXEgPSBhbGxSZXF1aXJlZCh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgIGlmICggIWFsbFJlcS52YWxpZCApIHtcbiAgICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLnNlbGYsIGFsbFJlcS5mYWlsdXJlcy5zZWxmKTsgICAgIFxuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoU2NoZXNvbi50eXBlc1tzY2hlbWEudHlwZV0pLmZvckVhY2goIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBjb25zdCBnZXRSdHJuID0gU2NoZXNvbi50eXBlc1tzY2hlbWEudHlwZV1ba2V5XSh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgICAgaWYocnRybi52YWxpZCkge1xuICAgICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuc2VsZiwgZ2V0UnRybi5mYWlsdXJlcy5zZWxmKTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ2V0UnRybi5mYWlsdXJlcy5jaGlsZHJlbikuZm9yRWFjaCggZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYgKCBydHJuLmZhaWx1cmVzLmNoaWxkcmVuLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW5ba2V5XSwgZ2V0UnRybi5mYWlsdXJlcy5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBydHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV0gPSBnZXRSdHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTY2hlc29uLCB7XG4gIHR5cGVzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge31cbiAgfSxcbiAgc3RyaW5nRm9ybWF0czoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHt9XHRcbiAgfSxcbiAgc3VwZXJTY2hlbWFzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge31cbiAgfSxcbiAgcHVzaFR5cGU6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgb2JqLyosIHN1cGVyU2NoZW1hLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIGxldCBydHJuID0gdHJ1ZTtcbiAgICAgIGlmICggU2NoZXNvbi50eXBlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlTmFtZSkgJiYgIWZvcmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggdHlwZU5hbWUgKyAnIGFscmVhZHkgZXhpc3RzLCB0cnkgd2l0aCB0aGUgZm9yY2UgcGFyYW1ldGVyIHRvIG92ZXJ3cml0ZSBpdCcpO1xuICAgICAgfVxuICAgICAgaWYoICF2YXJUeXBlLmlzKHR5cGVOYW1lLCAnc3RyaW5nJykgfHwgIXZhclR5cGUuaXMob2JqLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGUnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGUnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi50eXBlcywgdHlwZU5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogb2JqXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHJ0cm4gPSBTY2hlc29uLnB1c2hTdXBlclNjaGVtYSh0eXBlTmFtZSwgYXJndW1lbnRzWzJdLCBmb3JjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cbiAgfSxcbiAgcHVzaFR5cGVWYWxpZGF0b3I6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgdmFsaWRhdG9yTmFtZSwgZm4vKiwgZm9yY2UqLykge1xuICAgICAgY29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG4gICAgICBsZXQgcnRybiA9IHRydWU7XG4gICAgICBpZiAoICFTY2hlc29uLnR5cGVzLmhhc093blByb3BlcnR5KHR5cGVOYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBkb2VzblxcJ3QgZXhpc3RzLCBhZGQgaXQgZmlyc3Qgd2l0aCBwdXNoVHlwZScpO1xuICAgICAgfVxuICAgICAgaWYgKCBTY2hlc29uLnR5cGVzW3R5cGVOYW1lXS5oYXNPd25Qcm9wZXJ0eSh2YWxpZGF0b3JOYW1lKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB2YWxpZGF0b3JOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCAhdmFyVHlwZS5pcyh2YWxpZGF0b3JOYW1lLCAnc3RyaW5nJykgfHwgIXZhclR5cGUuaXMoZm4sICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hUeXBlVmFsaWRhdG9yJyk7XG4gICAgICB9XG4gICAgICBpZiggZm4ubGVuZ3RoICE9PSAyICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmbiBzaG91bGQgaGF2ZSAyIGFyZ3VtZW50cyBhdCBTY2hlc29uLnB1c2hUeXBlVmFsaWRhdG9yKHR5cGVOYW1lLCB2YWxpZGF0b3JOYW1lLCBmbiknKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVzb24udHlwZXNbdHlwZU5hbWVdLCB2YWxpZGF0b3JOYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZuXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJ0cm47XG4gICAgfVx0XHRcbiAgfSxcbiAgcHVzaFN0cmluZ0Zvcm1hdDoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKGZvcm1hdE5hbWUsIGZuLyosIGZvcmNlKi8pIHtcbiAgICAgIGNvbnN0IGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgICAgaWYgKCBTY2hlc29uLnN0cmluZ0Zvcm1hdHMuaGFzT3duUHJvcGVydHkoZm9ybWF0TmFtZSkgJiYgIWZvcmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggZm9ybWF0TmFtZSArICcgYWxyZWFkeSBleGlzdHMsIHRyeSB3aXRoIHRoZSBmb3JjZSBwYXJhbWV0ZXIgdG8gb3ZlcndyaXRlIGl0Jyk7XG4gICAgICB9XG4gICAgICBpZiggIXZhclR5cGUuaXMoZm9ybWF0TmFtZSwgJ3N0cmluZycpIHx8ICF2YXJUeXBlLmlzKGZuLCAnZnVuY3Rpb24nKSkge1xuICAgICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgdHlwZXMgYXQgU2NoZXNvbi5wdXNoU3RyaW5nRm9ybWF0JywgdmFyVHlwZS5nZXQoZm9ybWF0TmFtZSksIHZhclR5cGUuZ2V0KGZuKSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hTdHJpbmdGb3JtYXQnLCB2YXJUeXBlLmdldChmb3JtYXROYW1lKSwgdmFyVHlwZS5nZXQoZm4pKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjaGVzb24uc3RyaW5nRm9ybWF0cywgZm9ybWF0TmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmblxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHB1c2hTdXBlclNjaGVtYToge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHR5cGVOYW1lLCBvYmovKiwgZm9yY2UqLykge1xuICAgICAgY29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgICBpZiAoIFNjaGVzb24uc3VwZXJTY2hlbWFzLmhhc093blByb3BlcnR5KHR5cGVOYW1lKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB0eXBlTmFtZSArICcgYWxyZWFkeSBleGlzdHMsIHRyeSB3aXRoIHRoZSBmb3JjZSBwYXJhbWV0ZXIgdG8gb3ZlcndyaXRlIGl0Jyk7XG4gICAgICB9XG4gICAgICBpZiggIXZhclR5cGUuaXModHlwZU5hbWUsICdzdHJpbmcnKSB8fCAhdmFyVHlwZS5pcyhvYmosICdvYmplY3QnKSkge1xuICAgICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgdHlwZXMgYXQgU2NoZXNvbi5wdXNoU3VwZXJTY2hlbWEnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFN1cGVyU2NoZW1hJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlc29uLnN1cGVyU2NoZW1hcywgdHlwZU5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogb2JqXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBjaGVjazoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEsIGNoZWNrU2NoZW1hKSB7XG4gICAgICBjb25zdCBydHJuID0geyB2YWxpZDp0cnVlLCBmYWlsdXJlczp7fSwgZXJyb3JzOiB7fX07XG4gICAgICBpZiAoY2hlY2tTY2hlbWEpIHtcbiAgICAgICAgY29uc3QgZ2V0UnRybiA9IFNjaGVzb24uY2hlY2soc2NoZW1hLCBTY2hlc29uLnN1cGVyU2NoZW1hcy5yb290KTtcbiAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICAgIHJ0cm4uZXJyb3JzID0gZ2V0UnRybi5mYWlsdXJlcztcbiAgICAgIH1cbiAgICAgIGlmIChydHJuLnZhbGlkKSB7XG5cbiAgICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKHNjaGVtYSkpIFxuICAgICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgc2NoZW1hLCBzd2VlcENoZWNrZXJzKVxuICAgICAgICAgIDogc3dlZXBDaGVja2Vycyh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICAgIHJ0cm4uZmFpbHVyZXMgPSBnZXRSdHJuLmZhaWx1cmVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJ0cm47XG4gICAgfVxuICB9XG59KTtcblxuXG5leHBvcnQgeyBTY2hlc29uLCBhcHBlbmRDaGlsZEZhaWx1cmVzIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlLCB2YXJUeXBlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcblxuLyoqXG4gKiBjaGVjayBpZiB0aGUgb2JqZWN0IGhhcyBkZWZpbmVkIGF0IGxlYXN0IG9uZSBsb2dpYyBkb29yXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBzY2hlbWEgdGhlIG9iamVjdCB0byBjaGVjayBpbnNpZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICBIYXMgb3Igbm90LCB0aGlzIGlzIHRoZSBxdWVzdGlvblxuICovXG5mdW5jdGlvbiBoYXNMb2dpY0Rvb3JzKHNjaGVtYSkge1xuICBsZXQgcnRybiA9IGZhbHNlO1xuICBpZiAodmFyVHlwZS5pcyhzY2hlbWEsICdvYmplY3QnKSkge1xuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhbnlPZicsICdhcnJheScpIFxuICB8fCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FsbE9mJywgJ2FycmF5JylcbiAgfHwgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdvbmVPZicsICdhcnJheScpXG4gIHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbm90JywgJ2FycmF5JykpIHtcbiAgICAgIHJ0cm4gPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuLyoqXG4gKiB2YWxpZGF0ZSB2YWx1ZSBhZ2FpbnN0IGRpZmZlcmVudCBzY2VuYXJpb3Mgb2YgbG9naWMgZG9vcnNcbiAqIFxuICogQHBhcmFtICB7QW55fSAgIHZhbHVlICAgICAgIHRvIHZhbGlkYXRlIGFnYWluc3RcbiAqIEBwYXJhbSAge09iamVjdH0gICBzY2hlbWEgICBXaXRoIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0YW55T2YgKE9SKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0YWxsT2YgKEFORClcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdG5vdCBcdChOT1IpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtBcnJheX0gXHRvbmVPZiAoWE9SKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7T2JqZWN0fSBcdG5PZiAgKHNwZWNpYWwgWE9SKSB3aXRoIGZvbGxvd2luZyBwcm9wZXJ0aWVzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0e0FycmF5fVx0XHRsaXN0IChyZXF1aXJlZCkgdmFsaWRhdGlvbiBjcml0ZXJpYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0e051bWJlcn1cdG1pbmltdW1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHR7TnVtYmVyfSBcdG1heGltdW1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJ0cm4gPSB7dmFsaWQ6IHRydWUsIGZhaWx1cmVzOiBbXX07XG5cbiAgLy8gT1JcbiAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FueU9mJywgJ2FycmF5JykgKSB7XG4gICAgcnRybi52YWxpZCA9IHNjaGVtYS5hbnlPZi5zb21lKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcbiAgICAgICAgOiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcblxuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocnRybi5mYWlsdXJlcywgZ2V0UnRybi5mYWlsdXJlcyk7XG5cbiAgICAgIGlmIChnZXRSdHJuLnZhbGlkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYoIXJ0cm4udmFsaWQpe1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdBdCBsZWFzdCBvbmUgY3JpdGVyaW9uIHNob3VsZCBtYXRjaCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFORFxuICBpZiAoIHJ0cm4udmFsaWQgJiYgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhbGxPZicsICdhcnJheScpICkge1xuICAgIHJ0cm4udmFsaWQgPSAhc2NoZW1hLmFueU9mLnNvbWUoZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuICAgICAgICA6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLCBnZXRSdHJuLmZhaWx1cmVzKTtcblxuICAgICAgaWYgKGdldFJ0cm4udmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgaWYoIXJ0cm4udmFsaWQpe1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdBbGwgY3JpdGVyaWEgc2hvdWxkIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTk9SXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ25vdCcsICdhcnJheScpICkge1xuICAgIHJ0cm4udmFsaWQgPSAhc2NoZW1hLmFueU9mLnNvbWUoZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuICAgICAgICA6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLCBnZXRSdHJuLmZhaWx1cmVzKTtcblxuICAgICAgaWYgKGdldFJ0cm4udmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYoIXJ0cm4udmFsaWQpe1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdOb25lIG9mIGNyaXRlcmlhIHNob3VsZCBtYXRjaCcpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gWE9SXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ29uZU9mJywgJ2FycmF5JykgKSB7XG4gICAgbGV0IGNvdW50ZXJUcnVlID0gMDtcbiAgICBzY2hlbWEuYW55T2YuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cbiAgICAgIGlmIChnZXRSdHJuLnZhbGlkKSB7XG4gICAgICAgIGNvdW50ZXJUcnVlKys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ZXJUcnVlID09PSAxKSB7XG4gICAgICBydHJuLnZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ09ubHkgb25lIGNyaXRlcmlvbiBzaG91bGQgbWF0Y2gnKTtcdFx0XHRcbiAgICB9XG4gIH1cblx0XG4gIC8vIFhPUiBwbHVzXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ25PZicsICdvYmplY3QnKSBcbiAgJiYgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbGlzdCcsICdhcnJheScpXG4gICYmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWluaW11bScsICdudW1iZXInKSB8fCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtYXhpbXVtJywgJ251bWJlcicpKVxuICApIHtcbiAgICBjb25zdCBtaW5pbXVtID0gZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWluaW11bScsICdudW1iZXInKSA/IHNjaGVtYS5uT2YubWluaW11bSA6IDA7XG4gICAgY29uc3QgbWF4aW11bSA9IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ21heGltdW0nLCAnbnVtYmVyJykgPyBzY2hlbWEubk9mLm1heGltdW0gOiBzY2hlbWEubk9mLmxpc3QubGVuZ3RoO1xuICAgIGxldCBjb3VudGVyVHJ1ZSA9IDA7XG4gICAgc2NoZW1hLmFueU9mLmxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICBjb3VudGVyVHJ1ZSsrO1xuICAgICAgfVxuICAgICAgcnRybi5lcnJvcnMgPSBydHJuLmVycm9ycy5jb25jYXQoZ2V0UnRybi5lcnJvcnMpO1x0XHRcdFxuICAgIH0pO1xuICAgIGlmIChjb3VudGVyVHJ1ZSA+PSBtaW5pbXVtICYmIGNvdW50ZXJUcnVlIDw9IG1heGltdW0pIHtcbiAgICAgIHJ0cm4udmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnQ3JpdGVyaWEgdG8gbWF0Y2ggbXVzdCBiZXR3ZWVuICcgKyBtaW5pbXVtICsgJyBhbmQgJyArIG1heGltdW0pO1x0XHRcdFxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmV4cG9ydCB7aGFzTG9naWNEb29ycywgbG9naWNEb29yc307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbG9naWNEb29ycy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTY2hlc29uIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgc3RyaW5nRm9ybWF0cyB9IGZyb20gJy4vc3RyaW5nRm9ybWF0cyc7XG5pbXBvcnQgeyB0eXBlU3RyaW5nLCBzY2hlbWFTdHJpbmcgfSBmcm9tICcuL3R5cGVTdHJpbmcnO1xuaW1wb3J0IHsgdHlwZU51bWJlciwgc2NoZW1hTnVtYmVyIH0gZnJvbSAnLi90eXBlTnVtYmVyJztcbmltcG9ydCB7IHR5cGVBcnJheSwgc2NoZW1hQXJyYXkgfSBmcm9tICcuL3R5cGVBcnJheSc7XG5pbXBvcnQgeyB0eXBlT2JqZWN0LCBzY2hlbWFPYmplY3QgfSBmcm9tICcuL3R5cGVPYmplY3QnO1xuXG5jb25zdCB0eXBlVmFsaWRhdG9ycyA9IHtcbiAgJ3N0cmluZyc6IHR5cGVTdHJpbmcsXG4gICdudW1iZXInOiB0eXBlTnVtYmVyLFxuICAnYXJyYXknOiB0eXBlQXJyYXksXG4gICdvYmplY3QnOiB0eXBlT2JqZWN0XG59O1xuY29uc3QgdHlwZVN1cGVyU2NoZW1hcyA9IHtcbiAgJ3N0cmluZyc6IHNjaGVtYVN0cmluZyxcbiAgJ251bWJlcic6IHNjaGVtYU51bWJlcixcbiAgJ2FycmF5Jzogc2NoZW1hQXJyYXksXG4gICdvYmplY3QnOiBzY2hlbWFPYmplY3Rcbn07XG5cblxuT2JqZWN0LmtleXMoc3RyaW5nRm9ybWF0cykuZm9yRWFjaCggZnVuY3Rpb24gKGtleSkge1xuICBTY2hlc29uLnB1c2hTdHJpbmdGb3JtYXQoa2V5LCBzdHJpbmdGb3JtYXRzW2tleV0pO1xufSk7XG5cbi8qKlxuICogYm9vbGVhbiBzdXBlciBTY2hlbWFcbiAqL1xudHlwZVN1cGVyU2NoZW1hc1snYm9vbGVhbiddID0ge1xuICB0eXBlOiAnc3RyaW5nJ1xufTtcblxuLyoqXG4gKiBib29sZWFuIHN1cGVyIFNjaGVtYVxuICovXG50eXBlU3VwZXJTY2hlbWFzWydudWxsJ10gPSB7XG4gIHR5cGU6ICdzdHJpbmcnXG59O1xuXG4vLyBhZGQgYnVpbHQtaW4gdHlwZXMgYW5kIHN1cGVyU2NoZW1hc1xuXG5PYmplY3Qua2V5cyh0eXBlVmFsaWRhdG9ycykuZm9yRWFjaCggZnVuY3Rpb24odHlwZSkge1xuICBTY2hlc29uLnB1c2hUeXBlKHR5cGUsIHR5cGVWYWxpZGF0b3JzW3R5cGVdLCB0eXBlU3VwZXJTY2hlbWFzW3R5cGVdKTtcbn0pO1xuXG4vLyBhZGQgcm9vdCBzdXBlciBzY2hlbWFcblNjaGVzb24ucHVzaFN1cGVyU2NoZW1hKCdyb290Jywge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gIH0sXG4gIHJlcXVpcmVkOiBbJ2lkJywgJ3R5cGUnXVxufSk7XG5cbi8qZnVuY3Rpb24gc2NoZXNvbkNsYXNzKCkge1xufVxuc2NoZXNvbkNsYXNzLnByb3RvdHlwZS50eXBlcyA9IFNjaGVzb24udHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gc2NoZXNvbkNsYXNzO1xuKi9cbmV4cG9ydCBjb25zdCB0eXBlcyA9IFNjaGVzb24udHlwZXMsIFxuICBzdXBlclNjaGVtYXMgPSBTY2hlc29uLnN1cGVyU2NoZW1hcywgXG4gIGdldFN0cmluZ0Zvcm1hdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFNjaGVzb24uc3RyaW5nRm9ybWF0cztcbiAgfSxcbiAgcHVzaFR5cGUgPSBTY2hlc29uLnB1c2hUeXBlLFxuICBwdXNoVHlwZVZhbGlkYXRvciA9IFNjaGVzb24ucHVzaFR5cGVWYWxpZGF0b3IsXG4gIHB1c2hTdXBlclNjaGVtYSA9IFNjaGVzb24ucHVzaFN1cGVyU2NoZW1hLCBcbiAgcHVzaFN0cmluZ0Zvcm1hdCA9IFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdCxcbiAgY2hlY2sgPSBTY2hlc29uLmNoZWNrLFxuICBqVHlwZSA9IHZhclR5cGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHN0cmluZ0Zvcm1hdHMgPSB7XG5cbiAgJ2RhdGUtdGltZSc6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGxldCBydHJuID0gZmFsc2U7XG4gICAgY29uc3QgYmFzZVRlc3QgPSAvXFxkezR9LShcXGR7Mn0pLShcXGR7Mn0pKFtUdF0oXFxkezJ9KTooXFxkezJ9KSg6KFxcZHsyfSkoLlxcZHsyLDR9KT9belpdPyk/KT8vLmV4ZWModmFsdWUpO1xuICAgIGlmKGJhc2VUZXN0ICYmICFpc05hTihEYXRlLnBhcnNlKHZhbHVlKSkpe1xuICAgICAgcnRybiA9IHRydWU7XHRcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG4gIGhvc3RuYW1lOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gL14oXFx3KFtcXHdcXC1dezAsNjF9XFx3KT9cXC4pK1thLXpdezIsNn0kL2kudGVzdCh2YWx1ZSk7XG4gIH0sXG4gIC8qKlxuXHQgKiB0aGFua3MgdG8ganRlZXV3ZW4gaHR0cDovL3d3dy5yZWdleGxpYi5jb20vVXNlclBhdHRlcm5zLmFzcHg/YXV0aG9ySWQ9YjE1MzFmNDAtYzA0Ni00MjUzLTk4MDAtYjRmZjQxOWMwMWIyXG5cdCAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IFxuXHQgKi9cbiAgaXB2NDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzAtOV17MSwyfSkoXFwuKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzAtOV17MSwyfSkpezN9JC8udGVzdCh2YWx1ZSk7XG4gIH0sXG4gIC8qKlxuXHQgKiBUaGFuayB0byBqdGVldXdlblxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBcblx0ICovXG4gIGlwdjY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF5cXGR7MjB9JCl8KF4oKDpbYS1mQS1GMC05XXsxLDR9KXs2fXw6OilmZmZmOigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKFxcLigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKXszfSQpfCheKCg6W2EtZkEtRjAtOV17MSw0fSl7Nn18OjopZmZmZig6W2EtZkEtRjAtOV17MSw0fSl7Mn0kKXwoXihbYS1mQS1GMC05XXsxLDR9KSAoOlthLWZBLUYwLTldezEsNH0pezd9JCl8KF46KDpbYS1mQS1GMC05XXsxLDR9KDo6KT8pezEsNn0kKXwoXigoOjopP1thLWZBLUYwLTldezEsNH06KXsxLDZ9OiQpfCheOjokKScpO1xuICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcdFx0XG4gIH0sXG4gIHVyaTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKChodHRwfGh0dHBzfGZ0cCk6XFwvXFwvKT8oKC4qPyk6KC4qPylAKT8oXFx3W1xcd1xcLV17MCw2MX1bXFx3XSkoKFxcLlxcd1tcXHdcXC1dezAsNjF9XFx3KikoOihbMC05XXsxLDV9KSk/KChcXC8uKj8pKFxcPyguKj8pKT8oXFwjKC4qKSk/KT8kJywgJ2knKTtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG4gIH0sXG4gIC8qKlxuXHQgKiBzaW1wbGlmaWVkIHZlcnNpb24gb2YgZW1haWwgdmFsaWRhdGlvbi4gSXQgaXMgbm90IHN0cmljdCBjb21wbGlhbnQgd2l0aCByZmM1MzIyIFxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IFx0dmFsdWUgdG8gdmFsaWRhdGVcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cblx0ICovXG4gIGVtYWlsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgXHRjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKCcvXigoKFthLXpdfFxcZHxbISNcXCQlJlxcdTAwMjdcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpdfFxcZHxbISNcXCQlJlxcdTAwMjdcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpdfFxcZHwtfF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJCcsJ2knKTtcbiAgXHRyZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHN0cmluZ0Zvcm1hdHMgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHJpbmdGb3JtYXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgbG9naWNEb29ycywgaGFzTG9naWNEb29ycyB9IGZyb20gJy4vbG9naWNEb29ycyc7XG5pbXBvcnQgeyBTY2hlc29uIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3Qgc2NoZW1hU3RyaW5nID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBtaW5MZW5ndGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbXVsdGlwbGVPZjogMSxcbiAgICAgIG1pbmltdW06IDBcbiAgICB9LFxuICAgIG1heExlbmd0aDoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBtdWx0aXBsZU9mOiAxLFxuICAgICAgbWluaW11bTogMFxuICAgIH0sXG4gICAgcGF0dGVybjoge1xuICAgICAgdHlwZToge1xuICAgICAgICBvbmVPZjogWydzdHJpbmcnLCAncmVnZXhwJywgJ29iamVjdCddXG4gICAgICB9XG4gICAgfSxcbiAgICBlbnVtZXJhdGU6IHtcbiAgICAgIHR5cGU6ICdhcnJheSdcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgdHlwZToge1xuICAgICAgICBvbmVPZjogWydzdHJpbmcnLCAnb2JqZWN0J11cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuXG4vKipcbiAqIHRlc3QgdmFsdWUgYWdhaW5zdCBwYXR0ZXJuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgdG8gdGVzdFxuICogQHBhcmFtICB7UmVnRXhwfSBwYXR0ICBQYXR0ZXJuIHRvIHVzZVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuICovXG5mdW5jdGlvbiBwYXR0ZXJuVGVzdCh2YWx1ZSwgcGF0dCkge1xuICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcbiAgaWYodmFyVHlwZS5pcyhwYXR0LCAnc3RyaW5nJykpIHtcbiAgICBwYXR0ID0gbmV3IFJlZ0V4cChwYXR0KTtcbiAgfVxuICBpZiAodmFyVHlwZS5pcyhwYXR0LCAncmVnZXhwJykpIHtcbiAgICBpZiAoIXBhdHQudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgndGhlIHRleHQgbXVzdCBmaXQgdGhlIHBhdHRlcm4gYXQgc2NoZW1hJyk7XHRcdFx0XHRcdFx0XHRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRlc3QodmFsdWUsIGZvcm1hdCkge1xuICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcbiAgaWYoIFNjaGVzb24uc3RyaW5nRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShmb3JtYXQpKSB7XG4gICAgaWYgKCAhU2NoZXNvbi5zdHJpbmdGb3JtYXRzW2Zvcm1hdF0odmFsdWUpICkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdzdHJpbmcgdmFsdWUgZG9lc25cXCd0IGZpdCB3aXRoICcgKyBmb3JtYXQgKyAnIHNwZWNpZmljYXRpb24nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmNvbnN0IHR5cGVTdHJpbmcgPSB7XG4gIG1pbkxlbmd0aDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21pbkxlbmd0aCcsICdudW1iZXInKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWluTGVuZ3RoKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyBzaG9ydGVyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5taW5MZW5ndGggKyAnKScpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcdFx0XG4gIH0sXG4gIG1heExlbmd0aDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21heExlbmd0aCcsICdudW1iZXInKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWF4TGVuZ3RoKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyBsb25nZXIgdGhhbiBhbGxvd2VkICgnICsgc2NoZW1hLm1heExlbmd0aCArICcpJyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1x0XHRcbiAgfSxcbiAgZW51bWFyYXRlOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdlbnVtZXJhdGUnLCAnYXJyYXknKSAmJiBzY2hlbWEuZW51bWVyYXRlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlLFxuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG9uZSBvZiBlbnVtZXJhdGVkOiBbJyArIHNjaGVtYS5lbnVtZXJhdGUuam9pbignLCAnKSArICddJyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1x0XHRcbiAgfSxcbiAgcGF0dGVybjogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAncGF0dGVybicpKSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hLnBhdHRlcm4pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEucGF0dGVybiwgcGF0dGVyblRlc3QpXG4gICAgICAgIDogcGF0dGVyblRlc3QodmFsdWUsIHNjaGVtYS5wYXR0ZXJuKTtcbiAgICAgIGlmKHJ0cm4udmFsaWQpe1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcdFx0XG4gIH0sXG4gIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdmb3JtYXQnKSkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKHNjaGVtYS5mb3JtYXQpKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEuZm9ybWF0LCBmb3JtYXRUZXN0KVxuICAgICAgICA6IHBhdHRlcm5UZXN0KHZhbHVlLCBzY2hlbWEuZm9ybWF0KTtcbiAgICAgIGlmKHJ0cm4udmFsaWQpe1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgIH1cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG59O1xuXG5leHBvcnQge3R5cGVTdHJpbmcsIHNjaGVtYVN0cmluZ307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZVN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFxuICovXG5pbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcblxuY29uc3Qgc2NoZW1hTnVtYmVyID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBtaW5pbXVtOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgbWF4aW11bToge1xuICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9LFxuICAgIGV4Y2x1c2l2ZU1pbmltdW06IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgZXhjbHVzaXZlTWF4aW11bToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBtdWx0aXBsZU9mOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgZW51bWVyYXRlOiB7XG4gICAgICB0eXBlOiAnYXJyYXknXG4gICAgfVxuICB9LFxuICByZXF1aXJlZDogWyd0eXBlJ11cbn07XG5cbmNvbnN0IHR5cGVOdW1iZXIgPSB7XG4gIG1pbmltdW06IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWluaW11bScsICdudW1iZXInKSApIHtcbiAgICAgIGlmKCBcbiAgICAgICAgKGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZXhjbHVzaXZlTWluaW11bScsICdib29sZWFuJywgdHJ1ZSkgJiYgdmFsdWUgPD0gc2NoZW1hLm1pbmltdW0pIFxuICAgICAgICB8fCB2YWx1ZSA8IHNjaGVtYS5taW5pbXVtIFxuICAgICAgKSB7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ251bWJlciBsb3dlciB0aGFuIGFsbG93ZWQgKCcgKyBzY2hlbWEubWluaW11bSArICcpJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuICBtYXhpbXVtOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21heGltdW0nLCAnbnVtYmVyJykgKSB7XG4gICAgICBpZiggXG4gICAgICAgIChkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2V4Y2x1c2l2ZU1heGltdW0nLCAnYm9vbGVhbicsIHRydWUpICYmIHZhbHVlIDw9IHNjaGVtYS5tYXhpbXVtKSBcbiAgICAgICAgfHwgdmFsdWUgPCBzY2hlbWEubWF4aW11bSBcbiAgICAgICkge1xuICAgICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdudW1iZXIgaGlnaGVyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5tYXhpbXVtICsgJyknKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG4gIG11bHRpcGxlT2Y6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbXVsdGlwbGVPZicsICdudW1iZXInKSAmJiB2YWx1ZSAlIHNjaGVtYS5tdWx0aXBsZU9mICE9PSAwKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2UsXG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgndmFsdWUgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcbiAgZW51bWVyYXRlOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZW51bWVyYXRlJywgJ2FycmF5JykgJiYgc2NoZW1hLmVudW1lcmF0ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZSxcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCd2YWx1ZSBtdXN0IGJlIG9uZSBvZiBlbnVtZXJhdGVkOiBbJyArIHNjaGVtYS5lbnVtZXJhdGUuam9pbignLCcpICsgJ10nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbn07XG5cbmV4cG9ydCB7dHlwZU51bWJlciwgc2NoZW1hTnVtYmVyfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90eXBlTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgU2NoZXNvbiwgYXBwZW5kQ2hpbGRGYWlsdXJlcyB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHNjaGVtYUFycmF5ID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBtaW5JdGVtczoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBtaW5pbXVtOiAwLFxuICAgICAgbXVsdGlwbGVPZjogMVxuICAgIH0sXG4gICAgbWF4SXRlbXM6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICAgIG11bHRpcGxlT2Y6IDFcbiAgICB9LFxuICAgIHVuaXF1ZUl0ZW1zOiB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIGFueU9mOiBbXG4gICAgICAgICAgJ2Jvb2xlYW4nLFx0Ly8gZm9yIHdob2xlIHZhbHVlIGNoZWNrXG4gICAgICAgICAgJ3N0cmluZydcdFx0Ly8gZm9yIGFuIHNwZWNpZmljIHByb3BlcnR5IGl0ZW1zXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZGl0aW9uYWxJdGVtczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfSxcbiAgICBpdGVtczoge1xuICAgICAgdHlwZToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuY29uc3QgdHlwZUFycmF5ID0ge1xuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgdmFsdWUgaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkLCB1c2VkIHdoZW4gc2NoZW1hIGhhcyBmaXhlZCBpdGVtc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIGFkZGl0aW9uYWxJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgY29uc3QgaXRlbXNOdW0gPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2l0ZW1zJywgJ2FycmF5JykgPyBzY2hlbWEuaXRlbXMubGVuZ3RoOiAwO1xuXG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FkZGl0aW9uYWxJdGVtcycsICdib29sZWFuJykgJiYgIXNjaGVtYS5hZGRpdGlvbmFsSXRlbXNcbiAgICYmIHZhbHVlLmxlbmd0aCA+IGl0ZW1zTnVtKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbm8gYWRkaXRpb25hbCBpdGVtcyBhbGxvd2VkJyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayB0aGUgdmFsdWUncyBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgbWluSXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtaW5JdGVtcycsICdudW1iZXInKSAmJiB2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMpIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgdmFsdWUgaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkLCB1c2VkIHdoZW4gc2NoZW1hIGhhcyBmaXhlZCBpdGVtc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIG1heEl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4SXRlbXMnLCAnbnVtYmVyJykgJiYgdmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1heEl0ZW1zKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnaXRlbXMgaW4gYXJyYXkgc2hvdWxkIGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgaXRlbXMgb2YgdGhlIHZhbHVlIGFyZSB1bmlxdWUsIGVudGlyZWx5IG9yIGluIGEgcHJvcGVydHlcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICB1bmlxdWVJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3VuaXF1ZUl0ZW1zJykpIHtcbiAgICAgIGNvbnN0IHdpdG5lc3MgPSBbXTtcbiAgICAgIHJ0cm4udmFsaWQgPSAhdmFsdWUuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdmFyVHlwZShzY2hlbWEudW5pcXVlSXRlbXMsICdzdHJpbmcnKSA/IGl0ZW1bc2NoZW1hLnVuaXF1ZUl0ZW1zXSA6IGl0ZW07XG4gICAgICAgIGlmICggd2l0bmVzcy5pbmRleE9mKGVsZW1lbnQpID4gLTEpIHtcbiAgICAgICAgICB3aXRuZXNzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgdW5pcXVlJyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgaXRlbXMgb2YgdGhlIHZhbHVlIGFyZSB1bmlxdWUsIGVudGlyZWx5IG9yIGluIGEgcHJvcGVydHlcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBpdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IHNjaGVtYUl0ID0gdmFyVHlwZS5pcyhzY2hlbWEuaXRlbXMsICdhcnJheScpID8gc2NoZW1hLml0ZW1zW2lkeF0gOiBzY2hlbWEuaXRlbXM7XG4gICAgICBjb25zdCBnZXRSdHJuID0gU2NoZXNvbi5jaGVjayhpdGVtLCBzY2hlbWFJdCk7XG4gICAgICBpZiAoIHJ0cm4udmFsaWQgKXtcbiAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICB9XG4gICAgICBydHJuLmZhaWx1cmVzLmNoaWxkcmVuID0gYXBwZW5kQ2hpbGRGYWlsdXJlcyhydHJuLmZhaWx1cmVzLmNoaWxkcmVuLCBpZHgsIGdldFJ0cm4uZmFpbHVyZXMpO1x0XHRcdFx0XG4gICAgfSk7XG4gICAgcmV0dXJuIHJ0cm47XG4gIH1cbn07XG5cbmV4cG9ydCB7dHlwZUFycmF5LCBzY2hlbWFBcnJheX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgbG9naWNEb29ycywgaGFzTG9naWNEb29ycyB9IGZyb20gJy4vbG9naWNEb29ycyc7XG5pbXBvcnQgeyBTY2hlc29uLCBhcHBlbmRDaGlsZEZhaWx1cmVzIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3Qgc2NoZW1hT2JqZWN0ID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0J1xuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6ICdhcnJheSdcbiAgICB9LFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9XG4gIH0sXG4gIHJlcXVpcmVkOiBbJ3R5cGUnXVxufTtcblxuY29uc3QgdHlwZU9iamVjdCA9IHtcblxuICAvKipcblx0ICogY2hlY2sgdGhlcmUgYXJlIG1vcmUgcHJvcGVydGllcyB0aGFuIGFsbG93ZWRcblx0ICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFTdHJpbmdcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoIFxuICAgICAgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhZGRpdGlvbmFsUHJvcGVydGllcycsICdib29sZWFuJykgJiYgIXNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllc1xuICAgICAgJiYgT2JqZWN0LmtleXModmFsdWUpLnNvbWUoIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgIWRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAncHJvcGVydGllcycsICdvYmplY3QnKSBcbiAgICAgICAgICB8fCBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuaW5kZXhPZihpdGVtKSA9PT0gLTFcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbm8gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFsbG93ZWQnKTtcdFx0XHRcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH0sXG5cbiAgLyoqXG5cdCAqIGNoZWNrIHRoZSB2YWx1ZSdzIHByb3BlcnRpZXNcblx0ICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyB0byBzY2hlbWFPYmplY3Rcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIHByb3BlcnRpZXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuXG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3Byb3BlcnRpZXMnLCAnb2JqZWN0JykgKSB7XG4gICAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCggZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUodmFsdWUsIGtleSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XS50eXBlKSApIHtcblxuICAgICAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEucHJvcGVydGllc1trZXldKSkgXG4gICAgICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWVba2V5XSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSwgU2NoZXNvbi5jaGVjaylcbiAgICAgICAgICAgIDogU2NoZXNvbi5jaGVjayh2YWx1ZVtrZXldLCBzY2hlbWEucHJvcGVydGllc1trZXldKTtcblxuICAgICAgICAgIGlmKCFnZXRSdHJuLnZhbGlkKXtcbiAgICAgICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgICAgICAgcnRybi5mYWlsdXJlcy5jaGlsZHJlbiA9IGFwcGVuZENoaWxkRmFpbHVyZXMocnRybi5jaGlsZHJlbiwga2V5LCBnZXRSdHJuLmZhaWx1cmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfVxufTtcblxuZXhwb3J0IHt0eXBlT2JqZWN0LCBzY2hlbWFPYmplY3R9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==