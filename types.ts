import * as d3 from 'd3';

export type NodeCategory = 
  | 'ivory' 
  | 'system' 
  | 'modern' 
  | 'enterprise' 
  | 'scripting' 
  | 'web' 
  | 'data' 
  | 'legacy' 
  | 'bottom'
  | 'oldacademic';

export interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  description: string;       // Short tagline (Sub-label)
  detailedDescription: string; // New field for history/context
  category: NodeCategory;
  // d3 specific properties
  x?: number;
  y?: number;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  insult: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export const CATEGORY_COLORS: Record<NodeCategory, string> = {
  ivory: '#e0aaff',      // Light Purple
  oldacademic: '#ef4444', // Red-500
  system: '#c0392b',     // Dark Red
  modern: '#e67e22',     // Orange
  enterprise: '#2980b9', // Blue
  scripting: '#f1c40f',  // Yellow
  web: '#27ae60',        // Green
  data: '#8e44ad',       // Purple
  legacy: '#95a5a6',     // Gray
  bottom: '#7f8c8d',     // Dark Gray
};

export const CATEGORY_LABELS: Record<NodeCategory, string> = {
  ivory: '學術象牙塔 (Ivory Tower)',
  oldacademic: '上古學院派 (Old Academic)',
  system: '系統程式設計 (System)',
  modern: '現代文青/新興 (Modern)',
  enterprise: '企業級社畜 (Enterprise)',
  scripting: '腳本與膠水 (Scripting)',
  web: '前端與網頁 (Web)',
  data: '數據科學與數學 (Data)',
  legacy: '傳奇遺跡 (Legacy)',
  bottom: '底層/非工程師 (The Bottom)',
};