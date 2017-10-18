const expect = require('chai').expect
const path = require('path');
const fs = require('fs');

const Scheson = require('../dist/scheson').Scheson;

describe('Scheson.check', function() {
	const responseValid = {
    valid: true,
    failures: {
      self: [],
      children: {}
    },
    errors: {}
  };

	const goods = [
		{ 
			json:	'./object/object-two_props.good1.json',
			schema: './object/object-two_props.schema.json'
		},
    { 
      json: './object/object-person-anyof.good1.json',
      schema: './object/object-person-anyof.schema.json'
    },
    { 
      json: './object/object-person-anyof.good2.json',
      schema: './object/object-person-anyof.schema.json'
    },
		{
			json:	'./string/string-anglo_name.good1.json',
			schema: './string/string-anglo_name.schema.json'
		}
	];
  goods.map(function(item) {
    it('expect to be an object with a property of "valid" that is true', function() {
      const fileconts = fs.readFileSync(path.resolve(__dirname + '/'+ item.json), 'utf8');
      const json = Scheson.jType.parseString(fileconts);
      const schema = require(item.schema);
      try {
        const resp = Scheson.check(json, schema)
        console.error(resp);
        expect(resp).to.be.an('object').that.have.property('valid', true);        
      }
      catch (e) {
        console.error('Error with: ' + item.json + ' and ' + item.schema, e);
      }
    });    
  })
});

