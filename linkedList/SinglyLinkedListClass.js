class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNode(nodeData) {
    let node = new Node(nodeData, null);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      console.log(current)
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;

    }
    this.size++;
  }

}

module.exports = {
  Node,
  SinglyLinkedList
};

