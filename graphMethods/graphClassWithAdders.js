class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if(!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    // if vertex is not created then created 2 vertex
    if(!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }

    if(!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  display() {
    for(let vertex in this.adjacentList) {
      console.log(vertex + " -> " + [...this.adjacentList[vertex]]);
    } 
  }

  displayGross() {
    for(let vertex in this.adjacentList) {
      console.log(Array.from(this.adjacentList[vertex]))
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    )
  }

  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if(!this.adjacentList[vertex]) {
      return;
    }
    for(let adjacentVertex in this.adjacentList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacentList[vertex];
  }
}

var grafo = new Graph();
grafo.addVertex('A');
grafo.addVertex('B');
grafo.addVertex('C');

grafo.addEdge('A','B');
grafo.addEdge('B','C');
//grafo.display();
grafo.removeVertex('C');
grafo.display();









