THe usage of the package is simple you only have to install anf require it and then you the method it gives of verifying then pass the sample url 

An Example Demo of how its used

const validate = require('url-validator')
const isValid = validate.verify("Hello World")//returns false if the ulr is not valid or true if its valid

console.log(isValid) // false

const isValid = validate.verify("https://www.npmjs.com/package/url-validator12")//returns false if the ulr is not valid or true if its valid

console.log(isValid) // true