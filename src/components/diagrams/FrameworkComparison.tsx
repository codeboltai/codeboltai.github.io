import React from 'react';
import './diagrams.css';

/**
 * Framework Comparison — where the agent runtime lives.
 *
 * Top row: the typical "framework runs in my app process" model
 * (LangChain, Mastra, Vercel AI SDK in their default shape).
 *
 * Bottom row: Codebolt's split — your app holds only the client SDK,
 * the agent code is your repo (loaded into the server), and the server
 * is started by the client-sdk locally or attached to a remote runtime.
 */

const W = 760;
const H = 520;

const cx = (x: number, w: number) => x + w / 2;

export default function FrameworkComparison() {
  return (
    <div className="cb-diagram cb-diagram--framework-comparison">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="framework-comparison-title"
      >
        <title id="framework-comparison-title">
          Where the agent runtime lives — traditional in-process framework versus
          Codebolt's app + server split
        </title>

        <defs>
          <marker
            id="fc-arrow"
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

        {/* ─────────────────── ROW 1 — Traditional ─────────────────── */}

        <text x="32" y="28" className="cb-section-label">
          TRADITIONAL FRAMEWORK · langchain · mastra · vercel ai sdk
        </text>

        {/* Outer App container */}
        <rect x="32" y="44" width="540" height="140" rx="6" className="cb-box" />
        <text x="48" y="64" className="cb-box-title">YOUR APP</text>
        <text x="48" y="78" className="cb-box-sub">next.js · express · worker</text>

        {/* Inner stack: agent + tools + memory + llm client */}
        {[
          { x: 50, label: 'AGENT CODE', sub: 'instructions · loop' },
          { x: 184, label: 'TOOLS', sub: 'fns · sdks' },
          { x: 318, label: 'MEMORY', sub: 'redis · pg · custom' },
          { x: 452, label: 'LLM CLIENT', sub: 'openai / anthropic' },
        ].map((c) => (
          <g key={c.label}>
            <rect x={c.x} y="98" width="120" height="68" rx="3" className="cb-box" />
            <text x={c.x + 60} y="124" textAnchor="middle" className="cb-box-title">
              {c.label}
            </text>
            <text x={c.x + 60} y="142" textAnchor="middle" className="cb-box-sub">
              {c.sub}
            </text>
          </g>
        ))}

        {/* Arrow → LLM provider */}
        <line
          x1="572"
          y1="114"
          x2="640"
          y2="114"
          className="cb-arrow"
          markerEnd="url(#fc-arrow)"
        />
        <rect x="640" y="80" width="96" height="68" rx="3" className="cb-box" />
        <text x="688" y="106" textAnchor="middle" className="cb-box-title">LLM</text>
        <text x="688" y="124" textAnchor="middle" className="cb-box-sub">provider</text>

        {/* Caption */}
        <text x="32" y="206" className="cb-axis-label">
          everything ships, scales, and observes inside your process — you wire memory,
          tools, traces, and queues yourself
        </text>

        {/* ─────────────────── DIVIDER ─────────────────── */}
        <line x1="32" y1="226" x2={W - 32} y2="226" className="cb-flow-line" />

        {/* ─────────────────── ROW 2 — Codebolt ─────────────────── */}

        <text x="32" y="252" className="cb-section-label">
          CODEBOLT FRAMEWORK · @codebolt/agent + @codebolt/client-sdk
        </text>

        {/* Agent code box — sits above the server; your repo, NOT inside the server */}
        <rect x="232" y="270" width="408" height="44" rx="4" className="cb-box" />
        <text x={cx(232, 408)} y="290" textAnchor="middle" className="cb-box-title">
          AGENT CODE · your repo · @codebolt/agent
        </text>
        <text x={cx(232, 408)} y="305" textAnchor="middle" className="cb-box-sub">
          ComposableAgent · tools · instructions · memory adapter
        </text>

        {/* Down arrow: agent code → server */}
        <line
          x1={cx(232, 408)}
          y1="314"
          x2={cx(232, 408)}
          y2="336"
          className="cb-arrow"
          markerEnd="url(#fc-arrow)"
        />
        <text x={cx(232, 408) + 8} y="328" className="cb-flow-label">
          loaded · run by
        </text>

        {/* Slim App box */}
        <rect x="32" y="338" width="160" height="140" rx="6" className="cb-box" />
        <text x="48" y="358" className="cb-box-title">YOUR APP</text>
        <text x="48" y="372" className="cb-box-sub">next.js · cli · worker</text>
        <rect x="48" y="386" width="128" height="76" rx="3" className="cb-box cb-box--accent" />
        <text x={cx(48, 128)} y="412" textAnchor="middle" className="cb-box-title">
          CLIENT SDK
        </text>
        <text x={cx(48, 128)} y="428" textAnchor="middle" className="cb-box-sub">
          rest · ws
        </text>
        <text x={cx(48, 128)} y="446" textAnchor="middle" className="cb-box-sub">
          spawns server
        </text>

        {/* Arrow app → server */}
        <line
          x1="192"
          y1="408"
          x2="232"
          y2="408"
          className="cb-arrow"
          markerEnd="url(#fc-arrow)"
        />

        {/* Codebolt Server box */}
        <rect
          x="232"
          y="338"
          width="408"
          height="140"
          rx="6"
          className="cb-box cb-box--accent"
        />
        <text x={cx(232, 408)} y="356" textAnchor="middle" className="cb-box-title">
          CODEBOLT SERVER
        </text>
        <text x={cx(232, 408)} y="370" textAnchor="middle" className="cb-box-sub">
          started by client-sdk · child process locally · or attached remotely
        </text>

        {/* Server chips: 6 in a 3x2 grid (no AGENT — it's outside) */}
        {[
          { x: 244, y: 384, label: 'TOOLS / MCP', sub: 'allowlist · servers' },
          { x: 376, y: 384, label: 'MEMORY', sub: 'kv · vector · kg · log' },
          { x: 508, y: 384, label: 'COORDINATION', sub: 'jobs · swarms · locks' },
          { x: 244, y: 426, label: 'OBSERVABILITY', sub: 'agent · ai · event log' },
          { x: 376, y: 426, label: 'MARKETPLACE', sub: 'install · publish' },
          { x: 508, y: 426, label: 'RUNTIME', sub: 'child · docker · e2b · cloud' },
        ].map((c) => (
          <g key={c.label}>
            <rect x={c.x} y={c.y} width="120" height="36" rx="2" className="cb-box" />
            <text x={c.x + 60} y={c.y + 15} textAnchor="middle" className="cb-box-title">
              {c.label}
            </text>
            <text x={c.x + 60} y={c.y + 29} textAnchor="middle" className="cb-box-sub">
              {c.sub}
            </text>
          </g>
        ))}

        {/* Arrow server → LLM */}
        <line
          x1="640"
          y1="408"
          x2="680"
          y2="408"
          className="cb-arrow"
          markerEnd="url(#fc-arrow)"
        />
        <rect x="680" y="374" width="56" height="68" rx="3" className="cb-box" />
        <text x="708" y="400" textAnchor="middle" className="cb-box-title">LLM</text>
        <text x="708" y="418" textAnchor="middle" className="cb-box-sub">provider</text>

        <text x="32" y="494" className="cb-axis-label">
          your app holds only the client — agent code is your repo, the server runs it
          locally as a child process or remotely (docker · e2b · cloud)
        </text>

        {/* Legend */}
        <g>
          <rect x="32" y="506" width="14" height="14" rx="2" className="cb-box cb-box--accent" />
          <text x="52" y="517" className="cb-legend">
            codebolt-owned surface
          </text>
          <line
            x1="200"
            y1="513"
            x2="226"
            y2="513"
            className="cb-arrow"
            markerEnd="url(#fc-arrow)"
          />
          <text x="234" y="517" className="cb-legend">
            data flow
          </text>
        </g>
      </svg>
    </div>
  );
}
