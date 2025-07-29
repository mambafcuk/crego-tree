import React from 'react';
import { Handle } from 'reactflow';

export default function LoanNode({ data }) {
  return (
    <div className="bg-green-100 border border-green-400 p-3 rounded-lg" style={{backgroundColor: 'blue'}}>
      <div className="font-bold text-green-700">Loan</div>
      <div className="text-sm">ID: {data.id}</div>
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
}