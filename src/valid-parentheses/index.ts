function isValid(s: string) {
	const stack: string[] = []
	const parentheses: { [key: string]: string } = {
		')': '(',
		'}': '{',
		']': '[',
	}
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			stack.push(s[i])
		} else {
			if (stack.length === 0) {
				return false
			}
			const top: string = stack.pop() ?? ''
			if (parentheses[s[i]] !== top) {
				return false
			}
		}
	}
	return stack.length === 0
}
console.log(isValid('(){}[]'))
console.log(isValid('{()}'))
console.log(isValid('(}'))
console.log(isValid('[]{[]}'))
