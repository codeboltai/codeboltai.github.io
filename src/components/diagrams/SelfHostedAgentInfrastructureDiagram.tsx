import React from 'react';
import './diagrams.css';

const W = 980;
const H = 560;

export default function SelfHostedAgentInfrastructureDiagram() {
  return (
    <div className="cb-diagram cb-diagram--self-hosted-agent-infra">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="self-hosted-agent-infra-title"
      >
        <title id="self-hosted-agent-infra-title">
          Self hosted agent infrastructure architecture showing interfaces and triggers flowing into
          the Codebolt runtime layer, which coordinates agents, plugins, memory, and remote
          execution across local, server, sandbox, and cloud deployments.
        </title>

        <defs>
          <marker
            id="cb-selfhost-arrow"
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

        <text x="48" y="34" className="cb-section-label">
          SELF HOSTED AGENT INFRASTRUCTURE
        </text>

        <text x="48" y="64" className="cb-axis-label">
          INTERFACES, CHANNELS, AND TRIGGERS
        </text>

        <rect x="48" y="82" width="174" height="60" rx="4" className="cb-box" />
        <text x="64" y="108" className="cb-box-title">USER SURFACES</text>
        <text x="64" y="126" className="cb-box-sub">desktop · terminal · CLI · web UI</text>

        <rect x="242" y="82" width="174" height="60" rx="4" className="cb-box" />
        <text x="258" y="108" className="cb-box-title">CHANNEL APPS</text>
        <text x="258" y="126" className="cb-box-sub">slack · telegram · email · portals</text>

        <rect x="436" y="82" width="174" height="60" rx="4" className="cb-box" />
        <text x="452" y="108" className="cb-box-title">BUSINESS EVENTS</text>
        <text x="452" y="126" className="cb-box-sub">webhooks · tickets · issue updates</text>

        <rect x="630" y="82" width="174" height="60" rx="4" className="cb-box" />
        <text x="646" y="108" className="cb-box-title">MONITORING SIGNALS</text>
        <text x="646" y="126" className="cb-box-sub">logs · alerts · sentry · schedules</text>

        <line x1="135" y1="142" x2="135" y2="194" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />
        <line x1="329" y1="142" x2="329" y2="194" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />
        <line x1="523" y1="142" x2="523" y2="194" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />
        <line x1="717" y1="142" x2="717" y2="194" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />

        <rect x="128" y="202" width="600" height="94" rx="4" className="cb-box cb-box--accent" />
        <text x="428" y="232" textAnchor="middle" className="cb-box-title">
          CODEBOLT RUNTIME AND CONTROL PLANE
        </text>
        <text x="428" y="252" textAnchor="middle" className="cb-box-sub">
          server · routing gateway · tasks · threads · jobs · memory · event log
        </text>
        <text x="428" y="269" textAnchor="middle" className="cb-box-sub">
          the interface can change, but the runtime remains the system of record
        </text>
        <text x="428" y="285" textAnchor="middle" className="cb-box-sub">
          across desktop, channels, web apps, and background workflows
        </text>

        <rect x="752" y="202" width="180" height="94" rx="4" className="cb-box" />
        <text x="768" y="232" className="cb-box-title">DEPLOYMENT SHAPES</text>
        <text x="768" y="252" className="cb-box-sub">local · headless server</text>
        <text x="768" y="269" className="cb-box-sub">docker · sandbox · cloud</text>
        <text x="768" y="285" className="cb-box-sub">single-user or shared team setup</text>

        <line x1="428" y1="296" x2="428" y2="334" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />

        <text x="48" y="352" className="cb-axis-label">
          EXECUTION AND EXTENSIBILITY LAYER
        </text>

        <rect x="48" y="368" width="206" height="74" rx="4" className="cb-box" />
        <text x="64" y="396" className="cb-box-title">AGENTS AND WORKFLOWS</text>
        <text x="64" y="415" className="cb-box-sub">always-on assistant · coworker</text>
        <text x="64" y="431" className="cb-box-sub">orchestrator · background worker</text>

        <rect x="278" y="368" width="206" height="74" rx="4" className="cb-box" />
        <text x="294" y="396" className="cb-box-title">PLUGINS AND PANELS</text>
        <text x="294" y="415" className="cb-box-sub">dynamic panels · custom UIs</text>
        <text x="294" y="431" className="cb-box-sub">channel adapters · business tools</text>

        <rect x="508" y="368" width="206" height="74" rx="4" className="cb-box" />
        <text x="524" y="396" className="cb-box-title">TOOLS AND MCP</text>
        <text x="524" y="415" className="cb-box-sub">files · browser · terminal · git</text>
        <text x="524" y="431" className="cb-box-sub">custom capabilities · MCP servers</text>

        <rect x="738" y="368" width="194" height="74" rx="4" className="cb-box" />
        <text x="754" y="396" className="cb-box-title">REMOTE EXECUTION</text>
        <text x="754" y="415" className="cb-box-sub">containers · e2b · isolated runtimes</text>
        <text x="754" y="431" className="cb-box-sub">separate control and execution planes</text>

        <line x1="151" y1="442" x2="151" y2="486" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />
        <line x1="381" y1="442" x2="381" y2="486" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />
        <line x1="611" y1="442" x2="611" y2="486" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />
        <line x1="835" y1="442" x2="835" y2="486" className="cb-arrow" markerEnd="url(#cb-selfhost-arrow)" />

        <rect x="110" y="486" width="758" height="54" rx="4" className="cb-box" />
        <text x="489" y="508" textAnchor="middle" className="cb-box-title">
          OUTCOMES
        </text>
        <text x="489" y="526" textAnchor="middle" className="cb-box-sub">
          personal assistants · channel agents · monitoring systems · autonomous coworkers
        </text>
        <text x="489" y="540" textAnchor="middle" className="cb-box-sub">
          multi-agent operations
        </text>
      </svg>
    </div>
  );
}
