const { SinglyLinkedListNode, SinglyLinkedList } = require("./SinglyLinkedListClass");

let list = new SinglyLinkedList();

const insertNodes = () => {
	list.insertNode(10);
	list.insertNode(20);
	list.insertNode(40);
	list.insertNode(30);
}

const insertNodeAtPosition = (llist, data, position) => {

	insertNodes();
	console.log(list.head.data); // 10
	console.log(list.head.next.data); // 20
	console.log(list.head.next.next.data); // 30
	console.log(list.head.next.next.next.data); // 40
	console.log(list.size); // 4

}

insertNodeAtPosition();
