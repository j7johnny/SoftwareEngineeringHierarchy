import React from 'react';
import { GraphData, GraphNode, CATEGORY_COLORS, CATEGORY_LABELS } from '../types';

interface DetailsPanelProps {
  nodeId: string | null;
  data: GraphData;
  onClose: () => void;
}

export const DetailsPanel: React.FC<DetailsPanelProps> = ({ nodeId, data, onClose }) => {
  if (!nodeId) return null;

  const node = data.nodes.find(n => n.id === nodeId);
  if (!node) return null;

  // Find relationships
  const outgoing = data.links.filter(l => 
    (typeof l.source === 'object' ? l.source.id : l.source) === nodeId
  );
  const incoming = data.links.filter(l => 
    (typeof l.target === 'object' ? l.target.id : l.target) === nodeId
  );

  return (
    <div className="absolute top-0 left-0 w-80 h-full bg-slate-900/95 backdrop-blur border-r border-slate-700 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col z-20 overflow-hidden">
      
      {/* Header */}
      <div 
        className="p-6 pb-4 border-b border-slate-700 shrink-0"
        style={{ borderTop: `4px solid ${CATEGORY_COLORS[node.category]}` }}
      >
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-white">{node.label}</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="inline-block px-2 py-1 rounded text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-600 mb-2">
          {CATEGORY_LABELS[node.category]}
        </div>
        <p className="text-sm font-medium text-slate-200">
          "{node.description}"
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Description */}
        <div className="bg-slate-800/30 p-3 rounded-lg border border-slate-700/30">
          <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
            背景與歷史
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {node.detailedDescription}
          </p>
        </div>

        {/* Outgoing (Looking Down On) */}
        <div>
          <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center">
            <span className="mr-2">▼</span> 鄙視鏈下游 (Looks Down On)
          </h3>
          {outgoing.length === 0 ? (
            <p className="text-slate-500 text-sm italic">非常謙虛 (或邊緣到沒人理)。</p>
          ) : (
            <ul className="space-y-3">
              {outgoing.map((link, idx) => {
                const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                const targetNode = data.nodes.find(n => n.id === targetId);
                return (
                  <li key={idx} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-400">對象:</span>
                      <span className="text-sm font-bold text-white" style={{ color: targetNode ? CATEGORY_COLORS[targetNode.category] : 'white' }}>
                        {targetNode?.label || targetId}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200">"{link.insult}"</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Incoming (Looked Down Upon By) */}
        <div>
          <h3 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3 flex items-center">
            <span className="mr-2">▲</span> 鄙視鏈上游 (Judged By)
          </h3>
          {incoming.length === 0 ? (
            <p className="text-slate-500 text-sm italic">處於食物鏈頂端 (或被遺忘)。</p>
          ) : (
            <ul className="space-y-3">
              {incoming.map((link, idx) => {
                const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                const sourceNode = data.nodes.find(n => n.id === sourceId);
                return (
                  <li key={idx} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 opacity-75 hover:opacity-100 transition-opacity">
                     <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-400">來自:</span>
                      <span className="text-sm font-bold text-white" style={{ color: sourceNode ? CATEGORY_COLORS[sourceNode.category] : 'white' }}>
                        {sourceNode?.label || sourceId}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 italic">"{link.insult}"</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};