import React from 'react';
import './diagrams.css';

const W = 960;
const H = 620;

export default function EnvironmentManagementFlow() {
  return (
    <div className="cb-diagram cb-diagram--env-mgmt">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="env-mgmt-title">
        <title id="env-mgmt-title">
          Environment management flow: the server persists the environment record, spawns the provider,
          registers the provider connection, sends providerStart and providerAgentStart, then supervises
          reconnect, health, stop, and delete flows.
        </title>

        <defs>
          <marker id="cb-em-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0 0, 10 5, 0 10" className="cb-em-arrowfill" />
          </marker>
        </defs>

        <text x="72" y="26" className="cb-em-eyebrow">Server-Side Environment Management</text>

        <rect x="68" y="56" width="824" height="92" rx="8" className="cb-em-band-rect" />
        <text x="92" y="84" className="cb-em-title">1. Persist And Register</text>
        <text x="92" y="104" className="cb-em-sub">
          `createEnvironment()` writes `.codebolt/environments.json`, registers the environment in the lifecycle manager, and prepares state tracking.
        </text>
        <rect x="94" y="116" width="118" height="24" rx="4" className="cb-em-chip-rect" />
        <text x="153" y="132" textAnchor="middle" className="cb-em-chip-label">id + name</text>
        <rect x="224" y="116" width="126" height="24" rx="4" className="cb-em-chip-rect" />
        <text x="287" y="132" textAnchor="middle" className="cb-em-chip-label">provider metadata</text>
        <rect x="362" y="116" width="90" height="24" rx="4" className="cb-em-chip-rect" />
        <text x="407" y="132" textAnchor="middle" className="cb-em-chip-label">config</text>
        <rect x="464" y="116" width="148" height="24" rx="4" className="cb-em-chip-rect" />
        <text x="538" y="132" textAnchor="middle" className="cb-em-chip-label">lifecycle manager</text>

        <rect x="68" y="182" width="824" height="122" rx="8" className="cb-em-band-rect cb-em-band-rect--accent" />
        <text x="92" y="210" className="cb-em-title">2. Start Provider Process</text>
        <text x="92" y="230" className="cb-em-sub">
          `startEnvironmentProvider()` resolves the provider path, entrypoint, and merged config, opens debug tracking, then spawns the provider child process.
        </text>

        <rect x="96" y="252" width="126" height="30" rx="4" className="cb-em-module-rect" />
        <text x="159" y="271" textAnchor="middle" className="cb-em-chip-label">resolve path</text>
        <rect x="236" y="252" width="126" height="30" rx="4" className="cb-em-module-rect" />
        <text x="299" y="271" textAnchor="middle" className="cb-em-chip-label">entrypoint</text>
        <rect x="376" y="252" width="142" height="30" rx="4" className="cb-em-module-rect" />
        <text x="447" y="271" textAnchor="middle" className="cb-em-chip-label">merge config</text>
        <rect x="532" y="252" width="118" height="30" rx="4" className="cb-em-module-rect" />
        <text x="591" y="271" textAnchor="middle" className="cb-em-chip-label">spawn child</text>
        <rect x="664" y="252" width="156" height="30" rx="4" className="cb-em-module-rect" />
        <text x="742" y="271" textAnchor="middle" className="cb-em-chip-label">wait start ack</text>

        <rect x="68" y="338" width="392" height="186" rx="8" className="cb-em-server-rect" />
        <text x="92" y="366" className="cb-em-title">3. Provider Registers Back</text>
        <text x="92" y="386" className="cb-em-sub">
          `registerEnvironmentProviderConnection()` stores the socket, marks the environment running, builds snapshot and narrative bundles, and sends `providerStart`.
        </text>
        <rect x="94" y="408" width="124" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="156" y="426" textAnchor="middle" className="cb-em-chip-label">store socket</text>
        <rect x="232" y="408" width="118" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="291" y="426" textAnchor="middle" className="cb-em-chip-label">state=running</text>
        <rect x="94" y="448" width="146" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="167" y="466" textAnchor="middle" className="cb-em-chip-label">snapshot archive</text>
        <rect x="254" y="448" width="164" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="336" y="466" textAnchor="middle" className="cb-em-chip-label">narrative bundle</text>
        <text x="92" y="504" className="cb-em-foot">
          Server sends: `providerId`, `environmentId`, project context, merged config, and persisted `resourceId` for recovery.
        </text>

        <rect x="500" y="338" width="392" height="186" rx="8" className="cb-em-provider-rect" />
        <text x="524" y="366" className="cb-em-title">4. Run, Reconnect, Stop</text>
        <text x="524" y="386" className="cb-em-sub">
          The provider creates or reconnects the remote resource, starts the runtime, accepts `providerAgentStart`, and participates in supervised health and restart flows.
        </text>
        <rect x="526" y="408" width="130" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="591" y="426" textAnchor="middle" className="cb-em-chip-label">resourceId reuse</text>
        <rect x="670" y="408" width="122" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="731" y="426" textAnchor="middle" className="cb-em-chip-label">runtime start</text>
        <rect x="526" y="448" width="156" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="604" y="466" textAnchor="middle" className="cb-em-chip-label">providerAgentStart</text>
        <rect x="696" y="448" width="126" height="28" rx="4" className="cb-em-chip-rect" />
        <text x="759" y="466" textAnchor="middle" className="cb-em-chip-label">health + restart</text>
        <text x="524" y="504" className="cb-em-foot">
          On stop or delete, the server tears down the process, unregisters lifecycle state, and removes the persisted environment record.
        </text>

        <path d="M 480 300 L 480 338" className="cb-em-wire cb-em-wire--accent" markerEnd="url(#cb-em-arrow)" />
        <text x="492" y="324" className="cb-em-wire-label">provider connects</text>

        <path d="M 460 430 L 500 430" className="cb-em-wire" markerEnd="url(#cb-em-arrow)" />
        <text x="480" y="420" textAnchor="middle" className="cb-em-wire-label">start / ack</text>

        <path d="M 690 338 L 690 304 L 820 304" className="cb-em-wire cb-em-wire--accent" markerEnd="url(#cb-em-arrow)" />
        <text x="764" y="296" textAnchor="middle" className="cb-em-wire-label">ready + supervise</text>

        <text x="480" y="584" textAnchor="middle" className="cb-em-caption">
          Mental model: environments are persisted server objects with supervised provider processes, not temporary helper shells.
        </text>
      </svg>
    </div>
  );
}
