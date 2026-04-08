import React from 'react';
import './diagrams.css';

/**
 * Eval Anatomy — the EvalTask at the center, with the four pluggable
 * dimensions (Subject · Instruction · Environment · Evaluator) around
 * it. Each dimension lists its built-in strategies.
 */

const DIMENSIONS = [
  {
    id: 'subject',
    label: 'SUBJECT',
    sub: 'what is evaluated',
    strategies: ['agent', 'action-block'],
    anchor: { x: 120, y: 70 },
  },
  {
    id: 'instruction',
    label: 'INSTRUCTION',
    sub: 'how input is produced',
    strategies: ['text', 'script', 'hybrid'],
    anchor: { x: 580, y: 70 },
  },
  {
    id: 'environment',
    label: 'ENVIRONMENT',
    sub: 'where it runs',
    strategies: ['local', 'remote', 'provider'],
    anchor: { x: 120, y: 260 },
  },
  {
    id: 'evaluator',
    label: 'EVALUATOR',
    sub: 'how it is scored',
    strategies: ['expected-output', 'script', 'agent-judge', 'deliberation'],
    anchor: { x: 580, y: 260 },
  },
];

export default function EvalAnatomy() {
  const W = 760;
  const H = 380;
  const cx = W / 2;
  const cy = H / 2;

  return (
    <div className="cb-diagram cb-diagram--eval-anat">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="eval-anatomy-title">
        <title id="eval-anatomy-title">The anatomy of an eval task</title>

        {/* wires from center to each dimension */}
        {DIMENSIONS.map((d) => (
          <line
            key={`wire-${d.id}`}
            x1={cx}
            y1={cy}
            x2={d.anchor.x + 75}
            y2={d.anchor.y + 40}
            className="cb-eval-wire"
          />
        ))}

        {/* dimension cards */}
        {DIMENSIONS.map((d) => (
          <g key={d.id}>
            <rect x={d.anchor.x} y={d.anchor.y} width="150" height="82" rx="3" className="cb-box" />
            <text x={d.anchor.x + 12} y={d.anchor.y + 18} className="cb-box-title">{d.label}</text>
            <text x={d.anchor.x + 12} y={d.anchor.y + 32} className="cb-box-sub">{d.sub}</text>
            {d.strategies.map((s, i) => (
              <text
                key={s}
                x={d.anchor.x + 12}
                y={d.anchor.y + 48 + i * 11}
                className="cb-eval-strat"
              >
                · {s}
              </text>
            ))}
          </g>
        ))}

        {/* center: the task */}
        <circle cx={cx} cy={cy} r="62" className="cb-box cb-box--accent" />
        <text x={cx} y={cy - 8} textAnchor="middle" className="cb-box-title">EVAL TASK</text>
        <text x={cx} y={cy + 8} textAnchor="middle" className="cb-box-sub">pluggable engine</text>
        <text x={cx} y={cy + 22} textAnchor="middle" className="cb-box-sub">5 registries</text>

        {/* optimizer (5th dimension) floats below */}
        <line x1={cx} y1={cy + 62} x2={cx} y2={H - 38} className="cb-eval-wire" />
        <rect x={cx - 90} y={H - 38} width="180" height="30" rx="3" className="cb-box" />
        <text x={cx} y={H - 19} textAnchor="middle" className="cb-box-sub">
          + OPTIMIZER (optional)
        </text>
      </svg>
    </div>
  );
}
