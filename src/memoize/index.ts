type Func = (...params: any) => any

function memoize(func: Func): Func {
	const cacheObject: { [key: string]: any } = {}
	return function (...args) {
		const key = JSON.stringify(args)
		if (key in cacheObject) {
			return cacheObject[key]
		} else {
			const functionOutput = func(...args)
			cacheObject[key] = functionOutput
			return functionOutput
		}
	}
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
