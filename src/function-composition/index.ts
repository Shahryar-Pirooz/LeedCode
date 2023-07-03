type F = (x: number) => number

function compose(functions: F[]): F {
	return functions.reduce(
		(preFN, currFN) => (x) => preFN(currFN(x)),
		(x) => x
	)
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
