# Baekjoon : DFSμ BFS

## Problem URL

https://www.acmicpc.net/problem/1260

<br/>

## π© Solution

```js
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

// BFS, DFS ν¨μ
function BFS(graph, start, visited) {
  let toVisit = new Queue();
  toVisit.enqueue(start);

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
}

function DFS(graph, node, visited) {
  visited[node] = true;

  result.push(node);

  for (i of graph[node]) {
    if (!visited[i]) {
      DFS(graph, i, visited);
    }
  }
}

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [condition, ...nodes] = input;
const [len, edges, start] = condition.split(" ").map((x) => Number(x));
// graph λΈλ μ λ³΄λ₯Ό λ΄μ μ΄μ°¨μ λ°°μ΄ μμ±
let graph = Array.from(Array(len + 1), () => new Array());
for (node of nodes) {
  const [v, w] = node.split(" ").map((x) => Number(x));
  graph[v].push(w);
  graph[w].push(v);
}
// μ«μκ° μμ λΈλλΆν° νμνλλ‘ graph μ λ ¬
graph.map((x) => x.sort((a, b) => a - b));

let visited = Array(len + 1).fill(false);
let result = [];
DFS(graph, start, visited);
console.log(result.join(" "));

visited = Array(len + 1).fill(false);
result = [];
BFS(graph, start, visited);
console.log(result.join(" "));
```
