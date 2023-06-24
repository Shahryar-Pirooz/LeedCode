function longestCommonPrefix(strs: string[]): string {
	if (!strs.length) return ''

	const firstStr = strs[0]
	let prefix = ''

	for (let i = 0; i < firstStr.length; i++) {
		const char = firstStr.charAt(i)

		for (let j = 1; j < strs.length; j++) {
			const currStr = strs[j]

			if (i >= currStr.length || currStr.charAt(i) !== char) {
				return prefix
			}
		}

		prefix += char
	}

	return prefix
}

const strs: string[] = ['flower', 'flow', 'flight']

console.log(longestCommonPrefix(strs))
