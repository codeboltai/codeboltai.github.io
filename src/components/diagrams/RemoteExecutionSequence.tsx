import React from 'react';
import './diagrams.css';

const W = 1220;
const H = 930;

const CX = [110, 330, 560, 850, 1080] as const;
const ACTOR_W = 170;
const ACTOR_H = 58;
const ACTOR_Y = 64;
const LIFELINE_Y2 = 854;

const ACTIVE_SET = new Set([2, 3, 4]);

type ActorStyle = 'ext' | 'server' | 'focal' | 'normal';
const ACTORS: { badge: string; name: string; sub: string; style: ActorStyle }[] = [
  { badge: 'APP', name: 'Codebolt Surface', sub: 'desktop / web / cli', style: 'ext' },
  { badge: 'EXT', name: 'External System', sub: 'LLM or remote backend', style: 'ext' },
  { badge: 'GW', name: 'Remote Execution Gateway', sub: 'claiming plugin', style: 'focal' },
  { badge: 'SRV', name: 'Server', sub: 'router + proxy config', style: 'server' },
  { badge: 'AGT', name: 'Agent', sub: 'autospawned by server', style: 'normal' },
];

type MsgStyle = 'normal' | 'return' | 'accent' | 'notify' | 'self';
interface Msg {
  from: number;
  to: number;
  label: string;
  lw: number;
  y: number;
  style: MsgStyle;
}

const MSGS: Msg[] = [
  { from: 2, to: 3, label: 'CONNECT /plugin', lw: 108, y: 152, style: 'normal' },
  { from: 3, to: 2, label: 'claim + subscribe OK', lw: 146, y: 186, style: 'return' },

  { from: 0, to: 3, label: 'SEND PROMPT', lw: 98, y: 248, style: 'normal' },
  { from: 3, to: 3, label: 'select env + spawn agent', lw: 154, y: 292, style: 'self' },
  { from: 3, to: 4, label: 'initial objective / auto-push', lw: 176, y: 340, style: 'normal' },

  { from: 4, to: 3, label: 'Inference / Ask LLM', lw: 142, y: 470, style: 'normal' },
  { from: 3, to: 3, label: 'read proxy config → proxy', lw: 166, y: 514, style: 'self' },
  { from: 3, to: 2, label: 'executionGateway.request', lw: 176, y: 560, style: 'normal' },
  { from: 2, to: 1, label: 'process directly OR forward', lw: 176, y: 596, style: 'normal' },
  { from: 1, to: 2, label: 'model / backend result', lw: 150, y: 632, style: 'return' },
  { from: 2, to: 3, label: 'executionGateway.reply', lw: 152, y: 668, style: 'accent' },
  { from: 3, to: 4, label: 'LLM result', lw: 88, y: 704, style: 'accent' },
  { from: 3, to: 0, label: 'stream / status update', lw: 136, y: 704, style: 'notify' },

  { from: 4, to: 3, label: 'readFile / local op', lw: 126, y: 782, style: 'normal' },
  { from: 3, to: 3, label: 'read proxy config → local', lw: 166, y: 818, style: 'self' },
  { from: 3, to: 4, label: 'tool result', lw: 92, y: 854, style: 'return' },
  { from: 3, to: 2, label: 'executionGateway.notification', lw: 196, y: 854, style: 'notify' },
  { from: 2, to: 1, label: 'optional mirror / audit', lw: 148, y: 888, style: 'notify' },
];

function ax(idx: number, isStart: boolean, goingRight: boolean): number {
  const cx = CX[idx];
  if (!ACTIVE_SET.has(idx)) return cx;
  return goingRight
    ? isStart ? cx + 4 : cx - 4
    : isStart ? cx - 4 : cx + 4;
}

export default function RemoteExecutionSequence() {
  const lifelineY1 = ACTOR_Y + ACTOR_H;

  return (
    <div className="cb-diagram cb-diagram--sequence">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="remote-exec-seq-title">
        <title id="remote-exec-seq-title">
          Sequence diagram for remote execution: server-spawned agent startup, proxy execution
          config lookup, proxied ask-LLM execution through the remote execution gateway, and
          notification broadcasts for locally executed operations.
        </title>

        <defs>
          <pattern id="seq-dots-remote" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="seq-arr-r" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#52534e" />
          </marker>
          <marker id="seq-arr-r-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f7591f" />
          </marker>
          <marker id="seq-arr-r-n" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#0ea5e9" />
          </marker>
        </defs>

        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#seq-dots-remote)" opacity="0.5" />

        {[224, 438, 746].map((y) => (
          <line
            key={`sep-${y}`}
            x1={8}
            y1={y}
            x2={W - 8}
            y2={y}
            stroke="rgba(11,13,11,0.07)"
            strokeWidth="0.8"
            strokeDasharray="3 4"
          />
        ))}

        <text x={8} y={142} className="cb-seq-eyebrow">01 · REGISTER</text>
        <text x={8} y={238} className="cb-seq-eyebrow">02 · SPAWN + DELIVER PROMPT</text>
        <text x={8} y={458} className="cb-seq-eyebrow">03 · PROXY DECISION + ASK LLM</text>
        <text x={8} y={766} className="cb-seq-eyebrow">04 · LOCAL DECISION + NOTIFICATION</text>

        <rect
          x={54}
          y={452}
          width={W - 108}
          height={286}
          rx={4}
          fill="rgba(247,89,31,0.04)"
          stroke="rgba(247,89,31,0.14)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x={W - 54} y={466} textAnchor="end" className="cb-seq-loop-band-label">
          PROXY PATH
        </text>

        <rect
          x={54}
          y={760}
          width={W - 108}
          height={136}
          rx={4}
          fill="rgba(14,165,233,0.04)"
          stroke="rgba(14,165,233,0.18)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x={W - 54} y={774} textAnchor="end" className="cb-seq-loop-band-label">
          NOTIFICATION PATH
        </text>

        <rect
          x={710}
          y={400}
          width={280}
          height={42}
          rx={4}
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(160,160,154,0.28)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x={850} y={417} textAnchor="middle" className="cb-seq-eyebrow">
          PROXY EXECUTION CONFIG
        </text>
        <text x={850} y={434} textAnchor="middle" className="cb-seq-legend-label">
          server reads `.codebolt/proxyExecution.json`
        </text>

        {CX.map((cx, i) => (
          <line key={`ll-${i}`} x1={cx} y1={lifelineY1} x2={cx} y2={LIFELINE_Y2} className="cb-seq-lifeline" />
        ))}

        <rect x={CX[2] - 4} y={152} width={8} height={888 - 152} className="cb-seq-activation" />
        <rect x={CX[3] - 4} y={152} width={8} height={888 - 152} className="cb-seq-activation" />
        <rect x={CX[4] - 4} y={340} width={8} height={854 - 340} className="cb-seq-activation" />

        {MSGS.map((m, i) => {
          const isAccent = m.style === 'accent';
          const isNotify = m.style === 'notify';
          const isReturn = m.style === 'return';

          const edgeCls = isAccent ? 'cb-seq-edge--accent'
            : isNotify ? 'cb-seq-edge--notify'
            : isReturn ? 'cb-seq-edge--return'
            : 'cb-seq-edge';
          const arrId = isAccent ? 'url(#seq-arr-r-a)'
            : isNotify ? 'url(#seq-arr-r-n)'
            : 'url(#seq-arr-r)';
          const labelCls = isAccent ? 'cb-seq-label cb-seq-label--accent'
            : isNotify ? 'cb-seq-label cb-seq-label--notify'
            : 'cb-seq-label';

          if (m.style === 'self') {
            const cx = CX[m.from];
            return (
              <g key={i}>
                <path
                  d={`M ${cx + 4} ${m.y} L ${cx + 44} ${m.y} L ${cx + 44} ${m.y + 16} L ${cx + 4} ${m.y + 16}`}
                  className={edgeCls}
                  markerEnd={arrId}
                  fill="none"
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

        {ACTORS.map((a, i) => {
          const cx = CX[i];
          const bx = cx - ACTOR_W / 2;
          const badgeRectCls = a.style === 'ext' ? 'cb-seq-badge-rect cb-seq-badge-rect--ext'
            : a.style === 'focal' ? 'cb-seq-badge-rect cb-seq-badge-rect--focal'
            : 'cb-seq-badge-rect';
          const badgeTextCls = a.style === 'focal' ? 'cb-seq-badge-text cb-seq-badge-text--focal' : 'cb-seq-badge-text';

          return (
            <g key={i}>
              <rect x={bx} y={ACTOR_Y} width={ACTOR_W} height={ACTOR_H} rx={6} className="cb-lc-paper" />
              <rect x={bx} y={ACTOR_Y} width={ACTOR_W} height={ACTOR_H} rx={6} className={`cb-seq-actor--${a.style}`} />
              <rect x={bx + 10} y={ACTOR_Y + 8} width={32} height={12} rx={2} className={badgeRectCls} />
              <text x={bx + 26} y={ACTOR_Y + 18} textAnchor="middle" className={badgeTextCls}>{a.badge}</text>
              <text x={cx} y={ACTOR_Y + 35} textAnchor="middle" className="cb-seq-actor-name">{a.name}</text>
              <text x={cx} y={ACTOR_Y + 50} textAnchor="middle" className="cb-seq-actor-sub">{a.sub}</text>
            </g>
          );
        })}

        <line x1={40} y1={830} x2={W - 40} y2={830} stroke="rgba(11,13,11,0.10)" strokeWidth="0.8" />
        <text x={40} y={846} className="cb-seq-eyebrow">KEY IDEA</text>
        <text x={40} y={866} className="cb-seq-legend-label">
          The server reads proxy config on each message, decides `proxy` vs `local`, and remains the hub.
        </text>
        <text x={705} y={866} className="cb-seq-legend-label">
          `executionGateway.request/reply` is the proxy path. `executionGateway.notification` is the local mirror path.
        </text>
      </svg>
    </div>
  );
}
