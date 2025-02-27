import React from 'react';
import { GraphVis } from '../states/dfsState';

// Import Node and Graph types directly from the search script since they're not exported from dfsState
import type { Node, Graph } from '../scripts/search/depthFirstSearch';

export default function App() {
    // Example: Position nodes randomly for demo purposes
    const nodeA: Node = { value: 'A', neighbors: [], x: 50, y: 50 };
    const nodeB: Node = { value: 'B', neighbors: [], x: 200, y: 100 };
    const nodeC: Node = { value: 'C', neighbors: [], x: 350, y: 50 };
    const nodeD: Node = { value: 'D', neighbors: [], x: 200, y: 200 };
    const nodeE: Node = { value: 'E', neighbors: [], x: 100, y: 250 };

    nodeA.neighbors = [nodeB, nodeC];
    nodeB.neighbors = [nodeA, nodeD, nodeE];
    nodeC.neighbors = [nodeA, nodeE];
    nodeD.neighbors = [nodeB];
    nodeE.neighbors = [nodeB, nodeC];

    const graph: Graph = {
        nodes: [nodeA, nodeB, nodeC, nodeD, nodeE],
    };

    return (
        <div>
            <h1>DFS Visualization</h1>
            <GraphVis graph={graph} startNode={nodeA} />
        </div>
    );
}

/**
 * ==============   Styles   ================
 */

