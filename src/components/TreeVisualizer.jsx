import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, ReactFlowProvider, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import useStore from '../store';
import { getLayoutedElements } from '../utils/Layout';
import AccountNode from '../nodes/AccountNode';
import LoanNode from '../nodes/LoanNode';
import CollateralNode from '../nodes/CollateralNode';

const nodeTypes = {
  account: AccountNode,
  loan: LoanNode,
  collateral: CollateralNode,
};

export default function TreeVisualizer(props) {
  const { nodes, edges, selected, selectNode } = useStore();
  const [rfNodes, setRfNodes] = useState([]);
  const [rfEdges, setRfEdges] = useState([]);

  useEffect(() => {
    const layout = getLayoutedElements(nodes, edges);
    setRfNodes(layout.nodes);
    setRfEdges(layout.edges);
  }, [nodes, edges]);

  const onNodeClick = useCallback((event, node) => {
    selectNode(node.id);
  }, []);

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        {...props}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  );
}