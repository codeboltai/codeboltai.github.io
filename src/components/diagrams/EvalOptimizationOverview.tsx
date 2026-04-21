import React from 'react';
import './diagrams.css';

const W = 860;
const H = 500;

export default function EvalOptimizationOverview() {
  return (
    <div className="cb-diagram cb-diagram--evalopt">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="eval-opt-overview-title">
        <title id="eval-opt-overview-title">
          Evaluation and optimization overview: production runs and eval fixtures feed measurement, which drives optimization and promotion
        </title>

        <defs>
          <marker
            id="cb-eo-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <polygon points="0 0, 10 5, 0 10" className="cb-eo-arrowfill" />
          </marker>
        </defs>

        <text x="70" y="24" className="cb-eo-eyebrow">Developer Workflow</text>

        <rect x="54" y="48" width="246" height="118" rx="6" className="cb-eo-source-rect" />
        <text x="78" y="74" className="cb-eo-title">Production Runs</text>
        <text x="78" y="94" className="cb-eo-sub">
          Event log traces from real agent usage.
        </text>
        <rect x="82" y="112" width="92" height="28" rx="4" className="cb-eo-chip-rect" />
        <text x="128" y="130" textAnchor="middle" className="cb-eo-chip-label">event log</text>
        <rect x="186" y="112" width="86" height="28" rx="4" className="cb-eo-chip-rect" />
        <text x="229" y="130" textAnchor="middle" className="cb-eo-chip-label">traces</text>
        <text x="78" y="154" className="cb-eo-foot">
          Promote good or bad runs into future eval fixtures.
        </text>

        <rect x="560" y="48" width="246" height="118" rx="6" className="cb-eo-source-rect" />
        <text x="584" y="74" className="cb-eo-title">Eval Set</text>
        <text x="584" y="94" className="cb-eo-sub">
          Curated fixtures, expected outputs, and rubrics.
        </text>
        <rect x="588" y="112" width="86" height="28" rx="4" className="cb-eo-chip-rect" />
        <text x="631" y="130" textAnchor="middle" className="cb-eo-chip-label">fixtures</text>
        <rect x="686" y="112" width="92" height="28" rx="4" className="cb-eo-chip-rect" />
        <text x="732" y="130" textAnchor="middle" className="cb-eo-chip-label">metrics</text>
        <text x="584" y="154" className="cb-eo-foot">
          This is the repeatable benchmark you tune against.
        </text>

        <rect x="232" y="208" width="396" height="126" rx="6" className="cb-eo-core-rect" />
        <text x="430" y="240" textAnchor="middle" className="cb-eo-core-title">
          Measure The Agent
        </text>
        <text x="430" y="260" textAnchor="middle" className="cb-eo-sub">
          Replay past runs or execute the current agent against the eval set.
        </text>

        <rect x="262" y="278" width="142" height="34" rx="4" className="cb-eo-chip-rect" />
        <text x="347" y="299" textAnchor="middle" className="cb-eo-chip-label">replay agent X</text>
        <rect x="456" y="278" width="142" height="34" rx="4" className="cb-eo-chip-rect" />
        <text x="513" y="299" textAnchor="middle" className="cb-eo-chip-label">evaluate agent X</text>

        <path
          d="M 178 166 L 178 188 L 316 188 L 316 278"
          className="cb-eo-wire"
          markerEnd="url(#cb-eo-arrow)"
        />
        <text x="214" y="180" className="cb-eo-wire-label">real runs become replayable tests</text>

        <path
          d="M 683 166 L 683 188 L 544 188 L 544 278"
          className="cb-eo-wire"
          markerEnd="url(#cb-eo-arrow)"
        />
        <text x="560" y="180" className="cb-eo-wire-label">fixtures drive repeatable scoring</text>

        <line x1="430" y1="334" x2="430" y2="382" className="cb-eo-wire" markerEnd="url(#cb-eo-arrow)" />
        <text x="446" y="362" className="cb-eo-wire-label">scores + traces</text>

        <rect x="236" y="380" width="340" height="68" rx="6" className="cb-eo-opt-rect" />
        <text x="430" y="408" textAnchor="middle" className="cb-eo-opt-title">
          Optimization Loop
        </text>
        <text x="430" y="428" textAnchor="middle" className="cb-eo-opt-sub">
          Propose changes, re-evaluate variants, rank winners, then promote one.
        </text>

        <line x1="576" y1="414" x2="654" y2="414" className="cb-eo-wire cb-eo-wire--accent" markerEnd="url(#cb-eo-arrow)" />
        <text x="592" y="405" className="cb-eo-wire-label">candidate agents</text>

        <rect x="654" y="384" width="152" height="60" rx="6" className="cb-eo-result-rect" />
        <text x="730" y="408" textAnchor="middle" className="cb-eo-title">
          Deploy Winner
        </text>
        <text x="730" y="427" textAnchor="middle" className="cb-eo-sub">
          baseline, v1, v2, ...
        </text>

        <path d="M 716 444 L 716 470 L 178 470 L 178 166" className="cb-eo-feedback" />
        <text x="380" y="478" textAnchor="middle" className="cb-eo-feedback-label">
          deployed runs feed the next measurement cycle
        </text>
      </svg>
    </div>
  );
}
