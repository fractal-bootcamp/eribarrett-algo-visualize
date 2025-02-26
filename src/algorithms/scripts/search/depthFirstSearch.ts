// depth first search (DFS) ... graph traversal algorithm

// takes in a graph and a starting node
// explores the neighboring nodes ; chooses one and goes as deep as possible before backtracking
// if a node is reached with no unvisited neighboring nodes, backtrack to the previous node and explore for unvisited neighbors
// repeat the process until all nodes are visited 

type Graph = {
    nodes: Node[],
}

type Node = {
    value: string,
    neighbors: Node[],
}

export function depthFirstSearch(graph: Graph, startnode: Node) {
    const visited = new Set<Node>(); // keep track of visited nodes
    const stack = [startnode]; // inistialize stack with starting node

    while (stack.length > 0) {
        const currentNode = stack.pop();  // pop the last node from the stack

        if (!currentNode) continue; // if the stack is empty, break out of the loop

        if (visited.has(currentNode)) continue; // if the node has already been visited, bypass

        visited.add(currentNode);

        console.log(currentNode.value); // process and keep record of the node

        for (const neighbor of currentNode.neighbors) { // for each neighbor of the current node
            if (!visited.has(neighbor)) { // if the neighbor has not been visited
                stack.push(neighbor); // add the neighbor to the stack
            }
        }
    }

    return visited;


}

// test the DFS function

//define the nodes

const nodeA: Node = { value: 'A', neighbors: [] };
const nodeB: Node = { value: 'B', neighbors: [] };
const nodeC: Node = { value: 'C', neighbors: [] };
const nodeD: Node = { value: 'D', neighbors: [] };
const nodeE: Node = { value: 'E', neighbors: [] };

// set up some connections 
nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeA, nodeD, nodeE];
nodeC.neighbors = [nodeA, nodeE];
nodeD.neighbors = [nodeB];
nodeE.neighbors = [nodeB, nodeC];


// create a graph 
const graph: Graph = {
    nodes: [nodeA, nodeB, nodeC, nodeD, nodeE]
}

// test the DFS function
console.log("DFS starting from node A:");
depthFirstSearch(graph, nodeA);





