# schema-validator

An attempt to have a general json validation over normalized schemas.

Done in javascript without dependencies.

## Description

JSON-schemas (see [link](http://json-schema.org/) ) is a growing standard for using json files to serve the use of other json files.

Among the utilities[1] that JSON-schema can have, *validation* of incoming json data is the most obvious.

## Installation

## Usage
1. Download */dist/scheson.js*
2. In your code check with `const validation = Scheson.check(js_ob, schema);`, 
where `js_ob` is the value to check, and `schema` is the object with the standards

`validation.valid` will be *true* if everything is ok, or *false* otherwise

If json was not valid, the `validation.failure` object will report how the json has failed. See the following example:
**Incoming value**
```
{
	name: 'Manuel Belgrano',
	born: {
		date: '3_6_1770',
	}
	email: 'didn\'t have'
}
```
**validation failure**
```
{
	born: {
		date: 'bad date format',
		place: 'required'
	},
	email: 'bad email format',
}
```
Schemas should be error-free in order to check the passed value. But as we allways do mistake with schemas, you can use the third argument as follows:

`const validation = Scheson.check(js_ob, schema, true);`

This will ask the validator to check if the json-schema is well formed, before check the value itself. This specification is usefult either for development stage and for external/dynamic schemas.

So, if the schema is wrong, the `validation.errors` object will report how the json has failed. See the following example:
** Incoming Json-schema **
```
{
	"id": "eminence",
	"type": "object",
	"properties": {
		"name": {
			"type": "string"
		},
		"born": {
			"type": "object",
			"properties": {
				"date": {
					"type": "string",
					"format": "date-time"
				},
				"place": "string"
			}
			"required": ["date", "place"]
		}
	}
}
```
**validation errors**
```
{
	properties: {
		born: {
			properties: {
				place: 'bad type, it should be object'
			}
		}
	}
}
```
**Scheson** also support extensions and modifications

```
Scheson.pushType('type_name', validationFunction[, superSchemaType [, force]]);
Scheson.pushStringFormat('format_name', validationFunction[, force])
Scheson.pushStringFormat('format_name', validationFunction[, force])
```

To use additions and hooks, read the documentation on how the *validationFunctions* should be either for Type and Formats

## To Do

### Now
- probar con jasmine o con yarn, a ver si el problema de webpack persiste
- configure .gitignore
- improve testing structure
- describe each src/*.js
- add to npm repo

### Further
- async variant for remote sources
- enable `$ref` as schema linker
- enable inner cross restrictions. Ex. *number.minimum <= number.maximum*
- allow translations
- create type extensions (separate project) for:
	+ date
	+ duration
- create format extensions (separate project)  for:
	+ xml
	+ json
------------
[1] Content generation, database construction and automatic documentation are others I can imagine.