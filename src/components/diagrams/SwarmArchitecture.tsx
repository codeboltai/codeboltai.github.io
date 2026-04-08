import React from 'react';
import './diagrams.css';

/**
 * Swarm Architecture — the four-layer stack of a StigmergySwarm.
 * Governance (top) · Coordination · Agent Swarm · Environment (bottom).
 * The environment is the substrate everything else draws from.
 */

const LAYERS = [
  { id: 'governance', name: 'GOVERNANCE',    sub: 'reputation · voting · conflict resolution' },
  { id: 'coordination', name: 'COORDINATION', sub: 'pheromones · locks · markets · signaling' },
  { id: 'agents',     name: 'AGENT SWARM',    sub: 'stateless workers · sense + act' },
  { id: 'environment', name: 'ENVIRONMENT',   sub: 'jobs · files · repo · pheromone signals' },
];

export default function SwarmArchitecture() {
  const W = 720;
  const padX = 60;
  const padY = 40;
  const rowH = 64;
  const gap = 8;
  const H = padY * 2 + LAYERS.length * (rowH + gap);
  const planeW = W - padX * 2;

  return (
    <div className="cb-diagram cb-diagram--swarm-arch">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="swarm-arch-title">
        <title id="swarm-arch-title">The four-layer architecture of a stigmergy swarm</title>

        {LAYERS.map((l, i) => {
          const y = padY + i * (rowH + gap);
          const isEnv = l.id === 'environment';
          return (
            <g key={l.id} className="cb-swarm-layer">
              <rect
                x={padX}
                y={y}
                width={planeW}
                height={rowH}
                rx="3"
                className={isEnv ? 'cb-swarm-rect cb-swarm-rect--env' : 'cb-swarm-rect'}
              />
              <text x={padX + 18} y={y + 24} className="cb-swarm-name">
                LAYER {LAYERS.length - i} · {l.name}
              </text>
              <text x={padX + 18} y={y + 44} className="cb-swarm-sub">{l.sub}</text>
            </g>
          );
        })}

        {/* everything draws from the environment — dashed downward arrows */}
        {[0, 1, 2].map((i) => {
          const topY = padY + i * (rowH + gap) + rowH;
          const bottomY = padY + 3 * (rowH + gap);
          const x = padX + planeW - 60 - i * 50;
          return (
            <g key={`wire-${i}`}>
              <line x1={x} y1={topY} x2={x} y2={bottomY} className="cb-swarm-wire" />
              <path
                d={`M ${x - 4} ${topY + 4} L ${x} ${topY} L ${x + 4} ${topY + 4}`}
                className="cb-arrowhead"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
