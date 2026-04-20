import React from 'react';
import './diagrams.css';

/**
 * Agent Sequence — corrected architecture:
 * - Tool execution happens ON the server (executeToolService)
 * - LLM calls are proxied BY the server (llmService → LLM Provider API)
 * - Every tool result and LLM response triggers sendResponseAndNotify:
 *   simultaneously sends to Agent (ws.send) AND broadcasts to UI (broadcastNotification)
 */

const W = 1000;
const H = 762;

// Actor x-centres: Client | Server | Agent | LLM Provider
const CX = [80, 350, 650, 920] as const;
const ACTOR_W = 160;
const ACTOR_H = 56;
const ACTOR_Y = 64;
const LIFELINE_Y2 = 692;

const ACTIVE_SET = new Set([1, 2]); // Server and Agent have activation bars

type ActorStyle = 'ext' | 'server' | 'focal' | 'normal';
const ACTORS: { badge: string; name: string; sub: string; style: ActorStyle }[] = [
  { badge: 'EXT',  name: 'Client',       sub: 'browser · IDE',            style: 'ext'    },
  { badge: 'SRV',  name: 'Server',       sub: 'llmService · toolService', style: 'server' },
  { badge: 'PROC', name: 'Agent',        sub: 'your handler',             style: 'focal'  },
  { badge: 'API',  name: 'LLM Provider', sub: 'OpenAI · Anthropic',       style: 'normal' },
];

type MsgStyle = 'normal' | 'return' | 'accent' | 'notify' | 'self';
interface Msg {
  from: number; to: number;
  label: string; lw: number;
  y: number; style: MsgStyle;
}

// NOTE 1: After fork, the server auto-pushes userMsg on connect — agent never polls for it.
//         codeboltjs SDK connects via WebSocket and registers onMessage(); server pushes
//         a messageResponse immediately via agentEventQueueSocketHandler.onAgentConnected().
// NOTE 2: pairs at the same y represent sendResponseAndNotify —
//         server sends to Agent (ws.send) AND broadcasts to Client simultaneously.
const MSGS: Msg[] = [
  // ── Phase 1: Spawn ──────────────────────────────────────────
  { from: 0, to: 1, label: 'SEND MESSAGE',           lw: 112, y: 148, style: 'normal' },
  { from: 1, to: 1, label: 'START RUN',              lw:  80, y: 183, style: 'self'   },
  { from: 1, to: 2, label: 'FORK PROCESS',           lw:  96, y: 218, style: 'normal' },
  // Agent SDK auto-connects; server pushes message immediately on connect
  { from: 1, to: 2, label: 'userMsg · auto-push',    lw: 136, y: 252, style: 'return' },
  // ── Phase 2: First LLM call ─────────────────────────────────
  { from: 2, to: 1, label: 'Inference · llm.chat()', lw: 152, y: 300, style: 'normal' },
  { from: 1, to: 3, label: 'API REQUEST',            lw:  92, y: 332, style: 'normal' },
  { from: 3, to: 1, label: 'LLM RESP · tool_calls[]', lw: 156, y: 364, style: 'return' },
  // sendResponseAndNotify — same y: Agent gets LLM response, Client gets stream
  { from: 1, to: 2, label: 'LLM RESP · tool_calls[]', lw: 156, y: 398, style: 'return' },
  { from: 1, to: 0, label: 'LLM STREAM',              lw:  92, y: 398, style: 'notify' },
  // ── Phase 3: Agent decides to execute tool ──────────────────
  { from: 2, to: 1, label: 'EXECUTE read_file',       lw: 124, y: 438, style: 'normal' },
  // sendResponseAndNotify — same y: Agent gets tool result, Client gets broadcast
  { from: 1, to: 2, label: 'tool result',            lw: 100, y: 474, style: 'return' },
  { from: 1, to: 0, label: 'TOOL ACTIVITY',          lw: 104, y: 474, style: 'notify' },
  // ── Phase 4: Second LLM call ────────────────────────────────
  { from: 2, to: 1, label: 'Inference · + result',   lw: 136, y: 508, style: 'normal' },
  { from: 1, to: 3, label: 'API REQUEST',            lw:  92, y: 540, style: 'normal' },
  { from: 3, to: 1, label: 'FINAL ANSWER',           lw: 100, y: 572, style: 'accent' },
  // sendResponseAndNotify — same y: Agent gets answer, Client gets stream
  { from: 1, to: 2, label: 'FINAL ANSWER',           lw: 100, y: 606, style: 'accent' },
  { from: 1, to: 0, label: 'LLM STREAM',             lw:  88, y: 606, style: 'notify' },
  // ── Phase 5: Deliver to chat ────────────────────────────────
  { from: 2, to: 1, label: 'sendMessage(text)',      lw: 128, y: 644, style: 'normal' },
  { from: 1, to: 0, label: 'CHAT MESSAGE',           lw: 112, y: 676, style: 'accent' },
];

function ax(idx: number, isStart: boolean, goingRight: boolean): number {
  const cx = CX[idx];
  if (!ACTIVE_SET.has(idx)) return cx;
  return goingRight
    ? isStart ? cx + 4 : cx - 4
    : isStart ? cx - 4 : cx + 4;
}

export default function AgentSequence() {
  const lifelineY1 = ACTOR_Y + ACTOR_H;

  return (
    <div className="cb-diagram cb-diagram--sequence">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="agent-seq-title">
        <title id="agent-seq-title">
          Agent run end-to-end: spawn, LLM proxy, tool execution, UI broadcast, chat reply
        </title>

        <defs>
          <pattern id="seq-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="seq-arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#52534e" />
          </marker>
          <marker id="seq-arr-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f7591f" />
          </marker>
          <marker id="seq-arr-n" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#0ea5e9" />
          </marker>
        </defs>

        {/* Paper background + dot grid */}
        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#seq-dots)" opacity="0.5" />

        {/* Phase separators */}
        {[276, 418, 491, 625].map((y) => (
          <line key={`sep-${y}`} x1={8} y1={y} x2={W - 8} y2={y}
            stroke="rgba(11,13,11,0.07)" strokeWidth="0.8" strokeDasharray="3 4" />
        ))}

        {/* Phase labels */}
        <text x={8} y={138} className="cb-seq-eyebrow">01 · SPAWN</text>
        <text x={8} y={288} className="cb-seq-eyebrow">02 · LLM CALL</text>
        <text x={8} y={430} className="cb-seq-eyebrow">03 · TOOL EXEC</text>
        <text x={8} y={503} className="cb-seq-eyebrow">04 · LLM CALL</text>
        <text x={8} y={637} className="cb-seq-eyebrow">05 · DELIVER</text>

        {/* Agent-loop highlight band (phases 2–4) */}
        <rect
          x={40} y={284} width={W - 80} height={340}
          rx={4}
          fill="rgba(247,89,31,0.04)"
          stroke="rgba(247,89,31,0.14)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x={W - 48} y={298} textAnchor="end" className="cb-seq-loop-band-label">
          AGENT LOOP
        </text>

        {/* Lifelines */}
        {CX.map((cx, i) => (
          <line key={`ll-${i}`} x1={cx} y1={lifelineY1} x2={cx} y2={LIFELINE_Y2} className="cb-seq-lifeline" />
        ))}

        {/* Activation bars — Server and Agent */}
        <rect x={CX[1] - 4} y={148} width={8} height={676 - 148} className="cb-seq-activation" />
        <rect x={CX[2] - 4} y={218} width={8} height={676 - 218} className="cb-seq-activation" />

        {/* Messages */}
        {MSGS.map((m, i) => {
          const isAccent = m.style === 'accent';
          const isNotify = m.style === 'notify';
          const isReturn = m.style === 'return';

          const edgeCls = isAccent ? 'cb-seq-edge--accent'
            : isNotify ? 'cb-seq-edge--notify'
            : isReturn ? 'cb-seq-edge--return'
            : 'cb-seq-edge';
          const arrId = isAccent ? 'url(#seq-arr-a)'
            : isNotify ? 'url(#seq-arr-n)'
            : 'url(#seq-arr)';
          const labelCls = isAccent ? 'cb-seq-label cb-seq-label--accent'
            : isNotify ? 'cb-seq-label cb-seq-label--notify'
            : 'cb-seq-label';

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

        {/* Actor boxes — drawn last, on top of lifelines */}
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

        {/* Legend */}
        <line x1={40} y1={704} x2={W - 40} y2={704} stroke="rgba(11,13,11,0.10)" strokeWidth="0.8" />
        <text x={40} y={720} className="cb-seq-eyebrow">LEGEND</text>

        <rect x={40} y={734} width={14} height={10} rx={2} fill="rgba(247,89,31,0.08)" stroke="#f7591f" strokeWidth="1" />
        <text x={62} y={743} className="cb-seq-legend-label">Focal actor</text>

        <rect x={192} y={731} width={4} height={16} className="cb-seq-activation" />
        <text x={204} y={743} className="cb-seq-legend-label">Active</text>

        <line x1={296} y1={740} x2={324} y2={740} className="cb-seq-edge" markerEnd="url(#seq-arr)" />
        <text x={332} y={743} className="cb-seq-legend-label">Request / call</text>

        <line x1={468} y1={740} x2={496} y2={740} className="cb-seq-edge--return" markerEnd="url(#seq-arr)" />
        <text x={504} y={743} className="cb-seq-legend-label">Return / async</text>

        <line x1={640} y1={740} x2={668} y2={740} className="cb-seq-edge--notify" markerEnd="url(#seq-arr-n)" />
        <text x={676} y={743} className="cb-seq-legend-label">UI broadcast</text>

        <line x1={796} y1={740} x2={824} y2={740} className="cb-seq-edge--accent" markerEnd="url(#seq-arr-a)" />
        <text x={832} y={743} className="cb-seq-legend-label">Primary response</text>
      </svg>
    </div>
  );
}
