function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	return add(l1, l2, 0)

	// helper function that allows us to pass a carried value on recursive calls
	function add(
		l1: ListNode | null,
		l2: ListNode | null,
		carried: number
	): ListNode | null {
		const value1 = (l1 && l1.val) || 0
		const value2 = (l2 && l2.val) || 0
		const sum = value1 + value2 + carried
		const carry = Math.floor(sum / 10)

		if (l1 || l2 || carried) {
			// LeetCode won't allow the creation of a new ListNode instance so return an object
			return {
				val: sum % 10,
				next: add(l1 && l1.next, l2 && l2.next, carry),
			}
		}
		return null
	}
}
