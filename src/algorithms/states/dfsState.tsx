import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { depthFirstSearch } from '../scripts/search/depthFirstSearch';

export type Node = {
    value: string;
    neighbors: Node[];
    x?: number;
    y?: number;
}

export type Graph = {
    nodes: Node[];
}

export interface DFSState {
    visited: Set<Node>;
    current: Node;
    stack: Node[];
}

export interface GraphVizProps {
    graph: Graph;
    startNode: Node;
}

export const GraphVis: React.FC<GraphVizProps> = ({ graph, startNode }) => {
    const [dfsState, setDfsState] = useState<DFSState | null>(null);

    useEffect(() => {
        const visited = depthFirstSearch(graph, startNode);
        setDfsState({
            visited,
            current: startNode,
            stack: [startNode]
        });
    }, [graph, startNode]);

    return (
        <div className="graph-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
            {graph.nodes.map((node) => {
                // Determine the state of the node based on DFS progress
                const isVisited = dfsState?.visited.has(node);
                const isCurrent = dfsState?.current === node;
                const isInStack = dfsState?.stack.includes(node);

                let backgroundColor = 'gray';
                if (isCurrent) {
                    backgroundColor = 'red';
                } else if (isVisited) {
                    backgroundColor = 'green';
                } else if (isInStack) {
                    backgroundColor = 'yellow';
                }

                return (
                    <motion.div
                        key={node.value}
                        animate={{ backgroundColor }}
                        transition={{ duration: 0.5 }}
                        className="node"
                        style={{
                            position: 'absolute',
                            left: node.x ?? 0,
                            top: node.y ?? 0,
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid black'
                        }}
                    >
                        {node.value}
                    </motion.div>
                );
            })}
        </div>
    );
}

