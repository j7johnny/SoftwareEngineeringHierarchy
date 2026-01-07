import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { GraphData, GraphNode, GraphLink, CATEGORY_COLORS } from '../types';

interface ForceGraphProps {
  data: GraphData;
  onNodeClick: (node: GraphNode | null) => void;
  selectedNodeId: string | null;
}

export const ForceGraph: React.FC<ForceGraphProps> = ({ data, onNodeClick, selectedNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const { width, height } = dimensions;
    const svg = d3.select(svgRef.current);

    // Clear previous render
    svg.selectAll('*').remove();

    // Create container group for zooming
    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.2, 5])
        .on('zoom', (event) => g.attr('transform', event.transform));
    
    svg.call(zoom);

    // Define Arrow Marker
    svg.append('defs').selectAll('marker')
      .data(['end'])
      .enter().append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 28) // Pushed further back to accommodate larger nodes/stroke
      .attr('refY', 0)
      .attr('markerWidth', 8) // Bigger arrow
      .attr('markerHeight', 8)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#ef4444'); // Red color for aggression

    // Deep copy data
    const nodes = data.nodes.map(d => ({ ...d }));
    const links = data.links.map(d => ({ ...d }));

    // Simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(250)) // Increased distance for text
      .force('charge', d3.forceManyBody().strength(-800)) // Stronger repulsion
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(60));

    // Link Group
    const linkGroup = g.append('g').attr('class', 'links');

    // Links (Visual line)
    const link = linkGroup
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke-width', 2)
      .attr('stroke', '#475569') // Slate 600
      .attr('opacity', 0.5)
      .attr('marker-end', 'url(#arrow)');

    // Link Text (Insults on graph)
    const linkText = linkGroup
      .selectAll('g.link-text')
      .data(links)
      .enter().append('g')
      .attr('class', 'link-text');

    // Background rect for text readability
    linkText.append('rect')
      .attr('rx', 4)
      .attr('ry', 4)
      .attr('fill', '#0f172a') // Dark background matches body
      .attr('fill-opacity', 0.8)
      .attr('stroke', '#334155')
      .attr('stroke-width', 0.5);

    // The text itself
    linkText.append('text')
      .text(d => d.insult)
      .attr('font-size', '10px')
      .attr('fill', '#94a3b8') // Slate 400
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('pointer-events', 'none'); // Let clicks pass through to link hit area

    // Link Hit Area (Invisible thicker line for clicking)
    const linkHitArea = linkGroup
        .selectAll('line.hit-area')
        .data(links)
        .enter().append('line')
        .attr('class', 'hit-area')
        .attr('stroke-width', 20)
        .attr('stroke', 'transparent')
        .attr('cursor', 'pointer')
        .on('click', (event, d) => {
             // Future interaction
        })
        .append('title')
        .text(d => `${(d.source as any).label} → ${(d.target as any).label}: ${d.insult}`);


    // Node Group
    const nodeGroup = g.append('g').attr('class', 'nodes');

    const node = nodeGroup
      .selectAll('g')
      .data(nodes)
      .enter().append('g')
      .attr('cursor', 'grab')
      .call(d3.drag<SVGGElement, GraphNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any
      );

    // Node Circles
    node.append('circle')
      .attr('r', 20)
      .attr('fill', d => CATEGORY_COLORS[d.category])
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('class', 'transition-all duration-300')
      .on('click', (event, d) => {
        event.stopPropagation();
        onNodeClick(d);
      });

    // Node Labels
    node.append('text')
      .text(d => d.label)
      .attr('x', 24)
      .attr('y', 6)
      .attr('font-size', '14px')
      .attr('fill', '#f1f5f9') // Slate 100
      .attr('font-weight', 'bold')
      .style('pointer-events', 'none')
      .style('text-shadow', '2px 2px 4px #000');

    // Ticks
    simulation.on('tick', () => {
      // Update link positions
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      linkHitArea
          .attr('x1', (d: any) => d.source.x)
          .attr('y1', (d: any) => d.source.y)
          .attr('x2', (d: any) => d.target.x)
          .attr('y2', (d: any) => d.target.y);

      // Update Link Text positions (midpoint)
      linkText.attr('transform', (d: any) => {
        const x = (d.source.x + d.target.x) / 2;
        const y = (d.source.y + d.target.y) / 2;
        // Simple angle calculation to keep text upright-ish could go here, 
        // but simple midpoint is more readable for crowded graphs
        return `translate(${x},${y})`;
      });

      // Update background rect size based on text
      linkText.each(function(d) {
        // @ts-ignore
        const bbox = this.querySelector('text').getBBox();
        d3.select(this).select('rect')
          .attr('x', bbox.x - 4)
          .attr('y', bbox.y - 2)
          .attr('width', bbox.width + 8)
          .attr('height', bbox.height + 4);
      });

      // Update node positions
      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Background Click
    svg.on('click', () => {
      onNodeClick(null);
    });

    // Drag Functions
    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Highlighting selected node
    if (selectedNodeId) {
       node.select('circle')
        .attr('stroke', (d: any) => d.id === selectedNodeId ? '#ffff00' : '#fff')
        .attr('stroke-width', (d: any) => d.id === selectedNodeId ? 4 : 2);
    }

    return () => {
      simulation.stop();
    };
  }, [data, dimensions, onNodeClick, selectedNodeId]);

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-900 overflow-hidden relative">
      <svg ref={svgRef} width="100%" height="100%" className="block touch-none" />
      <div className="absolute bottom-4 right-4 text-slate-500 text-xs select-none pointer-events-none text-right">
        拖曳節點可重新排列 • 滾動滑鼠縮放 <br/> 點擊節點查看詳細恩怨情仇
      </div>
    </div>
  );
};