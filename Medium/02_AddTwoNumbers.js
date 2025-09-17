const ListNode = require("../Core/ListNode");
const PrintList = require("../Core/printNodeList");
const ArrayToNodeList = require("../Core/ArrayToNodeList");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function AddTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

// -------------------- TESTS --------------------

PrintList(AddTwoNumbers(ArrayToNodeList([2,4,3]), ArrayToNodeList([5,6,4])));
PrintList(AddTwoNumbers(ArrayToNodeList([0]), ArrayToNodeList([0])));
PrintList(AddTwoNumbers(ArrayToNodeList([9,9,9,9,9,9,9]), ArrayToNodeList([9,9,9,9])));
