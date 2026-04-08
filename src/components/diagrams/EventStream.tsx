import React from 'react';
import './diagrams.css';

/**
 * Event Stream — append-only ribbon of events with multiple subscribers
 * (memory ingestion, observability, replay, guardrails).
 */

const SUBSCRIBERS = [
  { label: 'MEMORY INGEST', y: 60 },
  { label: 'OBSERVABILITY', y: 100 },
  { label: 'REPLAY', y: 220 },
  { label: 'POST-HOC EVAL', y: 260 },
];

export default function EventStream() {
  const W = 720;
  const H = 320;
  const ribbonY = 150;
  const events = [70, 130, 190, 250, 310, 370, 430, 490, 550, 610];

  return (
    <div className="cb-diagram cb-diagram--events">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="event-stream-title">
        <title id="event-stream-title">The event log as the system's source of truth</title>

        {/* ribbon */}
        <rect x="40" y={ribbonY - 22} width={W - 80} height={44} rx="3" className="cb-ribbon" />
        <text x="50" y={ribbonY + 5} className="cb-ribbon-label">EVENT LOG · append-only ▶</text>

        {/* event marks */}
        {events.map((x, i) => (
          <line key={i} x1={x} y1={ribbonY - 14} x2={x} y2={ribbonY + 14} className="cb-event-tick" />
        ))}

        {/* subscribers */}
        {SUBSCRIBERS.map((s) => {
          const isAbove = s.y < ribbonY;
          return (
            <g key={s.label}>
              <rect x={W / 2 - 80} y={s.y} width={160} height={28} rx="2" className="cb-box" />
              <text x={W / 2} y={s.y + 18} textAnchor="middle" className="cb-box-sub">{s.label}</text>
              <line
                x1={W / 2}
                y1={isAbove ? s.y + 28 : s.y}
                x2={W / 2}
                y2={isAbove ? ribbonY - 22 : ribbonY + 22}
                className="cb-flow-line"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
