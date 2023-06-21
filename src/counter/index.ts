function createCounter(n: number): () => number {
	return () => n++
}

const counter = createCounter(10)
counter()
counter()
counter()


console.log(counter())
