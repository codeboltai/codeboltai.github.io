import React from 'react';
import './diagrams.css';

/**
 * Agent Lifecycle — trigger → spawn → boot → loop → terminate → cleanup.
 * Terminal states branch right; main spine exits down to the end ring.
 */

const W = 660;
const H = 490;

const SX = 200;   // spine x-center
const SW = 200;   // stage box width
const SBX = SX - SW / 2; // stage box left x = 100

const Y_SPAWN = 58;
const Y_BOOT  = 134;
const Y_LOOP  = 208;
const H_LOOP  = 218;
const Y_DEL   = 228;
const Y_EXE   = 290;
const Y_REF   = 352;
const H_INNER = 48;
const LOOP_RIGHT = SBX + SW + 60; // right edge of loop box = 360

const Y_LOOP_BOTTOM = Y_LOOP + H_LOOP; // 426
const CY_END = 458;

const BUS_X = 424;       // x of vertical outcome bus
const OUTCOME_X = 444;   // left edge of outcome boxes
const OUTCOME_W = 178;
const OUTCOME_CX = OUTCOME_X + OUTCOME_W / 2; // ~533
const OUTCOME_H = 44;

const OUTCOMES = [
  { name: 'COMPLETED', sub: 'returned a result',   cls: 'cb-lc-outcome--completed', y: 262 },
  { name: 'FAILED',    sub: 'threw or set failure', cls: 'cb-lc-outcome--failed',    y: 316 },
  { name: 'REJECTED',  sub: 'guardrail denied',     cls: 'cb-lc-outcome--rejected',  y: 370 },
  { name: 'KILLED',    sub: 'timeout · budget',     cls: 'cb-lc-outcome--killed',    y: 424 },
];

const BUS_Y1 = OUTCOMES[0].y + OUTCOME_H / 2;
const BUS_Y2 = OUTCOMES[OUTCOMES.length - 1].y + OUTCOME_H / 2;

interface StageProps {
  x: number; y: number; w: number; h: number;
  badge: string; name: string; sub: string;
  rectClass?: string;
}

function Stage({ x, y, w, h, badge, name, sub, rectClass = 'cb-lc-state-rect' }: StageProps) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} className={rectClass} />
      <rect x={x + 10} y={y + 9} width={38} height={12} rx={2} className="cb-lc-badge-rect" />
      <text x={x + 29} y={y + 19} textAnchor="middle" className="cb-lc-badge-text">{badge}</text>
      <text x={cx} y={cy + 4} textAnchor="middle" className="cb-lc-state-name">{name}</text>
      <text x={cx} y={cy + 18} textAnchor="middle" className="cb-lc-state-sub">{sub}</text>
    </g>
  );
}

export default function AgentLifecycle() {
  return (
    <div className="cb-diagram cb-diagram--lifecycle">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="agent-lifecycle-title"
      >
        <title id="agent-lifecycle-title">Agent lifecycle: trigger through cleanup</title>

        <defs>
          <pattern id="lc-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="lc-arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#52534e" />
          </marker>
        </defs>

        {/* Paper background + dot grid */}
        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#lc-dots)" opacity="0.5" />

        {/* ── TRIGGER start dot ── */}
        <circle cx={SX} cy={40} r={7} className="cb-lc-start" />
        <text x={SX + 14} y={44} className="cb-lc-edge-label">TRIGGER</text>
        <line x1={SX} y1={47} x2={SX} y2={Y_SPAWN} stroke="#52534e" strokeWidth="1.2" markerEnd="url(#lc-arr)" />

        {/* ── SPAWN ── */}
        <Stage x={SBX} y={Y_SPAWN} w={SW} h={56} badge="STAGE 2" name="SPAWN" sub="process forked · heartbeat starts" />
        <line x1={SX} y1={Y_SPAWN + 56} x2={SX} y2={Y_BOOT} stroke="#52534e" strokeWidth="1.2" markerEnd="url(#lc-arr)" />

        {/* ── BOOT ── */}
        <Stage x={SBX} y={Y_BOOT} w={SW} h={56} badge="STAGE 3" name="BOOT" sub="your handler starts" />
        <line x1={SX} y1={Y_BOOT + 56} x2={SX} y2={Y_LOOP + 18} stroke="#52534e" strokeWidth="1.2" markerEnd="url(#lc-arr)" />

        {/* ── LOOP BOX ── */}
        <rect x={SBX - 20} y={Y_LOOP} width={SW + 80} height={H_LOOP} rx={4} className="cb-lc-loop-rect" />
        <text x={SBX - 8} y={Y_LOOP + 16} className="cb-lc-loop-label">AGENT LOOP</text>

        {/* DELIBERATE */}
        <Stage x={SBX} y={Y_DEL} w={SW} h={H_INNER} badge="DELIBERATE" name="DELIBERATE" sub="assemble context · call LLM" />
        <line x1={SX} y1={Y_DEL + H_INNER} x2={SX} y2={Y_EXE} stroke="#52534e" strokeWidth="1.2" markerEnd="url(#lc-arr)" />

        {/* EXECUTE */}
        <Stage x={SBX} y={Y_EXE} w={SW} h={H_INNER} badge="EXECUTE" name="EXECUTE" sub="run tool calls" />
        <line x1={SX} y1={Y_EXE + H_INNER} x2={SX} y2={Y_REF} stroke="#52534e" strokeWidth="1.2" markerEnd="url(#lc-arr)" />

        {/* REFLECT */}
        <Stage x={SBX} y={Y_REF} w={SW} h={H_INNER} badge="REFLECT" name="REFLECT" sub="write memory · decide to loop" />

        {/* Loop-back arrow on the left */}
        <path
          d={`M ${SBX} ${Y_REF + H_INNER / 2} L ${SBX - 32} ${Y_REF + H_INNER / 2} L ${SBX - 32} ${Y_DEL + H_INNER / 2} L ${SBX} ${Y_DEL + H_INNER / 2}`}
          fill="none"
          stroke="rgba(11,13,11,0.28)"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          markerEnd="url(#lc-arr)"
        />
        <text x={SBX - 38} y={(Y_REF + Y_DEL) / 2 + H_INNER / 2 - 5} textAnchor="end" className="cb-lc-loop-label">MORE</text>
        <text x={SBX - 38} y={(Y_REF + Y_DEL) / 2 + H_INNER / 2 + 6} textAnchor="end" className="cb-lc-loop-label">WORK</text>

        {/* "done" exit from loop → end ring */}
        <line x1={SX} y1={Y_LOOP_BOTTOM} x2={SX} y2={CY_END - 10} stroke="#52534e" strokeWidth="1.2" markerEnd="url(#lc-arr)" />
        <text x={SX + 10} y={Y_LOOP_BOTTOM + 14} className="cb-lc-edge-label">DONE</text>

        {/* ── TERMINATE end ring ── */}
        <circle cx={SX} cy={CY_END} r={9} className="cb-lc-end-outer" />
        <circle cx={SX} cy={CY_END} r={5} className="cb-lc-end-inner" />
        <text x={SX + 18} y={CY_END + 4} className="cb-lc-loop-label">TERMINATE</text>

        {/* Cleanup footnote */}
        <line x1={40} y1={H - 28} x2={W - 40} y2={H - 28} stroke="rgba(11,13,11,0.10)" strokeWidth="0.8" />
        <text x={40} y={H - 14} className="cb-lc-footnote">
          STAGE 6 — after any terminal state, the server runs cleanup: process reaped · event log finalized · memory ingested
        </text>

        {/* ── RIGHT COLUMN: terminal outcome branch ── */}

        {/* Horizontal branch from loop right edge to bus */}
        <line
          x1={LOOP_RIGHT}
          y1={Y_LOOP + H_LOOP / 2}
          x2={BUS_X}
          y2={Y_LOOP + H_LOOP / 2}
          stroke="#52534e"
          strokeWidth="1"
        />

        {/* Vertical bus */}
        <line x1={BUS_X} y1={BUS_Y1} x2={BUS_X} y2={BUS_Y2} stroke="#52534e" strokeWidth="1" />

        {/* Branch label */}
        <text x={LOOP_RIGHT + 6} y={Y_LOOP + H_LOOP / 2 - 6} className="cb-lc-edge-label">TERMINATE</text>

        {/* Outcome boxes + short horizontal connectors */}
        {OUTCOMES.map((o) => {
          const cy = o.y + OUTCOME_H / 2;
          return (
            <g key={o.name}>
              <line x1={BUS_X} y1={cy} x2={OUTCOME_X} y2={cy} stroke="#52534e" strokeWidth="1" markerEnd="url(#lc-arr)" />
              <rect x={OUTCOME_X} y={o.y} width={OUTCOME_W} height={OUTCOME_H} rx={6} className={o.cls} />
              <text x={OUTCOME_CX} y={o.y + OUTCOME_H / 2 + 3} textAnchor="middle" className="cb-lc-outcome-name">
                {o.name}
              </text>
              <text x={OUTCOME_CX} y={o.y + OUTCOME_H / 2 + 15} textAnchor="middle" className="cb-lc-outcome-sub">
                {o.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
