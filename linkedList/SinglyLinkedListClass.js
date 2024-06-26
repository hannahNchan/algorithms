class SinglyLinkedListNode {
  constructor(data){
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

module.exports = {
  SinglyLinkedListNode,
  SinglyLinkedList
};
