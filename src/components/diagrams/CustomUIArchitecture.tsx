import React from 'react';
import './diagrams.css';

const W = 820;
const H = 584;

const APP = { x: 60, y: 44, w: 700, h: 134 };
const SDK = { x: 170, y: 220, w: 480, h: 124 };
const SERVER = { x: 100, y: 398, w: 620, h: 136 };

const APP_SURFACES = [
  { x: 92, y: 108, w: 128, h: 38, title: 'React / Next', sub: 'dashboards' },
  { x: 242, y: 108, w: 128, h: 38, title: 'Vue / Svelte', sub: 'custom shells' },
  { x: 392, y: 108, w: 128, h: 38, title: 'Mobile / IDE', sub: 'device UX' },
  { x: 542, y: 108, w: 128, h: 38, title: 'CLI / TUI', sub: 'operator tools' },
];

const SERVER_MODULES = [
  { x: 132, y: 454, w: 132, h: 34, label: 'tasks' },
  { x: 278, y: 454, w: 132, h: 34, label: 'git' },
  { x: 424, y: 454, w: 132, h: 34, label: 'files' },
  { x: 570, y: 454, w: 118, h: 34, label: 'agents' },
  { x: 205, y: 498, w: 140, h: 24, label: 'projects' },
  { x: 365, y: 498, w: 140, h: 24, label: 'knowledge' },
  { x: 525, y: 498, w: 130, h: 24, label: 'browser / tools' },
];

export default function CustomUIArchitecture() {
  return (
    <div className="cb-diagram cb-diagram--customui">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="custom-ui-arch-title">
        <title id="custom-ui-arch-title">
          Custom UI architecture: your application shell connects through the client SDK to the Codebolt server over HTTP and WebSocket
        </title>

        <defs>
          <marker
            id="cb-cui-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10" className="cb-cui-arrowhead" />
          </marker>
        </defs>

        <text x={APP.x} y={24} className="cb-cui-eyebrow">You Build And Own This Surface</text>

        <g>
          <rect x={APP.x} y={APP.y} width={APP.w} height={APP.h} rx="6" className="cb-cui-app-rect" />
          <text x={APP.x + 22} y={APP.y + 26} className="cb-cui-title">
            Your Custom UI
          </text>
          <text x={APP.x + 22} y={APP.y + 46} className="cb-cui-sub">
            Branding, layout, routing, auth, and device-specific UX live here.
          </text>

          {APP_SURFACES.map((surface) => (
            <g key={surface.title}>
              <rect
                x={surface.x}
                y={surface.y}
                width={surface.w}
                height={surface.h}
                rx="4"
                className="cb-cui-surface-rect"
              />
              <text
                x={surface.x + surface.w / 2}
                y={surface.y + 16}
                textAnchor="middle"
                className="cb-cui-surface-title"
              >
                {surface.title}
              </text>
              <text
                x={surface.x + surface.w / 2}
                y={surface.y + 29}
                textAnchor="middle"
                className="cb-cui-surface-sub"
              >
                {surface.sub}
              </text>
            </g>
          ))}
        </g>

        <g>
          <line
            x1="410"
            y1="178"
            x2="410"
            y2="220"
            className="cb-cui-wire"
            markerEnd="url(#cb-cui-arrow)"
            markerStart="url(#cb-cui-arrow)"
          />
          <text x="424" y="203" className="cb-cui-wire-label">
            typed client boundary
          </text>
          <circle r="3.5" className="cb-cui-dot">
            <animate attributeName="cx" values="410;410" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="178;220" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <rect x={SDK.x} y={SDK.y} width={SDK.w} height={SDK.h} rx="6" className="cb-cui-sdk-rect" />
          <rect x={SDK.x + 18} y={SDK.y + 18} width="86" height="18" rx="3" className="cb-cui-badge-rect" />
          <text x={SDK.x + 61} y={SDK.y + 31} textAnchor="middle" className="cb-cui-badge">
            SDK
          </text>
          <text x="410" y={SDK.y + 31} textAnchor="middle" className="cb-cui-title">
            @codebolt/client-sdk
          </text>
          <text x="410" y={SDK.y + 52} textAnchor="middle" className="cb-cui-sub">
            One client object for HTTP calls, WebSocket subscriptions, reconnection, and event filters.
          </text>

          <rect x="198" y="282" width="180" height="34" rx="4" className="cb-cui-chip-rect" />
          <text x="288" y="296" textAnchor="middle" className="cb-cui-chip-title">
            HTTP API modules
          </text>
          <text x="288" y="309" textAnchor="middle" className="cb-cui-chip-sub">
            typed request / response
          </text>

          <rect x="410" y="282" width="180" height="34" rx="4" className="cb-cui-chip-rect" />
          <text x="500" y="296" textAnchor="middle" className="cb-cui-chip-title">
            WebSocket modules
          </text>
          <text x="500" y="309" textAnchor="middle" className="cb-cui-chip-sub">
            streams, events, updates
          </text>

          <text x="410" y="334" textAnchor="middle" className="cb-cui-foot">
            Connection presets choose which sockets connect automatically.
          </text>
        </g>

        <g>
          <line
            x1="322"
            y1="344"
            x2="322"
            y2="398"
            className="cb-cui-wire"
            markerEnd="url(#cb-cui-arrow)"
            markerStart="url(#cb-cui-arrow)"
          />
          <text x="210" y="374" className="cb-cui-wire-label">
            HTTP routes
          </text>
          <circle r="3.5" className="cb-cui-dot">
            <animate attributeName="cx" values="322;322" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="cy" values="344;398" dur="2.6s" repeatCount="indefinite" />
          </circle>

          <line
            x1="498"
            y1="344"
            x2="498"
            y2="398"
            className="cb-cui-wire cb-cui-wire--accent"
            markerEnd="url(#cb-cui-arrow)"
            markerStart="url(#cb-cui-arrow)"
          />
          <text x="515" y="374" className="cb-cui-wire-label">
            WebSocket events
          </text>
          <circle r="3.5" className="cb-cui-dot">
            <animate attributeName="cx" values="498;498" dur="2.1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="398;344;398" dur="2.1s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <rect
            x={SERVER.x}
            y={SERVER.y}
            width={SERVER.w}
            height={SERVER.h}
            rx="6"
            className="cb-cui-server-rect"
          />
          <text x={SERVER.x + 22} y={SERVER.y + 26} className="cb-cui-server-title">
            Codebolt Server
          </text>
          <text x={SERVER.x + 22} y={SERVER.y + 45} className="cb-cui-server-sub">
            Central execution engine for state, tools, agents, files, memory, and orchestration.
          </text>

          {SERVER_MODULES.map((module) => (
            <g key={module.label}>
              <rect
                x={module.x}
                y={module.y}
                width={module.w}
                height={module.h}
                rx="4"
                className="cb-cui-module-rect"
              />
              <text
                x={module.x + module.w / 2}
                y={module.y + module.h / 2 + 4}
                textAnchor="middle"
                className="cb-cui-module-label"
              >
                {module.label}
              </text>
            </g>
          ))}
        </g>

        <text x="100" y="568" className="cb-cui-caption">
          Result: you control the application shell while Codebolt remains the backend system of record.
        </text>
      </svg>
    </div>
  );
}
