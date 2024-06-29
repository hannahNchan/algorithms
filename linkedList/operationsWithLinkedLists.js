const { SinglyLinkedListNode, SinglyLinkedList} = require("./SinglyLinkedListClass");
const llist = new SinglyLinkedList();

const insertNodeAtPosition = (data, position) => {

    let current_node = llist.head;
    for (let i = 1; i  <  position; i++) {
        current_node = current_node.next;
    }

    current_node.next = {
        data: data,
        next: current_node.next
    }

    //return llist;
}

const deleteNodeAtPosition = (position) => {

    let current_node = llist.head;
    let previous_node = null;

    for (let i = 1; i  <  position; i++) {
        previous_node = current_node;
        current_node = current_node.next;
    }
    previous_node.next = current_node.next;

}

const printList = (llist) => {
    let current_node = llist.head;

    while (current_node != null) {
        console.log(current_node.data)
        current_node = current_node.next;
    }
}

llist.insertNode(1);
llist.insertNode(2);
llist.insertNode(3);
llist.insertNode(4);
llist.insertNode(5);
//insertNodeAtPosition(99, 0);
//printList(llist);
deleteNodeAtPosition(3)
printList(llist);
