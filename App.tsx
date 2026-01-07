import React, { useState } from 'react';
import { ForceGraph } from './components/ForceGraph';
import { DetailsPanel } from './components/DetailsPanel';
import { Legend } from './components/Legend';
import { graphData } from './data';
import { GraphNode } from './types';

const App: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const handleNodeClick = (node: GraphNode | null) => {
    setSelectedNodeId(node ? node.id : null);
  };

  return (
    <div className="relative w-screen h-screen bg-slate-900 overflow-hidden flex flex-col">
      {/* Header / Title */}
      <header className="absolute top-4 left-4 z-10 pointer-events-none select-none">
        <h1 className="text-3xl font-black text-white drop-shadow-lg tracking-tight">
          軟體工程師
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mx-2">
            鄙視鏈
          </span> 
          迷因
        </h1>
        <p className="text-slate-400 text-sm max-w-md mt-1 drop-shadow-md font-medium">
          工程師界的食物鏈視覺化。
          <br/>點擊語言查看是誰在鄙視誰，以及詳細歷史背景。
        </p>
      </header>

      {/* Main Graph Area */}
      <main className="flex-1 w-full h-full">
        <ForceGraph 
          data={graphData} 
          onNodeClick={handleNodeClick}
          selectedNodeId={selectedNodeId}
        />
      </main>

      {/* Overlays */}
      <Legend />
      
      {/* Side Panel (Animate slide in) */}
      <div className={`absolute top-0 left-0 h-full z-20 transition-transform duration-300 ease-in-out ${selectedNodeId ? 'translate-x-0' : '-translate-x-full'}`}>
        <DetailsPanel 
          nodeId={selectedNodeId} 
          data={graphData} 
          onClose={() => setSelectedNodeId(null)} 
        />
      </div>
    </div>
  );
};

export default App;