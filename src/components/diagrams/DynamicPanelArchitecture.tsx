import React from 'react';
import './diagrams.css';

const W = 860;
const H = 560;

export default function DynamicPanelArchitecture() {
  return (
    <div className="cb-diagram cb-diagram--dynamicpanel">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="dynamic-panel-arch-title">
        <title id="dynamic-panel-arch-title">
          Dynamic panel architecture: Codebolt app renders the panel iframe while the server and agent or plugin exchange messages with it
        </title>

        <defs>
          <marker
            id="cb-dp-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10" className="cb-dp-arrowhead" />
          </marker>
        </defs>

        <text x="76" y="24" className="cb-dp-eyebrow">Inside The Existing Codebolt App</text>

        <rect x="60" y="42" width="740" height="260" rx="6" className="cb-dp-app-rect" />
        <text x="84" y="68" className="cb-dp-title">Codebolt App</text>
        <text x="84" y="88" className="cb-dp-sub">
          The host app owns layout, tabs, panels, and iframe mounting.
        </text>

        <rect x="92" y="112" width="180" height="146" rx="5" className="cb-dp-pane-rect" />
        <text x="182" y="136" textAnchor="middle" className="cb-dp-pane-title">
          Chat / Existing UI
        </text>
        <text x="182" y="156" textAnchor="middle" className="cb-dp-pane-sub">
          normal app surfaces
        </text>
        <rect x="120" y="182" width="124" height="42" rx="4" className="cb-dp-chip-rect" />
        <text x="182" y="199" textAnchor="middle" className="cb-dp-chip-title">
          agent run
        </text>
        <text x="182" y="213" textAnchor="middle" className="cb-dp-chip-sub">
          or plugin action
        </text>

        <rect x="332" y="98" width="420" height="176" rx="5" className="cb-dp-panel-rect" />
        <text x="356" y="124" className="cb-dp-title">Dynamic Panel</text>
        <text x="356" y="144" className="cb-dp-sub">
          HTML rendered in an iframe inside the app.
        </text>

        <rect x="364" y="168" width="170" height="44" rx="4" className="cb-dp-chip-rect" />
        <text x="449" y="186" textAnchor="middle" className="cb-dp-chip-title">
          UI content
        </text>
        <text x="449" y="200" textAnchor="middle" className="cb-dp-chip-sub">
          forms, charts, controls
        </text>

        <rect x="554" y="168" width="166" height="44" rx="4" className="cb-dp-chip-rect" />
        <text x="637" y="186" textAnchor="middle" className="cb-dp-chip-title">
          codeboltPlugin
        </text>
        <text x="637" y="200" textAnchor="middle" className="cb-dp-chip-sub">
          sendMessage / onMessage
        </text>

        <line x1="449" y1="234" x2="637" y2="234" className="cb-dp-wire cb-dp-wire--internal" markerEnd="url(#cb-dp-arrow)" markerStart="url(#cb-dp-arrow)" />
        <text x="543" y="227" textAnchor="middle" className="cb-dp-wire-label">
          panel messaging API
        </text>

        <line x1="430" y1="274" x2="430" y2="348" className="cb-dp-wire" markerEnd="url(#cb-dp-arrow)" markerStart="url(#cb-dp-arrow)" />
        <text x="448" y="316" className="cb-dp-wire-label">Socket.IO events</text>
        <circle r="3.5" className="cb-dp-dot">
          <animate attributeName="cx" values="430;430" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="cy" values="274;348;274" dur="2.4s" repeatCount="indefinite" />
        </circle>

        <line x1="638" y1="274" x2="638" y2="348" className="cb-dp-wire cb-dp-wire--accent" markerEnd="url(#cb-dp-arrow)" markerStart="url(#cb-dp-arrow)" />
        <text x="656" y="316" className="cb-dp-wire-label">panel data + replies</text>
        <circle r="3.5" className="cb-dp-dot">
          <animate attributeName="cx" values="638;638" dur="2.0s" repeatCount="indefinite" />
          <animate attributeName="cy" values="348;274;348" dur="2.0s" repeatCount="indefinite" />
        </circle>

        <rect x="166" y="348" width="528" height="146" rx="6" className="cb-dp-server-rect" />
        <text x="190" y="374" className="cb-dp-title">Server</text>
        <text x="190" y="394" className="cb-dp-sub">
          Registers panels, routes messages, and resolves wait-for-response flows.
        </text>

        <rect x="198" y="420" width="182" height="40" rx="4" className="cb-dp-chip-rect" />
        <text x="289" y="437" textAnchor="middle" className="cb-dp-chip-title">
          DynamicPanelService
        </text>
        <text x="289" y="451" textAnchor="middle" className="cb-dp-chip-sub">
          open, update, close, list
        </text>

        <rect x="410" y="420" width="128" height="40" rx="4" className="cb-dp-chip-rect" />
        <text x="474" y="437" textAnchor="middle" className="cb-dp-chip-title">
          agent API
        </text>
        <text x="474" y="451" textAnchor="middle" className="cb-dp-chip-sub">
          codebolt.dynamicPanel
        </text>

        <rect x="558" y="420" width="108" height="40" rx="4" className="cb-dp-chip-rect" />
        <text x="612" y="437" textAnchor="middle" className="cb-dp-chip-title">
          plugin API
        </text>
        <text x="612" y="451" textAnchor="middle" className="cb-dp-chip-sub">
          plugin.dynamicPanel
        </text>

        <line x1="474" y1="494" x2="474" y2="526" className="cb-dp-wire" markerEnd="url(#cb-dp-arrow)" markerStart="url(#cb-dp-arrow)" />
        <text x="492" y="513" className="cb-dp-wire-label">commands + callbacks</text>

        <rect x="318" y="526" width="312" height="20" rx="4" className="cb-dp-origin-rect" />
        <text x="474" y="540" textAnchor="middle" className="cb-dp-origin-label">
          Originating Agent Or Plugin
        </text>
      </svg>
    </div>
  );
}
