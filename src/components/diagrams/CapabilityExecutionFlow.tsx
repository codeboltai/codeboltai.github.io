import React from 'react';
import './diagrams.css';

/**
 * CapabilityExecutionFlow — sequence diagram showing the full lifecycle
 * of a capability execution: Agent → CapabilityManager → SideExecutionManager
 * → Executor (child process) → codeboltjs → result.
 */

const W = 900;
const H = 680;

const CX = [100, 310, 530, 760] as const;
const ACTOR_W = 150;
const ACTOR_H = 52;
const ACTOR_Y = 50;
const LIFELINE_Y2 = 610;

const ACTORS: { badge: string; name: string; sub: string; style: 'focal' | 'server' | 'ext' | 'normal' }[] = [
  { badge: 'AGENT', name: 'Parent Agent', sub: 'codebolt.capability', style: 'focal' },
  { badge: 'MGR', name: 'CapabilityMgr', sub: 'manager + registry', style: 'server' },
  { badge: 'SIDE', name: 'SideExecMgr', sub: 'process manager', style: 'server' },
  { badge: 'EXEC', name: 'Executor', sub: 'child process · codeboltjs', style: 'normal' },
];

type MsgStyle = 'normal' | 'return' | 'accent' | 'self';
interface Msg {
  from: number; to: number;
  label: string; lw: number;
  y: number; style: MsgStyle;
}

const MSGS: Msg[] = [
  // Phase 1: Start
  { from: 0, to: 1, label: 'startCapability(name, type, params)', lw: 220, y: 140, style: 'normal' },
  { from: 1, to: 1, label: 'lookup executor for type', lw: 140, y: 170, style: 'self' },
  { from: 1, to: 1, label: 'lookup capability by name', lw: 148, y: 200, style: 'self' },
  { from: 1, to: 1, label: 'build threadContext', lw: 118, y: 230, style: 'self' },

  // Phase 2: Spawn
  { from: 1, to: 2, label: 'startSideExecution(executor, params)', lw: 218, y: 270, style: 'normal' },
  { from: 2, to: 3, label: 'spawn child process + env vars', lw: 186, y: 304, style: 'normal' },
  { from: 3, to: 2, label: 'WebSocket connect (auto)', lw: 164, y: 338, style: 'return' },
  { from: 2, to: 3, label: 'actionBlockInvocation', lw: 148, y: 372, style: 'normal' },

  // Phase 3: Execute
  { from: 3, to: 3, label: 'onActionBlockInvocation()', lw: 156, y: 406, style: 'self' },
  { from: 3, to: 3, label: 'run capability logic', lw: 128, y: 436, style: 'self' },
  { from: 3, to: 3, label: 'codebolt.fs / terminal / ...', lw: 170, y: 466, style: 'self' },

  // Phase 4: Result
  { from: 3, to: 2, label: 'actionBlockComplete + result', lw: 186, y: 504, style: 'accent' },
  { from: 2, to: 1, label: 'sideExecutionCompleted', lw: 152, y: 538, style: 'accent' },
  { from: 1, to: 0, label: 'result + additionalContext', lw: 168, y: 572, style: 'accent' },
];

function ax(idx: number, isStart: boolean, goingRight: boolean): number {
  const cx = CX[idx];
  const ACTIVE = new Set([1, 2]);
  if (!ACTIVE.has(idx)) return cx;
  return goingRight
    ? isStart ? cx + 4 : cx - 4
    : isStart ? cx - 4 : cx + 4;
}

export default function CapabilityExecutionFlow() {
  const lifelineY1 = ACTOR_Y + ACTOR_H;

  return (
    <div className="cb-diagram cb-diagram--sequence">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="cap-exec-title">
        <title id="cap-exec-title">
          Capability execution flow: agent → manager → side execution → executor → result
        </title>

        <defs>
          <pattern id="cap-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="cap-arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#52534e" />
          </marker>
          <marker id="cap-arr-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f7591f" />
          </marker>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#cap-dots)" opacity="0.5" />

        {/* Phase separators */}
        {[255, 390, 490].map((y) => (
          <line key={`sep-${y}`} x1={8} y1={y} x2={W - 8} y2={y}
            stroke="rgba(11,13,11,0.07)" strokeWidth="0.8" strokeDasharray="3 4" />
        ))}

        {/* Phase labels */}
        <text x={8} y={128} className="cb-seq-eyebrow">01 · RESOLVE</text>
        <text x={8} y={268} className="cb-seq-eyebrow">02 · SPAWN</text>
        <text x={8} y={400} className="cb-seq-eyebrow">03 · EXECUTE</text>
        <text x={8} y={498} className="cb-seq-eyebrow">04 · RESULT</text>

        {/* Lifelines */}
        {CX.map((cx, i) => (
          <line key={`ll-${i}`} x1={cx} y1={lifelineY1} x2={cx} y2={LIFELINE_Y2} className="cb-seq-lifeline" />
        ))}

        {/* Activation bars */}
        <rect x={CX[1] - 4} y={140} width={8} height={572 - 140} className="cb-seq-activation" />
        <rect x={CX[2] - 4} y={270} width={8} height={538 - 270} className="cb-seq-activation" />

        {/* Messages */}
        {MSGS.map((m, i) => {
          const isAccent = m.style === 'accent';
          const isReturn = m.style === 'return';

          const edgeCls = isAccent ? 'cb-seq-edge--accent'
            : isReturn ? 'cb-seq-edge--return'
            : 'cb-seq-edge';
          const arrId = isAccent ? 'url(#cap-arr-a)' : 'url(#cap-arr)';
          const labelCls = isAccent ? 'cb-seq-label cb-seq-label--accent' : 'cb-seq-label';

          if (m.style === 'self') {
            const cx = CX[m.from];
            return (
              <g key={i}>
                <path
                  d={`M ${cx + 4} ${m.y} L ${cx + 44} ${m.y} L ${cx + 44} ${m.y + 16} L ${cx + 4} ${m.y + 16}`}
                  className={edgeCls} markerEnd={arrId} fill="none"
                />
                <text x={cx + 52} y={m.y + 11} className={labelCls}>{m.label}</text>
              </g>
            );
          }

          const goingRight = m.to > m.from;
          const x1 = ax(m.from, true, goingRight);
          const x2 = ax(m.to, false, goingRight);
          const midX = (CX[m.from] + CX[m.to]) / 2;

          return (
            <g key={i}>
              <line x1={x1} y1={m.y} x2={x2} y2={m.y} className={edgeCls} markerEnd={arrId} />
              <rect x={midX - m.lw / 2} y={m.y - 17} width={m.lw} height={12} rx={2} className="cb-seq-label-bg" />
              <text x={midX} y={m.y - 7} textAnchor="middle" className={labelCls}>{m.label}</text>
            </g>
          );
        })}

        {/* Actor boxes */}
        {ACTORS.map((a, i) => {
          const cx = CX[i];
          const bx = cx - ACTOR_W / 2;
          const badgeRectCls = a.style === 'focal' ? 'cb-seq-badge-rect cb-seq-badge-rect--focal'
            : 'cb-seq-badge-rect';
          const badgeTextCls = a.style === 'focal' ? 'cb-seq-badge-text cb-seq-badge-text--focal' : 'cb-seq-badge-text';
          return (
            <g key={i}>
              <rect x={bx} y={ACTOR_Y} width={ACTOR_W} height={ACTOR_H} rx={6} className="cb-lc-paper" />
              <rect x={bx} y={ACTOR_Y} width={ACTOR_W} height={ACTOR_H} rx={6} className={`cb-seq-actor--${a.style}`} />
              <rect x={bx + 8} y={ACTOR_Y + 7} width={38} height={12} rx={2} className={badgeRectCls} />
              <text x={bx + 27} y={ACTOR_Y + 17} textAnchor="middle" className={badgeTextCls}>{a.badge}</text>
              <text x={cx} y={ACTOR_Y + 32} textAnchor="middle" className="cb-seq-actor-name">{a.name}</text>
              <text x={cx} y={ACTOR_Y + 46} textAnchor="middle" className="cb-seq-actor-sub">{a.sub}</text>
            </g>
          );
        })}

        {/* Legend */}
        <line x1={40} y1={624} x2={W - 40} y2={624} stroke="rgba(11,13,11,0.10)" strokeWidth="0.8" />
        <text x={40} y={640} className="cb-seq-eyebrow">LEGEND</text>

        <line x1={40} y1={658} x2={68} y2={658} className="cb-seq-edge" markerEnd="url(#cap-arr)" />
        <text x={76} y={661} className="cb-seq-legend-label">Request / call</text>

        <line x1={220} y1={658} x2={248} y2={658} className="cb-seq-edge--return" markerEnd="url(#cap-arr)" />
        <text x={256} y={661} className="cb-seq-legend-label">Return / async</text>

        <line x1={410} y1={658} x2={438} y2={658} className="cb-seq-edge--accent" markerEnd="url(#cap-arr-a)" />
        <text x={446} y={661} className="cb-seq-legend-label">Result / completion</text>

        <rect x={640} y={651} width={4} height={14} className="cb-seq-activation" />
        <text x={652} y={661} className="cb-seq-legend-label">Active</text>
      </svg>
    </div>
  );
}
