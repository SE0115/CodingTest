# BFS

> **너비 우선 탐색** : 정점과 같은 레벨에 있는 형제 노드들 먼저 탐색

- 자료구조 큐 사용!

```js
function BFS(graph, start) {
  let visited = Array(graph.length + 1).fill(false);
  let toVisit = new Queue();
  toVisit.enqueue(start);

  let result = [];
  while (toVisit.size()) {
    let node = toVisit.dequeue();
    if (!visited[node]) {
      result.push(node);
      visited[node] = true;

      for (i of graph[node]) {
        if (!visited[i]) {
          toVisit.enqueue(i);
        }
      }
    }
  }
  return result.join(" -> ");
}

class Queue {
  constructor() {
    this.items = {};
    this.head = 1;
    this.tail = 1;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    if (this.tail === 0) return undefined;
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  size() {
    return this.tail - this.head;
  }
}

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

console.log(BFS(graph, 1));
// 1 -> 2 -> 3 -> 8 -> 7 -> 4 -> 5 -> 6
```
