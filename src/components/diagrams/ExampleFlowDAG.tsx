import React from 'react';
import './diagrams.css';

/**
 * Example Flow DAG — a small orchestration graph illustrating parallel
 * branches that converge into a judge.
 */

const NODES = {
  prep:    { x: 80,  y: 160, label: 'PREP',     sub: 'normalize' },
  proA:    { x: 240, y: 80,  label: 'AGENT A',  sub: 'pro side' },
  proB:    { x: 240, y: 240, label: 'AGENT B',  sub: 'con side' },
  rebutA:  { x: 400, y: 80,  label: 'REBUT A',  sub: 'rebut' },
  rebutB:  { x: 400, y: 240, label: 'REBUT B',  sub: 'rebut' },
  judge:   { x: 580, y: 160, label: 'JUDGE',    sub: 'verdict' },
};

const EDGES: [keyof typeof NODES, keyof typeof NODES][] = [
  ['prep', 'proA'],
  ['prep', 'proB'],
  ['proA', 'rebutA'],
  ['proB', 'rebutB'],
  ['proA', 'rebutB'],
  ['proB', 'rebutA'],
  ['rebutA', 'judge'],
  ['rebutB', 'judge'],
];

export default function ExampleFlowDAG() {
  const W = 700;
  const H = 340;

  return (
    <div className="cb-diagram cb-diagram--dag">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="example-flow-title">
        <title id="example-flow-title">An example agent flow with parallel branches</title>

        {/* edges */}
        {EDGES.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          return (
            <g key={i}>
              <line x1={A.x + 50} y1={A.y} x2={B.x - 50} y2={B.y} className="cb-dag-edge" />
              <path
                d={`M ${B.x - 56} ${B.y - 4} L ${B.x - 50} ${B.y} L ${B.x - 56} ${B.y + 4}`}
                className="cb-arrowhead"
              />
            </g>
          );
        })}

        {/* nodes */}
        {Object.entries(NODES).map(([id, n]) => (
          <g key={id}>
            <rect x={n.x - 50} y={n.y - 22} width="100" height="44" rx="3" className="cb-box" />
            <text x={n.x} y={n.y - 2} textAnchor="middle" className="cb-box-title">{n.label}</text>
            <text x={n.x} y={n.y + 14} textAnchor="middle" className="cb-box-sub">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
