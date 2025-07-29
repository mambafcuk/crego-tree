import React from 'react';
import useStore from '../store';

export default function Sidebar() {
  const { nodes, edges, selected, addNode, deleteNode } = useStore();
  if (!selected) return null;

  const node = nodes.find(n => n.id === selected);
  const allowed = {
    account: ['loan', 'collateral'],
    loan: ['collateral'],
    collateral: []
  };

  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-white border-l p-4">
      <h2 className="text-lg font-bold mb-4">Details</h2>
      <p>Type: {node.type}</p>
      <p>ID: {node.id}</p>
      <div className="mt-4">
        {allowed[node.type].map(type => (
          <button
            key={type}
            className="block w-full mb-2 p-2 bg-green-200 rounded"
            onClick={() => addNode(type, node.id)}
          >
            Add {type}
          </button>
        ))}
        <button
          className="block w-full p-2 bg-red-200 rounded mt-4"
          onClick={() => deleteNode(node.id)}
        >
          Delete Node
        </button>
      </div>
    </div>
  );
}