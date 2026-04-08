import React from 'react';
import './diagrams.css';

/**
 * Shadow Git Timelines — two parallel commit timelines (real + shadow)
 * with a rollback arrow that affects shadow only.
 */

export default function ShadowGitTimelines() {
  const W = 700;
  const H = 280;
  const realY = 90;
  const shadowY = 200;

  const realCommits = [60, 160, 320, 460];
  const shadowCommits = [60, 110, 160, 210, 260, 320, 370, 420, 460, 510];

  return (
    <div className="cb-diagram cb-diagram--shadow">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="shadow-git-title">
        <title id="shadow-git-title">Real git vs shadow git timelines</title>

        {/* real git */}
        <text x="40" y={realY - 24} className="cb-section-label">REAL GIT</text>
        <text x="40" y={realY - 8} className="cb-axis-label">your commits, your history</text>
        <line x1="40" y1={realY} x2={W - 40} y2={realY} className="cb-track" />
        {realCommits.map((x, i) => (
          <g key={`r-${i}`}>
            <circle cx={x} cy={realY} r="5" className="cb-commit cb-commit--real" />
          </g>
        ))}

        {/* shadow git */}
        <text x="40" y={shadowY - 24} className="cb-section-label">SHADOW GIT</text>
        <text x="40" y={shadowY - 8} className="cb-axis-label">auto-committed every agent action</text>
        <line x1="40" y1={shadowY} x2={W - 40} y2={shadowY} className="cb-track" />
        {shadowCommits.map((x, i) => (
          <circle key={`s-${i}`} cx={x} cy={shadowY} r="4" className="cb-commit cb-commit--shadow" />
        ))}

        {/* rollback arrow on shadow */}
        <path
          d={`M 510 ${shadowY - 14} Q 410 ${shadowY - 50} 310 ${shadowY - 14}`}
          className="cb-rollback-arc"
        />
        <path d={`M 314 ${shadowY - 18} L 308 ${shadowY - 12} L 316 ${shadowY - 8}`} className="cb-arrowhead" />
        <text x="410" y={shadowY - 56} textAnchor="middle" className="cb-rollback-label">
          rollback (shadow only — real git untouched)
        </text>
      </svg>
    </div>
  );
}
