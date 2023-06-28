type ReturnObj = {
	increment: () => number
	decrement: () => number
	reset: () => number
}

function createCounter(init: number): ReturnObj {
	const initial = init
	return {
		increment: (): number => {
			return ++init
		},
		decrement: (): number => {
			return --init
		},
		reset: (): number => {
			init = initial
			return initial
		},
	}
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
