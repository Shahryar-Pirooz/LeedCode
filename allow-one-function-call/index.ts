type Fnt = (...args: any[]) => any

function once(fn: Fnt): Fnt {
	let called = false
	let result: any
	return function (...args) {
		if (!called) {
			called = true
			result = fn(...args)
			return result
		}
		return undefined
	}
}

const fn = (a: number, b: number, c: number) => a + b + c
const onceFn = once(fn)
console.log('onceFn(1, 2, 3) ', onceFn(1, 2, 3)) // 6
console.log('onceFn(2, 3, 6)', onceFn(2, 3, 6)) // returns undefined without calling fn
