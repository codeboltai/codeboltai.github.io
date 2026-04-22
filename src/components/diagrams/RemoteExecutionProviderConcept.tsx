import React from 'react';
import './diagrams.css';

const W = 900;
const H = 560;

export default function RemoteExecutionProviderConcept() {
  return (
    <div className="cb-diagram cb-diagram--remote-provider">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="remote-provider-concept-title"
      >
        <title id="remote-provider-concept-title">
          Remote execution provider concept: the server manages provider packages and environments,
          spawns a provider child process, the provider connects back over WebSocket, then brokers
          agent startup and remote file and workspace operations against a remote runtime.
        </title>

        <defs>
          <marker
            id="cb-rp-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <polygon points="0 0, 10 5, 0 10" className="cb-rp-arrowfill" />
          </marker>
        </defs>

        <text x="74" y="26" className="cb-rp-eyebrow">
          How Custom Remote Execution Works In Codebolt
        </text>

        <rect x="58" y="52" width="784" height="126" rx="8" className="cb-rp-store-rect" />
        <text x="82" y="78" className="cb-rp-title">Project and Provider State</text>
        <text x="82" y="98" className="cb-rp-sub">
          The server reads provider packages, installed-provider config, and environment records.
        </text>

        <rect x="82" y="116" width="168" height="36" rx="5" className="cb-rp-chip-rect" />
        <text x="166" y="138" textAnchor="middle" className="cb-rp-chip-title">
          .codebolt/providers
        </text>

        <rect x="264" y="116" width="170" height="36" rx="5" className="cb-rp-chip-rect" />
        <text x="349" y="138" textAnchor="middle" className="cb-rp-chip-title">
          installed-providers.json
        </text>

        <rect x="448" y="116" width="152" height="36" rx="5" className="cb-rp-chip-rect" />
        <text x="524" y="138" textAnchor="middle" className="cb-rp-chip-title">
          environments.json
        </text>

        <rect x="614" y="116" width="204" height="36" rx="5" className="cb-rp-chip-rect" />
        <text x="716" y="138" textAnchor="middle" className="cb-rp-chip-title">
          provider-states / logs
        </text>

        <rect x="128" y="228" width="644" height="136" rx="8" className="cb-rp-server-rect" />
        <text x="152" y="254" className="cb-rp-title">Codebolt Server Control Plane</text>
        <text x="152" y="274" className="cb-rp-sub">
          Creates environments, spawns the provider process, tracks lifecycle, heartbeats, and restart policy.
        </text>

        <rect x="154" y="296" width="170" height="40" rx="5" className="cb-rp-module-rect" />
        <text x="239" y="320" textAnchor="middle" className="cb-rp-module-title">
          create / start / stop
        </text>

        <rect x="342" y="296" width="158" height="40" rx="5" className="cb-rp-module-rect" />
        <text x="421" y="320" textAnchor="middle" className="cb-rp-module-title">
          providerReady handshake
        </text>

        <rect x="518" y="296" width="112" height="40" rx="5" className="cb-rp-module-rect" />
        <text x="574" y="320" textAnchor="middle" className="cb-rp-module-title">
          file RPCs
        </text>

        <rect x="648" y="296" width="98" height="40" rx="5" className="cb-rp-module-rect" />
        <text x="697" y="320" textAnchor="middle" className="cb-rp-module-title">
          restart
        </text>

        <text x="152" y="350" className="cb-rp-foot">
          Server remains the system of record for environment state, provider state, and orchestration.
        </text>

        <path d="M 450 178 L 450 228" className="cb-rp-wire" markerEnd="url(#cb-rp-arrow)" />
        <text x="462" y="208" className="cb-rp-wire-label">
          provider discovery + environment config
        </text>

        <rect x="116" y="414" width="230" height="92" rx="8" className="cb-rp-provider-rect" />
        <text x="140" y="440" className="cb-rp-title">Provider Process</text>
        <text x="140" y="460" className="cb-rp-sub">
          Child process started with `SOCKET_PORT`, environment identity, and merged config.
        </text>
        <text x="140" y="486" className="cb-rp-foot">
          Implements `onProviderStart`, `onProviderAgentStart`, file handlers, and stop hooks.
        </text>

        <rect x="384" y="414" width="176" height="92" rx="8" className="cb-rp-runtime-rect" />
        <text x="408" y="440" className="cb-rp-title">Remote Runtime</text>
        <text x="408" y="460" className="cb-rp-sub">
          Container, VM, sandbox, or remote host created or attached by the provider.
        </text>
        <text x="408" y="486" className="cb-rp-foot">
          Agent server and project workspace live here.
        </text>

        <rect x="598" y="414" width="180" height="92" rx="8" className="cb-rp-gateway-rect" />
        <text x="622" y="440" className="cb-rp-title">Plugin Gateway Layer</text>
        <text x="622" y="460" className="cb-rp-sub">
          Optional compatibility surface for execution interception and notifications.
        </text>
        <text x="622" y="486" className="cb-rp-foot">
          Useful when a provider also wants plugin-style request forwarding.
        </text>

        <path d="M 236 364 L 236 414" className="cb-rp-wire cb-rp-wire--accent" markerEnd="url(#cb-rp-arrow)" />
        <text x="248" y="392" className="cb-rp-wire-label">
          spawn child process
        </text>

        <path d="M 346 460 L 384 460" className="cb-rp-wire" markerEnd="url(#cb-rp-arrow)" />
        <text x="366" y="448" textAnchor="middle" className="cb-rp-wire-label">
          environment setup
        </text>

        <path d="M 472 414 L 472 364" className="cb-rp-wire cb-rp-wire--accent" markerEnd="url(#cb-rp-arrow)" />
        <text x="484" y="388" className="cb-rp-wire-label">
          websocket connect + providerStartResponse
        </text>

        <path d="M 560 460 L 598 460" className="cb-rp-wire" markerEnd="url(#cb-rp-arrow)" />
        <text x="579" y="448" textAnchor="middle" className="cb-rp-wire-label">
          optional bridge
        </text>

        <path d="M 700 414 L 700 364" className="cb-rp-wire" markerEnd="url(#cb-rp-arrow)" />
        <text x="712" y="390" className="cb-rp-wire-label">
          notifications / interception
        </text>

        <path d="M 772 332 L 824 332 L 824 460 L 778 460" className="cb-rp-wire cb-rp-wire--accent" markerEnd="url(#cb-rp-arrow)" />
        <text x="828" y="392" className="cb-rp-wire-label">
          supervise
        </text>

        <text x="450" y="540" textAnchor="middle" className="cb-rp-caption">
          The core idea: the provider is not just a proxy. It is a managed execution backend that the server starts,
          tracks, and talks to as a long-lived environment adapter.
        </text>
      </svg>
    </div>
  );
}
