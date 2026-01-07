import React from 'react';
import { CATEGORY_COLORS, CATEGORY_LABELS, NodeCategory } from '../types';

export const Legend: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl max-w-xs max-h-[50vh] overflow-y-auto hidden md:block">
      <h3 className="text-slate-200 font-bold mb-3 text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
        派系分類
      </h3>
      <div className="space-y-2">
        {(Object.keys(CATEGORY_COLORS) as NodeCategory[]).map((category) => (
          <div key={category} className="flex items-center gap-3">
            <span 
              className="w-3 h-3 rounded-full shadow-sm" 
              style={{ backgroundColor: CATEGORY_COLORS[category] }} 
            />
            <span className="text-xs text-slate-300 font-medium">
              {CATEGORY_LABELS[category]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};