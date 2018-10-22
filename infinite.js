const Big = require("./big.min.js")

let Infinite = (value) => new InfiniteObject(value)

class InfiniteObject {
	constructor(value) {
		this.value = Big(value)
	}

	[Symbol.for("+")](rightOperand) {
		if (typeof rightOperand.value != "undefined")
			return Infinite(this.value.plus(rightOperand.value))
		return Infinite(this.value.plus(Big(rightOperand)))
	}

	[Symbol.for("-")](rightOperand) {
		if (typeof rightOperand.value != "undefined")
			return Infinite(this.value.minus(rightOperand.value))
		return Infinite(this.value.minus(Big(rightOperand)))
	}

	[Symbol.for("*")](rightOperand) {
		if (typeof rightOperand.value != "undefined")
			return Infinite(this.value.mul(rightOperand.value))
		return Infinite(this.value.mul(Big(rightOperand)))
	}

	[Symbol.for("/")](rightOperand) {
		if (typeof rightOperand.value != "undefined")
			return Infinite(this.value.div(rightOperand.value))
		return Infinite(this.value.div(Big(rightOperand)))
	}

	[Symbol.for("%")](rightOperand) {
		if (typeof rightOperand.value != "undefined")
			return Infinite(this.value.mod(rightOperand.value))
		return Infinite(this.value.mod(Big(rightOperand)))
	}

	[Symbol.for("**")](rightOperand) {
		if (typeof rightOperand.value != "undefined")
			return Infinite(this.value.pow(Big(rightOperand.value)))
		return Infinite(this.value.pow(Big(rightOperand)))
	}

	[Symbol.for("+=")](rightOperand) {
		this.value = rightOperand.plus(this.value)
		return this
	}

	[Symbol.for("-=")](rightOperand) {
		this.value = rightOperand.minus(this.value)
		return this
	}

	[Symbol.for("*=")](rightOperand) {
		this.value = rightOperand.mul(this.value)
		return this
	}

	[Symbol.for("/=")](rightOperand) {
		this.value = rightOperand.div(this.value)
		return this
	}

	[Symbol.for("%=")](rightOperand) {
		this.value = rightOperand.mod(this.value)
		return this
	}

	[Symbol.for("^=")](rightOperand) {
		this.value = rightOperand.pow(Big(this.value))
		return this
	}

	[Symbol.for(">")](rightOperand) {
		return this.value.gt(rightOperand.value)
	}

	[Symbol.for(">=")](rightOperand) {
		return this.value.gte(rightOperand.value)
	}

	[Symbol.for("<")](rightOperand) {
		return this.value.lt(rightOperand.value)
	}

	[Symbol.for("<=")](rightOperand) {
		return this.value.lte(rightOperand.value)
	}

	[Symbol.for("==")](rightOperand) {
		return this.value.eq(rightOperand.value)
	}

	[Symbol.for("!=")](rightOperand) {
		return !this.value.eq(rightOperand.value)
	}

	[Symbol.for("===")](rightOperand) {
		if (typeof rightOperand.value == "undefined") return false
		return this.value.eq(rightOperand.value)
	}

	[Symbol.for("!==")](rightOperand) {
		if (typeof rightOperand.value == "undefined") return false
		return !this.value.eq(rightOperand.value)
	}

	abs() {
		return Infinite(this.value.abs())
	}

	sqrt() {
		return Infinite(this.value.sqrt())
	}

	pow(value) {
		return Infinite(this.value.pow(value))
	}

	times(value) {
		return Infinite(this.value.times(value))
	}

	round(value) {
		return Infinite(this.value.round(value))
	}

	toString() {
		return String(this.value)
	}

	toBig() {
		return Big(this.value)
	}

	toExponential(value) {
		return this.value.toExponential(value)
	}

	toFixed(value) {
		return this.value.toFixed(value)
	}

	toPrecision(value) {
		return this.value.toPrecision(value)
	}
}

module.exports = Infinite