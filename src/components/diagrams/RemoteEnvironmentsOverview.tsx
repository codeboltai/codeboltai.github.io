import React from 'react';
import './diagrams.css';

const W = 900;
const H = 560;

export default function RemoteEnvironmentsOverview() {
  return (
    <div className="cb-diagram cb-diagram--remote-env">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="remote-env-overview-title">
        <title id="remote-env-overview-title">
          Remote environments overview: the server persists environment records, spawns a provider process,
          the provider creates or reconnects a remote resource, and a remote runtime connects back to the server.
        </title>

        <defs>
          <marker id="cb-re-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0 0, 10 5, 0 10" className="cb-re-arrowfill" />
          </marker>
        </defs>

        <text x="72" y="24" className="cb-re-eyebrow">How Remote Environments Are Managed</text>

        <rect x="68" y="54" width="236" height="138" rx="8" className="cb-re-record-rect" />
        <text x="92" y="82" className="cb-re-title">Environment Record</text>
        <text x="92" y="102" className="cb-re-sub">
          Persisted in `.codebolt/environments.json`
        </text>
        <rect x="94" y="120" width="78" height="24" rx="4" className="cb-re-chip-rect" />
        <text x="133" y="136" textAnchor="middle" className="cb-re-chip-label">id + name</text>
        <rect x="180" y="120" width="90" height="24" rx="4" className="cb-re-chip-rect" />
        <text x="225" y="136" textAnchor="middle" className="cb-re-chip-label">provider</text>
        <rect x="94" y="152" width="84" height="24" rx="4" className="cb-re-chip-rect" />
        <text x="136" y="168" textAnchor="middle" className="cb-re-chip-label">config</text>
        <rect x="186" y="152" width="92" height="24" rx="4" className="cb-re-chip-rect" />
        <text x="232" y="168" textAnchor="middle" className="cb-re-chip-label">timestamps</text>

        <rect x="336" y="54" width="496" height="182" rx="8" className="cb-re-server-rect" />
        <text x="360" y="82" className="cb-re-title">Codebolt Server</text>
        <text x="360" y="102" className="cb-re-sub">
          Control plane for environment lifecycle, provider startup, connection tracking, health checks, and restart policy.
        </text>

        <rect x="362" y="126" width="118" height="32" rx="4" className="cb-re-module-rect" />
        <text x="421" y="146" textAnchor="middle" className="cb-re-chip-label">create / list</text>
        <rect x="494" y="126" width="118" height="32" rx="4" className="cb-re-module-rect" />
        <text x="553" y="146" textAnchor="middle" className="cb-re-chip-label">start / stop</text>
        <rect x="626" y="126" width="92" height="32" rx="4" className="cb-re-module-rect" />
        <text x="672" y="146" textAnchor="middle" className="cb-re-chip-label">restart</text>
        <rect x="732" y="126" width="74" height="32" rx="4" className="cb-re-module-rect" />
        <text x="769" y="146" textAnchor="middle" className="cb-re-chip-label">delete</text>

        <rect x="362" y="174" width="140" height="34" rx="4" className="cb-re-module-rect" />
        <text x="432" y="195" textAnchor="middle" className="cb-re-chip-label">lifecycle manager</text>
        <rect x="516" y="174" width="146" height="34" rx="4" className="cb-re-module-rect" />
        <text x="589" y="195" textAnchor="middle" className="cb-re-chip-label">provider websocket map</text>
        <rect x="676" y="174" width="130" height="34" rx="4" className="cb-re-module-rect" />
        <text x="741" y="195" textAnchor="middle" className="cb-re-chip-label">health + reconnect</text>

        <path d="M 304 124 L 336 124" className="cb-re-wire" markerEnd="url(#cb-re-arrow)" />
        <text x="320" y="114" textAnchor="middle" className="cb-re-wire-label">register</text>

        <rect x="108" y="306" width="236" height="138" rx="8" className="cb-re-provider-rect" />
        <text x="132" y="334" className="cb-re-title">Provider Process</text>
        <text x="132" y="354" className="cb-re-sub">
          Child process created by the server from provider metadata and merged config.
        </text>
        <text x="132" y="382" className="cb-re-foot">
          Extends `BaseProvider`, handles `providerStart`, `providerAgentStart`, and file / diff messages.
        </text>

        <rect x="390" y="306" width="202" height="138" rx="8" className="cb-re-resource-rect" />
        <text x="414" y="334" className="cb-re-title">Remote Resource</text>
        <text x="414" y="354" className="cb-re-sub">
          Sandbox, workspace, container, VM, worktree, or remote host created or reattached by the provider.
        </text>
        <text x="414" y="382" className="cb-re-foot">
          Often persisted with `resourceId` so recovery can reconnect instead of recreating.
        </text>

        <rect x="638" y="306" width="194" height="138" rx="8" className="cb-re-runtime-rect" />
        <text x="662" y="334" className="cb-re-title">Remote Runtime</text>
        <text x="662" y="354" className="cb-re-sub">
          May run Codebolt remotely, or any runtime that can satisfy the provider-facing lifecycle and transport interfaces.
        </text>
        <text x="662" y="382" className="cb-re-foot">
          It does not have to be another full Codebolt instance.
        </text>

        <path d="M 452 236 L 226 306" className="cb-re-wire cb-re-wire--accent" markerEnd="url(#cb-re-arrow)" />
        <text x="314" y="254" className="cb-re-wire-label">spawn provider child process</text>

        <path d="M 344 374 L 390 374" className="cb-re-wire" markerEnd="url(#cb-re-arrow)" />
        <text x="367" y="364" textAnchor="middle" className="cb-re-wire-label">create / reconnect</text>

        <path d="M 592 374 L 638 374" className="cb-re-wire" markerEnd="url(#cb-re-arrow)" />
        <text x="615" y="364" textAnchor="middle" className="cb-re-wire-label">host loop</text>

        <path d="M 736 306 L 736 252 L 620 252" className="cb-re-wire cb-re-wire--accent" markerEnd="url(#cb-re-arrow)" />
        <text x="744" y="272" className="cb-re-wire-label">connect back over WebSocket</text>

        <path d="M 490 306 L 490 256 L 516 256" className="cb-re-wire" markerEnd="url(#cb-re-arrow)" />
        <text x="434" y="270" className="cb-re-wire-label">resourceId / recovery</text>

        <text x="450" y="520" textAnchor="middle" className="cb-re-caption">
          Mental model: the server manages environments as durable system objects, while providers adapt concrete remote resources into that model.
        </text>
      </svg>
    </div>
  );
}
