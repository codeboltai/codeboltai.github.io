import React from 'react';
import './diagrams.css';

/**
 * Stigmergy Mechanisms — the four coordination mechanisms (pheromones,
 * locks, markets, social signaling) shown as sectors surrounding the
 * shared environment they all modify.
 */

export default function StigmergyMechanisms() {
  const W = 760;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;

  return (
    <div className="cb-diagram cb-diagram--stig">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="stig-mech-title">
        <title id="stig-mech-title">The four coordination mechanisms of a stigmergy swarm</title>

        {/* center: environment */}
        <circle cx={cx} cy={cy} r="68" className="cb-box cb-box--accent" />
        <text x={cx} y={cy - 10} textAnchor="middle" className="cb-box-title">ENVIRONMENT</text>
        <text x={cx} y={cy + 6} textAnchor="middle" className="cb-box-sub">jobs · files · repo</text>
        <text x={cx} y={cy + 22} textAnchor="middle" className="cb-box-sub">pheromone signals</text>

        {/* pheromones (top-left) */}
        <g>
          <rect x="40" y="40" width="180" height="80" rx="3" className="cb-box" />
          <text x="130" y="64" textAnchor="middle" className="cb-box-title">PHEROMONES</text>
          <text x="130" y="82" textAnchor="middle" className="cb-box-sub">async signals · decay</text>
          <text x="130" y="98" textAnchor="middle" className="cb-box-sub">I(t) = I₀·e^(-λt)</text>
          <line x1="220" y1="90" x2={cx - 58} y2={cy - 30} className="cb-stig-wire" />
          <circle r="2.5" className="cb-stig-pulse">
            <animateMotion dur="3s" repeatCount="indefinite"
              path={`M 220 90 L ${cx - 58} ${cy - 30}`} />
          </circle>
        </g>

        {/* locks (top-right) */}
        <g>
          <rect x="540" y="40" width="180" height="80" rx="3" className="cb-box" />
          <text x="630" y="64" textAnchor="middle" className="cb-box-title">LOCKS</text>
          <text x="630" y="82" textAnchor="middle" className="cb-box-sub">mutual exclusion</text>
          <text x="630" y="98" textAnchor="middle" className="cb-box-sub">reserve · unlock</text>
          <line x1="540" y1="90" x2={cx + 58} y2={cy - 30} className="cb-stig-wire" />
        </g>

        {/* markets (bottom-left) */}
        <g>
          <rect x="40" y={H - 120} width="180" height="80" rx="3" className="cb-box" />
          <text x="130" y={H - 96} textAnchor="middle" className="cb-box-title">MARKETS</text>
          <text x="130" y={H - 78} textAnchor="middle" className="cb-box-sub">bid · split · assign</text>
          <text x="130" y={H - 62} textAnchor="middle" className="cb-box-sub">reputation-weighted</text>
          <line x1="220" y1={H - 88} x2={cx - 58} y2={cy + 30} className="cb-stig-wire" />
        </g>

        {/* social signaling (bottom-right) */}
        <g>
          <rect x="540" y={H - 120} width="180" height="80" rx="3" className="cb-box" />
          <text x="630" y={H - 96} textAnchor="middle" className="cb-box-title">SOCIAL SIGNALING</text>
          <text x="630" y={H - 78} textAnchor="middle" className="cb-box-sub">vacancies · roles</text>
          <text x="630" y={H - 62} textAnchor="middle" className="cb-box-sub">team formation</text>
          <line x1="540" y1={H - 88} x2={cx + 58} y2={cy + 30} className="cb-stig-wire" />
        </g>
      </svg>
    </div>
  );
}
