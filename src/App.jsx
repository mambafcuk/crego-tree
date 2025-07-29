import React, { useEffect } from 'react';
import TreeVisualizer from './components/TreeVisualizer';
import Sidebar from './components/SideBar';
import useStore from './store';

export default function App() {
  const { nodes, addNode } = useStore();

  // Automatically add a root Account node on first load
  useEffect(() => {
    if (nodes.length === 0) {
      addNode('account');
    }
  }, [nodes, addNode]);

  return (
    <div className="h-screen w-screen flex">
      <TreeVisualizer />
      <Sidebar />
    </div>
  );
}
