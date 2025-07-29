import React from 'react';
import { Handle } from 'reactflow';

export default function CollateralNode({ data }) {
  return (
    <div className="bg-yellow-100 border border-yellow-400 p-3 rounded-lg"style={{backgroundColor: 'yellowgreen', shapeMargin:'50px'}}>
      <div className="font-bold text-yellow-700">Collateral</div>
      <div className="text-sm">ID: {data.id}</div>
      <Handle type="target" position="top" />
    </div>
  );
}