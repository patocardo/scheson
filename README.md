# Scheson [in progress]

An attempt to have a general json validation over normalized schemas.

Done in javascript without dependencies.

## Description

JSON-schemas (see [link](http://json-schema.org/) ) is a growing standard for using json files to serve the use of other json files.

Among the utilities[1] that JSON-schema can have, *validation* of incoming json data is the most obvious.

## Installation

1. Download */dist/scheson.js*
2. Include in your HTML with `<script>` at HTML or with `require(path_to_scheson).Scheson` in Node scripts


## Usage
+ To check validity of a value againsta an schema
> use `const validation = Scheson.check(js_ob, schema);`, 
> where `js_ob` is the value to check, and `schema` is the object with the standards. 
> `validation.valid` will be *true* if everything is ok, or *false* otherwise
> For more information read [Check documentation](https://github.com/patocardo/scheson/docs/check.md);

+ To add or change a validation for certain type
> `Scheson.pushTypeValidator('type_name', 'validationName', validationFunction [, force])`;
> For more information read [pushTypeValidator documentation](https://github.com/patocardo/scheson/docs/pushtypevalidator.md);

+ To add or change an entire basic type
> `Scheson.pushType('type_name', validationFunction[, superSchemaType [, force]])`;
> For more information read [pushType documentation](https://github.com/patocardo/scheson/docs/pushtype.md);


+ To add or change a string format
> `Scheson.pushStringFormat('format_name', validationFunction[, force]);`
> For more information read [pushStringFormat documentation](https://github.com/patocardo/scheson/docs/pushstringformat.md);


## To Do

### First release
- describe each src/*.js
- enlarge and improve documentation
- enlarge and improve unit tests
- integrate linter and test with 'webpackaging'
- add to npm repo

### Future versions and extensions
- Asynchrone mode:
	- allow loading jsons from Browsers and NodeJs (maybe depending on externals)
	- enable `$ref` as schema linker
- Enable inner cross restrictions. Ex. *number.minimum <= number.maximum*
- Work translations and other i18n (check on standards)
- create type extensions (separate project) for:
	+ date
	+ duration
- create format extensions (separate project)  for:
	+ xml
	+ json
------------
[1] Content generation, database construction and automatic documentation are others I can imagine.