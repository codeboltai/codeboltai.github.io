import React from 'react';
import './diagrams.css';

/**
 * Guardrail Flow — incoming tool call branches into allow / rewrite /
 * deny / pause-for-human verdicts.
 */

const VERDICTS = [
  { label: 'ALLOW', y: 60, color: 'allow' },
  { label: 'REWRITE', y: 130, color: 'rewrite' },
  { label: 'DENY', y: 200, color: 'deny' },
  { label: 'PAUSE FOR HUMAN', y: 270, color: 'pause' },
];

export default function GuardrailFlow() {
  const W = 720;
  const H = 340;
  const inX = 50;
  const gateX = 280;
  const verdictX = 520;

  return (
    <div className="cb-diagram cb-diagram--guardrail">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="guardrail-flow-title">
        <title id="guardrail-flow-title">How guardrails vet a tool call</title>

        {/* incoming tool call */}
        <rect x={inX} y={H / 2 - 24} width="160" height="48" rx="3" className="cb-box" />
        <text x={inX + 80} y={H / 2 - 4} textAnchor="middle" className="cb-box-title">TOOL CALL</text>
        <text x={inX + 80} y={H / 2 + 14} textAnchor="middle" className="cb-box-sub">proposed by agent</text>

        {/* arrow → gate */}
        <line x1={inX + 160} y1={H / 2} x2={gateX} y2={H / 2} className="cb-arrow" />
        <path d={`M ${gateX - 8} ${H / 2 - 4} L ${gateX} ${H / 2} L ${gateX - 8} ${H / 2 + 4}`} className="cb-arrowhead" />

        {/* guardrail diamond */}
        <polygon
          points={`${gateX + 70},${H / 2 - 50} ${gateX + 140},${H / 2} ${gateX + 70},${H / 2 + 50} ${gateX},${H / 2}`}
          className="cb-diamond"
        />
        <text x={gateX + 70} y={H / 2 - 4} textAnchor="middle" className="cb-box-title">GUARDRAIL</text>
        <text x={gateX + 70} y={H / 2 + 14} textAnchor="middle" className="cb-box-sub">vets · scopes · scores</text>

        {/* verdict branches */}
        {VERDICTS.map((v) => (
          <g key={v.label}>
            <line x1={gateX + 140} y1={H / 2} x2={verdictX} y2={v.y + 18} className="cb-flow-line" />
            <rect x={verdictX} y={v.y} width={160} height={36} rx="2" className={`cb-verdict cb-verdict--${v.color}`} />
            <text x={verdictX + 80} y={v.y + 22} textAnchor="middle" className="cb-verdict-label">{v.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
