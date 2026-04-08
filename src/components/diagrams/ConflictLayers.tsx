import React from 'react';
import './diagrams.css';

/**
 * Conflict Layers — the four-layer dispute-resolution framework.
 * Stack of layers from cheap/structural (isolation) down to expensive/
 * deliberative, with a "conflict funnel" showing how conflicts are
 * caught earlier when possible.
 */

const LAYERS = [
  {
    id: 'isolation',
    name: 'ISOLATION',
    sub: 'separate filesystems · merge requests',
    cost: 'free',
    catches: 'data races',
  },
  {
    id: 'psur',
    name: 'STRUCTURAL (PSUR)',
    sub: 'central protocol for architectural change',
    cost: 'one round-trip',
    catches: 'semantic conflicts',
  },
  {
    id: 'intent',
    name: 'INTENT',
    sub: 'declare before modify · levels L1–L4',
    cost: 'fast lookup',
    catches: 'coordination conflicts',
  },
  {
    id: 'deliberation',
    name: 'DELIBERATION',
    sub: 'voting · feedback · critique · Q&A',
    cost: 'N × LLM calls',
    catches: 'genuine disputes',
  },
];

export default function ConflictLayers() {
  const W = 720;
  const H = 360;
  const padX = 60;
  const padY = 40;
  const rowH = 62;
  const gap = 8;
  const planeW = W - padX * 2 - 20;

  return (
    <div className="cb-diagram cb-diagram--conflict">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="conflict-layers-title">
        <title id="conflict-layers-title">The four-layer conflict management framework</title>

        <text x={padX} y={padY - 12} className="cb-section-label">CHEAP ↑</text>
        <text x={padX} y={H - 12} className="cb-section-label">EXPENSIVE ↓</text>

        {LAYERS.map((l, i) => {
          const y = padY + i * (rowH + gap);
          return (
            <g key={l.id} className="cb-conflict-layer">
              <rect x={padX} y={y} width={planeW} height={rowH} rx="3" className="cb-conflict-rect" />
              <text x={padX + 18} y={y + 22} className="cb-conflict-name">LAYER {i} · {l.name}</text>
              <text x={padX + 18} y={y + 40} className="cb-conflict-sub">{l.sub}</text>
              <text x={padX + 18} y={y + 54} className="cb-conflict-catches">catches: {l.catches}</text>
              <text x={padX + planeW - 18} y={y + 22} textAnchor="end" className="cb-conflict-cost">
                {l.cost}
              </text>
            </g>
          );
        })}

        {/* funnel arrow on the right */}
        <line
          x1={padX + planeW + 10}
          y1={padY + 8}
          x2={padX + planeW + 10}
          y2={padY + LAYERS.length * (rowH + gap) - gap - 8}
          className="cb-flow-line"
        />
        <path
          d={`M ${padX + planeW + 5} ${padY + LAYERS.length * (rowH + gap) - gap - 14} L ${padX + planeW + 10} ${padY + LAYERS.length * (rowH + gap) - gap - 4} L ${padX + planeW + 15} ${padY + LAYERS.length * (rowH + gap) - gap - 14}`}
          className="cb-arrowhead"
        />
      </svg>
    </div>
  );
}
