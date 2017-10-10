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

export {varType, definedTypeValue};