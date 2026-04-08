import React from 'react';
import './diagrams.css';

/**
 * Pattern Icons — five small visual signatures for the multi-agent
 * patterns (swarm, plan-execute-review, debate, stigmergy, reputation).
 */

export default function PatternIcons() {
  return (
    <div className="cb-diagram cb-diagram--patterns">
      <svg viewBox="0 0 720 200" width="100%" role="img" aria-labelledby="pattern-icons-title">
        <title id="pattern-icons-title">The five recurring multi-agent patterns</title>

        {/* SWARM */}
        <g transform="translate(20 30)">
          <circle cx="60" cy="40" r="8" className="cb-pi-node" />
          <circle cx="30" cy="80" r="8" className="cb-pi-node" />
          <circle cx="60" cy="80" r="8" className="cb-pi-node" />
          <circle cx="90" cy="80" r="8" className="cb-pi-node" />
          <line x1="60" y1="48" x2="30" y2="72" className="cb-pi-edge" />
          <line x1="60" y1="48" x2="60" y2="72" className="cb-pi-edge" />
          <line x1="60" y1="48" x2="90" y2="72" className="cb-pi-edge" />
          <text x="60" y="125" textAnchor="middle" className="cb-pi-label">SWARM</text>
          <text x="60" y="142" textAnchor="middle" className="cb-pi-sub">parallel specialists</text>
        </g>

        {/* PLAN → EXECUTE → REVIEW */}
        <g transform="translate(160 30)">
          <circle cx="20" cy="60" r="8" className="cb-pi-node" />
          <circle cx="65" cy="60" r="8" className="cb-pi-node" />
          <circle cx="110" cy="60" r="8" className="cb-pi-node" />
          <line x1="28" y1="60" x2="57" y2="60" className="cb-pi-edge" />
          <line x1="73" y1="60" x2="102" y2="60" className="cb-pi-edge" />
          <text x="65" y="125" textAnchor="middle" className="cb-pi-label">PLAN · EXEC · REVIEW</text>
          <text x="65" y="142" textAnchor="middle" className="cb-pi-sub">sequential phases</text>
        </g>

        {/* DEBATE */}
        <g transform="translate(310 30)">
          <circle cx="30" cy="40" r="8" className="cb-pi-node" />
          <circle cx="90" cy="40" r="8" className="cb-pi-node" />
          <circle cx="60" cy="90" r="8" className="cb-pi-node cb-pi-node--accent" />
          <line x1="30" y1="48" x2="60" y2="82" className="cb-pi-edge" />
          <line x1="90" y1="48" x2="60" y2="82" className="cb-pi-edge" />
          <line x1="38" y1="40" x2="82" y2="40" className="cb-pi-edge cb-pi-edge--dashed" />
          <text x="60" y="125" textAnchor="middle" className="cb-pi-label">DEBATE</text>
          <text x="60" y="142" textAnchor="middle" className="cb-pi-sub">two sides + judge</text>
        </g>

        {/* STIGMERGY */}
        <g transform="translate(450 30)">
          <circle cx="20" cy="50" r="6" className="cb-pi-node" />
          <circle cx="40" cy="80" r="6" className="cb-pi-node" />
          <circle cx="60" cy="55" r="6" className="cb-pi-node" />
          <circle cx="80" cy="85" r="6" className="cb-pi-node" />
          <circle cx="100" cy="60" r="6" className="cb-pi-node" />
          {/* shared traces */}
          <circle cx="30" cy="35" r="2" className="cb-pi-trace" />
          <circle cx="55" cy="40" r="2" className="cb-pi-trace" />
          <circle cx="75" cy="35" r="2" className="cb-pi-trace" />
          <circle cx="95" cy="42" r="2" className="cb-pi-trace" />
          <text x="60" y="125" textAnchor="middle" className="cb-pi-label">STIGMERGY</text>
          <text x="60" y="142" textAnchor="middle" className="cb-pi-sub">indirect via traces</text>
        </g>

        {/* REPUTATION */}
        <g transform="translate(590 30)">
          <circle cx="60" cy="50" r="11" className="cb-pi-node cb-pi-node--accent" />
          <circle cx="25" cy="85" r="6" className="cb-pi-node" />
          <circle cx="60" cy="90" r="8" className="cb-pi-node" />
          <circle cx="95" cy="85" r="5" className="cb-pi-node" />
          <line x1="60" y1="61" x2="25" y2="79" className="cb-pi-edge cb-pi-edge--thin" />
          <line x1="60" y1="61" x2="60" y2="82" className="cb-pi-edge" />
          <line x1="60" y1="61" x2="95" y2="80" className="cb-pi-edge cb-pi-edge--thin" />
          <text x="60" y="125" textAnchor="middle" className="cb-pi-label">REPUTATION</text>
          <text x="60" y="142" textAnchor="middle" className="cb-pi-sub">weighted routing</text>
        </g>
      </svg>
    </div>
  );
}
