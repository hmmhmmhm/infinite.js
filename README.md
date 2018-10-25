# infinite.js

infinite.js helps the easy use of big integer and big decimal in node.js

[한국어 문서는 요깄어영](https://github.com/hmmhmmhm/infinite.js/README.KR.md)

## Introducion

```
Do you want to avoid using library functions in code
When you need to calculate a large number and accurate numbers?

infinite.js helps you calculate large numbers and
precise decimal numbers without major grammatical changes.


Implement large numbers and precise decimal
number calculations using the Big.js library.

And override object operators through the
bable-plugin-overload library.

(Big.js https://www.npmjs.com/package/big.js)
(overload https://github.com/foxbenjaminfox/babel-plugin-overload)
```

# Infinite.js Example
```js
var Infinite = require('infinite.js')

// Please mark the number as a string
// And enclose it as an Infinity function.
// var a = 2314
// var b = 34563463
var a = Infinite('2314')
var b = Infinite('34563463')

// You do not need to express the
// default operator as complex as shown below.
// var c = a.add(b.mul(a).div(b.add(a).minus(a.mod(b))))
var c = a+b*a/b+a-b-(a%b)

// Object-type designation is required
// When returning objects, not operator calculation.
// If no return object type is specified,
// It is returned as an InfiniteObject object.
// console.log(c)
console.log(String(c))

// It is recommended to use a string to
// indicate large or precise decimal number
// as a number type can result in loss of precision.
// However, if the value to be displayed is within the
// range of Number expression, you can also display the number.
// console.log(Number(c))
console.log(String(c))
```

## List of available operators
```js
- Arithmetic operators: `+`, '-', '*', '/', '%', '**'
- Equality operators: `==`, `===`, `!=`, `!==`
- Inequality operators: `>`, `<`, `>=`, `<=`
```

## List of not available operators
```
It doesn't support operator overrides in the
form of immediate return after calculation,
so please be careful.

The following operators are not available.
`+=` `-=`, `*=`, `/=`, `%=`
`>>`, `>>>`, `<<`, `<<<` 
`instanceof`, `in`, `&`, `|`, `^`
```

## Example of using math function
```js
var Infinite = require('infinite.js')

// Math.abs(-1234)
Infinite('-1234').abs()

// Math.sqrt(9)
Infinite('9').sqrt()

// Math.round(31.6)
Infinite('31.6').round()

// Math.floor(31.9)
Infinite('31.9').floor()

// Math.ceil(31.2)
Infinite('31.2').ceil()

// Math.pow(7, 2)
Infinite('7').pow('2')

// Math.pow(7, 2)
// can also calculate power through ** operators.
// Values on the right can only available be number type
// If using another object type, it calculated after converting to Number.
Infinite('7') ** 2 // Good
Infinite('7') ** '2' // Ok
Infinite('7') ** Infinite('2') // Ooook..
```

## Example of using transform function
```js
var Infinite = require('infinite.js')

var n = Infinite('123')

// Returns the value as a string.
n.toString()

// Returns a value as a number.
n.toNumber()

// Adjust the length by the first argument number value.
// Returns the value as a string.
n.toFixed(5) // Set the decimal point length to 5 characters.
n.toPrecision(5) // Align the entire length with 5 characters.
n.toExponential(5) // Sets the length of the index to 5 characters.

// Returns the object of Big.js as it is.
n.toBig()
```

# infinite.js How do I install it?

Installation of the babel in the npm project must precede.

- Please install library using `npm install infinite.js --save` 
- Please copy and paste the 'babelrc' file. (It exist in project folder)


## How do I add my own Babel settings?

If you already have a babel setting, please proceed to one of the following.

- Write `{plugins: "overload"}` on `.babelrc`
- In a CLI environment, such as `babel-node`, you can attach `--plugins overload` to the back.

## I've never used a Babel. How can I use it?

to use infinite.js, the Babel library is must be required.

You can follow these basic settings for writing libraries.
- `npm install babel-cli --save`
- Please add the following command to the package.json.
- `"start": "node ./node_modules/babel-cli/bin/babel-node.js ./index.js"`
- In the project folder, Create a file called '.babelrc' and write '{plugins: ["overload"]} in it.
- Now operator override is applied when executing `npm run start`

## License
MIT License.