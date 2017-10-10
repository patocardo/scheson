var Jschema =
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
			rtrn = (arguments.length > 1 && arguments[1]) ? rtrn.toLowerCase : rtrn;
			if(rtrn === 'number' && isNaN(value)) { // NaN correction
				rtrn = (arguments.length > 1 && arguments[1]) ? 'nan' : 'NaN';
			}
			return rtrn;
		}
	},
	is: {
		enumerable: true,
		value: function(value, type) {
			type = type.toLowerCase;
			const argType = varType.get(value, true);
			if(type === 'event'){
				return /event/i.test(argType)
			}
			return argType == type;
		}
	}
});

function definedTypeValue(obj, prop /*, type, value*/) {
	const rtrn = true;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jschema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);


const Jschema = {};

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
	if( Jschema.types.hasOwnProperty(schema.type) && !__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(value, schema.type)) {
		rtrn.valid = false;
		rtrn.failures.push('bad type, it should be ' + schema.type);
	}
	else {
		Object.keys(Jschema.types[schema.type]).forEach( function(key) {
			const getRtrn = Jschema.types[schema.type][key](value, schema);
			if(rtrn.valid) {
				rtrn.valid = getRtrn;
			}
			Array.prototype.push.apply(rtrn.failures.self, getRtrn.failures.self);
			Object.keys(getRtrn.failures.children).forEach( function(key) {
				if ( rtrn.failures.children.hasOwnProperty(key)) {
					Array.prototype.push.apply(rtrn.failures.children[key], getRtrn.failures.children[key]);
				}
				else {
					rtrn.failures.children[key] = getRtrn.failures.children[key]
				}
			})

		})
	}
	return rtrn;
}

Object.defineProperties(Jschema, {
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
		value: function(typeName, fn/*, superSchema, force*/) {
			const force = arguments.length > 3 ? arguments[3] : null;
			let rtrn = true;
			if ( Jschema.types.hasOwnProperty[typeName] && !force) {
				throw new Error( typeName + ' already exists, try with the force parameter to overwrite it');
			}
			if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(typeName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
				Object.defineProperty(Jschema.types, typeName, {
					enumerable: true,
					configurable: true,
					value: fn
				});
				if (arguments.length > 2) {
					rtrn = Jschema.pushSuperSchema(typeName, arguments[2], force);
				}
			}
			else {
				throw new TypeError('bad types at Jschema.addType');
			}
			return rtrn;
		}
	},
	pushStringFormat: {
		enumerable: true,
		value: function(formatName, fn/*, force*/) {
			const force = arguments.length > 2 ? arguments[2] : null;
			if ( Jschema.stringFormats.hasOwnProperty[formatName] && !force) {
				throw new Error( formatName + ' already exists, try with the force parameter to overwrite it');
			}
			if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(formatName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(fn, 'function')) {
				Object.defineProperty(Jschema.stringFormats, formatName, {
					enumerable: true,
					configurable: true,
					value: fn
				});
				return true;
			}
			else {
				throw new TypeError('bad types at Jschema.addType');
			}
		}
	},
	pushSuperSchema: {
		enumerable: true,
		value: function(typeName, obj/*, force*/) {
			const force = arguments.length > 2 ? arguments[2] : null;
			if( __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(typeName, 'string') && __WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */].is(obj, 'object')) {
				Object.defineProperty(Jschema.superSchemas, typeName, {
					enumerable: true,
					configurable: true,
					value: obj
				});
				return true;
			}
			else {
				throw new TypeError('bad types at Jschema.addSuperSchema');
			}
		}
	},

	check: {
		enumerable: true,
		value: function(val, schema, checkSchema) {
			const rtrn = {valid:true, failures:{}, errors: {}};
			if (checkSchema) {
				const getRtrn = Jschema.check(schema, Jschema.superSchemas.root);
				rtrn.valid = getRtrn.valid;
				rtrn.errors = getRtrn.failures;
			}
			if (rtrn.valid) {
				const getRtrn = (hasLogicDoors(schema)) 
					? logicDoors(value, schema, sweepCheckers)
					: sweepCheckers(value, schema);
				rtrn.valid = getRtrn.valid;
				rtrn.failures[schema.id] = getRtrn.failures;
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
	if (Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["b" /* varType */])(schema, 'object')) {
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
	const rtrn = {valid: true, failures: []}

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
		const maximum = Object(__WEBPACK_IMPORTED_MODULE_0__basicCheck__["a" /* definedTypeValue */])(schema.nOf, 'maximum', 'number') ? schema.nOf.maximum : schem.nOf.list.length;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stringFormats__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeString__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeNumber__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeArray__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeObject__ = __webpack_require__(9);








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
	__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].pushStringFormat(key, __WEBPACK_IMPORTED_MODULE_2__stringFormats__["a" /* stringFormats */][key]);
});

/**
 * boolean super Schema
 */
typeSuperSchemas['boolean'] = {
	type: 'string'
}

/**
 * boolean super Schema
 */
typeSuperSchemas['null'] = {
	type: 'string'
}

// add built-in types and superSchemas

Object.keys(typeValidators).forEach( function(type) {
	__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].pushType(type, typeValidators[type], typeSuperSchemas[type]);
});

// add root super schema
__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].pushSuperSchema('root', {
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

const types = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].types, 
	superSchemas = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].superSchemas, 
	getStringFormats = function () {
		return __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].stringFormats
	},
	pushType = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].pushType, 
	pushSuperSchema = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].pushSuperSchema, 
	pushStringFormat = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].pushStringFormat,
	check = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Jschema */].check,
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
/* 4 */,
/* 5 */
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
}



/***/ }),
/* 6 */
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
			type: 'string'
		}
	},
	required: ['type']
}


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
	if( schema.stringFormats.hasOwnProperty(format)) {
		if ( !schema.stringFormat[format](value) ) {
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

}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logicDoors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
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
}

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

}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schemaArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logicDoors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(1);
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
}

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
			const getRtrn = __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Jschema */].check(item, schema.items);
			if ( rtrn.valid ){
				rtrn.valid = getRtrn.valid;
			}
			rtrn.failures.children = appendChildFailures(rtrn.failures.children, idx, getRtrn.failures);				
		});
		return rtrn;
	}
}



/***/ }),
/* 9 */
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
}

const typeObject = {

	/**
	 * check there are more properties than allowed
	 * @param  {Object} value  The value to check
	 * @param  {Object} schema according schemaString
	 * @return {Object}        validation object
	 */
	additionalProperties: function(value, schema) {
		const rtrn = { valid: true, failures: { self:[], children: {}} }
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
						? Object(__WEBPACK_IMPORTED_MODULE_1__logicDoors__["b" /* logicDoors */])(value[key], schema.properties[key], __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Jschema */].check)
						: __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Jschema */].check(value[key], schema.properties[key]);

					if(!getRtrn.valid){
						rtrn.valid = getRtrn.valid;
						rtrn.failures.children = appendChildFailures(rtrn.children, key, getRtrn.failures);
					}
				}
			});
		}
		return rtrn
	}
}



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzgwZTk2N2JlZGU0YzcwMDllYzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2ljQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2ljRG9vcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RyaW5nRm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZVN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZU51bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNDb0M7O0FBRXBDOztBQUVBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFc7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2pKbUM7O0FBRXBDO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBSTtBQUNoQixZQUFZLE9BQU87QUFDbkIsa0NBQWtDLE1BQU07QUFDeEMsa0NBQWtDLE1BQU07QUFDeEMsa0NBQWtDLE1BQU07QUFDeEMsa0NBQWtDLE1BQU07QUFDeEMsa0NBQWtDLE9BQU87QUFDekMsbUNBQW1DLE1BQU07QUFDekMsb0NBQW9DLE9BQU87QUFDM0MsbUNBQW1DLE9BQU87QUFDMUMsWUFBWSxTQUFTO0FBQ3JCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSmtCO0FBQ0E7QUFDTTtBQUNXO0FBQ0E7QUFDRjtBQUNFOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSTtBQUMvRTtBQUNBLGU7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esc0JBQXNCLEtBQUssY0FBYyxJQUFJO0FBQzdDLEVBQUU7QUFDRjtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUTtBQUNiO0FBQ0E7QUFDQSxrREFBa0QsSUFBSSwyQ0FBMkMsSUFBSSxHQUFHLEVBQUU7QUFDMUcsRUFBRTtBQUNGO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRO0FBQ2I7QUFDQTtBQUNBLGlDQUFpQyxHQUFHLG9CQUFvQixJQUFJLEVBQUUsRUFBRSxnREFBZ0QsSUFBSSwyQ0FBMkMsSUFBSSxHQUFHLEVBQUUsb0JBQW9CLElBQUksRUFBRSxFQUFFLHNCQUFzQixJQUFJLEVBQUUsRUFBRSxrQkFBa0IsSUFBSSxnQkFBZ0IsSUFBSSxFQUFFLEVBQUUsb0JBQW9CLElBQUksT0FBTyxJQUFJLHVCQUF1QixJQUFJLEdBQUcsSUFBSTtBQUNyViwyQjtBQUNBLEVBQUU7QUFDRjtBQUNBLDhFQUE4RSxLQUFLLGtCQUFrQixLQUFLLGFBQWEsSUFBSTtBQUMzSDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0EseUVBQXlFLEdBQUcsd0ZBQXdGLEdBQUc7QUFDdks7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFDQTtBQUNBO0FBQ29DO0FBQ0E7QUFDTDs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUIsdUJBQXVCLEc7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGM7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxnQkFBZ0IseUJBQXlCLHVCQUF1QixHO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYztBQUNBLEVBQUU7QUFDRjtBQUNBLGdCQUFnQix5QkFBeUIsdUJBQXVCLEc7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYztBQUNBLEVBQUU7QUFDRjtBQUNBLGdCQUFnQix5QkFBeUIsdUJBQXVCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjO0FBQ0EsRUFBRTs7QUFFRjs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQ0E7QUFDQTtBQUMyQjtBQUNTO0FBQ2xCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQ0E7QUFDQTtBQUNvQztBQUNBO0FBQ2xCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUIsdUJBQXVCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSwwRDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUI7QUFDaEU7QUFDQSxtRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUI7QUFDaEU7QUFDQSxrRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwyRDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0Y7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQUE7QUFDQTtBQUNBO0FBQ21DO0FBQ0M7QUFDbEI7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5Qix1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsK0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUIsdUJBQXVCOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzgwZTk2N2JlZGU0YzcwMDllYzAiLCJjb25zdCB2YXJUeXBlID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyh2YXJUeXBlLCB7XG5cdGdldDoge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uKHZhbHVlIC8qLCBsb3dlcmNhc2UgKi8pIHtcblx0XHRcdGxldCBydHJuID0gL1xccyhcXHcrKV0vaS5leGVjKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkpWzFdOyAvLyBUT0RPOiB0ZXN0IGluIE1TSUUgZm9yIE5vZGVDb2xsZWN0aW9uXG5cdFx0XHRydHJuID0gKC9FdmVudC8udGVzdChydHJuKSkgPyAnRXZlbnQuJyArIHJ0cm4gOiBydHJuO1xuXHRcdFx0cnRybiA9IChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0pID8gcnRybi50b0xvd2VyQ2FzZSA6IHJ0cm47XG5cdFx0XHRpZihydHJuID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpIHsgLy8gTmFOIGNvcnJlY3Rpb25cblx0XHRcdFx0cnRybiA9IChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0pID8gJ25hbicgOiAnTmFOJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBydHJuO1xuXHRcdH1cblx0fSxcblx0aXM6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgdHlwZSkge1xuXHRcdFx0dHlwZSA9IHR5cGUudG9Mb3dlckNhc2U7XG5cdFx0XHRjb25zdCBhcmdUeXBlID0gdmFyVHlwZS5nZXQodmFsdWUsIHRydWUpO1xuXHRcdFx0aWYodHlwZSA9PT0gJ2V2ZW50Jyl7XG5cdFx0XHRcdHJldHVybiAvZXZlbnQvaS50ZXN0KGFyZ1R5cGUpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJnVHlwZSA9PSB0eXBlO1xuXHRcdH1cblx0fVxufSk7XG5cbmZ1bmN0aW9uIGRlZmluZWRUeXBlVmFsdWUob2JqLCBwcm9wIC8qLCB0eXBlLCB2YWx1ZSovKSB7XG5cdGNvbnN0IHJ0cm4gPSB0cnVlO1xuXHRpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIHZhclR5cGUuaXMoYXJndW1lbnRzWzJdLCAnc3RyaW5nJykgKXtcblx0XHRcdGlmKCF2YXJUeXBlLmlzKG9ialtwcm9wXSwgYXJndW1lbnRzWzJdKSl7XG5cdFx0XHRcdHJ0cm4gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCBydHJuICYmIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIG9ialtwcm9wXSAhPT0gYXJndW1lbnRzWzNdKSB7XG5cdFx0XHRydHJuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGVsc2Uge1xuXHRcdHJ0cm4gPSBmYWxzZTtcblx0fVxuXHRyZXR1cm4gcnRybjtcbn1cblxuZXhwb3J0IHt2YXJUeXBlLCBkZWZpbmVkVHlwZVZhbHVlfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNpY0NoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHZhclR5cGUsIGRlZmluZWRUeXBlVmFsdWUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuXG5jb25zdCBKc2NoZW1hID0ge307XG5cbmZ1bmN0aW9uIGFsbFJlcXVpcmVkKHZhbHVlLCBzY2hlbWEpIHtcblx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7c2VsZjpbXSwgY2hpbGRyZW46W119fTtcblx0Y29uc3QgbWlzc2luZ1Byb3AgPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3JlcXVpcmVkJywgJ2FycmF5JykgXG5cdFx0PyBzY2hlbWEucmVxdWlyZWQuc29tZSggZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gIXZhbHVlLmhhc093blByb3BlcnR5KGl0ZW0pO1xuXHRcdH0pXG5cdFx0OiBmYWxzZTtcblx0aWYgKG1pc3NpbmdQcm9wKSB7XG5cdFx0cnRybi52YWxpZCA9IGZhbHNlO1xuXHRcdHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCd0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIHJlcXVpcmVkOiAnICsgc2NoZW1hLnJlcXVpcmVkLmpvaW4oJywgJykpO1xuXHR9XG5cdHJldHVybiBydHJuO1xufVxuXG5mdW5jdGlvbiBzd2VlcENoZWNrZXJzKHZhbHVlLCBzY2hlbWEpe1xuXHRjb25zdCBydHJuID0ge1xuXHRcdHZhbGlkOiB0cnVlLCBcblx0XHRmYWlsdXJlczoge1xuXHRcdFx0c2VsZjogW10sXG5cdFx0XHRjaGlsZHJlbjoge31cblx0XHR9XG5cdH07XG5cdGlmKCBKc2NoZW1hLnR5cGVzLmhhc093blByb3BlcnR5KHNjaGVtYS50eXBlKSAmJiAhdmFyVHlwZS5pcyh2YWx1ZSwgc2NoZW1hLnR5cGUpKSB7XG5cdFx0cnRybi52YWxpZCA9IGZhbHNlO1xuXHRcdHJ0cm4uZmFpbHVyZXMucHVzaCgnYmFkIHR5cGUsIGl0IHNob3VsZCBiZSAnICsgc2NoZW1hLnR5cGUpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzKEpzY2hlbWEudHlwZXNbc2NoZW1hLnR5cGVdKS5mb3JFYWNoKCBmdW5jdGlvbihrZXkpIHtcblx0XHRcdGNvbnN0IGdldFJ0cm4gPSBKc2NoZW1hLnR5cGVzW3NjaGVtYS50eXBlXVtrZXldKHZhbHVlLCBzY2hlbWEpO1xuXHRcdFx0aWYocnRybi52YWxpZCkge1xuXHRcdFx0XHRydHJuLnZhbGlkID0gZ2V0UnRybjtcblx0XHRcdH1cblx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuc2VsZiwgZ2V0UnRybi5mYWlsdXJlcy5zZWxmKTtcblx0XHRcdE9iamVjdC5rZXlzKGdldFJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4pLmZvckVhY2goIGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0XHRpZiAoIHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW4uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMuY2hpbGRyZW5ba2V5XSwgZ2V0UnRybi5mYWlsdXJlcy5jaGlsZHJlbltrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRydHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV0gPSBnZXRSdHJuLmZhaWx1cmVzLmNoaWxkcmVuW2tleV1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdH0pXG5cdH1cblx0cmV0dXJuIHJ0cm47XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEpzY2hlbWEsIHtcblx0dHlwZXM6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHZhbHVlOiB7fVxuXHR9LFxuXHRzdHJpbmdGb3JtYXRzOiB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHR2YWx1ZToge31cdFxuXHR9LFxuXHRzdXBlclNjaGVtYXM6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHZhbHVlOiB7fVxuXHR9LFxuXHRwdXNoVHlwZToge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uKHR5cGVOYW1lLCBmbi8qLCBzdXBlclNjaGVtYSwgZm9yY2UqLykge1xuXHRcdFx0Y29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cdFx0XHRsZXQgcnRybiA9IHRydWU7XG5cdFx0XHRpZiAoIEpzY2hlbWEudHlwZXMuaGFzT3duUHJvcGVydHlbdHlwZU5hbWVdICYmICFmb3JjZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIHR5cGVOYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcblx0XHRcdH1cblx0XHRcdGlmKCB2YXJUeXBlLmlzKHR5cGVOYW1lLCAnc3RyaW5nJykgJiYgdmFyVHlwZS5pcyhmbiwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEpzY2hlbWEudHlwZXMsIHR5cGVOYW1lLCB7XG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IGZuXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRcdFx0XHRydHJuID0gSnNjaGVtYS5wdXNoU3VwZXJTY2hlbWEodHlwZU5hbWUsIGFyZ3VtZW50c1syXSwgZm9yY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYmFkIHR5cGVzIGF0IEpzY2hlbWEuYWRkVHlwZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJ0cm47XG5cdFx0fVxuXHR9LFxuXHRwdXNoU3RyaW5nRm9ybWF0OiB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHR2YWx1ZTogZnVuY3Rpb24oZm9ybWF0TmFtZSwgZm4vKiwgZm9yY2UqLykge1xuXHRcdFx0Y29uc3QgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdFx0XHRpZiAoIEpzY2hlbWEuc3RyaW5nRm9ybWF0cy5oYXNPd25Qcm9wZXJ0eVtmb3JtYXROYW1lXSAmJiAhZm9yY2UpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBmb3JtYXROYW1lICsgJyBhbHJlYWR5IGV4aXN0cywgdHJ5IHdpdGggdGhlIGZvcmNlIHBhcmFtZXRlciB0byBvdmVyd3JpdGUgaXQnKTtcblx0XHRcdH1cblx0XHRcdGlmKCB2YXJUeXBlLmlzKGZvcm1hdE5hbWUsICdzdHJpbmcnKSAmJiB2YXJUeXBlLmlzKGZuLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoSnNjaGVtYS5zdHJpbmdGb3JtYXRzLCBmb3JtYXROYW1lLCB7XG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IGZuXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgdHlwZXMgYXQgSnNjaGVtYS5hZGRUeXBlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRwdXNoU3VwZXJTY2hlbWE6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHZhbHVlOiBmdW5jdGlvbih0eXBlTmFtZSwgb2JqLyosIGZvcmNlKi8pIHtcblx0XHRcdGNvbnN0IGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXHRcdFx0aWYoIHZhclR5cGUuaXModHlwZU5hbWUsICdzdHJpbmcnKSAmJiB2YXJUeXBlLmlzKG9iaiwgJ29iamVjdCcpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKc2NoZW1hLnN1cGVyU2NoZW1hcywgdHlwZU5hbWUsIHtcblx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR2YWx1ZTogb2JqXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdiYWQgdHlwZXMgYXQgSnNjaGVtYS5hZGRTdXBlclNjaGVtYScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjaGVjazoge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uKHZhbCwgc2NoZW1hLCBjaGVja1NjaGVtYSkge1xuXHRcdFx0Y29uc3QgcnRybiA9IHt2YWxpZDp0cnVlLCBmYWlsdXJlczp7fSwgZXJyb3JzOiB7fX07XG5cdFx0XHRpZiAoY2hlY2tTY2hlbWEpIHtcblx0XHRcdFx0Y29uc3QgZ2V0UnRybiA9IEpzY2hlbWEuY2hlY2soc2NoZW1hLCBKc2NoZW1hLnN1cGVyU2NoZW1hcy5yb290KTtcblx0XHRcdFx0cnRybi52YWxpZCA9IGdldFJ0cm4udmFsaWQ7XG5cdFx0XHRcdHJ0cm4uZXJyb3JzID0gZ2V0UnRybi5mYWlsdXJlcztcblx0XHRcdH1cblx0XHRcdGlmIChydHJuLnZhbGlkKSB7XG5cdFx0XHRcdGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEpKSBcblx0XHRcdFx0XHQ/IGxvZ2ljRG9vcnModmFsdWUsIHNjaGVtYSwgc3dlZXBDaGVja2Vycylcblx0XHRcdFx0XHQ6IHN3ZWVwQ2hlY2tlcnModmFsdWUsIHNjaGVtYSk7XG5cdFx0XHRcdHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuXHRcdFx0XHRydHJuLmZhaWx1cmVzW3NjaGVtYS5pZF0gPSBnZXRSdHJuLmZhaWx1cmVzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJ0cm47XG5cdFx0fVxuXHR9XG59KTtcblxuXG5leHBvcnQgeyBKc2NoZW1hIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlLCB2YXJUeXBlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcblxuLyoqXG4gKiBjaGVjayBpZiB0aGUgb2JqZWN0IGhhcyBkZWZpbmVkIGF0IGxlYXN0IG9uZSBsb2dpYyBkb29yXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBzY2hlbWEgdGhlIG9iamVjdCB0byBjaGVjayBpbnNpZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICBIYXMgb3Igbm90LCB0aGlzIGlzIHRoZSBxdWVzdGlvblxuICovXG5mdW5jdGlvbiBoYXNMb2dpY0Rvb3JzKHNjaGVtYSkge1xuXHRsZXQgcnRybiA9IGZhbHNlO1xuXHRpZiAodmFyVHlwZShzY2hlbWEsICdvYmplY3QnKSkge1xuXHRcdGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdhbnlPZicsICdhcnJheScpIFxuXHRcdHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWxsT2YnLCAnYXJyYXknKVxuXHRcdHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnb25lT2YnLCAnYXJyYXknKVxuXHRcdHx8IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbm90JywgJ2FycmF5JykpIHtcblx0XHRcdHJ0cm4gPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcnRybjtcbn1cblxuLyoqXG4gKiB2YWxpZGF0ZSB2YWx1ZSBhZ2FpbnN0IGRpZmZlcmVudCBzY2VuYXJpb3Mgb2YgbG9naWMgZG9vcnNcbiAqIFxuICogQHBhcmFtICB7QW55fSAgIHZhbHVlICAgICAgIHRvIHZhbGlkYXRlIGFnYWluc3RcbiAqIEBwYXJhbSAge09iamVjdH0gICBzY2hlbWEgICBXaXRoIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0YW55T2YgKE9SKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7QXJyYXl9IFx0YWxsT2YgKEFORClcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0e0FycmF5fSBcdG5vdCBcdChOT1IpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHtBcnJheX0gXHRvbmVPZiAoWE9SKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR7T2JqZWN0fSBcdG5PZiAgKHNwZWNpYWwgWE9SKSB3aXRoIGZvbGxvd2luZyBwcm9wZXJ0aWVzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0e0FycmF5fVx0XHRsaXN0IChyZXF1aXJlZCkgdmFsaWRhdGlvbiBjcml0ZXJpYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0e051bWJlcn1cdG1pbmltdW1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHR7TnVtYmVyfSBcdG1heGltdW1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEsIGNhbGxiYWNrKSB7XG5cdGNvbnN0IHJ0cm4gPSB7dmFsaWQ6IHRydWUsIGZhaWx1cmVzOiBbXX1cblxuXHQvLyBPUlxuXHRpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYW55T2YnLCAnYXJyYXknKSApIHtcblx0XHRydHJuLnZhbGlkID0gc2NoZW1hLmFueU9mLnNvbWUoZnVuY3Rpb24oaXRlbSwgaWR4KSB7XG5cdFx0XHRjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoaXRlbSkpIFxuXHRcdFx0XHQ/IGxvZ2ljRG9vcnModmFsdWUsIGl0ZW0sIGNhbGxiYWNrKVxuXHRcdFx0XHQ6IGNhbGxiYWNrKHZhbHVlLCBpdGVtLCBpZHgpO1xuXG5cdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShydHJuLmZhaWx1cmVzLCBnZXRSdHJuLmZhaWx1cmVzKTtcblxuXHRcdFx0aWYgKGdldFJ0cm4udmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRpZighcnRybi52YWxpZCl7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnB1c2goJ0F0IGxlYXN0IG9uZSBjcml0ZXJpb24gc2hvdWxkIG1hdGNoJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQU5EXG5cdGlmICggcnRybi52YWxpZCAmJiBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FsbE9mJywgJ2FycmF5JykgKSB7XG5cdFx0cnRybi52YWxpZCA9ICFzY2hlbWEuYW55T2Yuc29tZShmdW5jdGlvbihpdGVtLCBpZHgpIHtcblx0XHRcdGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG5cdFx0XHRcdD8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG5cdFx0XHRcdDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cblx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG5cdFx0XHRpZiAoZ2V0UnRybi52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9KTtcblx0XHRpZighcnRybi52YWxpZCl7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnB1c2goJ0FsbCBjcml0ZXJpYSBzaG91bGQgbWF0Y2gnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBOT1Jcblx0aWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbm90JywgJ2FycmF5JykgKSB7XG5cdFx0cnRybi52YWxpZCA9ICFzY2hlbWEuYW55T2Yuc29tZShmdW5jdGlvbihpdGVtLCBpZHgpIHtcblx0XHRcdGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhpdGVtKSkgXG5cdFx0XHRcdD8gbG9naWNEb29ycyh2YWx1ZSwgaXRlbSwgY2FsbGJhY2spXG5cdFx0XHRcdDogY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGlkeCk7XG5cblx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG5cdFx0XHRpZiAoZ2V0UnRybi52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9KTtcblx0XHRpZighcnRybi52YWxpZCl7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnB1c2goJ05vbmUgb2YgY3JpdGVyaWEgc2hvdWxkIG1hdGNoJyk7XG5cdFx0fVxuXHR9XG5cblxuXHQvLyBYT1Jcblx0aWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnb25lT2YnLCAnYXJyYXknKSApIHtcblx0XHRsZXQgY291bnRlclRydWUgPSAwO1xuXHRcdHNjaGVtYS5hbnlPZi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuXHRcdFx0Y29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcblx0XHRcdFx0PyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcblx0XHRcdFx0OiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcblxuXHRcdFx0aWYgKGdldFJ0cm4udmFsaWQpIHtcblx0XHRcdFx0Y291bnRlclRydWUrKztcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpZiAoY291bnRlclRydWUgPT09IDEpIHtcblx0XHRcdHJ0cm4udmFsaWQgPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJ0cm4uZmFpbHVyZXMucHVzaCgnT25seSBvbmUgY3JpdGVyaW9uIHNob3VsZCBtYXRjaCcpO1x0XHRcdFxuXHRcdH1cblx0fVxuXHRcblx0Ly8gWE9SIHBsdXNcblx0aWYgKCBydHJuLnZhbGlkICYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbk9mJywgJ29iamVjdCcpIFxuXHRcdCYmIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ2xpc3QnLCAnYXJyYXknKVxuXHRcdCYmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWluaW11bScsICdudW1iZXInKSB8fCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYS5uT2YsICdtYXhpbXVtJywgJ251bWJlcicpKVxuXHQpIHtcblx0XHRjb25zdCBtaW5pbXVtID0gZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEubk9mLCAnbWluaW11bScsICdudW1iZXInKSA/IHNjaGVtYS5uT2YubWluaW11bSA6IDA7XG5cdFx0Y29uc3QgbWF4aW11bSA9IGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLm5PZiwgJ21heGltdW0nLCAnbnVtYmVyJykgPyBzY2hlbWEubk9mLm1heGltdW0gOiBzY2hlbS5uT2YubGlzdC5sZW5ndGg7XG5cdFx0bGV0IGNvdW50ZXJUcnVlID0gMDtcblx0XHRzY2hlbWEuYW55T2YubGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGlkeCkge1xuXHRcdFx0Y29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKGl0ZW0pKSBcblx0XHRcdFx0PyBsb2dpY0Rvb3JzKHZhbHVlLCBpdGVtLCBjYWxsYmFjaylcblx0XHRcdFx0OiBjYWxsYmFjayh2YWx1ZSwgaXRlbSwgaWR4KTtcblx0XHRcdGlmIChnZXRSdHJuLnZhbGlkKSB7XG5cdFx0XHRcdGNvdW50ZXJUcnVlKys7XG5cdFx0XHR9XG5cdFx0XHRydHJuLmVycm9ycyA9IHJ0cm4uZXJyb3JzLmNvbmNhdChnZXRSdHJuLmVycm9ycyk7XHRcdFx0XG5cdFx0fSk7XG5cdFx0aWYgKGNvdW50ZXJUcnVlID49IG1pbmltdW0gJiYgY291bnRlclRydWUgPD0gbWF4aW11bSkge1xuXHRcdFx0cnRybi52YWxpZCA9IHRydWU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cnRybi5mYWlsdXJlcy5wdXNoKCdDcml0ZXJpYSB0byBtYXRjaCBtdXN0IGJldHdlZW4gJyArIG1pbmltdW0gKyAnIGFuZCAnICsgbWF4aW11bSk7XHRcdFx0XG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gcnRybjtcbn1cblxuZXhwb3J0IHtoYXNMb2dpY0Rvb3JzLCBsb2dpY0Rvb3JzfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sb2dpY0Rvb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEpzY2hlbWEgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBzdHJpbmdGb3JtYXRzIH0gZnJvbSAnLi9zdHJpbmdGb3JtYXRzJztcbmltcG9ydCB7IHR5cGVTdHJpbmcsIHNjaGVtYVN0cmluZyB9IGZyb20gJy4vdHlwZVN0cmluZyc7XG5pbXBvcnQgeyB0eXBlTnVtYmVyLCBzY2hlbWFOdW1iZXIgfSBmcm9tICcuL3R5cGVOdW1iZXInO1xuaW1wb3J0IHsgdHlwZUFycmF5LCBzY2hlbWFBcnJheSB9IGZyb20gJy4vdHlwZUFycmF5JztcbmltcG9ydCB7IHR5cGVPYmplY3QsIHNjaGVtYU9iamVjdCB9IGZyb20gJy4vdHlwZU9iamVjdCc7XG5cbmNvbnN0IHR5cGVWYWxpZGF0b3JzID0ge1xuXHQnc3RyaW5nJzogdHlwZVN0cmluZyxcblx0J251bWJlcic6IHR5cGVOdW1iZXIsXG5cdCdhcnJheSc6IHR5cGVBcnJheSxcblx0J29iamVjdCc6IHR5cGVPYmplY3Rcbn07XG5jb25zdCB0eXBlU3VwZXJTY2hlbWFzID0ge1xuXHQnc3RyaW5nJzogc2NoZW1hU3RyaW5nLFxuXHQnbnVtYmVyJzogc2NoZW1hTnVtYmVyLFxuXHQnYXJyYXknOiBzY2hlbWFBcnJheSxcblx0J29iamVjdCc6IHNjaGVtYU9iamVjdFxufTtcblxuXG5PYmplY3Qua2V5cyhzdHJpbmdGb3JtYXRzKS5mb3JFYWNoKCBmdW5jdGlvbiAoa2V5KSB7XG5cdEpzY2hlbWEucHVzaFN0cmluZ0Zvcm1hdChrZXksIHN0cmluZ0Zvcm1hdHNba2V5XSk7XG59KTtcblxuLyoqXG4gKiBib29sZWFuIHN1cGVyIFNjaGVtYVxuICovXG50eXBlU3VwZXJTY2hlbWFzWydib29sZWFuJ10gPSB7XG5cdHR5cGU6ICdzdHJpbmcnXG59XG5cbi8qKlxuICogYm9vbGVhbiBzdXBlciBTY2hlbWFcbiAqL1xudHlwZVN1cGVyU2NoZW1hc1snbnVsbCddID0ge1xuXHR0eXBlOiAnc3RyaW5nJ1xufVxuXG4vLyBhZGQgYnVpbHQtaW4gdHlwZXMgYW5kIHN1cGVyU2NoZW1hc1xuXG5PYmplY3Qua2V5cyh0eXBlVmFsaWRhdG9ycykuZm9yRWFjaCggZnVuY3Rpb24odHlwZSkge1xuXHRKc2NoZW1hLnB1c2hUeXBlKHR5cGUsIHR5cGVWYWxpZGF0b3JzW3R5cGVdLCB0eXBlU3VwZXJTY2hlbWFzW3R5cGVdKTtcbn0pO1xuXG4vLyBhZGQgcm9vdCBzdXBlciBzY2hlbWFcbkpzY2hlbWEucHVzaFN1cGVyU2NoZW1hKCdyb290Jywge1xuXHR0eXBlOiAnb2JqZWN0Jyxcblx0cHJvcGVydGllczoge1xuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHR0eXBlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdH0sXG5cdHJlcXVpcmVkOiBbJ2lkJywgJ3R5cGUnXVxufSk7XG5cbmV4cG9ydCBjb25zdCB0eXBlcyA9IEpzY2hlbWEudHlwZXMsIFxuXHRzdXBlclNjaGVtYXMgPSBKc2NoZW1hLnN1cGVyU2NoZW1hcywgXG5cdGdldFN0cmluZ0Zvcm1hdHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIEpzY2hlbWEuc3RyaW5nRm9ybWF0c1xuXHR9LFxuXHRwdXNoVHlwZSA9IEpzY2hlbWEucHVzaFR5cGUsIFxuXHRwdXNoU3VwZXJTY2hlbWEgPSBKc2NoZW1hLnB1c2hTdXBlclNjaGVtYSwgXG5cdHB1c2hTdHJpbmdGb3JtYXQgPSBKc2NoZW1hLnB1c2hTdHJpbmdGb3JtYXQsXG5cdGNoZWNrID0gSnNjaGVtYS5jaGVjayxcblx0alR5cGUgPSB2YXJUeXBlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBzdHJpbmdGb3JtYXRzID0ge1xuXG5cdCdkYXRlLXRpbWUnOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRsZXQgcnRybiA9IGZhbHNlO1xuXHRcdGNvbnN0IGJhc2VUZXN0ID0gL1xcZHs0fS0oXFxkezJ9KS0oXFxkezJ9KShbVHRdKFxcZHsyfSk6KFxcZHsyfSkoOihcXGR7Mn0pKC5cXGR7Miw0fSk/W3paXT8pPyk/Ly5leGVjKHZhbHVlKTtcblx0XHRpZihiYXNlVGVzdCAmJiAhaXNOYU4oRGF0ZS5wYXJzZSh2YWx1ZSkpKXtcblx0XHRcdHJ0cm4gPSB0cnVlO1x0XHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXHRob3N0bmFtZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIC9eKFxcdyhbXFx3XFwtXXswLDYxfVxcdyk/XFwuKStbYS16XXsyLDZ9JC9pLnRlc3QodmFsdWUpO1xuXHR9LFxuXHQvKipcblx0ICogdGhhbmtzIHRvIGp0ZWV1d2VuIGh0dHA6Ly93d3cucmVnZXhsaWIuY29tL1VzZXJQYXR0ZXJucy5hc3B4P2F1dGhvcklkPWIxNTMxZjQwLWMwNDYtNDI1My05ODAwLWI0ZmY0MTljMDFiMlxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBcblx0ICovXG5cdGlwdjQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiAvXigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKFxcLigyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFswLTldezEsMn0pKXszfSQvLnRlc3QodmFsdWUpO1xuXHR9LFxuXHQvKipcblx0ICogVGhhbmsgdG8ganRlZXV3ZW5cblx0ICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSBcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gXG5cdCAqL1xuXHRpcHY2OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJyheXFxkezIwfSQpfCheKCg6W2EtZkEtRjAtOV17MSw0fSl7Nn18OjopZmZmZjooMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMC05XXsxLDJ9KShcXC4oMjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMC05XXsxLDJ9KSl7M30kKXwoXigoOlthLWZBLUYwLTldezEsNH0pezZ9fDo6KWZmZmYoOlthLWZBLUYwLTldezEsNH0pezJ9JCl8KF4oW2EtZkEtRjAtOV17MSw0fSkgKDpbYS1mQS1GMC05XXsxLDR9KXs3fSQpfCheOig6W2EtZkEtRjAtOV17MSw0fSg6Oik/KXsxLDZ9JCl8KF4oKDo6KT9bYS1mQS1GMC05XXsxLDR9Oil7MSw2fTokKXwoXjo6JCknKTtcblx0XHRyZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XHRcdFxuXHR9LFxuXHR1cmk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXigoaHR0cHxodHRwc3xmdHApOlxcL1xcLyk/KCguKj8pOiguKj8pQCk/KFxcd1tcXHdcXC1dezAsNjF9W1xcd10pKChcXC5cXHdbXFx3XFwtXXswLDYxfVxcdyopKDooWzAtOV17MSw1fSkpPygoXFwvLio/KShcXD8oLio/KSk/KFxcIyguKikpPyk/JCcsICdpJyk7XG5cdFx0cmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xuXHR9LFxuXHQvKipcblx0ICogc2ltcGxpZmllZCB2ZXJzaW9uIG9mIGVtYWlsIHZhbGlkYXRpb24uIEl0IGlzIG5vdCBzdHJpY3QgY29tcGxpYW50IHdpdGggcmZjNTMyMiBcblx0ICogQHBhcmFtICB7U3RyaW5nfSBcdHZhbHVlIHRvIHZhbGlkYXRlXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCAqL1xuXHRlbWFpbDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gIFx0Y29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgnL14oKChbYS16XXxcXGR8WyEjXFwkJSZcXHUwMDI3XFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSZcXHUwMDI3XFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSQnLCdpJyk7XG4gIFx0cmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHN0cmluZ0Zvcm1hdHMgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHJpbmdGb3JtYXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIHZhclR5cGUgfSBmcm9tICcuL2Jhc2ljQ2hlY2snO1xuaW1wb3J0IHsgbG9naWNEb29ycywgaGFzTG9naWNEb29ycyB9IGZyb20gJy4vbG9naWNEb29ycyc7XG5pbXBvcnQgeyBKc2NoZW1hLCBhbGxSZXF1aXJlZCB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHNjaGVtYVN0cmluZyA9IHtcblx0dHlwZTogJ29iamVjdCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0bWluTGVuZ3RoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdG11bHRpcGxlT2Y6IDEsXG5cdFx0XHRtaW5pbXVtOiAwXG5cdFx0fSxcblx0XHRtYXhMZW5ndGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0bXVsdGlwbGVPZjogMSxcblx0XHRcdG1pbmltdW06IDBcblx0XHR9LFxuXHRcdHBhdHRlcm46IHtcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0b25lT2Y6IFsnc3RyaW5nJywgJ3JlZ2V4cCcsICdvYmplY3QnXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZW51bWVyYXRlOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknXG5cdFx0fSxcblx0XHRmb3JtYXQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9LFxuXHRyZXF1aXJlZDogWyd0eXBlJ11cbn1cblxuXG4vKipcbiAqIHRlc3QgdmFsdWUgYWdhaW5zdCBwYXR0ZXJuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgdG8gdGVzdFxuICogQHBhcmFtICB7UmVnRXhwfSBwYXR0ICBQYXR0ZXJuIHRvIHVzZVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuICovXG5mdW5jdGlvbiBwYXR0ZXJuVGVzdCh2YWx1ZSwgcGF0dCkge1xuXHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcblx0aWYodmFyVHlwZShwYXR0LCAnc3RyaW5nJykpIHtcblx0XHRwYXR0ID0gbmV3IFJlZ0V4cChwYXR0KTtcblx0fVxuXHRpZiAodmFyVHlwZShwYXR0LCAncmVnZXhwJykpIHtcblx0XHRpZiAoIXBhdHQudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJ0cm4udmFsaWQgPSBmYWxzZTtcblx0XHRcdHJ0cm4uZmFpbHVyZXMucHVzaCgndGhlIHRleHQgbXVzdCBmaXQgdGhlIHBhdHRlcm4gYXQgc2NoZW1hJyk7XHRcdFx0XHRcdFx0XHRcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJ0cm47XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRlc3QodmFsdWUsIGZvcm1hdCkge1xuXHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IFtdfTtcblx0aWYoIHNjaGVtYS5zdHJpbmdGb3JtYXRzLmhhc093blByb3BlcnR5KGZvcm1hdCkpIHtcblx0XHRpZiAoICFzY2hlbWEuc3RyaW5nRm9ybWF0W2Zvcm1hdF0odmFsdWUpICkge1xuXHRcdFx0cnRybi52YWxpZCA9IGZhbHNlO1xuXHRcdFx0cnRybi5mYWlsdXJlcy5wdXNoKCdzdHJpbmcgdmFsdWUgZG9lc25cXCd0IGZpdCB3aXRoICcgKyBmb3JtYXQgKyAnIHNwZWNpZmljYXRpb24nKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJ0cm47XG59XG5cbmNvbnN0IHR5cGVTdHJpbmcgPSB7XG5cdG1pbkxlbmd0aDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG5cdFx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG5cdFx0aWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21pbkxlbmd0aCcsICdudW1iZXInKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWluTGVuZ3RoKSB7XG5cdFx0XHRydHJuLnZhbGlkID0gZmFsc2U7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyBzaG9ydGVyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5taW5MZW5ndGggKyAnKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gcnRybjtcdFx0XG5cdH0sXG5cdG1heExlbmd0aDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG5cdFx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG5cdFx0aWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ21heExlbmd0aCcsICdudW1iZXInKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWF4TGVuZ3RoKSB7XG5cdFx0XHRydHJuLnZhbGlkID0gZmFsc2U7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnB1c2goJ3N0cmluZyBsb25nZXIgdGhhbiBhbGxvd2VkICgnICsgc2NoZW1hLm1heExlbmd0aCArICcpJyk7XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1x0XHRcblx0fSxcblx0ZW51bWFyYXRlOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKXtcblx0XHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcblx0XHRpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdlbnVtZXJhdGUnLCAnYXJyYXknKSAmJiBzY2hlbWEuZW51bWVyYXRlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuXHRcdFx0cnRybi52YWxpZCA9IGZhbHNlLFxuXHRcdFx0cnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG9uZSBvZiBlbnVtZXJhdGVkOiBbJyArIHNjaGVtYS5lbnVtZXJhdGUuam9pbignLCAnKSArICddJyk7XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1x0XHRcblx0fSxcblx0cGF0dGVybjogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG5cdFx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG5cdFx0aWYoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAncGF0dGVybicpKSB7XG5cdFx0XHRjb25zdCBnZXRSdHJuID0gKGhhc0xvZ2ljRG9vcnMoc2NoZW1hLnBhdHRlcm4pKSBcblx0XHRcdFx0PyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEucGF0dGVybiwgcGF0dGVyblRlc3QpXG5cdFx0XHRcdDogcGF0dGVyblRlc3QodmFsdWUsIHNjaGVtYS5wYXR0ZXJuKTtcblx0XHRcdGlmKHJ0cm4udmFsaWQpe1xuXHRcdFx0XHRydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcblx0XHRcdH1cblx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gcnRybjtcdFx0XG5cdH0sXG5cdGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSl7XG5cdFx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcblx0XHRpZiAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdmb3JtYXQnKSkge1xuXHRcdFx0Y29uc3QgZ2V0UnRybiA9IChoYXNMb2dpY0Rvb3JzKHNjaGVtYS5mb3JtYXQpKSBcblx0XHRcdFx0PyBsb2dpY0Rvb3JzKHZhbHVlLCBzY2hlbWEuZm9ybWF0LCBmb3JtYXRUZXN0KVxuXHRcdFx0XHQ6IHBhdHRlcm5UZXN0KHZhbHVlLCBzY2hlbWEuZm9ybWF0KTtcblx0XHRcdGlmKHJ0cm4udmFsaWQpe1xuXHRcdFx0XHRydHJuLnZhbGlkID0gZ2V0UnRybi52YWxpZDtcblx0XHRcdH1cblx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJ0cm4uZmFpbHVyZXMsIGdldFJ0cm4uZmFpbHVyZXMpO1xuXG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1x0XHRcblx0fSxcblxufVxuXG5leHBvcnQge3R5cGVTdHJpbmcsIHNjaGVtYVN0cmluZ307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZVN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFxuICovXG5pbXBvcnQgeyBkZWZpbmVkVHlwZVZhbHVlIH0gZnJvbSAnLi9iYXNpY0NoZWNrJztcbmltcG9ydCB7IGxvZ2ljRG9vcnMsIGhhc0xvZ2ljRG9vcnMgfSBmcm9tICcuL2xvZ2ljRG9vcnMnO1xuaW1wb3J0IHsgSnNjaGVtYSB9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IHNjaGVtYU51bWJlciA9IHtcblx0dHlwZTogJ29iamVjdCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0bWluaW11bToge1xuXHRcdFx0dHlwZTogJ251bWJlcidcblx0XHR9LFxuXHRcdG1heGltdW06IHtcblx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0fSxcblx0XHRleGNsdXNpdmVNaW5pbXVtOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbidcblx0XHR9LFxuXHRcdGV4Y2x1c2l2ZU1heGltdW06IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJ1xuXHRcdH0sXG5cdFx0bXVsdGlwbGVPZjoge1xuXHRcdFx0dHlwZTogJ251bWJlcidcblx0XHR9LFxuXHRcdGVudW1lcmF0ZToge1xuXHRcdFx0dHlwZTogJ2FycmF5J1xuXHRcdH1cblx0fSxcblx0cmVxdWlyZWQ6IFsndHlwZSddXG59XG5cbmNvbnN0IHR5cGVOdW1iZXIgPSB7XG5cdG1pbmltdW06IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcblx0XHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcblx0XHRpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWluaW11bScsICdudW1iZXInKSApIHtcblx0XHRcdGlmKCAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdleGNsdXNpdmVNaW5pbXVtJywgJ2Jvb2xlYW4nLCB0cnVlKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWluaW11bSkgXG5cdFx0XHR8fCB2YWx1ZSA8IHNjaGVtYS5taW5pbXVtICkge1xuXHRcdFx0XHRydHJuLnZhbGlkID0gZmFsc2U7XG5cdFx0XHRcdHJ0cm4uZmFpbHVyZXMucHVzaCgnbnVtYmVyIGxvd2VyIHRoYW4gYWxsb3dlZCAoJyArIHNjaGVtYS5taW5pbXVtICsgJyknKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJ0cm47XG5cdH0sXG5cdG1heGltdW06IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcblx0XHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcblx0XHRpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4aW11bScsICdudW1iZXInKSApIHtcblx0XHRcdGlmKCAoZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdleGNsdXNpdmVNYXhpbXVtJywgJ2Jvb2xlYW4nLCB0cnVlKSAmJiB2YWx1ZSA8PSBzY2hlbWEubWF4aW11bSkgXG5cdFx0XHR8fCB2YWx1ZSA8IHNjaGVtYS5tYXhpbXVtICkge1xuXHRcdFx0XHRydHJuLnZhbGlkID0gZmFsc2U7XG5cdFx0XHRcdHJ0cm4uZmFpbHVyZXMucHVzaCgnbnVtYmVyIGhpZ2hlciB0aGFuIGFsbG93ZWQgKCcgKyBzY2hlbWEubWF4aW11bSArICcpJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXHRtdWx0aXBsZU9mOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG5cdFx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcdFx0XG5cdFx0aWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ211bHRpcGxlT2YnLCAnbnVtYmVyJykgJiYgdmFsdWUgJSBzY2hlbWEubXVsdGlwbGVPZiAhPT0gMCkge1xuXHRcdFx0cnRybi52YWxpZCA9IGZhbHNlLFxuXHRcdFx0cnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG11bHRpcGxlIG9mICcgKyBzY2hlbWEubXVsdGlwbGVPZik7XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXHRlbnVtZXJhdGU6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcblx0XHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1x0XHRcblx0XHRpZiggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdlbnVtZXJhdGUnLCAnYXJyYXknKSAmJiBzY2hlbWEuZW51bWVyYXRlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuXHRcdFx0cnRybi52YWxpZCA9IGZhbHNlLFxuXHRcdFx0cnRybi5mYWlsdXJlcy5wdXNoKCd2YWx1ZSBtdXN0IGJlIG9uZSBvZiBlbnVtZXJhdGVkOiBbJyArIHNjaGVtYS5lbnVtZXJhdGUuam9pbignLCcpICsgJ10nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJ0cm47XG5cdH0sXG5cbn1cblxuZXhwb3J0IHt0eXBlTnVtYmVyLCBzY2hlbWFOdW1iZXJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3R5cGVOdW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBcbiAqL1xuaW1wb3J0IHsgZGVmaW5lZFR5cGVWYWx1ZSwgdmFyVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBsb2dpY0Rvb3JzLCBoYXNMb2dpY0Rvb3JzIH0gZnJvbSAnLi9sb2dpY0Rvb3JzJztcbmltcG9ydCB7IEpzY2hlbWEgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBzY2hlbWFBcnJheSA9IHtcblx0dHlwZTogJ29iamVjdCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0bWluSXRlbXM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0bWluaW11bTogMCxcblx0XHRcdG11bHRpcGxlT2Y6IDFcblx0XHR9LFxuXHRcdG1heEl0ZW1zOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdG1pbmltdW06IDAsXG5cdFx0XHRtdWx0aXBsZU9mOiAxXG5cdFx0fSxcblx0XHR1bmlxdWVJdGVtczoge1xuXHRcdFx0dHlwZToge1xuXHRcdFx0XHRhbnlPZjogW1xuXHRcdFx0XHRcdCdib29sZWFuJyxcdC8vIGZvciB3aG9sZSB2YWx1ZSBjaGVja1xuXHRcdFx0XHRcdCdzdHJpbmcnXHRcdC8vIGZvciBhbiBzcGVjaWZpYyBwcm9wZXJ0eSBpdGVtc1xuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhZGRpdGlvbmFsSXRlbXM6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJ1xuXHRcdH0sXG5cdFx0aXRlbXM6IHtcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0YW55T2Y6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ29iamVjdCdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRyZXF1aXJlZDogWyd0eXBlJ11cbn1cblxuY29uc3QgdHlwZUFycmF5ID0ge1xuXG5cdC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgdmFsdWUgaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkLCB1c2VkIHdoZW4gc2NoZW1hIGhhcyBmaXhlZCBpdGVtc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG5cdGFkZGl0aW9uYWxJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuXHRcdGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG5cdFx0Y29uc3QgaXRlbXNOdW0gPSBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2l0ZW1zJywgJ2FycmF5JykgPyBzY2hlbWEuaXRlbXMubGVuZ3RoOiAwO1xuXG5cdFx0aWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ2FkZGl0aW9uYWxJdGVtcycsICdib29sZWFuJykgJiYgIXNjaGVtYS5hZGRpdGlvbmFsSXRlbXNcblx0XHRcdCYmIHZhbHVlLmxlbmd0aCA+IGl0ZW1zTnVtKSB7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbm8gYWRkaXRpb25hbCBpdGVtcyBhbGxvd2VkJyk7XHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBjaGVjayB0aGUgdmFsdWUncyBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSAge0FycmF5fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyBzY2hlbWFBcnJheVxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICB2YWxpZGF0aW9uIG9iamVjdFxuXHQgKi9cblx0bWluSXRlbXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcblx0XHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuXHRcdGlmICggZGVmaW5lZFR5cGVWYWx1ZShzY2hlbWEsICdtaW5JdGVtcycsICdudW1iZXInKSAmJiB2YWx1ZS5sZW5ndGggPCBzY2hlbWEubWluSXRlbXMpIHtcblx0XHRcdHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgYmUgYXQgbGVhc3QgJyArIHNjaGVtYS5taW5JdGVtcyk7XHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgdmFsdWUgaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkLCB1c2VkIHdoZW4gc2NoZW1hIGhhcyBmaXhlZCBpdGVtc1xuXHQgKiBAcGFyYW0gIHtBcnJheX0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hQXJyYXlcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG5cdG1heEl0ZW1zOiBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSB7XG5cdFx0Y29uc3QgcnRybiA9IHsgdmFsaWQ6IHRydWUsIGZhaWx1cmVzOiB7IHNlbGY6W10sIGNoaWxkcmVuOiB7fX0gfTtcblx0XHRpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnbWF4SXRlbXMnLCAnbnVtYmVyJykgJiYgdmFsdWUubGVuZ3RoIDwgc2NoZW1hLm1heEl0ZW1zKSB7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnaXRlbXMgaW4gYXJyYXkgc2hvdWxkIGJlIGF0IG1vc3QgJyArIHNjaGVtYS5tYXhJdGVtcyk7XHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgaXRlbXMgb2YgdGhlIHZhbHVlIGFyZSB1bmlxdWUsIGVudGlyZWx5IG9yIGluIGEgcHJvcGVydHlcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuXHR1bmlxdWVJdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuXHRcdGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG5cdFx0aWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3VuaXF1ZUl0ZW1zJykpIHtcblx0XHRcdGNvbnN0IHdpdG5lc3MgPSBbXTtcblx0XHRcdHJ0cm4udmFsaWQgPSAhdmFsdWUuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gdmFyVHlwZShzY2hlbWEudW5pcXVlSXRlbXMsICdzdHJpbmcnKSA/IGl0ZW1bc2NoZW1hLnVuaXF1ZUl0ZW1zXSA6IGl0ZW07XG5cdFx0XHRcdGlmICggd2l0bmVzcy5pbmRleE9mKGVsZW1lbnQpID4gLTEpIHtcblx0XHRcdFx0XHR3aXRuZXNzLnB1c2goZWxlbWVudCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJ0cm4uZmFpbHVyZXMuc2VsZi5wdXNoKCdpdGVtcyBpbiBhcnJheSBzaG91bGQgdW5pcXVlJyk7XHRcdFx0XG5cdFx0fVxuXHRcdHJldHVybiBydHJuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBjaGVjayBpZiB0aGUgaXRlbXMgb2YgdGhlIHZhbHVlIGFyZSB1bmlxdWUsIGVudGlyZWx5IG9yIGluIGEgcHJvcGVydHlcblx0ICogQHBhcmFtICB7QXJyYXl9IHZhbHVlICBUaGUgdmFsdWUgdG8gY2hlY2tcblx0ICogQHBhcmFtICB7T2JqZWN0fSBzY2hlbWEgYWNjb3JkaW5nIHNjaGVtYUFycmF5XG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuXHRpdGVtczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuXHRcdGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH07XG5cdFx0dmFsdWUuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpZHgpIHtcblx0XHRcdGNvbnN0IHNjaGVtYUl0ID0gdmFyVHlwZS5pcyhzY2hlbWEuaXRlbXMsICdhcnJheScpID8gc2NoZW1hLml0ZW1zW2lkeF0gOiBzY2hlbWEuaXRlbXM7XG5cdFx0XHRjb25zdCBnZXRSdHJuID0gSnNjaGVtYS5jaGVjayhpdGVtLCBzY2hlbWEuaXRlbXMpO1xuXHRcdFx0aWYgKCBydHJuLnZhbGlkICl7XG5cdFx0XHRcdHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuXHRcdFx0fVxuXHRcdFx0cnRybi5mYWlsdXJlcy5jaGlsZHJlbiA9IGFwcGVuZENoaWxkRmFpbHVyZXMocnRybi5mYWlsdXJlcy5jaGlsZHJlbiwgaWR4LCBnZXRSdHJuLmZhaWx1cmVzKTtcdFx0XHRcdFxuXHRcdH0pO1xuXHRcdHJldHVybiBydHJuO1xuXHR9XG59XG5cbmV4cG9ydCB7dHlwZUFycmF5LCBzY2hlbWFBcnJheX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdHlwZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogXG4gKi9cbmltcG9ydCB7IGRlZmluZWRUeXBlVmFsdWUsIGlzVHlwZSB9IGZyb20gJy4vYmFzaWNDaGVjayc7XG5pbXBvcnQgeyBsb2dpY0Rvb3JzLCBoYXNMb2dpY0Rvb3JzIH0gZnJvbSAnLi9sb2dpY0Rvb3JzJztcbmltcG9ydCB7IEpzY2hlbWEgfSBmcm9tICcuL2Jhc2UnO1xuXG5jb25zdCBzY2hlbWFPYmplY3QgPSB7XG5cdHR5cGU6ICdvYmplY3QnLFxuXHRwcm9wZXJ0aWVzOiB7XG5cdFx0dHlwZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHR5cGU6ICdvYmplY3QnXG5cdFx0fSxcblx0XHRyZXF1aXJlZDoge1xuXHRcdFx0dHlwZTogJ2FycmF5J1xuXHRcdH0sXG5cdFx0YWRkaXRpb25hbFByb3BlcnRpZXM6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJ1xuXHRcdH1cblx0fSxcblx0cmVxdWlyZWQ6IFsndHlwZSddXG59XG5cbmNvbnN0IHR5cGVPYmplY3QgPSB7XG5cblx0LyoqXG5cdCAqIGNoZWNrIHRoZXJlIGFyZSBtb3JlIHByb3BlcnRpZXMgdGhhbiBhbGxvd2VkXG5cdCAqIEBwYXJhbSAge09iamVjdH0gdmFsdWUgIFRoZSB2YWx1ZSB0byBjaGVja1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IHNjaGVtYSBhY2NvcmRpbmcgc2NoZW1hU3RyaW5nXG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIHZhbGlkYXRpb24gb2JqZWN0XG5cdCAqL1xuXHRhZGRpdGlvbmFsUHJvcGVydGllczogZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkge1xuXHRcdGNvbnN0IHJ0cm4gPSB7IHZhbGlkOiB0cnVlLCBmYWlsdXJlczogeyBzZWxmOltdLCBjaGlsZHJlbjoge319IH1cblx0XHRpZiAoIGRlZmluZWRUeXBlVmFsdWUoc2NoZW1hLCAnYWRkaXRpb25hbFByb3BlcnRpZXMnLCAnYm9vbGVhbicpICYmICFzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXNcblx0XHRcdCYmIE9iamVjdC5rZXlzKHZhbHVlKS5zb21lKCBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdHJldHVybiAoICFkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3Byb3BlcnRpZXMnLCAnb2JqZWN0JykgfHwgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmluZGV4T2YoaXRlbSkgPT09IC0xKTtcblx0XHRcdH0pXG5cdFx0KSB7XG5cdFx0XHRydHJuLmZhaWx1cmVzLnNlbGYucHVzaCgnbm8gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFsbG93ZWQnKTtcdFx0XHRcblx0XHR9XG5cdFx0cmV0dXJuIHJ0cm47XG5cdH0sXG5cblx0LyoqXG5cdCAqIGNoZWNrIHRoZSB2YWx1ZSdzIHByb3BlcnRpZXNcblx0ICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZSAgVGhlIHZhbHVlIHRvIGNoZWNrXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2NoZW1hIGFjY29yZGluZyB0byBzY2hlbWFPYmplY3Rcblx0ICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgdmFsaWRhdGlvbiBvYmplY3Rcblx0ICovXG5cdHByb3BlcnRpZXM6IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIHtcblx0XHRjb25zdCBydHJuID0geyB2YWxpZDogdHJ1ZSwgZmFpbHVyZXM6IHsgc2VsZjpbXSwgY2hpbGRyZW46IHt9fSB9O1xuXG5cdFx0aWYgKCBkZWZpbmVkVHlwZVZhbHVlKHNjaGVtYSwgJ3Byb3BlcnRpZXMnLCAnb2JqZWN0JykgKSB7XG5cdFx0XHRPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCggZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRpZiAoIGRlZmluZWRUeXBlVmFsdWUodmFsdWUsIGtleSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XS50eXBlKSApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGdldFJ0cm4gPSAoaGFzTG9naWNEb29ycyhzY2hlbWEucHJvcGVydGllc1trZXldKSkgXG5cdFx0XHRcdFx0XHQ/IGxvZ2ljRG9vcnModmFsdWVba2V5XSwgc2NoZW1hLnByb3BlcnRpZXNba2V5XSwgSnNjaGVtYS5jaGVjaylcblx0XHRcdFx0XHRcdDogSnNjaGVtYS5jaGVjayh2YWx1ZVtrZXldLCBzY2hlbWEucHJvcGVydGllc1trZXldKTtcblxuXHRcdFx0XHRcdGlmKCFnZXRSdHJuLnZhbGlkKXtcblx0XHRcdFx0XHRcdHJ0cm4udmFsaWQgPSBnZXRSdHJuLnZhbGlkO1xuXHRcdFx0XHRcdFx0cnRybi5mYWlsdXJlcy5jaGlsZHJlbiA9IGFwcGVuZENoaWxkRmFpbHVyZXMocnRybi5jaGlsZHJlbiwga2V5LCBnZXRSdHJuLmZhaWx1cmVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcnRyblxuXHR9XG59XG5cbmV4cG9ydCB7dHlwZU9iamVjdCwgc2NoZW1hT2JqZWN0fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90eXBlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=