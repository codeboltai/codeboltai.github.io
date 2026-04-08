import React from 'react';
import './diagrams.css';

/**
 * Optimization Loop — iterative: eval → score → optimizer proposes change
 * → apply → re-eval → kept or reverted. Emphasizes that history from
 * past iterations is fed back to the optimizer.
 */

export default function OptimizationLoop() {
  const W = 760;
  const H = 340;

  const cy = 150;
  const step = (id: string, x: number, label: string, sub: string) => ({ id, x, y: cy, label, sub });

  const NODES = [
    step('eval',      90,  'RUN EVAL',        'score via evaluators'),
    step('optimizer', 270, 'OPTIMIZER AGENT', 'proposes {target,diff}'),
    step('apply',     450, 'APPLY',           'patch subject'),
    step('reeval',    620, 'RE-EVAL',         'new score'),
  ];

  return (
    <div className="cb-diagram cb-diagram--opt-loop">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="opt-loop-title">
        <title id="opt-loop-title">The optimization iteration loop</title>

        <text x={W / 2} y={32} textAnchor="middle" className="cb-section-label">
          ITERATION — repeat until max-iterations or score stops improving
        </text>

        {/* forward arrows between nodes */}
        {NODES.slice(0, -1).map((n, i) => {
          const next = NODES[i + 1];
          return (
            <g key={`arr-${i}`}>
              <line x1={n.x + 60} y1={cy} x2={next.x - 60} y2={cy} className="cb-arrow" />
              <path
                d={`M ${next.x - 68} ${cy - 4} L ${next.x - 60} ${cy} L ${next.x - 68} ${cy + 4}`}
                className="cb-arrowhead"
              />
            </g>
          );
        })}

        {/* nodes */}
        {NODES.map((n) => (
          <g key={n.id}>
            <rect x={n.x - 60} y={cy - 30} width="120" height="60" rx="3" className="cb-box" />
            <text x={n.x} y={cy - 6} textAnchor="middle" className="cb-box-title">{n.label}</text>
            <text x={n.x} y={cy + 12} textAnchor="middle" className="cb-box-sub">{n.sub}</text>
          </g>
        ))}

        {/* keep / revert decision from re-eval */}
        <line x1={NODES[3].x} y1={cy + 30} x2={NODES[3].x} y2={cy + 70} className="cb-arrow" />
        <text x={NODES[3].x + 10} y={cy + 60} className="cb-axis-label">compare scores</text>

        <rect x={NODES[3].x - 120} y={cy + 70} width="110" height="34" rx="3" className="cb-verdict cb-verdict--allow" />
        <text x={NODES[3].x - 65} y={cy + 92} textAnchor="middle" className="cb-verdict-label">KEEP</text>

        <rect x={NODES[3].x + 10} y={cy + 70} width="110" height="34" rx="3" className="cb-verdict cb-verdict--deny" />
        <text x={NODES[3].x + 65} y={cy + 92} textAnchor="middle" className="cb-verdict-label">REVERT</text>

        {/* feedback arc: both branches flow back to optimizer with history */}
        <path
          d={`M ${NODES[3].x - 65} ${cy + 104}
              Q ${W / 2} ${H - 10}
                ${NODES[1].x} ${cy + 32}`}
          className="cb-eval-feedback"
        />
        <path
          d={`M ${NODES[1].x - 4} ${cy + 36} L ${NODES[1].x} ${cy + 30} L ${NODES[1].x + 6} ${cy + 38}`}
          className="cb-arrowhead"
        />
        <text x={W / 2 + 40} y={H - 18} textAnchor="middle" className="cb-eval-feedback-label">
          iteration history (kept + failed) → next optimizer prompt
        </text>
      </svg>
    </div>
  );
}
