import React from 'react';
import './diagrams.css';

const W = 980;
const H = 620;

export default function CustomAgenticApplicationsArchitecture() {
  return (
    <div className="cb-diagram cb-diagram--agentic-apps">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="agentic-apps-title">
        <title id="agentic-apps-title">
          Custom agentic application architecture showing a custom UI shell, an optional plugin backend,
          and the Codebolt server as the shared runtime.
        </title>

        <defs>
          <pattern id="cb-agentic-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="cb-agentic-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <polygon points="0 0, 10 5, 0 10" className="cb-agentic-arrow" />
          </marker>
          <marker id="cb-agentic-arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <polygon points="0 0, 10 5, 0 10" className="cb-agentic-arrow cb-agentic-arrow--accent" />
          </marker>
        </defs>

        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#cb-agentic-dots)" opacity="0.45" />

        <text x="74" y="34" className="cb-agentic-eyebrow">Three Ways To Build A Custom Agentic Application</text>

        <rect x="64" y="60" width="270" height="180" rx="8" className="cb-agentic-surface" />
        <text x="92" y="88" className="cb-agentic-title">1. Standalone App</text>
        <text x="92" y="108" className="cb-agentic-copy">
          Your front-end talks straight to the Codebolt server over HTTP APIs and sockets.
        </text>
        <rect x="92" y="136" width="214" height="74" rx="6" className="cb-agentic-inner" />
        <text x="118" y="162" className="cb-agentic-inner-title">Example</text>
        <text x="118" y="182" className="cb-agentic-copy">`packages/simpleui`</text>
        <text x="118" y="198" className="cb-agentic-copy">React SPA + axios `/api` + Socket.IO namespaces</text>

        <rect x="356" y="60" width="270" height="180" rx="8" className="cb-agentic-surface" />
        <text x="384" y="88" className="cb-agentic-title">2. UI Wrapped By A Plugin</text>
        <text x="384" y="108" className="cb-agentic-copy">
          A plugin serves the UI inside Codebolt. The UI can still remain mostly front-end only.
        </text>
        <rect x="384" y="136" width="214" height="74" rx="6" className="cb-agentic-inner" />
        <text x="410" y="162" className="cb-agentic-inner-title">Example</text>
        <text x="410" y="182" className="cb-agentic-copy">`sample-plugins/simpleui-plugin`</text>
        <text x="410" y="198" className="cb-agentic-copy">plugin manifest points `ui.path` at the built SPA</text>

        <rect x="648" y="60" width="270" height="180" rx="8" className="cb-agentic-surface" />
        <text x="676" y="88" className="cb-agentic-title">3. Plugin-Backed UI</text>
        <text x="676" y="108" className="cb-agentic-copy">
          The UI talks to a plugin bridge, and the plugin acts as the application backend.
        </text>
        <rect x="676" y="136" width="214" height="74" rx="6" className="cb-agentic-inner" />
        <text x="702" y="162" className="cb-agentic-inner-title">Example</text>
        <text x="702" y="182" className="cb-agentic-copy">`sample-plugins/feedback-form-plugin`</text>
        <text x="702" y="198" className="cb-agentic-copy">`codeboltPlugin` bridge + `plugin.dynamicPanel.*`</text>

        <rect x="170" y="308" width="640" height="188" rx="8" className="cb-agentic-server" />
        <text x="490" y="338" textAnchor="middle" className="cb-agentic-title">Codebolt Server Is Still The Runtime Of Record</text>
        <text x="490" y="358" textAnchor="middle" className="cb-agentic-copy">
          Your application changes the UX and orchestration shape, but the server still owns files,
        </text>
        <text x="490" y="374" textAnchor="middle" className="cb-agentic-copy">
          tasks, threads, chat, agents, tools, memory, and real-time execution state.
        </text>

        <rect x="206" y="398" width="178" height="64" rx="6" className="cb-agentic-block" />
        <text x="295" y="424" textAnchor="middle" className="cb-agentic-block-title">HTTP APIs</text>
        <text x="295" y="442" textAnchor="middle" className="cb-agentic-copy">requests, CRUD, commands</text>

        <rect x="402" y="398" width="178" height="64" rx="6" className="cb-agentic-block" />
        <text x="491" y="424" textAnchor="middle" className="cb-agentic-block-title">Sockets / Events</text>
        <text x="491" y="442" textAnchor="middle" className="cb-agentic-copy">live chat, tasks, swarm, logs</text>

        <rect x="598" y="398" width="178" height="64" rx="6" className="cb-agentic-block" />
        <text x="687" y="424" textAnchor="middle" className="cb-agentic-block-title">Plugin Bus</text>
        <text x="687" y="442" textAnchor="middle" className="cb-agentic-copy">dynamic panel, plugin sdk, gateways</text>

        <line x1="198" y1="240" x2="300" y2="308" className="cb-agentic-line" markerEnd="url(#cb-agentic-arrow)" />
        <rect x="184" y="254" width="118" height="14" rx="3" className="cb-agentic-label-bg" />
        <text x="243" y="264" textAnchor="middle" className="cb-agentic-label">direct APIs + sockets</text>

        <line x1="490" y1="240" x2="490" y2="308" className="cb-agentic-line cb-agentic-line--accent" markerEnd="url(#cb-agentic-arrow-accent)" />
        <rect x="420" y="258" width="140" height="14" rx="3" className="cb-agentic-label-bg" />
        <text x="490" y="268" textAnchor="middle" className="cb-agentic-label cb-agentic-label--accent">plugin hosts the application shell</text>

        <line x1="782" y1="240" x2="680" y2="308" className="cb-agentic-line" markerEnd="url(#cb-agentic-arrow)" />
        <rect x="686" y="254" width="164" height="14" rx="3" className="cb-agentic-label-bg" />
        <text x="768" y="264" textAnchor="middle" className="cb-agentic-label">iframe bridge + plugin backend</text>

        <text x="170" y="544" className="cb-agentic-caption">
          Pick the lightest shape that matches your product: direct client if the UI can talk to the server,
        </text>
        <text x="170" y="560" className="cb-agentic-caption">
          plugin wrapper if you want it embedded in Codebolt, plugin-backed bridge if the UI needs backend logic or mediation.
        </text>
      </svg>
    </div>
  );
}
