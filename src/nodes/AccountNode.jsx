import React from 'react';
import { Handle } from 'reactflow';

export default function AccountNode({ data }) {
  return (
    <div className="bg-blue-100 border border-blue-400 p-3 rounded-lg" style={{backgroundColor: 'yellow'}}>
      <div className="font-bold text-blue-700">Account</div>
      <div className="text-sm">ID: {data.id}</div>
      <Handle type="source" position="bottom" />
    </div>
  );
}