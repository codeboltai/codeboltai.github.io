import React from 'react';
import './diagrams.css';

const W = 980;
const H = 680;

const SURFACES = ['Telegram', 'Slack', 'Discord', 'Custom Webchat'];

const SERVER_MODULES = [
  {
    badge: 'GH',
    title: 'Gateway Handler',
    lines: ['normalize inbound message', 'register channel + reply target'],
  },
  {
    badge: 'RG',
    title: 'Routing Gateway',
    lines: ['resolve thread + agent', 'queue work or spawn process'],
  },
  {
    badge: 'RR',
    title: 'Response Router',
    lines: ['watch gateway-managed threads', 'dispatch replies back to plugin'],
  },
];

export default function ChatGatewayArchitecture() {
  return (
    <div className="cb-diagram cb-diagram--chat-gateway">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="chat-gateway-arch-title">
        <title id="chat-gateway-arch-title">
          Chat gateway architecture showing external surfaces, a channel plugin, the server gateway modules,
          persistent routing state, thread history, and the agent process.
        </title>

        <defs>
          <pattern id="cb-chat-gw-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(11,13,11,0.09)" />
          </pattern>
          <marker id="cb-chat-gw-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <polygon points="0 0, 10 5, 0 10" className="cb-chat-gw-arrow" />
          </marker>
          <marker id="cb-chat-gw-arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <polygon points="0 0, 10 5, 0 10" className="cb-chat-gw-arrow cb-chat-gw-arrow--accent" />
          </marker>
          <marker id="cb-chat-gw-arrow-notify" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <polygon points="0 0, 10 5, 0 10" className="cb-chat-gw-arrow cb-chat-gw-arrow--notify" />
          </marker>
        </defs>

        <rect width="100%" height="100%" className="cb-lc-paper" />
        <rect width="100%" height="100%" fill="url(#cb-chat-gw-dots)" opacity="0.45" />

        <text x="72" y="34" className="cb-chat-gw-eyebrow">Persistent Messaging Through The Chat Gateway</text>

        <rect x="64" y="56" width="852" height="116" rx="8" className="cb-chat-gw-band" />
        <text x="88" y="84" className="cb-chat-gw-band-title">External Surfaces</text>
        <text x="88" y="104" className="cb-chat-gw-band-sub">
          Any message source can connect here as long as the plugin can normalize it into stable routing fields.
        </text>

        {SURFACES.map((name, index) => {
          const x = 96 + index * 202;
          return (
            <g key={name}>
              <rect x={x} y="118" width="172" height="34" rx="5" className="cb-chat-gw-chip" />
              <text x={x + 86} y="140" textAnchor="middle" className="cb-chat-gw-chip-label">{name}</text>
            </g>
          );
        })}

        <rect x="82" y="224" width="330" height="206" rx="8" className="cb-chat-gw-plugin" />
        <rect x="98" y="240" width="52" height="14" rx="3" className="cb-chat-gw-badge" />
        <text x="124" y="251" textAnchor="middle" className="cb-chat-gw-badge-text">PLUGIN</text>
        <text x="248" y="272" textAnchor="middle" className="cb-chat-gw-title">Chat Gateway Plugin</text>
        <text x="248" y="292" textAnchor="middle" className="cb-chat-gw-sub">
          platform SDK + config UI + `plugin.gateway`
        </text>

        <rect x="110" y="318" width="274" height="88" rx="6" className="cb-chat-gw-inner" />
        <text x="136" y="344" className="cb-chat-gw-inner-title">What the plugin owns</text>
        <text x="136" y="364" className="cb-chat-gw-inner-copy">connect to the platform</text>
        <text x="136" y="382" className="cb-chat-gw-inner-copy">load config from `kvStore`</text>
        <text x="136" y="400" className="cb-chat-gw-inner-copy">call `registerChannel()` and `routeMessage()`</text>

        <rect x="460" y="198" width="430" height="300" rx="8" className="cb-chat-gw-server" />
        <rect x="476" y="214" width="40" height="14" rx="3" className="cb-chat-gw-badge cb-chat-gw-badge--server" />
        <text x="496" y="225" textAnchor="middle" className="cb-chat-gw-badge-text cb-chat-gw-badge-text--server">SRV</text>
        <text x="675" y="246" textAnchor="middle" className="cb-chat-gw-title">Codebolt Server Chat Gateway</text>
        <text x="675" y="266" textAnchor="middle" className="cb-chat-gw-sub">
          stable thread mapping, agent lifecycle, reply dispatch
        </text>

        {SERVER_MODULES.map((mod, index) => {
          const x = 486 + index * 136;
          return (
            <g key={mod.badge}>
              <rect x={x} y="294" width="122" height="92" rx="6" className="cb-chat-gw-module" />
              <rect x={x + 10} y="306" width="28" height="12" rx="3" className="cb-chat-gw-module-badge" />
              <text x={x + 24} y="316" textAnchor="middle" className="cb-chat-gw-module-badge-text">{mod.badge}</text>
              <text x={x + 61} y="342" textAnchor="middle" className="cb-chat-gw-module-title">{mod.title}</text>
              <text x={x + 61} y="358" textAnchor="middle" className="cb-chat-gw-module-sub">
                <tspan x={x + 61} dy="0">{mod.lines[0]}</tspan>
                <tspan x={x + 61} dy="13">{mod.lines[1]}</tspan>
              </text>
            </g>
          );
        })}

        <rect x="496" y="410" width="358" height="64" rx="6" className="cb-chat-gw-callout" />
        <text x="675" y="434" textAnchor="middle" className="cb-chat-gw-callout-title">
          Reply path and proactive path stay separate
        </text>
        <text x="675" y="454" textAnchor="middle" className="cb-chat-gw-callout-copy">
          `gateway.reply` returns conversation output. `gateway.messageToChannel` pushes a fresh outbound message.
        </text>

        <rect x="82" y="490" width="330" height="122" rx="8" className="cb-chat-gw-state" />
        <text x="108" y="520" className="cb-chat-gw-title">Persistent Routing State</text>
        <text x="108" y="542" className="cb-chat-gw-state-copy">`.codebolt/channels.json` stores channel config and status</text>
        <text x="108" y="562" className="cb-chat-gw-state-copy">`.codebolt/gateway-thread-map.json` stores lookup-key to thread mappings</text>
        <text x="108" y="582" className="cb-chat-gw-state-copy">the real conversation history remains in the thread system</text>

        <rect x="460" y="530" width="210" height="82" rx="8" className="cb-chat-gw-thread" />
        <text x="486" y="558" className="cb-chat-gw-title">Thread Context</text>
        <text x="486" y="578" className="cb-chat-gw-state-copy">history, queued steps, and conversation memory</text>

        <rect x="692" y="530" width="198" height="82" rx="8" className="cb-chat-gw-agent" />
        <text x="718" y="558" className="cb-chat-gw-title">Agent Process</text>
        <text x="718" y="578" className="cb-chat-gw-state-copy">spawn or reuse based on thread state</text>

        <line x1="248" y1="172" x2="248" y2="224" className="cb-chat-gw-line" markerEnd="url(#cb-chat-gw-arrow)" />
        <rect x="176" y="186" width="144" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="248" y="196" textAnchor="middle" className="cb-chat-gw-label">platform events arrive</text>

        <path d="M 412 316 L 460 316" className="cb-chat-gw-line" markerEnd="url(#cb-chat-gw-arrow)" />
        <rect x="394" y="292" width="86" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="437" y="302" textAnchor="middle" className="cb-chat-gw-label">routeMessage</text>

        <path d="M 460 356 L 412 356" className="cb-chat-gw-line cb-chat-gw-line--notify" markerEnd="url(#cb-chat-gw-arrow-notify)" />
        <rect x="390" y="364" width="102" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="441" y="374" textAnchor="middle" className="cb-chat-gw-label cb-chat-gw-label--notify">gateway.reply</text>

        <path d="M 412 392 L 460 392" className="cb-chat-gw-line cb-chat-gw-line--accent" markerEnd="url(#cb-chat-gw-arrow-accent)" />
        <rect x="372" y="400" width="140" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="442" y="410" textAnchor="middle" className="cb-chat-gw-label cb-chat-gw-label--accent">registerChannel</text>

        <path d="M 248 430 L 248 490" className="cb-chat-gw-line" markerEnd="url(#cb-chat-gw-arrow)" />
        <rect x="128" y="448" width="240" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="248" y="458" textAnchor="middle" className="cb-chat-gw-label">operator choices stay separate from server routing files</text>

        <path d="M 675 498 L 675 530" className="cb-chat-gw-line" markerEnd="url(#cb-chat-gw-arrow)" />
        <rect x="610" y="506" width="130" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="675" y="516" textAnchor="middle" className="cb-chat-gw-label">resolve thread</text>

        <path d="M 760 498 L 790 530" className="cb-chat-gw-line cb-chat-gw-line--accent" markerEnd="url(#cb-chat-gw-arrow-accent)" />
        <rect x="726" y="504" width="122" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="787" y="514" textAnchor="middle" className="cb-chat-gw-label cb-chat-gw-label--accent">spawn or queue</text>

        <path d="M 670 572 L 692 572" className="cb-chat-gw-line cb-chat-gw-line--notify" markerEnd="url(#cb-chat-gw-arrow-notify)" />
        <rect x="612" y="584" width="134" height="14" rx="3" className="cb-chat-gw-label-bg" />
        <text x="679" y="594" textAnchor="middle" className="cb-chat-gw-label cb-chat-gw-label--notify">agent replies flow back up</text>

        <text x="490" y="642" className="cb-chat-gw-caption">
          Result: the plugin handles platform IO while the server owns persistence, routing, and the return path.
        </text>
      </svg>
    </div>
  );
}
