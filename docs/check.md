# Scheson.check
## Usage

`const valid = Scheson.check(value, schema [, validateSchema])`

Where:
	- **value** is any javascript defined value
	- **schema** is a javascript native object with the rules that *value* has to pass
	- **validateSchema** is an optional argument with boolean value. If it set to true, Scheson will check first if the schema fulfills schema requirements.

## Results 

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
**validation failures**
```
{
	self: [],
	children: {
		born: {
			self: ['bad date format', 'the following properties are required: date, place']
			children: {}
		},
		email: {
			self: ['bad email format'],
			children: {}
	}
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
	self: [],
	children: {
		born: {
			self: [],
			children: {
				place: {
					self: ['bad type, it should be object'],
					children: {}
				}
			}
		}
	}
}
```