class Graph:
    def __init__(self):
        self.nodes = {}

    def  add_node(self, node):
        self.nodes[node] = []
    def add_edge(self, node1, node2):
        self.nodes[node1].append(node2)
        self.nodes[node2].append(node1)
    def remove_edge(self, node1, node2):
        self.nodes[node1].remove(node2)
        self.nodes[node2].remove(node1)
    def remove_node(self, node):
        for n in self.nodes[node]:
            self.remove_edge(node, n)
        del self.nodes[node]
    def get_neighbors(self, node):
        return self.nodes[node]
    

g = Graph()
g.add_node('a')
g.add_node('b')
g.add_node('c')
g.add_node('d')
g.add_node('e')
g.add_edge('a', 'b')
g.add_edge('a', 'c')
g.add_edge('b', 'd')
g.add_edge('c', 'd')
g.remove_node('c')
print(g.get_neighbors('a'))

n = g.nodes
print(n)