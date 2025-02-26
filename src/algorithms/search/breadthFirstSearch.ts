// Breadth First Search 

// takes in a graph and a starting node
// explores all the nodes at the present depth prior to moving on to the nodes at next depth level

type Graph = {
    nodes: Node[]
}

type Node = {
    value: string;
    neighbors: Node[];
}

export function breadthFirstSearch(graph: Graph, startnode: Node) {
    const visited = new Set<Node>();        //visited node record
    const queue: Node[] = [startnode];      // init queue w starting node

    visited.add(startnode);                 // marks starting point == visited

    while (queue.length > 0) {
        const currentNode = queue.shift();  // remove the first node from the queue
        if (!currentNode) continue;         // skip if no !current node

        console.log(currentNode.value);     // print current node value


        for (const neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);      // unvisited neighbors ==> visited
                queue.push(neighbor);       // new unvisited neighbors ==> queue
            }
        }
    }
}


/// breadth first search SPEEDRUN
/// checking layers, going deeper layer by layer

function breadthFirstSearchSPEED(graph: Graph, startnode: Node) {
    const visited = new Set<Node>();

    const queue: Node[] = [startnode];

    visited.add(startnode);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!currentNode) continue;

        console.log(currentNode.value);

        for (const neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}













// test

// nodes
const nodeA: Node = { value: 'A', neighbors: [] };
const nodeB: Node = { value: 'B', neighbors: [] };
const nodeC: Node = { value: 'C', neighbors: [] };
const nodeD: Node = { value: 'D', neighbors: [] };
const nodeE: Node = { value: 'E', neighbors: [] };

// connections between nodes
nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeA, nodeD, nodeE];
nodeC.neighbors = [nodeA, nodeE];
nodeD.neighbors = [nodeB];
nodeE.neighbors = [nodeB, nodeC];

// graph
const graph: Graph = {
    nodes: [nodeA, nodeB, nodeC, nodeD, nodeE]
};

// test starting from node A
console.log("BFS starting from node A:");
breadthFirstSearch(graph, nodeA);