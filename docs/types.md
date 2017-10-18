#Scheson.types

Types are the data-types that Scheson recognizes as a category of data that can be checked against an schema.

By default, Scheson is capable for check the following types, against their listed characteristics

1. Null
	- type checker
2. Boolean
	- type checker
3. Number
	- type checker
	- required [1]
	- minimum
	- minimumExclusive
	- maximum
	- maximumExclusive
	- multipleOf
4. String
	- type checker
	- required [1]
	- minLength
	- maxLength
	- pattern
	- format [2]
5. Array
	- type checker
	- required [1]
	- minItems
	- maxItems
	- items [3]
	- uniqueItems [3]
	- additionalItems [3]
6. Object
	- type checker
	- required [1]
	- properties [4]
	- additionalProperties [4]

## Required characteristics
Schemas of all types that accept caracteristics, can be setted to require some of them