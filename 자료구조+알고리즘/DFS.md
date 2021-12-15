#DFS

> **깊이 우선 탐색** : 정점의 자식 노드를 먼저 탐색

- 재귀함수 사용!

```js
function DFS(graph, node, visited) {
  visited[node] = true;

  result.push(node);

  for (i of graph[node]) {
    if (!visited[i]) {
      DFS(graph, i, visited);
    }
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
let visited = Array(graph.length + 1).fill(false);
let result = [];

DFS(graph, 1, visited);
console.log(result.join(" -> "));
```
