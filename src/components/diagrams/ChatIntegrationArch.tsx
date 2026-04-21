import React from 'react';
import './diagrams.css';

/**
 * Chat Integration Architecture:
 * External Platforms → Channel Plugin (WebSocket /plugin) → Codebolt Server
 * (Plugin Socket → Gateway Handler → Routing Gateway → Response Router)
 * → Agent Process → reply path back up
 */

const W = 840;
const H = 590;

const LAYER_W = 700;
const LX = (W - LAYER_W) / 2;   // 70
const RX = LX + LAYER_W;         // 770
const CX = W / 2;                // 420

const ARR_L = CX - 80;           // 340 — request arrows (down)
const ARR_R = CX + 80;           // 500 — reply arrows (up)

// Layer top-y and heights
const Y1 = 28;  const H1 = 64;   // External Platforms  → bottom 92
const Y2 = 144; const H2 = 88;   // Channel Plugin      → bottom 232
const Y3 = 284; const H3 = 192;  // Codebolt Server     → bottom 476
const Y4 = 528; const H4 = 52;   // Agent Process       → bottom 580

// Platform pills
const PLATS = ['Discord', 'Slack', 'Telegram', 'Custom'];
const PLAT_W = 120;
const PLAT_H = 36;
const PLAT_GAP = 24;
const PLAT_START = LX + (LAYER_W - (PLATS.length * PLAT_W + (PLATS.length - 1) * PLAT_GAP)) / 2;

// Server sub-boxes
const SRV_SUBS = [
  { badge: 'SOCK', name: 'Plugin Socket',   sub: '/plugin WS endpoint' },
  { badge: 'GW',   name: 'Gateway Handler', sub: 'route · register'    },
  { badge: 'RT',   name: 'Routing Gateway', sub: 'thread · agent'      },
  { badge: 'RS',   name: 'Response Router', sub: 'intercept · dispatch' },
];
const SUB_GAP = 8;
const SUB_W = (LAYER_W - 24 - (SRV_SUBS.length - 1) * SUB_GAP) / SRV_SUBS.length; // ~163
const SUB_H = 72;
const SUB_Y = Y3 + 36;

function arrowMidY(y1: number, y2: number) { return (y1 + y2) / 2; }

export default function ChatIntegrationArch() {
  return (
    <div className="cb-diagram cb-diagram--arch">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="chat-arch-title">
        <title id="chat-arch-title">
          Chat Integration Architecture: platforms → plugin → server gateway → agent
        </title>

        <defs>
          <pattern id="arch-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="arch-arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#52534e" />
          </marker>
          <marker id="arch-arr-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f7591f" />
          </marker>
          <marker id="arch-arr-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#0ea5e9" />
          </marker>
          <marker id="arch-arr-sm" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <polygon points="0 0, 6 2.5, 0 5" fill="#52534e" />
          </marker>
        </defs>

        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#arch-dots)" opacity="0.5" />

        {/* ── Layer 1: External Platforms ── */}
        <rect x={LX} y={Y1} width={LAYER_W} height={H1} rx={6}
          fill="rgba(82,83,78,0.05)" stroke="rgba(82,83,78,0.28)" strokeWidth="1" />
        <text x={LX + 12} y={Y1 + 14} className="cb-seq-eyebrow">External Platforms</text>

        {PLATS.map((name, i) => {
          const px = PLAT_START + i * (PLAT_W + PLAT_GAP);
          const py = Y1 + (H1 - PLAT_H) / 2 + 4;
          return (
            <g key={name}>
              <rect x={px} y={py} width={PLAT_W} height={PLAT_H} rx={4}
                fill="rgba(255,255,255,0.75)" stroke="rgba(11,13,11,0.18)" strokeWidth="0.8" />
              <text x={px + PLAT_W / 2} y={py + PLAT_H / 2 + 5} textAnchor="middle"
                className="cb-lc-state-name">{name}</text>
            </g>
          );
        })}

        {/* Arrows: Platforms ↔ Plugin */}
        <line x1={ARR_L} y1={Y1 + H1} x2={ARR_L} y2={Y2}
          stroke="#52534e" strokeWidth="1.2" markerEnd="url(#arch-arr)" />
        <rect x={ARR_L - 48} y={arrowMidY(Y1 + H1, Y2) - 8} width={96} height={13} rx={2} className="cb-seq-label-bg" />
        <text x={ARR_L} y={arrowMidY(Y1 + H1, Y2) + 1} textAnchor="middle" className="cb-lc-edge-label">platform events</text>

        <line x1={ARR_R} y1={Y2} x2={ARR_R} y2={Y1 + H1}
          stroke="#0ea5e9" strokeWidth="1.2" markerEnd="url(#arch-arr-b)" />
        <rect x={ARR_R - 36} y={arrowMidY(Y1 + H1, Y2) - 8} width={72} height={13} rx={2} className="cb-seq-label-bg" />
        <text x={ARR_R} y={arrowMidY(Y1 + H1, Y2) + 1} textAnchor="middle"
          className="cb-seq-label cb-seq-label--notify">send reply</text>

        {/* ── Layer 2: Channel Plugin ── */}
        <rect x={LX} y={Y2} width={LAYER_W} height={H2} rx={6}
          fill="rgba(11,13,11,0.04)" stroke="rgba(11,13,11,0.22)" strokeWidth="1" />
        <rect x={LX + 10} y={Y2 + 8} width={44} height={13} rx={2}
          fill="transparent" stroke="rgba(11,13,11,0.35)" strokeWidth="0.8" />
        <text x={LX + 32} y={Y2 + 19} textAnchor="middle" className="cb-lc-badge-text">PLUGIN</text>
        <text x={CX} y={Y2 + 38} textAnchor="middle" className="cb-lc-state-name">Channel Plugin</text>
        <text x={CX} y={Y2 + 54} textAnchor="middle" className="cb-lc-state-sub">
          discord.js · @slack/bolt · grammy · custom SDK
        </text>
        <text x={LX + 16} y={Y2 + 78} className="cb-lc-footnote">gateway.routeMessage()</text>
        <text x={RX - 16} y={Y2 + 78} textAnchor="end" className="cb-lc-footnote">gateway.onReply()</text>

        {/* Arrows: Plugin ↔ Server */}
        <line x1={ARR_L} y1={Y2 + H2} x2={ARR_L} y2={Y3}
          stroke="#52534e" strokeWidth="1.2" markerEnd="url(#arch-arr)" />
        <rect x={ARR_L - 52} y={arrowMidY(Y2 + H2, Y3) - 8} width={104} height={13} rx={2} className="cb-seq-label-bg" />
        <text x={ARR_L} y={arrowMidY(Y2 + H2, Y3) + 1} textAnchor="middle" className="cb-lc-edge-label">WebSocket /plugin</text>

        <line x1={ARR_R} y1={Y3} x2={ARR_R} y2={Y2 + H2}
          stroke="#0ea5e9" strokeWidth="1.2" markerEnd="url(#arch-arr-b)" />
        <rect x={ARR_R - 40} y={arrowMidY(Y2 + H2, Y3) - 8} width={80} height={13} rx={2} className="cb-seq-label-bg" />
        <text x={ARR_R} y={arrowMidY(Y2 + H2, Y3) + 1} textAnchor="middle"
          className="cb-seq-label cb-seq-label--notify">gateway.reply</text>

        {/* ── Layer 3: Codebolt Server ── */}
        <rect x={LX} y={Y3} width={LAYER_W} height={H3} rx={6}
          fill="rgba(11,13,11,0.05)" stroke="rgba(11,13,11,0.26)" strokeWidth="1" />
        <rect x={LX + 10} y={Y3 + 8} width={32} height={13} rx={2} fill="rgba(11,13,11,0.18)" />
        <text x={LX + 26} y={Y3 + 19} textAnchor="middle" className="cb-arch-badge-inv">SRV</text>
        <text x={CX} y={Y3 + 30} textAnchor="middle" className="cb-lc-state-name">Codebolt Server</text>

        {/* Server sub-boxes */}
        {SRV_SUBS.map((s, i) => {
          const sx = LX + 12 + i * (SUB_W + SUB_GAP);
          const scx = sx + SUB_W / 2;
          return (
            <g key={s.badge}>
              <rect x={sx} y={SUB_Y} width={SUB_W} height={SUB_H} rx={4}
                fill="rgba(255,255,255,0.65)" stroke="rgba(11,13,11,0.15)" strokeWidth="0.8" />
              <rect x={sx + 8} y={SUB_Y + 8} width={28} height={11} rx={2}
                fill="transparent" stroke="rgba(11,13,11,0.28)" strokeWidth="0.7" />
              <text x={sx + 22} y={SUB_Y + 17} textAnchor="middle" className="cb-arch-sub-badge">{s.badge}</text>
              <text x={scx} y={SUB_Y + 38} textAnchor="middle" className="cb-lc-state-name">{s.name}</text>
              <text x={scx} y={SUB_Y + 52} textAnchor="middle" className="cb-lc-state-sub">{s.sub}</text>
            </g>
          );
        })}

        {/* Horizontal flow arrows between sub-boxes */}
        {[0, 1, 2].map((i) => {
          const x1 = LX + 12 + i * (SUB_W + SUB_GAP) + SUB_W;
          const x2 = x1 + SUB_GAP;
          const ay = SUB_Y + SUB_H / 2;
          return (
            <line key={i} x1={x1} y1={ay} x2={x2} y2={ay}
              stroke="#52534e" strokeWidth="0.8" markerEnd="url(#arch-arr-sm)" />
          );
        })}

        {/* Thread strategy + TTL notes */}
        <text x={CX} y={Y3 + H3 - 22} textAnchor="middle" className="cb-lc-state-sub">
          ThreadStrategy: per-user · per-conversation · per-message · single
        </text>
        <text x={CX} y={Y3 + H3 - 8} textAnchor="middle" className="cb-lc-state-sub">
          thread map persisted · response listeners 30 min TTL
        </text>

        {/* Arrows: Server ↔ Agent */}
        <line x1={ARR_L} y1={Y3 + H3} x2={ARR_L} y2={Y4}
          stroke="#f7591f" strokeWidth="1.4" markerEnd="url(#arch-arr-a)" />
        <rect x={ARR_L - 44} y={arrowMidY(Y3 + H3, Y4) - 8} width={88} height={13} rx={2} className="cb-seq-label-bg" />
        <text x={ARR_L} y={arrowMidY(Y3 + H3, Y4) + 1} textAnchor="middle"
          className="cb-seq-label cb-seq-label--accent">spawn · route</text>

        <line x1={ARR_R} y1={Y4} x2={ARR_R} y2={Y3 + H3}
          stroke="#52534e" strokeWidth="1.2" markerEnd="url(#arch-arr)" />
        <rect x={ARR_R - 44} y={arrowMidY(Y3 + H3, Y4) - 8} width={88} height={13} rx={2} className="cb-seq-label-bg" />
        <text x={ARR_R} y={arrowMidY(Y3 + H3, Y4) + 1} textAnchor="middle"
          className="cb-lc-edge-label">sendMessage()</text>

        {/* ── Layer 4: Agent Process ── */}
        <rect x={LX} y={Y4} width={LAYER_W} height={H4} rx={6}
          fill="rgba(247,89,31,0.08)" stroke="#f7591f" strokeWidth="1" />
        <rect x={LX + 10} y={Y4 + 8} width={44} height={13} rx={2}
          fill="transparent" stroke="rgba(247,89,31,0.5)" strokeWidth="0.8" />
        <text x={LX + 32} y={Y4 + 19} textAnchor="middle" className="cb-lc-badge-text" style={{ fill: '#f7591f' }}>PROC</text>
        <text x={CX} y={Y4 + 32} textAnchor="middle" className="cb-lc-state-name">Agent Process</text>
        <text x={CX} y={Y4 + 46} textAnchor="middle" className="cb-lc-state-sub">
          codebolt.onMessage() · processMessage() · sendMessage()
        </text>

        {/* Direction labels on left/right margins */}
        <text x={ARR_L - 8} y={Y1 + H1 + 12} textAnchor="end" className="cb-arch-dir-label">REQUEST ↓</text>
        <text x={ARR_R + 8} y={Y1 + H1 + 12} className="cb-arch-dir-label">↑ REPLY</text>
      </svg>
    </div>
  );
}
