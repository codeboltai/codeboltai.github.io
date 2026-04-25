import React from 'react';
import './diagrams.css';

export default function AutonomousCompaniesArchitecture() {
  const W = 760;
  const H = 520;

  return (
    <div className="cb-diagram cb-diagram--autonomous-company">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="autonomous-company-arch-title"
      >
        <title id="autonomous-company-arch-title">
          Autonomous company architecture showing external systems flowing into the routing gateway,
          then into virtual employees, tasks, and coordination systems.
        </title>

        <defs>
          <marker
            id="cb-auto-arrow"
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
          AUTONOMOUS COMPANY REFERENCE ARCHITECTURE
        </text>

        <text x="48" y="66" className="cb-axis-label">
          EXTERNAL CHANNELS AND SYSTEMS
        </text>

        <rect x="48" y="82" width="150" height="54" rx="4" className="cb-box" />
        <text x="64" y="106" className="cb-box-title">CHAT CHANNELS</text>
        <text x="64" y="123" className="cb-box-sub">telegram · slack · teams</text>

        <rect x="214" y="82" width="150" height="54" rx="4" className="cb-box" />
        <text x="230" y="106" className="cb-box-title">PROJECT TOOLS</text>
        <text x="230" y="123" className="cb-box-sub">linear · github · jira</text>

        <rect x="380" y="82" width="150" height="54" rx="4" className="cb-box" />
        <text x="396" y="106" className="cb-box-title">MONITORING</text>
        <text x="396" y="123" className="cb-box-sub">logs · alerts · webhooks</text>

        <rect x="546" y="82" width="150" height="54" rx="4" className="cb-box" />
        <text x="562" y="106" className="cb-box-title">SCHEDULES</text>
        <text x="562" y="123" className="cb-box-sub">cron · calendar · polling</text>

        <line x1="123" y1="136" x2="123" y2="182" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />
        <line x1="289" y1="136" x2="289" y2="182" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />
        <line x1="455" y1="136" x2="455" y2="182" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />
        <line x1="621" y1="136" x2="621" y2="182" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />

        <rect x="140" y="190" width="480" height="76" rx="4" className="cb-box cb-box--accent" />
        <text x="380" y="219" textAnchor="middle" className="cb-box-title">
          ROUTING GATEWAY
        </text>
        <text x="380" y="238" textAnchor="middle" className="cb-box-sub">
          thread resolution · agent routing · reply delivery
        </text>
        <text x="380" y="254" textAnchor="middle" className="cb-box-sub">
          gateway is the communication fabric for every virtual employee
        </text>

        <line x1="380" y1="266" x2="380" y2="308" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />

        <text x="48" y="326" className="cb-axis-label">
          ROLE-BASED VIRTUAL EMPLOYEES
        </text>

        <rect x="48" y="340" width="200" height="64" rx="4" className="cb-box" />
        <text x="64" y="365" className="cb-box-title">SUPPORT EMPLOYEE</text>
        <text x="64" y="383" className="cb-box-sub">customer-facing requests</text>

        <rect x="280" y="340" width="200" height="64" rx="4" className="cb-box" />
        <text x="296" y="365" className="cb-box-title">OPS EMPLOYEE</text>
        <text x="296" y="383" className="cb-box-sub">tool-driven and scheduled work</text>

        <rect x="512" y="340" width="200" height="64" rx="4" className="cb-box" />
        <text x="528" y="365" className="cb-box-title">INCIDENT EMPLOYEE</text>
        <text x="528" y="383" className="cb-box-sub">monitoring and exception response</text>

        <line x1="148" y1="404" x2="148" y2="444" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />
        <line x1="380" y1="404" x2="380" y2="444" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />
        <line x1="612" y1="404" x2="612" y2="444" className="cb-arrow" markerEnd="url(#cb-auto-arrow)" />

        <rect x="48" y="452" width="212" height="50" rx="4" className="cb-box" />
        <text x="64" y="475" className="cb-box-title">TASKS / GOALS</text>
        <text x="64" y="491" className="cb-box-sub">queue · ownership · status</text>

        <rect x="274" y="452" width="212" height="50" rx="4" className="cb-box" />
        <text x="290" y="475" className="cb-box-title">COORDINATION</text>
        <text x="290" y="491" className="cb-box-sub">jobs · swarms · mail · locks</text>

        <rect x="500" y="452" width="212" height="50" rx="4" className="cb-box" />
        <text x="516" y="475" className="cb-box-title">OBSERVABILITY</text>
        <text x="516" y="491" className="cb-box-sub">activity log · memory · event log</text>
      </svg>
    </div>
  );
}
