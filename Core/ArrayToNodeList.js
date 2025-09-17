const ListNode = require("./ListNode");

// Converte um array em lista ligada
function ArrayToNodeList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

module.exports = ArrayToNodeList;