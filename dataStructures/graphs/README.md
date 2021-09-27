## Big O

Adjacency matrix:
  time: O(V^2)
  space: O(V^2)
  add vertex: O(V^2)
  add edge: O(1)
  remove vertex: O(V^2)
  remove edge: O(1)
  query: O(1)
  storage: O(V^2)

adjacency list:
    time: O(V + E)
    space: O(V + E)
    add vertex: O(1)
    add edge: O(1)
    remove vertex: O(V + E)
    remove edge: O(E)
    query: O(V + E)
    storage: O(V + E)

adjacency list vs adjacency matrix:
  adjacency matrix:
    - takes more space
    - slower to iterate over all edges
    - faster lookup of specific edges
 adjacency list:
    - takes less space
    - faster to iterate over all edges
    - slower lookup of specific edges

