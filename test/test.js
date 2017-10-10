const assert = require('assert');
const path = require('path');

const Scheson = require(path.resolve(__dirname, '../src') + '/app', function(dice) { console.log('dice:', dice)});

console.log(Scheson.types);

describe('Scheson', function() {
	const goods = [];
	const bads = [];
	before( function() {
		const goods = [
			{ 
				json:	'./object-two_props.good1.json',
				schema: './object-two_props.schema.json'
			},
			{
				json:	'./array-anglo_names.good1.json',
				schema: './array-anglo_names.schema.json'
			}
		];
		const bads = [
			{
				json:	'./object-two_props.good1.json',
				schema: './array-anglo_names.schema.json'
			},
			{
				json:	'./array-anglo_names.bad1.json',
				schema: './array-anglo_names.schema.json'
			},
			{
				json:	'./array-anglo_names.good1.json',
				schema: './array-defined_items_opened.schema.json'
			},
		];
	});
  describe('#check()', function() {   
  	goods.forEach(function(item)) {
  		it('should return -1 when the value is not present', function() {
  		   	const json = require(__dirname + '/object-two_props.good1.json');
  		   	const schema = require(__dirname + '/object-two_props.schema.json');
  		   	// console.log('Scheson', Scheson.check(json, schema));
  		     assert.equal({valid:true}, Scheson.check(json, schema));
  		   });
  	}
  });
});


/*



describe('scheJs', function() {
	const goods = [];
	const bads = [];
	before( function() {
		const goods = [
			{ 
				json:	'./object-two_props.good1.json',
				schema: './object-two_props.schema.json'
			},
			{
				json:	'./array-anglo_names.good1.json',
				schema: './array-anglo_names.schema.json'
			}
		];
		const bads = [
			{
				json:	'./object-two_props.good1.json',
				schema: './array-anglo_names.schema.json'
			},
			{
				json:	'./array-anglo_names.bad1.json',
				schema: './array-anglo_names.schema.json'
			},
			{
				json:	'./array-anglo_names.good1.json',
				schema: './array-defined_items_opened.schema.json'
			},
		];
	});
	describe('#check()', function() {
		goods.forEach( function (item) {
		  it('should return "{ valid: true }" for checking ' + item.json 
			+ ' against ' + item.schema, function(done) {
				const json = require(item.json);
				const schema = require(item.schema);
		    assert.equal(false, scheJs.check(json, schema));
		  });
		});

		bads.forEach( function (item) {
		  it('should return "{ valid: false, failures: [Object] }" for checking ' + item.json 
			+ ' against ' + item.schema, function() {
				const json = require(item.json);
				const schema = require(item.schema);
		    assert.equal(false, scheJs.check(json, schema));
		  });
		});
  });
});*/



