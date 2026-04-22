import React from 'react';
import './diagrams.css';

const W = 900;
const H = 540;

export default function ProviderAuthoringDiagram() {
  return (
    <div className="cb-diagram cb-diagram--provider-authoring">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="provider-authoring-title">
        <title id="provider-authoring-title">
          Provider authoring map: manifest and configuration files, entrypoint registration, BaseProvider subclass implementation,
          and the remote resource adapter that actually creates or reconnects the environment.
        </title>

        <defs>
          <marker id="cb-pa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0 0, 10 5, 0 10" className="cb-pa-arrowfill" />
          </marker>
        </defs>

        <text x="72" y="24" className="cb-pa-eyebrow">How To Structure A Provider Package</text>

        <rect x="72" y="58" width="220" height="166" rx="8" className="cb-pa-meta-rect" />
        <text x="96" y="86" className="cb-pa-title">Metadata And Config</text>
        <text x="96" y="106" className="cb-pa-sub">
          Describe the provider and provide defaults.
        </text>
        <rect x="98" y="126" width="164" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="180" y="144" textAnchor="middle" className="cb-pa-chip-label">codeboltprovider.yaml</text>
        <rect x="98" y="162" width="164" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="180" y="180" textAnchor="middle" className="cb-pa-chip-label">providers.yaml</text>
        <text x="96" y="206" className="cb-pa-foot">
          The server merges YAML defaults, installed-provider config, and environment config before `providerStart`.
        </text>

        <rect x="336" y="58" width="220" height="166" rx="8" className="cb-pa-entry-rect" />
        <text x="360" y="86" className="cb-pa-title">Entrypoint</text>
        <text x="360" y="106" className="cb-pa-sub">
          Instantiate the provider and register handlers with the runtime.
        </text>
        <rect x="362" y="126" width="166" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="445" y="144" textAnchor="middle" className="cb-pa-chip-label">src/index.ts</text>
        <rect x="362" y="162" width="166" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="445" y="180" textAnchor="middle" className="cb-pa-chip-label">getEventHandlers()</text>
        <text x="360" y="206" className="cb-pa-foot">
          Register `onProviderStart`, `onProviderAgentStart`, `onProviderStop`, raw messages, and file handlers.
        </text>

        <rect x="600" y="58" width="228" height="166" rx="8" className="cb-pa-base-rect" />
        <text x="624" y="86" className="cb-pa-title">BaseProvider Subclass</text>
        <text x="624" y="106" className="cb-pa-sub">
          Implement the environment-specific parts.
        </text>
        <rect x="626" y="126" width="176" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="714" y="144" textAnchor="middle" className="cb-pa-chip-label">setupEnvironment()</text>
        <rect x="626" y="162" width="176" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="714" y="180" textAnchor="middle" className="cb-pa-chip-label">ensureAgentServer()</text>
        <rect x="626" y="198" width="176" height="28" rx="4" className="cb-pa-chip-rect" />
        <text x="714" y="216" textAnchor="middle" className="cb-pa-chip-label">onGetDiffFiles()</text>

        <rect x="128" y="322" width="296" height="140" rx="8" className="cb-pa-resource-rect" />
        <text x="152" y="350" className="cb-pa-title">Remote Resource Adapter</text>
        <text x="152" y="370" className="cb-pa-sub">
          Connect to the actual execution target.
        </text>
        <rect x="154" y="392" width="74" height="24" rx="4" className="cb-pa-chip-rect" />
        <text x="191" y="408" textAnchor="middle" className="cb-pa-chip-label">e2b</text>
        <rect x="238" y="392" width="90" height="24" rx="4" className="cb-pa-chip-rect" />
        <text x="283" y="408" textAnchor="middle" className="cb-pa-chip-label">docker</text>
        <rect x="338" y="392" width="58" height="24" rx="4" className="cb-pa-chip-rect" />
        <text x="367" y="408" textAnchor="middle" className="cb-pa-chip-label">ssh</text>
        <text x="152" y="438" className="cb-pa-foot">
          This can be another Codebolt-powered runtime, or any runtime that can satisfy the lifecycle, transport, and file-operation interfaces you expose.
        </text>

        <rect x="480" y="322" width="320" height="140" rx="8" className="cb-pa-flow-rect" />
        <text x="504" y="350" className="cb-pa-title">Execution Flow</text>
        <text x="504" y="370" className="cb-pa-sub">
          The provider package is not just scaffolding. It becomes the bridge that creates or reconnects the resource, starts the runtime, and forwards work.
        </text>
        <text x="504" y="398" className="cb-pa-foot">
          Server → `providerStart` → setup / reconnect → runtime start → transport connect → `providerAgentStart`
        </text>
        <text x="504" y="422" className="cb-pa-foot">
          Optional: upload `.codebolt` config and participate in proxy execution through the gateway.
        </text>

        <path d="M 292 140 L 336 140" className="cb-pa-wire" markerEnd="url(#cb-pa-arrow)" />
        <text x="314" y="130" textAnchor="middle" className="cb-pa-wire-label">boot</text>

        <path d="M 556 140 L 600 140" className="cb-pa-wire" markerEnd="url(#cb-pa-arrow)" />
        <text x="578" y="130" textAnchor="middle" className="cb-pa-wire-label">instantiate</text>

        <path d="M 680 224 L 680 288 L 276 288 L 276 322" className="cb-pa-wire cb-pa-wire--accent" markerEnd="url(#cb-pa-arrow)" />
        <text x="488" y="282" textAnchor="middle" className="cb-pa-wire-label">adapter code talks to the real remote resource</text>

        <path d="M 714 224 L 714 322" className="cb-pa-wire cb-pa-wire--accent" markerEnd="url(#cb-pa-arrow)" />
        <text x="726" y="278" className="cb-pa-wire-label">implement lifecycle</text>

        <text x="450" y="506" textAnchor="middle" className="cb-pa-caption">
          Good provider docs should show both the package structure and the runtime responsibilities, not just a list of hooks.
        </text>
      </svg>
    </div>
  );
}
