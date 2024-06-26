class SinglyLinkedListNode {
	constructor(data) {
	  this.data = data;
	  this.next = null;
	}
  }
  
  class SinglyLinkedList {
	constructor() {
	  this.head = null;
	  this.tail = null;
	}
  
	insertNode(dataNode) {
	  const node = new SinglyLinkedListNode(dataNode);
  
	  if (this.head == null) {
		this.head = node;
	  } else {
		this.tail.next = node;
	  }
  
	  this.tail = node;
	}
  }
  
  const insertNodeAtPosition = (llist, data, position) => {
	const newNode = new SinglyLinkedListNode(data);
  
	if (position === 0) {
	  newNode.next = llist;
	  return newNode;
	}
  
	let currentNode = llist;
	let previousNode = null;
	let pos = 0;
  
	while (currentNode !== null && pos < position) {
	  previousNode = currentNode;
	  currentNode = currentNode.next;
	  pos++;
	}
  
	newNode.next = currentNode;
	if (previousNode !== null) {
	  previousNode.next = newNode;
	}
  
	return llist;
  }
  
  // Ejemplo de uso
  const list = new SinglyLinkedList();
  list.insertNode(16);
  list.insertNode(13);
  list.insertNode(7);
  
  const updatedList = insertNodeAtPosition(list.head, 1, 2);
  
  // Función para imprimir la lista desde un nodo dado
  const printListFromNode = (head) => {
	let currentNode = head;
	while (currentNode !== null) {
	  console.log(currentNode.data);
	  currentNode = currentNode.next;
	}
  }
  
  // Imprimir la lista actualizada
  printListFromNode(updatedList); // Output: 16 13 1 7
  