import React from 'react';
import './diagrams.css';

/**
 * System Architecture — the overview diagram for "Build on Codebolt".
 *
 * Central hub: the Codebolt server (the execution engine).
 * Around it: the four external extension surfaces developers build against.
 * Inside it: the internal subsystems, plus a caption listing the internal
 * extension points that extend the agent loop without rewriting it.
 *
 *   ┌─────────────────── CUSTOM UIs (clientsdk) ───────────────────┐
 *                              │ ws + http
 *   PROVIDERS ◄── ws proxy ──► SERVER ◄── ws protocol ──► CUSTOM AGENTS
 *   (e2b, remote                                          (codeboltjs
 *    codebolt)                                             + AI SDK / LC)
 *                              │ plugin bus
 *   └──────────────── PLUGINS (pluginSdk) ─────────────────────────┘
 *
 * Style follows FivePlanes / MemoryLayers / McpTopology:
 *  - thin 1px strokes, rounded small radii
 *  - dashed lines for "protocol / bus" edges, solid for data
 *  - one accent color (#0ea5e9) on flowing dots and active surface
 *  - hover a surface to highlight its wire
 */

const W = 760;
const H = 460;

// Layout (cx=380, cy=230)
const SERVER = { x: 280, y: 150, w: 200, h: 160 };
const UIS = { x: 260, y: 30, w: 240, h: 58 };       // top
const PROVIDERS = { x: 550, y: 195, w: 190, h: 72 }; // right
const AGENTS = { x: 260, y: 358, w: 240, h: 72 };    // bottom
const PLUGINS = { x: 20, y: 195, w: 190, h: 72 };    // left

// Inside-server chip grid
const CHIPS = [
  'EVENT LOG',
  'MEMORY',
  'CONTEXT',
  'TOOLS / MCP',
  'SUBAGENTS',
  'LLM / EMB',
  'SHADOW GIT',
  'GUARDRAILS',
];

// Helper: centered text positions
const cx = (b: { x: number; w: number }) => b.x + b.w / 2;
const cy = (b: { y: number; h: number }) => b.y + b.h / 2;

export default function SystemArchitecture() {
  // Chip layout: 2 columns x 4 rows inside the server
  const chipCols = 2;
  const chipRows = 4;
  const chipPadX = 12;
  const chipPadY = 36; // leaves room for the title at the top
  const chipGapX = 8;
  const chipGapY = 6;
  const chipAreaW = SERVER.w - chipPadX * 2;
  const chipAreaH = SERVER.h - chipPadY - 38; // room for footer caption
  const chipW = (chipAreaW - chipGapX * (chipCols - 1)) / chipCols;
  const chipH = (chipAreaH - chipGapY * (chipRows - 1)) / chipRows;

  return (
    <div className="cb-diagram cb-diagram--system">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="system-arch-title"
      >
        <title id="system-arch-title">Codebolt system architecture — server and extension surfaces</title>

        {/* arrow marker — reused from existing shared style */}
        <defs>
          <marker
            id="sys-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10" className="cb-sys-marker" />
          </marker>
        </defs>

        {/* ── Wires: surface → server ─────────────────────────── */}
        {/* Each wire is dashed (= protocol), with a label, and an animated accent dot. */}

        {/* UIs (top) → server */}
        <g className="cb-sys-wire" data-surface="uis">
          <line
            x1={cx(UIS)}
            y1={UIS.y + UIS.h}
            x2={cx(UIS)}
            y2={SERVER.y}
            className="cb-sys-line"
            markerEnd="url(#sys-arrow)"
            markerStart="url(#sys-arrow)"
          />
          <text
            x={cx(UIS) + 10}
            y={(UIS.y + UIS.h + SERVER.y) / 2 + 3}
            className="cb-sys-edge-label"
          >
            ws · http routes
          </text>
          <circle r="3" className="cb-sys-dot">
            <animate attributeName="cx" values={`${cx(UIS)};${cx(UIS)}`} dur="2.2s" repeatCount="indefinite" />
            <animate
              attributeName="cy"
              values={`${UIS.y + UIS.h};${SERVER.y}`}
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Plugins (left) → server */}
        <g className="cb-sys-wire" data-surface="plugins">
          <line
            x1={PLUGINS.x + PLUGINS.w}
            y1={cy(PLUGINS)}
            x2={SERVER.x}
            y2={cy(PLUGINS)}
            className="cb-sys-line"
            markerEnd="url(#sys-arrow)"
            markerStart="url(#sys-arrow)"
          />
          <text
            x={(PLUGINS.x + PLUGINS.w + SERVER.x) / 2}
            y={cy(PLUGINS) - 8}
            textAnchor="middle"
            className="cb-sys-edge-label"
          >
            plugin bus · ws
          </text>
          <circle r="3" className="cb-sys-dot">
            <animate
              attributeName="cx"
              values={`${PLUGINS.x + PLUGINS.w};${SERVER.x}`}
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${cy(PLUGINS)};${cy(PLUGINS)}`}
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Agents (bottom) → server */}
        <g className="cb-sys-wire" data-surface="agents">
          <line
            x1={cx(AGENTS)}
            y1={SERVER.y + SERVER.h}
            x2={cx(AGENTS)}
            y2={AGENTS.y}
            className="cb-sys-line"
            markerEnd="url(#sys-arrow)"
            markerStart="url(#sys-arrow)"
          />
          <text
            x={cx(AGENTS) + 10}
            y={(SERVER.y + SERVER.h + AGENTS.y) / 2 + 3}
            className="cb-sys-edge-label"
          >
            codeboltjs · ws
          </text>
          <circle r="3" className="cb-sys-dot">
            <animate
              attributeName="cx"
              values={`${cx(AGENTS)};${cx(AGENTS)}`}
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${SERVER.y + SERVER.h};${AGENTS.y}`}
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Providers (right) → server */}
        <g className="cb-sys-wire" data-surface="providers">
          <line
            x1={SERVER.x + SERVER.w}
            y1={cy(PROVIDERS)}
            x2={PROVIDERS.x}
            y2={cy(PROVIDERS)}
            className="cb-sys-line"
            markerEnd="url(#sys-arrow)"
            markerStart="url(#sys-arrow)"
          />
          <text
            x={(SERVER.x + SERVER.w + PROVIDERS.x) / 2}
            y={cy(PROVIDERS) - 8}
            textAnchor="middle"
            className="cb-sys-edge-label"
          >
            provider proxy · ws
          </text>
          <circle r="3" className="cb-sys-dot">
            <animate
              attributeName="cx"
              values={`${SERVER.x + SERVER.w};${PROVIDERS.x}`}
              dur="2.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${cy(PROVIDERS)};${cy(PROVIDERS)}`}
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* ── Central Server ──────────────────────────────────── */}
        <g className="cb-sys-server">
          <rect
            x={SERVER.x}
            y={SERVER.y}
            width={SERVER.w}
            height={SERVER.h}
            rx="4"
            className="cb-sys-server-rect"
          />
          <text x={cx(SERVER)} y={SERVER.y + 20} textAnchor="middle" className="cb-sys-server-title">
            CODEBOLT SERVER
          </text>
          <text x={cx(SERVER)} y={SERVER.y + 32} textAnchor="middle" className="cb-sys-server-sub">
            execution engine
          </text>

          {/* chips: internal subsystems */}
          {CHIPS.map((label, i) => {
            const col = i % chipCols;
            const row = Math.floor(i / chipCols);
            const x = SERVER.x + chipPadX + col * (chipW + chipGapX);
            const y = SERVER.y + chipPadY + row * (chipH + chipGapY);
            return (
              <g key={label} className="cb-sys-chip">
                <rect x={x} y={y} width={chipW} height={chipH} rx="2" className="cb-sys-chip-rect" />
                <text x={x + chipW / 2} y={y + chipH / 2 + 3} textAnchor="middle" className="cb-sys-chip-label">
                  {label}
                </text>
              </g>
            );
          })}

          {/* footer caption: internal extension points */}
          <text x={cx(SERVER)} y={SERVER.y + SERVER.h - 14} textAnchor="middle" className="cb-sys-server-foot">
            extend internally
          </text>
          <text x={cx(SERVER)} y={SERVER.y + SERVER.h - 4} textAnchor="middle" className="cb-sys-server-foot-sub">
            skills · processors · agent blocks · memory layout
          </text>
        </g>

        {/* ── Surface boxes ───────────────────────────────────── */}

        {/* Custom UIs */}
        <g className="cb-sys-surface" data-surface="uis">
          <rect
            x={UIS.x}
            y={UIS.y}
            width={UIS.w}
            height={UIS.h}
            rx="3"
            className="cb-sys-surface-rect"
          />
          <text x={cx(UIS)} y={UIS.y + 22} textAnchor="middle" className="cb-sys-surface-title">
            CUSTOM UIs
          </text>
          <text x={cx(UIS)} y={UIS.y + 40} textAnchor="middle" className="cb-sys-surface-sub">
            clientsdk · chat widgets · cli
          </text>
        </g>

        {/* Custom Agents */}
        <g className="cb-sys-surface" data-surface="agents">
          <rect
            x={AGENTS.x}
            y={AGENTS.y}
            width={AGENTS.w}
            height={AGENTS.h}
            rx="3"
            className="cb-sys-surface-rect"
          />
          <text x={cx(AGENTS)} y={AGENTS.y + 22} textAnchor="middle" className="cb-sys-surface-title">
            CUSTOM AGENTS
          </text>
          <text x={cx(AGENTS)} y={AGENTS.y + 40} textAnchor="middle" className="cb-sys-surface-sub">
            codeboltjs
          </text>
          <text x={cx(AGENTS)} y={AGENTS.y + 54} textAnchor="middle" className="cb-sys-surface-sub">
            + vercel ai sdk · langchain
          </text>
        </g>

        {/* Plugins */}
        <g className="cb-sys-surface" data-surface="plugins">
          <rect
            x={PLUGINS.x}
            y={PLUGINS.y}
            width={PLUGINS.w}
            height={PLUGINS.h}
            rx="3"
            className="cb-sys-surface-rect"
          />
          <text x={cx(PLUGINS)} y={PLUGINS.y + 22} textAnchor="middle" className="cb-sys-surface-title">
            PLUGINS
          </text>
          <text x={cx(PLUGINS)} y={PLUGINS.y + 40} textAnchor="middle" className="cb-sys-surface-sub">
            pluginSdk
          </text>
          <text x={cx(PLUGINS)} y={PLUGINS.y + 54} textAnchor="middle" className="cb-sys-surface-sub">
            hooks · ui ext · capabilities
          </text>
        </g>

        {/* Providers */}
        <g className="cb-sys-surface" data-surface="providers">
          <rect
            x={PROVIDERS.x}
            y={PROVIDERS.y}
            width={PROVIDERS.w}
            height={PROVIDERS.h}
            rx="3"
            className="cb-sys-surface-rect"
          />
          <text x={cx(PROVIDERS)} y={PROVIDERS.y + 20} textAnchor="middle" className="cb-sys-surface-title">
            REMOTE ENVIRONMENT
          </text>
          <text x={cx(PROVIDERS)} y={PROVIDERS.y + 34} textAnchor="middle" className="cb-sys-surface-title">
            PROVIDERS
          </text>
          <text x={cx(PROVIDERS)} y={PROVIDERS.y + 54} textAnchor="middle" className="cb-sys-surface-sub">
            e2b · k8s · ssh · llm · emb
          </text>
        </g>

        {/* ── Legend ──────────────────────────────────────────── */}
        <g className="cb-sys-legend">
          <line x1="20" y1={H - 14} x2="48" y2={H - 14} className="cb-sys-line cb-sys-line--legend" />
          <text x="54" y={H - 11} className="cb-sys-legend-label">
            protocol / bus
          </text>
          <circle cx="158" cy={H - 14} r="3" className="cb-sys-dot" />
          <text x="168" y={H - 11} className="cb-sys-legend-label">
            traffic
          </text>
          <rect x="220" y={H - 20} width="12" height="12" rx="2" className="cb-sys-chip-rect" />
          <text x="238" y={H - 11} className="cb-sys-legend-label">
            internal subsystem
          </text>
        </g>
      </svg>
    </div>
  );
}
