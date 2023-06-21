function isPalindrome(x: number): boolean {
	return (x + '').split('').map(Number).reverse().join('') === x.toString()
}

console.log(isPalindrome(121))
