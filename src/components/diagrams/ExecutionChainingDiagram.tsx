import React from 'react';
import './diagrams.css';

const W = 940;
const H = 560;

export default function ExecutionChainingDiagram() {
  return (
    <div className="cb-diagram cb-diagram--exec-chain">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="exec-chain-title">
        <title id="exec-chain-title">
          Execution chaining: the surface sends a prompt to the server, the provider hosts the remote runtime,
          and the server selectively proxies capabilities through the Proxy Execution Gateway to other systems.
        </title>

        <defs>
          <marker id="cb-ec-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0 0, 10 5, 0 10" className="cb-ec-arrowfill" />
          </marker>
        </defs>

        <text x="72" y="24" className="cb-ec-eyebrow">How Execution Chaining Composes</text>

        <rect x="78" y="60" width="170" height="94" rx="8" className="cb-ec-surface-rect" />
        <text x="102" y="88" className="cb-ec-title">Codebolt Surface</text>
        <text x="102" y="108" className="cb-ec-sub">
          User prompt and session state start here.
        </text>

        <rect x="296" y="60" width="344" height="180" rx="8" className="cb-ec-server-rect" />
        <text x="320" y="88" className="cb-ec-title">Server Hub</text>
        <text x="320" y="108" className="cb-ec-sub">
          Chooses environment, starts provider, tracks run state, and decides `local` vs `proxy` for each capability call.
        </text>
        <rect x="320" y="130" width="118" height="30" rx="4" className="cb-ec-chip-rect" />
        <text x="379" y="149" textAnchor="middle" className="cb-ec-chip-label">providerStart</text>
        <rect x="452" y="130" width="136" height="30" rx="4" className="cb-ec-chip-rect" />
        <text x="520" y="149" textAnchor="middle" className="cb-ec-chip-label">providerAgentStart</text>
        <rect x="320" y="174" width="130" height="30" rx="4" className="cb-ec-chip-rect" />
        <text x="385" y="193" textAnchor="middle" className="cb-ec-chip-label">proxyExecution.json</text>
        <rect x="464" y="174" width="116" height="30" rx="4" className="cb-ec-chip-rect" />
        <text x="522" y="193" textAnchor="middle" className="cb-ec-chip-label">run + event log</text>

        <rect x="690" y="60" width="172" height="180" rx="8" className="cb-ec-provider-rect" />
        <text x="714" y="88" className="cb-ec-title">Remote Environment</text>
        <text x="714" y="108" className="cb-ec-sub">
          Provider-managed resource plus remote runtime.
        </text>
        <rect x="714" y="130" width="126" height="28" rx="4" className="cb-ec-chip-rect" />
        <text x="777" y="148" textAnchor="middle" className="cb-ec-chip-label">provider bridge</text>
        <rect x="714" y="168" width="126" height="28" rx="4" className="cb-ec-chip-rect" />
        <text x="777" y="186" textAnchor="middle" className="cb-ec-chip-label">agent loop</text>
        <text x="714" y="218" className="cb-ec-foot">
          This runtime may be Codebolt-based or any compatible implementation.
        </text>

        <rect x="224" y="324" width="264" height="146" rx="8" className="cb-ec-gateway-rect" />
        <text x="248" y="352" className="cb-ec-title">Proxy Execution Gateway</text>
        <text x="248" y="372" className="cb-ec-sub">
          Receives deferred capability requests as `executionGateway.request` and returns replies or notifications.
        </text>
        <rect x="248" y="398" width="96" height="26" rx="4" className="cb-ec-chip-rect" />
        <text x="296" y="415" textAnchor="middle" className="cb-ec-chip-label">claim()</text>
        <rect x="356" y="398" width="108" height="26" rx="4" className="cb-ec-chip-rect" />
        <text x="410" y="415" textAnchor="middle" className="cb-ec-chip-label">subscribe()</text>
        <text x="248" y="448" className="cb-ec-foot">
          Selective cross-platform capability routing, not environment ownership.
        </text>

        <rect x="544" y="324" width="302" height="146" rx="8" className="cb-ec-external-rect" />
        <text x="568" y="352" className="cb-ec-title">Other Systems / Platforms</text>
        <text x="568" y="372" className="cb-ec-sub">
          LLM backends, filesystem hosts, browser runners, cloud services, or another platform that can execute the deferred capability.
        </text>
        <rect x="570" y="398" width="84" height="26" rx="4" className="cb-ec-chip-rect" />
        <text x="612" y="415" textAnchor="middle" className="cb-ec-chip-label">LLM</text>
        <rect x="666" y="398" width="84" height="26" rx="4" className="cb-ec-chip-rect" />
        <text x="708" y="415" textAnchor="middle" className="cb-ec-chip-label">fs</text>
        <rect x="762" y="398" width="60" height="26" rx="4" className="cb-ec-chip-rect" />
        <text x="792" y="415" textAnchor="middle" className="cb-ec-chip-label">tools</text>

        <path d="M 248 108 L 296 108" className="cb-ec-wire" markerEnd="url(#cb-ec-arrow)" />
        <text x="272" y="98" textAnchor="middle" className="cb-ec-wire-label">send prompt</text>

        <path d="M 640 150 L 690 150" className="cb-ec-wire cb-ec-wire--accent" markerEnd="url(#cb-ec-arrow)" />
        <text x="665" y="140" textAnchor="middle" className="cb-ec-wire-label">start remote runtime</text>

        <path d="M 776 240 L 776 286 L 468 286 L 468 240" className="cb-ec-wire" markerEnd="url(#cb-ec-arrow)" markerStart="url(#cb-ec-arrow)" />
        <text x="622" y="280" textAnchor="middle" className="cb-ec-wire-label">capability requests always come back through the server</text>

        <path d="M 470 240 L 356 324" className="cb-ec-wire cb-ec-wire--accent" markerEnd="url(#cb-ec-arrow)" />
        <text x="398" y="296" className="cb-ec-wire-label">proxy path</text>

        <path d="M 488 398 L 544 398" className="cb-ec-wire cb-ec-wire--accent" markerEnd="url(#cb-ec-arrow)" />
        <text x="516" y="388" textAnchor="middle" className="cb-ec-wire-label">deferred capability</text>

        <path d="M 544 442 L 488 442" className="cb-ec-wire cb-ec-wire--accent" markerEnd="url(#cb-ec-arrow)" />
        <text x="516" y="462" textAnchor="middle" className="cb-ec-wire-label">reply / notification</text>

        <path d="M 470 204 L 470 324" className="cb-ec-wire" markerEnd="url(#cb-ec-arrow)" markerStart="url(#cb-ec-arrow)" />
        <text x="482" y="274" className="cb-ec-wire-label">local capabilities stay here</text>

        <text x="470" y="526" textAnchor="middle" className="cb-ec-caption">
          Remote execution does not have to mean “another full Codebolt instance”. It means a runtime behind the provider boundary plus optional capability chaining through the gateway.
        </text>
      </svg>
    </div>
  );
}
