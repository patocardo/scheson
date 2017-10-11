const fs = require('fs');
const path = require('path');

describe('Scheson', function() {
  const Scheson = require('../dist/scheson').Scheson;

  const goods = [
    { 
      json: '../test/object/object-two_props.good1.json',
      schema: '../test/object/object-two_props.schema.json'
    },
    {
      json: '../test/string/string-anglo_name.good1.json',
      schema: '../test/string/string-anglo_name.schema.json'
    }
  ];
  const responseValid = {
    valid: true,
    failures: {
      self: [],
      children: {}
    },
    errors: {}
  };

  beforeEach(function() {
  });

  goods.map(function(item) {
    it('should return objects with valid property in true', function() {
      const fileconts = fs.readFileSync(path.resolve(__dirname + '/'+ item.json), 'utf8');
      const json = Scheson.jType.parseString(fileconts);
      const schema = require(item.schema);
      expect(Scheson.check(json, schema)).toEqual(responseValid)
    });    
  })

});
