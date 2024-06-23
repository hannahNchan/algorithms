const { SinglyLinkedListNode, SinglyLinkedList } = require("./SinglyLinkedListClass");
	
const linList = new SinglyLinkedList();

const insertNodes = () => {
	linList.insertNode(16);
	linList.insertNode(13);
	linList.insertNode(7);
}

const insertNodeAtPosition = (llist, data, position) => {
	insertNodes();
  let currentNode = linList.head;
	while (currentNode !== null) {
		console.log(currentNode.data);
		currentNode = currentNode.next;
	}
}

const llist = [16, 13, 7];
const data = 1;
const position = 2;

insertNodeAtPosition(llist, data, position);
