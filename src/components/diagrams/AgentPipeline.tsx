import React from 'react';
import './diagrams.css';

/**
 * Agent Pipeline — the unified runtime in @codebolt/agent.
 *
 * Top rail: the linear stages a turn passes through.
 * Bottom row: the five processor hook arrays you can extend.
 * The bracket above the stages marks where each hook fires.
 */

const W = 760;
const H = 360;

type Stage = {
  label: string;
  sub?: string;
  accent?: boolean;
};

const STAGES: Stage[] = [
  { label: 'USER\nMESSAGE', sub: 'FlatUserMessage' },
  { label: 'MESSAGE\nMODIFIERS' },
  { label: 'INITIAL\nPROMPT GEN' },
  { label: 'PRE-\nINFERENCE' },
  { label: 'AGENT\nSTEP', accent: true, sub: 'LLM call' },
  { label: 'POST-\nINFERENCE' },
  { label: 'PRE-TOOL\nCALL' },
  { label: 'RESPONSE\nEXECUTOR', accent: true, sub: 'tool exec' },
  { label: 'POST-TOOL\nCALL' },
  { label: 'NEXT TURN\n· FINAL', sub: 'or success' },
];

// Hook arrays the user can extend (slots into the pipeline)
type Hook = {
  name: string;
  fromIdx: number;
  toIdx: number;
  detail: string;
};

const HOOKS: Hook[] = [
  { name: 'messageModifiers', fromIdx: 1, toIdx: 1, detail: 'shape FlatUserMessage' },
  { name: 'preInferenceProcessors', fromIdx: 3, toIdx: 3, detail: 'compact · re-prompt' },
  { name: 'postInferenceProcessors', fromIdx: 5, toIdx: 5, detail: 'loop detect · audit' },
  { name: 'preToolCallProcessors', fromIdx: 6, toIdx: 6, detail: 'tool validation' },
  { name: 'postToolCallProcessors', fromIdx: 8, toIdx: 8, detail: 'shell · cleanup' },
];

export default function AgentPipeline() {
  // Layout constants
  const railY = 130;
  const stageW = 64;
  const stageH = 64;
  const gap = ((W - 64) - STAGES.length * stageW) / (STAGES.length - 1);
  const startX = 32;

  const stageX = (i: number) => startX + i * (stageW + gap);
  const stageCenterX = (i: number) => stageX(i) + stageW / 2;

  return (
    <div className="cb-diagram cb-diagram--pipeline">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="agent-pipeline-title"
      >
        <title id="agent-pipeline-title">
          Codebolt unified agent pipeline — message modifiers, inference, tool execution,
          and the five processor hook points
        </title>

        <defs>
          <marker
            id="ap-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10" className="cb-arrowhead" />
          </marker>
        </defs>

        <text x="32" y="28" className="cb-section-label">
          UNIFIED RUNTIME · @codebolt/agent
        </text>
        <text x="32" y="46" className="cb-axis-label">
          one pipeline per turn · the same stages run for createCodeboltAgent and Agent
        </text>

        {/* ── Linear pipeline rail ──────────────────────── */}
        {STAGES.map((s, i) => (
          <g key={i}>
            <rect
              x={stageX(i)}
              y={railY}
              width={stageW}
              height={stageH}
              rx="3"
              className={`cb-box${s.accent ? ' cb-box--accent' : ''}`}
            />
            {s.label.split('\n').map((line, li) => (
              <text
                key={li}
                x={stageCenterX(i)}
                y={railY + 22 + li * 12}
                textAnchor="middle"
                className="cb-box-title"
              >
                {line}
              </text>
            ))}
            {s.sub && (
              <text
                x={stageCenterX(i)}
                y={railY + stageH - 8}
                textAnchor="middle"
                className="cb-box-sub"
              >
                {s.sub}
              </text>
            )}
            {/* arrow to next stage */}
            {i < STAGES.length - 1 && (
              <line
                x1={stageX(i) + stageW}
                y1={railY + stageH / 2}
                x2={stageX(i + 1)}
                y2={railY + stageH / 2}
                className="cb-arrow"
                markerEnd="url(#ap-arrow)"
              />
            )}
          </g>
        ))}

        {/* loop-back arrow from last stage to MESSAGE MODIFIERS for next turn */}
        <path
          d={`M ${stageX(STAGES.length - 1) + stageW / 2} ${railY + stageH}
              Q ${stageX(STAGES.length - 1) + stageW / 2} ${railY + stageH + 28}
                ${(stageX(STAGES.length - 1) + stageX(1)) / 2} ${railY + stageH + 28}
              Q ${stageX(1) + stageW / 2} ${railY + stageH + 28}
                ${stageX(1) + stageW / 2} ${railY + stageH + 4}`}
          className="cb-arrow"
          fill="none"
          markerEnd="url(#ap-arrow)"
          strokeDasharray="4 3"
        />
        <text
          x={(stageX(STAGES.length - 1) + stageX(1)) / 2}
          y={railY + stageH + 44}
          textAnchor="middle"
          className="cb-flow-label"
        >
          loop until done · capped at maxTurns
        </text>

        {/* ── Hook callouts (above the rail) ────────────── */}
        {HOOKS.map((h, i) => {
          const x = stageCenterX(h.fromIdx);
          const y = railY - 18;
          return (
            <g key={h.name}>
              {/* tick mark from rail-top up */}
              <line
                x1={x}
                y1={railY}
                x2={x}
                y2={y}
                className="cb-flow-line"
              />
              <circle cx={x} cy={y} r="2" className="cb-flow-dot" />
            </g>
          );
        })}

        {/* ── Hook table (bottom panel) ────────────────── */}
        <g transform={`translate(0, ${railY + stageH + 64})`}>
          <text x="32" y="0" className="cb-section-label">
            FIVE PROCESSOR HOOKS · processors.&#123;...&#125;
          </text>
          {HOOKS.map((h, i) => {
            const colW = (W - 64) / HOOKS.length;
            const x = 32 + i * colW;
            const stageCx = stageCenterX(h.fromIdx);
            const colCx = x + colW / 2;
            return (
              <g key={h.name}>
                {/* connector from hook tick down to column */}
                <line
                  x1={stageCx}
                  y1={-railY - stageH - 64 + railY - 18}
                  x2={colCx}
                  y2={16}
                  className="cb-flow-line"
                />
                <rect x={x + 6} y="22" width={colW - 12} height="46" rx="3" className="cb-box" />
                <text x={colCx} y="40" textAnchor="middle" className="cb-box-title">
                  {h.name}
                </text>
                <text x={colCx} y="58" textAnchor="middle" className="cb-box-sub">
                  {h.detail}
                </text>
              </g>
            );
          })}
        </g>

        {/* ── Legend ──────────────────────────────────── */}
        <g>
          <rect x="32" y={H - 18} width="14" height="14" rx="2" className="cb-box cb-box--accent" />
          <text x="52" y={H - 7} className="cb-legend">
            llm / tool stage
          </text>
          <circle cx="158" cy={H - 11} r="2" className="cb-flow-dot" />
          <text x="168" y={H - 7} className="cb-legend">
            hook injection point
          </text>
          <text x="320" y={H - 7} className="cb-legend">
            dashed line · turn loop · solid line · per-turn flow
          </text>
        </g>
      </svg>
    </div>
  );
}
