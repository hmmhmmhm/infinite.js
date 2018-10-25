# infinite.js

node.js 에서 빅인티저 빅데시멀의 쉬운 사용을 돕는 infinite.js

## 라이브러리 소개

```
혹시 큰 숫자나 정밀한 소숫점 숫자의 계산이 필요한데
라이브러리 함수를 코드 상에 도배하고 싶지 않으신가요?

infinite.js는 문법상 큰 변화 없이 큰 숫자와
정밀한 소숫점 숫자 계산을 할 수 있도록 도와줍니다.


Big.js 라이브러리를 통해서 큰 숫자와 정밀한 소숫점 숫자 계산을 구현하며
babel-plugin-overload 라이브러리를 통하여 객체 연산자를 재정의 합니다.

(Big.js https://www.npmjs.com/package/big.js)
(overload https://github.com/foxbenjaminfox/babel-plugin-overload)
```

# Infinite.js 사용예
```js
var Infinite = require('infinite.js')

// 숫자를 문자열로 표기하고 Infinite 함수로 둘러주세요.
// var a = 2314
// var b = 34563463
var a = Infinite('2314')
var b = Infinite('34563463')

// 기본 연산자를 아래처럼 복잡하게 표현하지 않아도 됩니다.
// var c = a.add(b.mul(a).div(b.add(a).minus(a.mod(b))))
var c = a+b*a/b+a-b-(a%b)

// 연산자 계산 외에 객체반환 시엔 객체형의 지정이 필요합니다.
// 지정된 반환 객체형이 없으면 InfiniteObject 객체형으로 반환됩니다.
// console.log(c)
console.log(String(c))

// Number 형으로 큰 숫자나 정밀한 소숫점 숫자를 표기하면
// 정밀도가 상실될 수 있으므로 되도록 문자열 사용을 권장합니다.
// 다만 표기할 값이 Number 표현범위 내에 있다면 숫자 표기도 가능합니다.
// console.log(Number(c))
console.log(String(c))
```

## 사용가능한 연산자 목록
```js
- 수학 연산자: `+`, '-', '*', '/', '%', '**'
- 비교 연산자: `==`, `===`, `!=`, `!==`
- 관계 연산자: `>`, `<`, `>=`, `<=`
```

## 사용할 수 없는 연산자 목록
```js
다음과 같은 연산자를 사용할 수 없습니다.
계산 후 즉시 반환하는 형태의 연산자 재정의는
지원하지 않고 있으므로 주의해주시기 바랍니다.

`+=` `-=`, `*=`, `/=`, `%=`
`>>`, `>>>`, `<<`, `<<<` 
`instanceof`, `in`, `&`, `|`, `^`
```

## 수학함수 사용 예
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
// ** 연산자를 통해 pow 계산도 가능합니다.
// 우측에 오는 값은 Number형만 가능하며
// 다른 객체형을 사용시 Number로 변환후 계산합니다.
Infinite('7') ** 2
Infinite('7') ** '2'
Infinite('7') ** Infinite('2')
```

## 변환함수 사용 예
```js
var Infinite = require('infinite.js')

var n = Infinite('123')

// 문자열로 값을 반환합니다.
n.toString()

// 숫자로 값을 반환합니다.
n.toNumber()

// 첫번째 인자 숫자 값 만큼 길이를 조절합니다.
// 문자열 형태로 값이 반환됩니다.
n.toFixed(5) // 소수점 길이를 5자로 맞춥니다.
n.toPrecision(5) // 전체 길이를 5자로 맞춥니다.
n.toExponential(5) // 지수 길이를 5자로 맞춥니다.

// Big.js 의 객체를 그대로 반환합니다.
n.toBig()
```

# infinite.js 어떻게 설치하나요?

npm 프로젝트 내 babel 의 설치가 반드시 선행되어야 합니다.

- `npm install infinite.js --save` 로 라이브러리를 설치해주세요.
- 프로젝트 폴더 내 `.babelrc` 파일을 복사한 후 붙여넣기 해주세요.


## Babel 세팅을 직접 추가하려면 어떻게 하나요?

이미 사용하고 계신 바벨세팅이 있다면 아래 중 하나를 진행해주시면 됩니다.

- `.babelrc` 에 `{plugins: ["overload"]}` 를 적어주시거나
- `babel-node` 와 같은 CLI환경에선  `--plugins overload` 를 뒤에 붙여주시면 됩니다.

## Babel 을 써본 적이 없는데 어떻게 쓰나요?

infinite.js 를 사용하려면 Babel 라이브러리가 꼭 필요합니다.

라이브러리를 쓰기 위한 바벨 기본세팅은 다음과 같이 진행할 수 있습니다.
- `npm install babel-cli --save`
- package.json 에 다음과 같은 명령어를 추가해주세요.
- `"start": "node ./node_modules/babel-cli/bin/babel-node.js ./index.js"`
- 프로젝트 폴더에 `.babelrc` 파일을 만들고 `{plugins: ["overload"]}` 를 적어주세요.
- 이제 `npm run start` 로 실행 시 연산자 오버라이딩이 적용되어 실행됩니다.

## 저작권
MIT License.