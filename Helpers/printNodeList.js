// Função para imprimir lista ligada em formato "a -> b -> c"
function printNodeList(node) {
    let str = "";
    while (node) {
        str += node.val;
        if (node.next) str += " -> ";
        node = node.next;
    }
    console.log(str);
}

module.exports = printNodeList;