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
      if ( Scheson.types.hasOwnProperty[typeName] && !force) {
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
      if ( !Scheson.types.hasOwnProperty[typeName]) {
        throw new Error( typeName + ' doesn\'t exists, add it first with pushType');
      }
      if ( Scheson.types[typeName].hasOwnProperty[validatorName] && !force) {
        throw new Error( validatorName + ' already exists, try with the force parameter to overwrite it');
      }
      if( !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(validatorName, 'string') || !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
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
      if ( Scheson.superSchemas.hasOwnProperty[typeName] && !force) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDA2YmU1YjY2YmI4ZTU4NjFlOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2ljQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljRG9vcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5nRm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZU51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxZQUFZO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R29DO0FBQ0E7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCLHVCQUF1Qjs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjaGVzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MDZiZTViNjZiYjhlNTg2MWU5ZCIsImNvbnN0IHZhclR5cGUgPSB7fTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHZhclR5cGUsIHtcbiAgZ2V0OiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUgLyosIGxvd2VyY2FzZSAqLykge1xuICAgICAgbGV0IHJ0cm4gPSAvXFxzKFxcdyspXS9pLmV4ZWMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSlbMV07IC8vIFRPRE86IHRlc3QgaW4gTVNJRSBmb3IgTm9kZUNvbGxlY3Rpb25cbiAgICAgIHJ0cm4gPSAoL0V2ZW50Ly50ZXN0KHJ0cm4pKSA/ICdFdmVudC4nICsgcnRybiA6IHJ0cm47XG4gICAgICBydHJuID0gKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSkgPyBydHJuLnRvTG93ZXJDYXNlKCkgOiBydHJuO1xuICAgICAgaWYocnRybiA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSB7IC8vIE5hTiBjb3JyZWN0aW9uXG4gICAgICAgIHJ0cm4gPSAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdKSA/ICduYW4nIDogJ05hTic7XG4gICAgICB9XG4gICAgICByZXR1cm4gcnRybjtcbiAgICB9XG4gIH0sXG4gIGlzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUsIHR5cGUpIHtcbiAgICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBhcmdUeXBlID0gdmFyVHlwZS5nZXQodmFsdWUsIHRydWUpO1xuICAgICAgaWYodHlwZSA9PT0gJ2V2ZW50Jyl7XG4gICAgICAgIHJldHVybiAvZXZlbnQkL2kudGVzdChhcmdUeXBlKTtcbiAgICAgIH1cbiAgICAgICBpZih0eXBlID09PSAnZXJyb3InKXtcbiAgICAgICAgcmV0dXJuIC9lcnJvciQvaS50ZXN0KGFyZ1R5cGUpO1xuICAgICAgfVxuICAgICAgaWYoIGFyZ1R5cGUgPT09ICdodG1sY29sbGVjdGlvbicgfHwgYXJnVHlwZSA9PT0gJ25vZGVsaXN0Jykge1xuICAgICAgICByZXR1cm4gKHR5cGUgPT09ICdodG1sY29sbGVjdGlvbicgfHwgdHlwZSA9PT0gJ25vZGVsaXN0Jyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHJldHVybiAoYXJnVHlwZSA9PT0gJ2h0bWxlbGVtZW50JyAmJiB2YXJUeXBlLmlzKHZhbHVlLm5vZGVUeXBlLCAnbnVtYmVyJykgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdUeXBlID09IHR5cGU7XG4gICAgfVxuICB9LFxuICBpc0J1aWx0SW46IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgLy8gVE9ETzogaWYgaXQgaXMgcG9zc2libGUsIHN1cGVyc2VkIHRoaXMgZnVuY3Rpb24gYnkgYW4gYXV0b21hdGljIHdheSB0byBjaGVjayBzdXBwb3J0ZWQgYnVpbHQtaW5zXG4gICAgICAvLyB3aXRoIHRoZSByZXNwZWN0aXZlIGNvcnJlY3Rpb25zXG4gICAgICBjb25zdCBidWlsdElucyA9IFsnbnVsbCcsICdib29sZWFuJywgJ251bWJlcicsICduYW4nLCAnc3RyaW5nJywgJ2FycmF5JywgJ29iamVjdCcsXG4gICAgICAgICdmdW5jdGlvbicsICdkYXRlJywgJ3JlZ2V4cCcsICdodG1sY29sbGVjdGlvbicsICdodG1sZWxlbWVudCcsICdub2RlbGlzdCcsICdub2RlJyxcbiAgICAgICAgJ3Byb21pc2UnLCAnYXJyYXlidWZmZXInLCAncmVmbGVjdCcsICdtYXAnLCAnd2VhaycsICd3ZWFrbWFwJywgJ3NldCcsICdzeW1ib2wnLFxuICAgICAgICAneG1saHR0cHJlcXVlc3QnLFxuICAgICAgICAnZXZlbnQnLCAnbW91c2VldmVudCcsICdhbmltYXRpb25ldmVudCcsICd3aGVlbGV2ZW50JywgJ2tleWJvYXJkZXZlbnQnLFxuICAgICAgICAnZXJyb3InLCAndHlwZWVycm9yJywgJ3JhbmdlZXJyb3InLCAncmVmZXJlbmNlZXJyb3InXTtcbiAgICAgICAgcmV0dXJuIGJ1aWx0SW5zLmluZGV4T2YodHlwZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cbiAgfSxcbiAgcGFyc2VTdHJpbmc6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGlmICh2YXJUeXBlLmlzKHN0ciwgJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRhbHMgPSB7XG4gICAgICAgICAgJ251bGwnOiBudWxsLFxuICAgICAgICAgICdmYWxzZSc6IGZhbHNlLFxuICAgICAgICAgICd0cnVlJzogdHJ1ZSxcbiAgICAgICAgICAnbmFuJzogTmFOLFxuICAgICAgICAgICdpbmZpbml0eSc6IEluZmluaXR5XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlbGVtZW50YWxzLmhhc093blByb3BlcnR5KHN0ci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIHN0ciA9IGVsZW1lbnRhbHNbc3RyLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpIHtcbiAgICAgICAgICAgIHN0ciA9IHBhcnNlRmxvYXQoc3RyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoL15cXHMqXFxbKC58XFxufFxccikqXFxdXFxzKiQvZ20udGVzdChzdHIpIHx8IC9eXFxzKlxceygufFxcbnxcXHIpKlxcfVxccyokL2dtLnRlc3Qoc3RyKSl7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RyID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCd2YXJUeXBlLnBhcnNlU3RyaW5nIHVzZWQgd2l0aCBub24tc3RyaW5nIHZhbHVlJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRlZmluZWRUeXBlVmFsdWUob2JqLCBwcm9wIC8qLCB0eXBlLCB2YWx1ZSovKSB7XG4gIGxldCBydHJuID0gdHJ1ZTtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiB2YXJUeXBlLmlzKGFyZ3VtZW50c1syXSwgJ3N0cmluZycpICl7XG4gICAgICBpZighdmFyVHlwZS5pcyhvYmpbcHJvcF0sIGFyZ3VtZW50c1syXSkpe1xuICAgICAgICBydHJuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICggcnRybiAmJiBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBvYmpbcHJvcF0gIT09IGFyZ3VtZW50c1szXSkge1xuICAgICAgcnRybiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBydHJuID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJ0cm47XG59XG5cbmV4cG9ydCB7dmFyVHlwZSwgZGVmaW5lZFR5cGVWYWx1ZX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzaWNDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB2YXJUeXBlLCBkZWZpbmVkVHlwZVZhbHVlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IGxvZ2ljRG9vcnMsIGhhc0xvZ2ljRG9vcnMgfSBmcm9tICcuL2xvZ2ljRG9vcnMnO1xuXG5jb25zdCBTY2hlc29uID0ge307XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkRmFpbHVyZXMoY2hpbGRyZW5PYmosIGtleSwgZmFpbHVyZXMpIHtcbiAgaWYgKCAhY2hpbGRyZW5PYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIGNoaWxkcmVuT2JqW2tleV0gPSB7IHNlbGY6IFtdLCBjaGlsZHJlbjoge319O1xuICB9XG4gIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNoaWxkcmVuT2JqW2tleV0uZmFpbHVyZXMuc2VsZiwgZmFpbHVyZXMuc2VsZik7XG4gIGlmIChPYmplY3Qua2V5cyhmYWlsdXJlcy5jaGlsZHJlbikubGVuZ3RoID4gMCkge1xuICAgIE9iamVjdC5rZXlzKGZhaWx1cmVzLmNoaWxkcmVuKS5mb3JFYWNoKCBmdW5jdGlvbiAoY2hpbGRLZXkpIHtcbiAgICAgIGZhaWx1cmVzLmNoaWxkcmVuID0gYXBwZW5kQ2hpbGRGYWlsdXJlcyhmYWlsdXJlcy5jaGlsZHJlbiwgY2hpbGRLZXksIGZhaWx1cmVzLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY2hpbGRyZW5PYmo7XG59XG5cbmZ1bmN0aW9uIGFsbFJlcXVpcmVkKHZhbHVlLCBzY2hlbWEpIHtcbiAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7c2VsZjpbXSwgY2hpbGRyZW46W119fTtcbiAgY29uc3QgbWlzc2luZ1Byb3AgPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3JlcXVpcmVkJywgJ2FycmF5JykgXG4gICAgPyBzY2hlbWEucmVxdWlyZWQuc29tZSggZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShpdGVtKTtcbiAgICB9KVxuICAgIDogZmFsc2U7XG4gIGlmIChtaXNzaW5nUHJvcCkge1xuICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgndGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSByZXF1aXJlZDogJyArIHNjaGVtYS5yZXF1aXJlZC5qb2luKCcsICcpKTtcbiAgfVxuICByZXR1cm4gcnRybjtcbn1cblxuZnVuY3Rpb24gc3dlZXBDaGVja2Vycyh2YWx1ZSwgc2NoZW1hKXtcbiAgY29uc3QgcnRybiA9IHtcbiAgICB2YWxpZDogdHJ1ZSwgXG4gICAgZmFpbHVyZXM6IHtcbiAgICAgIHNlbGY6IFtdLFxuICAgICAgY2hpbGRyZW46IHt9XG4gICAgfVxuICB9O1xuICBpZiAoIHZhclR5cGUuaXNCdWlsdEluKHNjaGVtYS50eXBlKSAmJiAhdmFyVHlwZS5pcyh2YWx1ZSwgc2NoZW1hLnR5cGUpKSB7XG4gICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgIHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdiYWQgdHlwZSwgaXQgc2hvdWxkIGJlICcgKyBzY2hlbWEudHlwZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYoIFNjaGVzb24udHlwZXMuaGFzT3duUHJvcGVydHkoc2NoZW1hLnR5cGUpKSB7XG4gICAgICBjb25zdCBhbGxSZXEgPSBhbGxSZXF1aXJlZCh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgIGlmICggIWFsbFJlcS52YWxpZCApIHtcbiAgICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLnNlbGYsIGFsbFJlcS5mYWlsdXJlcy5zZWxmKTsgICAgIFxuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoU2NoZXNvbi50eXBlc1tzY2hlbWEudHlwZV0pLmZvckVhY2goIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBjb25zdCBnZXRSdHJuID0gU2NoZXNvbi50eXBlc1tzY2hlbWEudHlwZV1ba2V5XSh2YWx1ZSwgc2NoZW1hKTtcbiAgICAgICAgaWYocnRybi52YWxpZCkge1xuICAgICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuc2VsZiwgZ2V0UnRybi5mYWlsdXJlcy5zZWxmKTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ2V0UnRybi5mYWlsdXJlcy5jaGlsZHJlbikuZm9yRWFjaCggZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYgKCBydHJuLmZhaWx1cmVzLmNoaWxkcmVuLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW5ba2V5XSwgZ2V0UnRybi5mYWlsdXJlcy5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBydHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV0gPSBnZXRSdHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhTY2hlc29uLCB7XG4gIHR5cGVzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge31cbiAgfSxcbiAgc3RyaW5nRm9ybWF0czoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHt9XHRcbiAgfSxcbiAgc3VwZXJTY2hlbWFzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge31cbiAgfSxcbiAgcHVzaFR5cGU6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgb2JqLyosIHN1cGVyU2NoZW1hLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIGxldCBydHJuID0gdHJ1ZTtcbiAgICAgIGlmICggU2NoZXNvbi50eXBlcy5oYXNPd25Qcm9wZXJ0eVt0eXBlTmFtZV0gJiYgIWZvcmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggdHlwZU5hbWUgKyAnIGFscmVhZHkgZXhpc3RzLCB0cnkgd2l0aCB0aGUgZm9yY2UgcGFyYW1ldGVyIHRvIG92ZXJ3cml0ZSBpdCcpO1xuICAgICAgfVxuICAgICAgaWYoICF2YXJUeXBlLmlzKHR5cGVOYW1lLCAnc3RyaW5nJykgfHwgIXZhclR5cGUuaXMob2JqLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGUnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFR5cGUnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi50eXBlcywgdHlwZU5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogb2JqXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHJ0cm4gPSBTY2hlc29uLnB1c2hTdXBlclNjaGVtYSh0eXBlTmFtZSwgYXJndW1lbnRzWzJdLCBmb3JjZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cbiAgfSxcbiAgcHVzaFR5cGVWYWxpZGF0b3I6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgdmFsaWRhdG9yTmFtZSwgZm4vKiwgZm9yY2UqLykge1xuICAgICAgY29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG4gICAgICBsZXQgcnRybiA9IHRydWU7XG4gICAgICBpZiAoICFTY2hlc29uLnR5cGVzLmhhc093blByb3BlcnR5W3R5cGVOYW1lXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBkb2VzblxcJ3QgZXhpc3RzLCBhZGQgaXQgZmlyc3Qgd2l0aCBwdXNoVHlwZScpO1xuICAgICAgfVxuICAgICAgaWYgKCBTY2hlc29uLnR5cGVzW3R5cGVOYW1lXS5oYXNPd25Qcm9wZXJ0eVt2YWxpZGF0b3JOYW1lXSAmJiAhZm9yY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCB2YWxpZGF0b3JOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcbiAgICAgIH1cbiAgICAgIGlmKCAhdmFyVHlwZS5pcyh2YWxpZGF0b3JOYW1lLCAnc3RyaW5nJykgfHwgIXZhclR5cGUuaXMoZm4sICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hUeXBlVmFsaWRhdG9yJyk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlc29uLnR5cGVzW3R5cGVOYW1lXSwgdmFsaWRhdG9yTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmblxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBydHJuO1xuICAgIH1cdFx0XG4gIH0sXG4gIHB1c2hTdHJpbmdGb3JtYXQ6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbihmb3JtYXROYW1lLCBmbi8qLCBmb3JjZSovKSB7XG4gICAgICBjb25zdCBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAgIGlmICggU2NoZXNvbi5zdHJpbmdGb3JtYXRzLmhhc093blByb3BlcnR5W2Zvcm1hdE5hbWVdICYmICFmb3JjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGZvcm1hdE5hbWUgKyAnIGFscmVhZHkgZXhpc3RzLCB0cnkgd2l0aCB0aGUgZm9yY2UgcGFyYW1ldGVyIHRvIG92ZXJ3cml0ZSBpdCcpO1xuICAgICAgfVxuICAgICAgaWYoICF2YXJUeXBlLmlzKGZvcm1hdE5hbWUsICdzdHJpbmcnKSB8fCAhdmFyVHlwZS5pcyhmbiwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdCcsIHZhclR5cGUuZ2V0KGZvcm1hdE5hbWUpLCB2YXJUeXBlLmdldChmbikpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdiYWQgdHlwZXMgYXQgU2NoZXNvbi5wdXNoU3RyaW5nRm9ybWF0JywgdmFyVHlwZS5nZXQoZm9ybWF0TmFtZSksIHZhclR5cGUuZ2V0KGZuKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2hlc29uLnN0cmluZ0Zvcm1hdHMsIGZvcm1hdE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZm5cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBwdXNoU3VwZXJTY2hlbWE6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgb2JqLyosIGZvcmNlKi8pIHtcbiAgICAgIGNvbnN0IGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgICAgaWYgKCBTY2hlc29uLnN1cGVyU2NoZW1hcy5oYXNPd25Qcm9wZXJ0eVt0eXBlTmFtZV0gJiYgIWZvcmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciggdHlwZU5hbWUgKyAnIGFscmVhZHkgZXhpc3RzLCB0cnkgd2l0aCB0aGUgZm9yY2UgcGFyYW1ldGVyIHRvIG92ZXJ3cml0ZSBpdCcpO1xuICAgICAgfVxuICAgICAgaWYoICF2YXJUeXBlLmlzKHR5cGVOYW1lLCAnc3RyaW5nJykgfHwgIXZhclR5cGUuaXMob2JqLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IFNjaGVzb24ucHVzaFN1cGVyU2NoZW1hJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2JhZCB0eXBlcyBhdCBTY2hlc29uLnB1c2hTdXBlclNjaGVtYScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NoZXNvbi5zdXBlclNjaGVtYXMsIHR5cGVOYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG9ialxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgY2hlY2s6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hLCBjaGVja1NjaGVtYSkge1xuICAgICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6dHJ1ZSwgZmFpbHVyZXM6e30sIGVycm9yczoge319O1xuICAgICAgaWYgKGNoZWNrU2NoZW1hKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja1NjaGVtYScpO1xuICAgICAgICBjb25zdCBnZXRSdHJuID0gU2NoZXNvbi5jaGVjayhzY2hlbWEsIFNjaGVzb24uc3VwZXJTY2hlbWFzLnJvb3QpO1xuICAgICAgICBjb25zb2xlLmxvZygnc2NoZW1hOicsIHNjaGVtYSwgJ3N1cGVyc2NoZW1hOicsIFNjaGVzb24uc3VwZXJTY2hlbWFzLnJvb3QpO1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgcnRybi5lcnJvcnMgPSBnZXRSdHJuLmZhaWx1cmVzO1xuICAgICAgfVxuICAgICAgaWYgKHJ0cm4udmFsaWQpIHtcblxuICAgICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hKSkgXG4gICAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEsIHN3ZWVwQ2hlY2tlcnMpXG4gICAgICAgICAgOiBzd2VlcENoZWNrZXJzKHZhbHVlLCBzY2hlbWEpO1xuICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgcnRybi5mYWlsdXJlcyA9IGdldFJ0cm4uZmFpbHVyZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcnRybjtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbmV4cG9ydCB7IFNjaGVzb24sIGFwcGVuZENoaWxkRmFpbHVyZXMgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuXG4vKipcbiAqIGNoZWNrIGlmIHRoZSBvYmplY3QgaGFzIGRlZmluZWQgYXQgbGVhc3Qgb25lIGxvZ2ljIGRvb3JcbiAqIEBwYXJhbSAge09iamVjdH0gIHNjaGVtYSB0aGUgb2JqZWN0IHRvIGNoZWNrIGluc2lkZVxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgIEhhcyBvciBub3QsIHRoaXMgaXMgdGhlIHF1ZXN0aW9uXG4gKi9cbmZ1bmN0aW9uIGhhc0xvZ2ljRG9vcnMoc2NoZW1hKSB7XG4gIGxldCBydHJuID0gZmFsc2U7XG4gIGlmICh2YXJUeXBlLmlzKHNjaGVtYSwgJ29iamVjdCcpKSB7XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FueU9mJywgJ2FycmF5JykgXG4gIHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWxsT2YnLCAnYXJyYXknKVxuICB8fCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ29uZU9mJywgJ2FycmF5JylcbiAgfHwgZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdub3QnLCAnYXJyYXknKSkge1xuICAgICAgcnRybiA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG4vKipcbiAqIHZhbGlkYXRlIHZhbHVlIGFnYWluc3QgZGlmZmVyZW50IHNjZW5hcmlvcyBvZiBsb2dpYyBkb29yc1xuICogXG4gKiBAcGFyYW0gIHtBbnl9ICAgdmFsdWUgICAgICAgdG8gdmFsaWRhdGUgYWdhaW5zdFxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNjaGVtYSAgIFdpdGggb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtBcnJheX0gXHRhbnlPZiAoT1IpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtBcnJheX0gXHRhbGxPZiAoQU5EKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0bm90IFx0KE5PUilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdG9uZU9mIChYT1IpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtPYmplY3R9IFx0bk9mICAoc3BlY2lhbCBYT1IpIHdpdGggZm9sbG93aW5nIHByb3BlcnRpZXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHR7QXJyYXl9XHRcdGxpc3QgKHJlcXVpcmVkKSB2YWxpZGF0aW9uIGNyaXRlcmlhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR7TnVtYmVyfVx0bWluaW11bVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHtOdW1iZXJ9IFx0bWF4aW11bVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIGxvZ2ljRG9vcnModmFsdWUsIHNjaGVtYSwgY2FsbGJhY2spIHtcbiAgY29uc29sZS5sb2coJ2xvZ2ljRG9vcnMnKTtcbiAgY29uc3QgcnRybiA9IHt2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcblxuICAvLyBPUlxuICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYW55T2YnLCAnYXJyYXknKSApIHtcbiAgICBydHJuLnZhbGlkID0gc2NoZW1hLmFueU9mLnNvbWUoZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuICAgICAgICA/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuICAgICAgICA6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLCBnZXRSdHJuLmZhaWx1cmVzKTtcblxuICAgICAgaWYgKGdldFJ0cm4udmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZighcnRybi52YWxpZCl7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ0F0IGxlYXN0IG9uZSBjcml0ZXJpb24gc2hvdWxkIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQU5EXG4gIGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FsbE9mJywgJ2FycmF5JykgKSB7XG4gICAgcnRybi52YWxpZCA9ICFzY2hlbWEuYW55T2Yuc29tZShmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZighcnRybi52YWxpZCl7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ0FsbCBjcml0ZXJpYSBzaG91bGQgbWF0Y2gnKTtcbiAgICB9XG4gIH1cblxuICAvLyBOT1JcbiAgaWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbm90JywgJ2FycmF5JykgKSB7XG4gICAgcnRybi52YWxpZCA9ICFzY2hlbWEuYW55T2Yuc29tZShmdW5jdGlvbihpdGVtLCBpZHgpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG4gICAgICAgIDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG4gICAgICBpZiAoZ2V0UnRybi52YWxpZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBpZighcnRybi52YWxpZCl7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ05vbmUgb2YgY3JpdGVyaWEgc2hvdWxkIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cblxuICAvLyBYT1JcbiAgaWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnb25lT2YnLCAnYXJyYXknKSApIHtcbiAgICBsZXQgY291bnRlclRydWUgPSAwO1xuICAgIHNjaGVtYS5hbnlPZi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcbiAgICAgICAgOiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcblxuICAgICAgaWYgKGdldFJ0cm4udmFsaWQpIHtcbiAgICAgICAgY291bnRlclRydWUrKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY291bnRlclRydWUgPT09IDEpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnT25seSBvbmUgY3JpdGVyaW9uIHNob3VsZCBtYXRjaCcpO1x0XHRcdFxuICAgIH1cbiAgfVxuXHRcbiAgLy8gWE9SIHBsdXNcbiAgaWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbk9mJywgJ29iamVjdCcpIFxuICAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdsaXN0JywgJ2FycmF5JylcbiAgJiYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtaW5pbXVtJywgJ251bWJlcicpIHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ21heGltdW0nLCAnbnVtYmVyJykpXG4gICkge1xuICAgIGNvbnN0IG1pbmltdW0gPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtaW5pbXVtJywgJ251bWJlcicpID8gc2NoZW1hLm5PZi5taW5pbXVtIDogMDtcbiAgICBjb25zdCBtYXhpbXVtID0gZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWF4aW11bScsICdudW1iZXInKSA/IHNjaGVtYS5uT2YubWF4aW11bSA6IHNjaGVtYS5uT2YubGlzdC5sZW5ndGg7XG4gICAgbGV0IGNvdW50ZXJUcnVlID0gMDtcbiAgICBzY2hlbWEuYW55T2YubGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcbiAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcbiAgICAgICAgOiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcbiAgICAgIGlmIChnZXRSdHJuLnZhbGlkKSB7XG4gICAgICAgIGNvdW50ZXJUcnVlKys7XG4gICAgICB9XG4gICAgICBydHJuLmVycm9ycyA9IHJ0cm4uZXJyb3JzLmNvbmNhdChnZXRSdHJuLmVycm9ycyk7XHRcdFx0XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ZXJUcnVlID49IG1pbmltdW0gJiYgY291bnRlclRydWUgPD0gbWF4aW11bSkge1xuICAgICAgcnRybi52YWxpZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdDcml0ZXJpYSB0byBtYXRjaCBtdXN0IGJldHdlZW4gJyArIG1pbmltdW0gKyAnIGFuZCAnICsgbWF4aW11bSk7XHRcdFx0XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gcnRybjtcbn1cblxuZXhwb3J0IHtoYXNMb2dpY0Rvb3JzLCBsb2dpY0Rvb3JzfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sb2dpY0Rvb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNjaGVzb24gfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBzdHJpbmdGb3JtYXRzIH0gZnJvbSAnLi9zdHJpbmdGb3JtYXRzJztcbmltcG9ydCB7IHR5cGVTdHJpbmcsIHNjaGVtYVN0cmluZyB9IGZyb20gJy4vdHlwZVN0cmluZyc7XG5pbXBvcnQgeyB0eXBlTnVtYmVyLCBzY2hlbWFOdW1iZXIgfSBmcm9tICcuL3R5cGVOdW1iZXInO1xuaW1wb3J0IHsgdHlwZUFycmF5LCBzY2hlbWFBcnJheSB9IGZyb20gJy4vdHlwZUFycmF5JztcbmltcG9ydCB7IHR5cGVPYmplY3QsIHNjaGVtYU9iamVjdCB9IGZyb20gJy4vdHlwZU9iamVjdCc7XG5cbmNvbnN0IHR5cGVWYWxpZGF0b3JzID0ge1xuICAnc3RyaW5nJzogdHlwZVN0cmluZyxcbiAgJ251bWJlcic6IHR5cGVOdW1iZXIsXG4gICdhcnJheSc6IHR5cGVBcnJheSxcbiAgJ29iamVjdCc6IHR5cGVPYmplY3Rcbn07XG5jb25zdCB0eXBlU3VwZXJTY2hlbWFzID0ge1xuICAnc3RyaW5nJzogc2NoZW1hU3RyaW5nLFxuICAnbnVtYmVyJzogc2NoZW1hTnVtYmVyLFxuICAnYXJyYXknOiBzY2hlbWFBcnJheSxcbiAgJ29iamVjdCc6IHNjaGVtYU9iamVjdFxufTtcblxuXG5PYmplY3Qua2V5cyhzdHJpbmdGb3JtYXRzKS5mb3JFYWNoKCBmdW5jdGlvbiAoa2V5KSB7XG4gIFNjaGVzb24ucHVzaFN0cmluZ0Zvcm1hdChrZXksIHN0cmluZ0Zvcm1hdHNba2V5XSk7XG59KTtcblxuLyoqXG4gKiBib29sZWFuIHN1cGVyIFNjaGVtYVxuICovXG50eXBlU3VwZXJTY2hlbWFzWydib29sZWFuJ10gPSB7XG4gIHR5cGU6ICdzdHJpbmcnXG59O1xuXG4vKipcbiAqIGJvb2xlYW4gc3VwZXIgU2NoZW1hXG4gKi9cbnR5cGVTdXBlclNjaGVtYXNbJ251bGwnXSA9IHtcbiAgdHlwZTogJ3N0cmluZydcbn07XG5cbi8vIGFkZCBidWlsdC1pbiB0eXBlcyBhbmQgc3VwZXJTY2hlbWFzXG5cbk9iamVjdC5rZXlzKHR5cGVWYWxpZGF0b3JzKS5mb3JFYWNoKCBmdW5jdGlvbih0eXBlKSB7XG4gIFNjaGVzb24ucHVzaFR5cGUodHlwZSwgdHlwZVZhbGlkYXRvcnNbdHlwZV0sIHR5cGVTdXBlclNjaGVtYXNbdHlwZV0pO1xufSk7XG5cbi8vIGFkZCByb290IHN1cGVyIHNjaGVtYVxuU2NoZXNvbi5wdXNoU3VwZXJTY2hlbWEoJ3Jvb3QnLCB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnaWQnLCAndHlwZSddXG59KTtcblxuLypmdW5jdGlvbiBzY2hlc29uQ2xhc3MoKSB7XG59XG5zY2hlc29uQ2xhc3MucHJvdG90eXBlLnR5cGVzID0gU2NoZXNvbi50eXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBzY2hlc29uQ2xhc3M7XG4qL1xuZXhwb3J0IGNvbnN0IHR5cGVzID0gU2NoZXNvbi50eXBlcywgXG4gIHN1cGVyU2NoZW1hcyA9IFNjaGVzb24uc3VwZXJTY2hlbWFzLCBcbiAgZ2V0U3RyaW5nRm9ybWF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gU2NoZXNvbi5zdHJpbmdGb3JtYXRzO1xuICB9LFxuICBwdXNoVHlwZSA9IFNjaGVzb24ucHVzaFR5cGUsIFxuICBwdXNoU3VwZXJTY2hlbWEgPSBTY2hlc29uLnB1c2hTdXBlclNjaGVtYSwgXG4gIHB1c2hTdHJpbmdGb3JtYXQgPSBTY2hlc29uLnB1c2hTdHJpbmdGb3JtYXQsXG4gIGNoZWNrID0gU2NoZXNvbi5jaGVjayxcbiAgalR5cGUgPSB2YXJUeXBlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBzdHJpbmdGb3JtYXRzID0ge1xuXG4gICdkYXRlLXRpbWUnOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBsZXQgcnRybiA9IGZhbHNlO1xuICAgIGNvbnN0IGJhc2VUZXN0ID0gL1xcZHs0fS0oXFxkezJ9KS0oXFxkezJ9KShbVHRdKFxcZHsyfSk6KFxcZHsyfSkoOihcXGR7Mn0pKC5cXGR7Miw0fSk/W3paXT8pPyk/Ly5leGVjKHZhbHVlKTtcbiAgICBpZihiYXNlVGVzdCAmJiAhaXNOYU4oRGF0ZS5wYXJzZSh2YWx1ZSkpKXtcbiAgICAgIHJ0cm4gPSB0cnVlO1x0XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuICBob3N0bmFtZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eKFxcdyhbXFx3XFwtXXswLDYxfVxcdyk/XFwuKStbYS16XXsyLDZ9JC9pLnRlc3QodmFsdWUpO1xuICB9LFxuICAvKipcblx0ICogdGhhbmtzIHRvIGp0ZWV1d2VuIGh0dHA6Ly93d3cucmVnZXhsaWIuY29tL1VzZXJQYXR0ZXJucy5hc3B4P2F1dGhvcklkPWIxNTMxZjQwLWMwNDYtNDI1My05ODAwLWI0ZmY0MTljMDFiMlxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBcblx0ICovXG4gIGlwdjQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAvXigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKFxcLigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKXszfSQvLnRlc3QodmFsdWUpO1xuICB9LFxuICAvKipcblx0ICogVGhhbmsgdG8ganRlZXV3ZW5cblx0ICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gXG5cdCAqL1xuICBpcHY2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJyheXFxkezIwfSQpfCheKCg6W2EtZkEtRjAtOV17MSw0fSl7Nn18OjopZmZmZjooMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMC05XXsxLDJ9KShcXC4oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMC05XXsxLDJ9KSl7M30kKXwoXigoOlthLWZBLUYwLTldezEsNH0pezZ9fDo6KWZmZmYoOlthLWZBLUYwLTldezEsNH0pezJ9JCl8KF4oW2EtZkEtRjAtOV17MSw0fSkgKDpbYS1mQS1GMC05XXsxLDR9KXs3fSQpfCheOig6W2EtZkEtRjAtOV17MSw0fSg6Oik/KXsxLDZ9JCl8KF4oKDo6KT9bYS1mQS1GMC05XXsxLDR9Oil7MSw2fTokKXwoXjo6JCknKTtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XHRcdFxuICB9LFxuICB1cmk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXigoaHR0cHxodHRwc3xmdHApOlxcL1xcLyk/KCguKj8pOiguKj8pQCk/KFxcd1tcXHdcXC1dezAsNjF9W1xcd10pKChcXC5cXHdbXFx3XFwtXXswLDYxfVxcdyopKDooWzAtOV17MSw1fSkpPygoXFwvLio/KShcXD8oLio/KSk/KFxcIyguKikpPyk/JCcsICdpJyk7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xuICB9LFxuICAvKipcblx0ICogc2ltcGxpZmllZCB2ZXJzaW9uIG9mIGVtYWlsIHZhbGlkYXRpb24uIEl0IGlzIG5vdCBzdHJpY3QgY29tcGxpYW50IHdpdGggcmZjNTMyMiBcblx0ICogQHBhcmFtICB7U3RyaW5nfSBcdHZhbHVlIHRvIHZhbGlkYXRlXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCAqL1xuICBlbWFpbDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gIFx0Y29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgnL14oKChbYS16XXxcXGR8WyEjXFwkJSZcXHUwMDI3XFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSZcXHUwMDI3XFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQnLCdpJyk7XG4gIFx0cmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xuICB9XG59O1xuXG5leHBvcnQgeyBzdHJpbmdGb3JtYXRzIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3RyaW5nRm9ybWF0cy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFxuICovXG5pbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlLCB2YXJUeXBlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IGxvZ2ljRG9vcnMsIGhhc0xvZ2ljRG9vcnMgfSBmcm9tICcuL2xvZ2ljRG9vcnMnO1xuaW1wb3J0IHsgU2NoZXNvbiB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHNjaGVtYVN0cmluZyA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgbWluTGVuZ3RoOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG11bHRpcGxlT2Y6IDEsXG4gICAgICBtaW5pbXVtOiAwXG4gICAgfSxcbiAgICBtYXhMZW5ndGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbXVsdGlwbGVPZjogMSxcbiAgICAgIG1pbmltdW06IDBcbiAgICB9LFxuICAgIHBhdHRlcm46IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgb25lT2Y6IFsnc3RyaW5nJywgJ3JlZ2V4cCcsICdvYmplY3QnXVxuICAgICAgfVxuICAgIH0sXG4gICAgZW51bWVyYXRlOiB7XG4gICAgICB0eXBlOiAnYXJyYXknXG4gICAgfSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgb25lT2Y6IFsnc3RyaW5nJywgJ29iamVjdCddXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXF1aXJlZDogWyd0eXBlJ11cbn07XG5cblxuLyoqXG4gKiB0ZXN0IHZhbHVlIGFnYWluc3QgcGF0dGVyblxuICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIHRvIHRlc3RcbiAqIEBwYXJhbSAge1JlZ0V4cH0gcGF0dCAgUGF0dGVybiB0byB1c2VcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgdmFsaWRhdGlvbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcGF0dGVyblRlc3QodmFsdWUsIHBhdHQpIHtcbiAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiBbXX07XG4gIGlmKHZhclR5cGUuaXMocGF0dCwgJ3N0cmluZycpKSB7XG4gICAgcGF0dCA9IG5ldyBSZWdFeHAocGF0dCk7XG4gIH1cbiAgaWYgKHZhclR5cGUuaXMocGF0dCwgJ3JlZ2V4cCcpKSB7XG4gICAgaWYgKCFwYXR0LnRlc3QodmFsdWUpKSB7XG4gICAgICBydHJuLnZhbGlkID0gZmFsc2U7XG4gICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ3RoZSB0ZXh0IG11c3QgZml0IHRoZSBwYXR0ZXJuIGF0IHNjaGVtYScpO1x0XHRcdFx0XHRcdFx0XG4gICAgfVxuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUZXN0KHZhbHVlLCBmb3JtYXQpIHtcbiAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiBbXX07XG4gIGlmKCBTY2hlc29uLnN0cmluZ0Zvcm1hdHMuaGFzT3duUHJvcGVydHkoZm9ybWF0KSkge1xuICAgIGlmICggIVNjaGVzb24uc3RyaW5nRm9ybWF0c1tmb3JtYXRdKHZhbHVlKSApIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZTtcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgnc3RyaW5nIHZhbHVlIGRvZXNuXFwndCBmaXQgd2l0aCAnICsgZm9ybWF0ICsgJyBzcGVjaWZpY2F0aW9uJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBydHJuO1xufVxuXG5jb25zdCB0eXBlU3RyaW5nID0ge1xuICBtaW5MZW5ndGg6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpe1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtaW5MZW5ndGgnLCAnbnVtYmVyJykgJiYgdmFsdWUgPD0gc2NoZW1hLm1pbkxlbmd0aCkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdzdHJpbmcgc2hvcnRlciB0aGFuIGFsbG93ZWQgKCcgKyBzY2hlbWEubWluTGVuZ3RoICsgJyknKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XHRcdFxuICB9LFxuICBtYXhMZW5ndGg6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpe1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtYXhMZW5ndGgnLCAnbnVtYmVyJykgJiYgdmFsdWUgPD0gc2NoZW1hLm1heExlbmd0aCkge1xuICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgcnRybi5mYWlsdXJlcy5wdXNoKCdzdHJpbmcgbG9uZ2VyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5tYXhMZW5ndGggKyAnKScpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcdFx0XG4gIH0sXG4gIGVudW1hcmF0ZTogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZW51bWVyYXRlJywgJ2FycmF5JykgJiYgc2NoZW1hLmVudW1lcmF0ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZSxcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgndmFsdWUgbXVzdCBiZSBvbmUgb2YgZW51bWVyYXRlZDogWycgKyBzY2hlbWEuZW51bWVyYXRlLmpvaW4oJywgJykgKyAnXScpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcdFx0XG4gIH0sXG4gIHBhdHRlcm46IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpe1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3BhdHRlcm4nKSkge1xuICAgICAgY29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKHNjaGVtYS5wYXR0ZXJuKSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgc2NoZW1hLnBhdHRlcm4sIHBhdHRlcm5UZXN0KVxuICAgICAgICA6IHBhdHRlcm5UZXN0KHZhbHVlLCBzY2hlbWEucGF0dGVybik7XG4gICAgICBpZihydHJuLnZhbGlkKXtcbiAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICB9XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLCBnZXRSdHJuLmZhaWx1cmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XHRcdFxuICB9LFxuICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpe1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgaWYgKGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZm9ybWF0JykpIHtcbiAgICAgIGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEuZm9ybWF0KSkgXG4gICAgICAgID8gbG9naWNEb29ycyh2YWx1ZSwgc2NoZW1hLmZvcm1hdCwgZm9ybWF0VGVzdClcbiAgICAgICAgOiBwYXR0ZXJuVGVzdCh2YWx1ZSwgc2NoZW1hLmZvcm1hdCk7XG4gICAgICBpZihydHJuLnZhbGlkKXtcbiAgICAgICAgcnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG4gICAgICB9XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLCBnZXRSdHJuLmZhaWx1cmVzKTtcblxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxufTtcblxuZXhwb3J0IHt0eXBlU3RyaW5nLCBzY2hlbWFTdHJpbmd9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVTdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBcbiAqL1xuaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5cbmNvbnN0IHNjaGVtYU51bWJlciA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgbWluaW11bToge1xuICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9LFxuICAgIG1heGltdW06IHtcbiAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSxcbiAgICBleGNsdXNpdmVNaW5pbXVtOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICB9LFxuICAgIGV4Y2x1c2l2ZU1heGltdW06IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgbXVsdGlwbGVPZjoge1xuICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9LFxuICAgIGVudW1lcmF0ZToge1xuICAgICAgdHlwZTogJ2FycmF5J1xuICAgIH1cbiAgfSxcbiAgcmVxdWlyZWQ6IFsndHlwZSddXG59O1xuXG5jb25zdCB0eXBlTnVtYmVyID0ge1xuICBtaW5pbXVtOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21pbmltdW0nLCAnbnVtYmVyJykgKSB7XG4gICAgICBpZiggKGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZXhjbHVzaXZlTWluaW11bScsICdib29sZWFuJywgdHJ1ZSkgJiYgdmFsdWUgPD0gc2NoZW1hLm1pbmltdW0pIFxuICAgfHwgdmFsdWUgPCBzY2hlbWEubWluaW11bSApIHtcbiAgICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ251bWJlciBsb3dlciB0aGFuIGFsbG93ZWQgKCcgKyBzY2hlbWEubWluaW11bSArICcpJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuICBtYXhpbXVtOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21heGltdW0nLCAnbnVtYmVyJykgKSB7XG4gICAgICBpZiggKGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZXhjbHVzaXZlTWF4aW11bScsICdib29sZWFuJywgdHJ1ZSkgJiYgdmFsdWUgPD0gc2NoZW1hLm1heGltdW0pIFxuICAgfHwgdmFsdWUgPCBzY2hlbWEubWF4aW11bSApIHtcbiAgICAgICAgcnRybi52YWxpZCA9IGZhbHNlO1xuICAgICAgICBydHJuLmZhaWx1cmVzLnB1c2goJ251bWJlciBoaWdoZXIgdGhhbiBhbGxvd2VkICgnICsgc2NoZW1hLm1heGltdW0gKyAnKScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcbiAgbXVsdGlwbGVPZjogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XHRcdFxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtdWx0aXBsZU9mJywgJ251bWJlcicpICYmIHZhbHVlICUgc2NoZW1hLm11bHRpcGxlT2YgIT09IDApIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZSxcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgndmFsdWUgbXVzdCBiZSBtdWx0aXBsZSBvZiAnICsgc2NoZW1hLm11bHRpcGxlT2YpO1xuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcbiAgZW51bWVyYXRlOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG4gICAgaWYoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnZW51bWVyYXRlJywgJ2FycmF5JykgJiYgc2NoZW1hLmVudW1lcmF0ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJ0cm4udmFsaWQgPSBmYWxzZSxcbiAgICAgIHJ0cm4uZmFpbHVyZXMucHVzaCgndmFsdWUgbXVzdCBiZSBvbmUgb2YgZW51bWVyYXRlZDogWycgKyBzY2hlbWEuZW51bWVyYXRlLmpvaW4oJywnKSArICddJyk7XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG59O1xuXG5leHBvcnQge3R5cGVOdW1iZXIsIHNjaGVtYU51bWJlcn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZU51bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFxuICovXG5pbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlLCB2YXJUeXBlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IFNjaGVzb24sIGFwcGVuZENoaWxkRmFpbHVyZXMgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBzY2hlbWFBcnJheSA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgbWluSXRlbXM6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgbWluaW11bTogMCxcbiAgICAgIG11bHRpcGxlT2Y6IDFcbiAgICB9LFxuICAgIG1heEl0ZW1zOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG1pbmltdW06IDAsXG4gICAgICBtdWx0aXBsZU9mOiAxXG4gICAgfSxcbiAgICB1bmlxdWVJdGVtczoge1xuICAgICAgdHlwZToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgICdib29sZWFuJyxcdC8vIGZvciB3aG9sZSB2YWx1ZSBjaGVja1xuICAgICAgICAgICdzdHJpbmcnXHRcdC8vIGZvciBhbiBzcGVjaWZpYyBwcm9wZXJ0eSBpdGVtc1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRpdGlvbmFsSXRlbXM6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0sXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXF1aXJlZDogWyd0eXBlJ11cbn07XG5cbmNvbnN0IHR5cGVBcnJheSA9IHtcblxuICAvKipcblx0ICogY2hlY2sgaWYgdGhlIHZhbHVlIGhhcyBtb3JlIGl0ZW1zIHRoYW4gYWxsb3dlZCwgdXNlZCB3aGVuIHNjaGVtYSBoYXMgZml4ZWQgaXRlbXNcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBhZGRpdGlvbmFsSXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGNvbnN0IGl0ZW1zTnVtID0gZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdpdGVtcycsICdhcnJheScpID8gc2NoZW1hLml0ZW1zLmxlbmd0aDogMDtcblxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhZGRpdGlvbmFsSXRlbXMnLCAnYm9vbGVhbicpICYmICFzY2hlbWEuYWRkaXRpb25hbEl0ZW1zXG4gICAmJiB2YWx1ZS5sZW5ndGggPiBpdGVtc051bSkge1xuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ25vIGFkZGl0aW9uYWwgaXRlbXMgYWxsb3dlZCcpO1x0XHRcdFxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxuICAvKipcblx0ICogY2hlY2sgdGhlIHZhbHVlJ3MgcHJvcGVydGllc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG4gIG1pbkl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcbiAgICBpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWluSXRlbXMnLCAnbnVtYmVyJykgJiYgdmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1pbkl0ZW1zKSB7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnaXRlbXMgaW4gYXJyYXkgc2hvdWxkIGJlIGF0IGxlYXN0ICcgKyBzY2hlbWEubWluSXRlbXMpO1x0XHRcdFxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxuICAvKipcblx0ICogY2hlY2sgaWYgdGhlIHZhbHVlIGhhcyBtb3JlIGl0ZW1zIHRoYW4gYWxsb3dlZCwgdXNlZCB3aGVuIHNjaGVtYSBoYXMgZml4ZWQgaXRlbXNcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBtYXhJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21heEl0ZW1zJywgJ251bWJlcicpICYmIHZhbHVlLmxlbmd0aCA8IHNjaGVtYS5tYXhJdGVtcykge1xuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ2l0ZW1zIGluIGFycmF5IHNob3VsZCBiZSBhdCBtb3N0ICcgKyBzY2hlbWEubWF4SXRlbXMpO1x0XHRcdFxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxuICAvKipcblx0ICogY2hlY2sgaWYgdGhlIGl0ZW1zIG9mIHRoZSB2YWx1ZSBhcmUgdW5pcXVlLCBlbnRpcmVseSBvciBpbiBhIHByb3BlcnR5XG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgdW5pcXVlSXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICd1bmlxdWVJdGVtcycpKSB7XG4gICAgICBjb25zdCB3aXRuZXNzID0gW107XG4gICAgICBydHJuLnZhbGlkID0gIXZhbHVlLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHZhclR5cGUoc2NoZW1hLnVuaXF1ZUl0ZW1zLCAnc3RyaW5nJykgPyBpdGVtW3NjaGVtYS51bmlxdWVJdGVtc10gOiBpdGVtO1xuICAgICAgICBpZiAoIHdpdG5lc3MuaW5kZXhPZihlbGVtZW50KSA+IC0xKSB7XG4gICAgICAgICAgd2l0bmVzcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnaXRlbXMgaW4gYXJyYXkgc2hvdWxkIHVuaXF1ZScpO1x0XHRcdFxuICAgIH1cbiAgICByZXR1cm4gcnRybjtcbiAgfSxcblxuICAvKipcblx0ICogY2hlY2sgaWYgdGhlIGl0ZW1zIG9mIHRoZSB2YWx1ZSBhcmUgdW5pcXVlLCBlbnRpcmVseSBvciBpbiBhIHByb3BlcnR5XG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cbiAgaXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcbiAgICBjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG4gICAgICBjb25zdCBzY2hlbWFJdCA9IHZhclR5cGUuaXMoc2NoZW1hLml0ZW1zLCAnYXJyYXknKSA/IHNjaGVtYS5pdGVtc1tpZHhdIDogc2NoZW1hLml0ZW1zO1xuICAgICAgY29uc3QgZ2V0UnRybiA9IFNjaGVzb24uY2hlY2soaXRlbSwgc2NoZW1hSXQpO1xuICAgICAgaWYgKCBydHJuLnZhbGlkICl7XG4gICAgICAgIHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuICAgICAgfVxuICAgICAgcnRybi5mYWlsdXJlcy5jaGlsZHJlbiA9IGFwcGVuZENoaWxkRmFpbHVyZXMocnRybi5mYWlsdXJlcy5jaGlsZHJlbiwgaWR4LCBnZXRSdHJuLmZhaWx1cmVzKTtcdFx0XHRcdFxuICAgIH0pO1xuICAgIHJldHVybiBydHJuO1xuICB9XG59O1xuXG5leHBvcnQge3R5cGVBcnJheSwgc2NoZW1hQXJyYXl9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFxuICovXG5pbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IGxvZ2ljRG9vcnMsIGhhc0xvZ2ljRG9vcnMgfSBmcm9tICcuL2xvZ2ljRG9vcnMnO1xuaW1wb3J0IHsgU2NoZXNvbiwgYXBwZW5kQ2hpbGRGYWlsdXJlcyB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHNjaGVtYU9iamVjdCA9IHtcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdHlwZTogJ29iamVjdCdcbiAgICB9LFxuICAgIHJlcXVpcmVkOiB7XG4gICAgICB0eXBlOiAnYXJyYXknXG4gICAgfSxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgfVxuICB9LFxuICByZXF1aXJlZDogWyd0eXBlJ11cbn07XG5cbmNvbnN0IHR5cGVPYmplY3QgPSB7XG5cbiAgLyoqXG5cdCAqIGNoZWNrIHRoZXJlIGFyZSBtb3JlIHByb3BlcnRpZXMgdGhhbiBhbGxvd2VkXG5cdCAqIEBwYXJhbSAge09iamVjdH0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hU3RyaW5nXG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBhZGRpdGlvbmFsUHJvcGVydGllczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuICAgIGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG4gICAgaWYgKCBcbiAgICAgIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWRkaXRpb25hbFByb3BlcnRpZXMnLCAnYm9vbGVhbicpICYmICFzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXNcbiAgICAgICYmIE9iamVjdC5rZXlzKHZhbHVlKS5zb21lKCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICFkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3Byb3BlcnRpZXMnLCAnb2JqZWN0JykgXG4gICAgICAgICAgfHwgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmluZGV4T2YoaXRlbSkgPT09IC0xXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkge1xuICAgICAgcnRybi5mYWlsdXJlcy5zZWxmLnB1c2goJ25vIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhbGxvd2VkJyk7XHRcdFx0XG4gICAgfVxuICAgIHJldHVybiBydHJuO1xuICB9LFxuXG4gIC8qKlxuXHQgKiBjaGVjayB0aGUgdmFsdWUncyBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSAge09iamVjdH0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgdG8gc2NoZW1hT2JqZWN0XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuICBwcm9wZXJ0aWVzOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG4gICAgY29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcblxuICAgIGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdwcm9wZXJ0aWVzJywgJ29iamVjdCcpICkge1xuICAgICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCBkZWZpbmVkVHlwZVZhbHVlKHZhbHVlLCBrZXksIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0udHlwZSkgKSB7XG5cbiAgICAgICAgICBjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hLnByb3BlcnRpZXNba2V5XSkpIFxuICAgICAgICAgICAgPyBsb2dpY0Rvb3JzKHZhbHVlW2tleV0sIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0sIFNjaGVzb24uY2hlY2spXG4gICAgICAgICAgICA6IFNjaGVzb24uY2hlY2sodmFsdWVba2V5XSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSk7XG5cbiAgICAgICAgICBpZighZ2V0UnRybi52YWxpZCl7XG4gICAgICAgICAgICBydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcbiAgICAgICAgICAgIHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4gPSBhcHBlbmRDaGlsZEZhaWx1cmVzKHJ0cm4uY2hpbGRyZW4sIGtleSwgZ2V0UnRybi5mYWlsdXJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0cm47XG4gIH1cbn07XG5cbmV4cG9ydCB7dHlwZU9iamVjdCwgc2NoZW1hT2JqZWN0fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90eXBlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=