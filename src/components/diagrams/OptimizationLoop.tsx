import React from 'react';
import './diagrams.css';

export default function OptimizationLoop() {
  const W = 860;
  const H = 520;

  return (
    <div className="cb-diagram cb-diagram--opt-loop">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="opt-loop-title">
        <title id="opt-loop-title">Optimization loop: baseline, proposer, variant batch, evaluator, selector, promotion, and feedback</title>

        <defs>
          <marker
            id="cb-ol-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <polygon points="0 0, 10 5, 0 10" className="cb-ol-arrowfill" />
          </marker>
        </defs>

        <text x="70" y="24" className="cb-ol-eyebrow">
          One Optimization Run
        </text>

        <rect x="60" y="56" width="178" height="78" rx="6" className="cb-ol-stage-rect" />
        <text x="84" y="82" className="cb-ol-stage-title">1. Baseline + Eval Set</text>
        <text x="84" y="102" className="cb-ol-stage-sub">
          Start from the current agent and the benchmark you care about.
        </text>
        <text x="84" y="121" className="cb-ol-stage-foot">
          baseline score is always measured first
        </text>

        <rect x="340" y="56" width="184" height="78" rx="6" className="cb-ol-stage-rect" />
        <text x="364" y="82" className="cb-ol-stage-title">2. Proposer</text>
        <text x="364" y="102" className="cb-ol-stage-sub">
          Generate candidate changes along one axis.
        </text>
        <text x="364" y="121" className="cb-ol-stage-foot">
          prompt rewrite, model sweep, grid, capability toggle
        </text>

        <rect x="620" y="56" width="180" height="78" rx="6" className="cb-ol-stage-rect" />
        <text x="644" y="82" className="cb-ol-stage-title">3. Variant Batch</text>
        <text x="644" y="102" className="cb-ol-stage-sub">
          Each variant is a precise diff from baseline.
        </text>
        <text x="644" y="121" className="cb-ol-stage-foot">
          n variants within budget
        </text>

        <line x1="238" y1="95" x2="340" y2="95" className="cb-ol-wire" markerEnd="url(#cb-ol-arrow)" />
        <line x1="524" y1="95" x2="620" y2="95" className="cb-ol-wire" markerEnd="url(#cb-ol-arrow)" />

        <rect x="124" y="196" width="612" height="118" rx="6" className="cb-ol-core-rect" />
        <text x="430" y="222" textAnchor="middle" className="cb-ol-core-title">4. Evaluate Every Variant</text>
        <text x="430" y="242" textAnchor="middle" className="cb-ol-stage-sub">
          Run each candidate against the same fixtures and compute comparable metrics.
        </text>

        <rect x="164" y="264" width="156" height="30" rx="4" className="cb-ol-chip-rect" />
        <text x="242" y="283" textAnchor="middle" className="cb-ol-chip-label">overall score</text>
        <rect x="352" y="264" width="156" height="30" rx="4" className="cb-ol-chip-rect" />
        <text x="430" y="283" textAnchor="middle" className="cb-ol-chip-label">cost + latency</text>
        <rect x="540" y="264" width="156" height="30" rx="4" className="cb-ol-chip-rect" />
        <text x="618" y="283" textAnchor="middle" className="cb-ol-chip-label">traces + tool behavior</text>

        <line x1="710" y1="134" x2="710" y2="196" className="cb-ol-wire" markerEnd="url(#cb-ol-arrow)" />
        <text x="724" y="170" className="cb-ol-wire-label">same eval set</text>

        <rect x="92" y="368" width="190" height="84" rx="6" className="cb-ol-select-rect" />
        <text x="187" y="394" textAnchor="middle" className="cb-ol-select-title">5. Selector</text>
        <text x="187" y="414" textAnchor="middle" className="cb-ol-stage-sub">
          Rank variants by the metric
        </text>
        <text x="187" y="433" textAnchor="middle" className="cb-ol-stage-foot">
          respect confidence intervals
        </text>

        <rect x="336" y="368" width="190" height="84" rx="6" className="cb-ol-keep-rect" />
        <text x="431" y="394" textAnchor="middle" className="cb-ol-select-title">6. Promote Winner</text>
        <text x="431" y="414" textAnchor="middle" className="cb-ol-stage-sub">
          Keep the best variant as the new candidate.
        </text>
        <text x="431" y="433" textAnchor="middle" className="cb-ol-stage-foot">
          promote only if it truly beats baseline
        </text>

        <rect x="580" y="368" width="190" height="84" rx="6" className="cb-ol-stop-rect" />
        <text x="675" y="394" textAnchor="middle" className="cb-ol-select-title">7. Iterate Or Stop</text>
        <text x="675" y="414" textAnchor="middle" className="cb-ol-stage-sub">
          Continue on a new axis or stop on plateau/regression.
        </text>
        <text x="675" y="433" textAnchor="middle" className="cb-ol-stage-foot">
          budget, max-iterations, stop-on-regression
        </text>

        <line x1="242" y1="314" x2="187" y2="368" className="cb-ol-wire" markerEnd="url(#cb-ol-arrow)" />
        <line x1="430" y1="314" x2="431" y2="368" className="cb-ol-wire" markerEnd="url(#cb-ol-arrow)" />
        <line x1="618" y1="314" x2="675" y2="368" className="cb-ol-wire" markerEnd="url(#cb-ol-arrow)" />

        <path d="M 431 452 Q 430 500 432 500 Q 434 500 344 134" className="cb-ol-feedback" />
        <text x="490" y="491" className="cb-ol-feedback-label">
          kept and failed variants become context for the next proposal round
        </text>
      </svg>
    </div>
  );
}
