const { SinglyLinkedListNode, SinglyLinkedList} = require("./SinglyLinkedListClass");

let list = new SinglyLinkedList();

const insertNodes = () => {
	list.insertNode(16);
	list.insertNode(13);
	list.insertNode(7);
}

const insertNodeAtPosition = (llist, data, position) => {
let current_node = llist;

    for (let i = 1; i < position; i++) {
        current_node = current_node.next;
    }

    current_node.next = {
        data,
        next: current_node.next,
    }

    return llist;

}

insertNodes();
console.log(insertNodeAtPosition(list.head, 99, 2));
