import React from 'react';
import './diagrams.css';

/**
 * Capability Stack — the four-layer Agent Blocks architecture.
 * Shows Layers 1-4 stacked, with the agent loop on the left tapping in
 * through environment APIs.
 */

const LAYERS = [
  {
    n: 4,
    name: 'CAPABILITY CONFIGS',
    sub: 'declarative · yaml · xlsx · md',
    example: 'endpoints.xlsx  ·  deploy.yaml',
  },
  {
    n: 3,
    name: 'CAPABILITY EXECUTORS',
    sub: 'generic engines · parse config → act',
    example: 'skill-exec  ·  api-gen-exec  ·  deploy-exec',
  },
  {
    n: 2,
    name: 'ACTION BLOCKS',
    sub: 'typed I/O · lifecycle · env APIs',
    example: 'deploy  ·  migrate  ·  scaffold',
  },
  {
    n: 1,
    name: 'SIDE EXECUTION',
    sub: 'parallel to loop · non-blocking',
    example: 'bg-build  ·  watcher  ·  indexer',
  },
];

export default function CapabilityStack() {
  const W = 760;
  const H = 360;
  const agentX = 40;
  const agentW = 130;
  const stackX = 220;
  const stackW = W - stackX - 40;
  const padY = 30;
  const rowH = 64;
  const gap = 8;

  return (
    <div className="cb-diagram cb-diagram--capstack">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="cap-stack-title">
        <title id="cap-stack-title">The four-layer capability stack</title>

        {/* agent loop on the left */}
        <rect
          x={agentX}
          y={padY + 40}
          width={agentW}
          height={LAYERS.length * (rowH + gap) - gap - 80}
          rx="3"
          className="cb-box"
        />
        <text
          x={agentX + agentW / 2}
          y={padY + 70}
          textAnchor="middle"
          className="cb-box-title"
        >
          AGENT LOOP
        </text>
        <text
          x={agentX + agentW / 2}
          y={padY + 88}
          textAnchor="middle"
          className="cb-box-sub"
        >
          unchanged
        </text>
        <text
          x={agentX + agentW / 2}
          y={padY + 104}
          textAnchor="middle"
          className="cb-box-sub"
        >
          extends via
        </text>
        <text
          x={agentX + agentW / 2}
          y={padY + 118}
          textAnchor="middle"
          className="cb-box-sub"
        >
          env APIs
        </text>

        {/* env API connector label */}
        <text
          x={agentX + agentW + 10}
          y={padY + 30}
          className="cb-axis-label"
        >
          ENVIRONMENT API
        </text>
        <line
          x1={agentX + agentW + 8}
          y1={padY + 36}
          x2={stackX - 4}
          y2={padY + 36}
          className="cb-flow-line"
        />

        {/* the stack (top = L4, bottom = L1) */}
        {LAYERS.map((l, i) => {
          const y = padY + 50 + i * (rowH + gap);
          return (
            <g key={l.n} className="cb-capstack-layer">
              <rect x={stackX} y={y} width={stackW} height={rowH} rx="3" className="cb-capstack-rect" />
              <text x={stackX + 18} y={y + 20} className="cb-capstack-tier">LAYER {l.n}</text>
              <text x={stackX + 18} y={y + 38} className="cb-capstack-name">{l.name}</text>
              <text x={stackX + 18} y={y + 54} className="cb-capstack-sub">{l.sub}</text>
              <text x={stackX + stackW - 18} y={y + 20} textAnchor="end" className="cb-capstack-example">
                {l.example}
              </text>

              {/* connector from agent to this layer */}
              <line
                x1={agentX + agentW}
                y1={padY + 120}
                x2={stackX}
                y2={y + rowH / 2}
                className="cb-capstack-wire"
              />
            </g>
          );
        })}

        {/* abstraction axis on the far right */}
        <text x={W - 10} y={padY + 50} textAnchor="end" className="cb-section-label">
          ↑ DECLARATIVE
        </text>
        <text x={W - 10} y={H - 14} textAnchor="end" className="cb-section-label">
          ↓ LOW-LEVEL
        </text>
      </svg>
    </div>
  );
}
