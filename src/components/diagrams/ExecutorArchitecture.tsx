import React from 'react';
import './diagrams.css';

/**
 * ExecutorArchitecture — shows how capability types map to executors,
 * executor discovery sources, and the type-to-executor routing.
 */

const W = 800;
const H = 420;

const TYPES = [
  { name: 'skill', color: '#0ea5e9' },
  { name: 'power', color: '#8b5cf6' },
  { name: 'talent', color: '#f59e0b' },
  { name: 'custom', color: '#6b7280' },
];

const SOURCES = [
  { name: 'PROJECT', path: '.codebolt/capabilities/executors/', priority: '1 (highest)', y: 0 },
  { name: 'GLOBAL', path: '~/.codebolt/capabilities/executors/', priority: '2', y: 1 },
  { name: 'BUILT-IN', path: '<appRoot>/.codebolt/capabilities/executors/', priority: '3 (lowest)', y: 2 },
];

export default function ExecutorArchitecture() {
  const padX = 30;
  const padY = 30;

  // Left section: capability types
  const typesX = padX;
  const typesW = 140;
  const typeBoxH = 36;
  const typeGap = 10;
  const typesTopY = padY + 50;

  // Center: routing arrows
  const arrowStartX = typesX + typesW + 20;

  // Right section: executors
  const execX = 340;
  const execW = 200;
  const execH = 70;
  const execY1 = padY + 50;
  const execY2 = padY + 140;

  // Bottom section: sources
  const srcY = 270;
  const srcBoxH = 36;
  const srcGap = 8;
  const srcX = padX + 60;
  const srcW = W - padX * 2 - 60;

  return (
    <div className="cb-diagram cb-diagram--capstack">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-labelledby="exec-arch-title">
        <title id="exec-arch-title">
          Executor architecture: capability types route to executors discovered from three sources
        </title>

        <defs>
          <marker id="ea-arr" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <polygon points="0 0, 7 2.5, 0 5" fill="#52534e" />
          </marker>
        </defs>

        {/* Section labels */}
        <text x={typesX + typesW / 2} y={padY + 14} textAnchor="middle" className="cb-box-title">
          CAPABILITY TYPES
        </text>
        <text x={execX + execW / 2} y={padY + 14} textAnchor="middle" className="cb-box-title">
          EXECUTORS
        </text>
        <text x={padX + 14} y={srcY + 2} className="cb-box-title">
          SOURCES
        </text>

        {/* Type boxes */}
        {TYPES.map((t, i) => {
          const y = typesTopY + i * (typeBoxH + typeGap);
          return (
            <g key={t.name}>
              <rect
                x={typesX} y={y} width={typesW} height={typeBoxH} rx={4}
                fill="rgba(0,0,0,0.02)" stroke={t.color} strokeWidth={1.5}
              />
              <circle cx={typesX + 18} cy={y + typeBoxH / 2} r={5} fill={t.color} />
              <text x={typesX + 32} y={y + typeBoxH / 2 + 4}
                style={{ fontSize: '12px', fontFamily: 'ui-monospace, monospace', fontWeight: 600, fill: '#18181b' }}>
                {t.name}
              </text>
            </g>
          );
        })}

        {/* Executor boxes */}
        {[
          { name: 'skill-executor', types: ['skill', 'power'], y: execY1 },
          { name: 'talent-executor', types: ['talent'], y: execY2 },
        ].map((ex) => (
          <g key={ex.name}>
            <rect
              x={execX} y={ex.y} width={execW} height={execH} rx={4}
              fill="rgba(0,0,0,0.02)" stroke="#3f3f46" strokeWidth={1}
            />
            <text x={execX + 14} y={ex.y + 22}
              style={{ fontSize: '11px', fontFamily: 'ui-monospace, monospace', fontWeight: 600, fill: '#18181b' }}>
              {ex.name}
            </text>
            <text x={execX + 14} y={ex.y + 38}
              style={{ fontSize: '9.5px', fontFamily: 'ui-monospace, monospace', fill: '#737373' }}>
              supportedTypes:
            </text>
            <text x={execX + 14} y={ex.y + 54}
              style={{ fontSize: '9.5px', fontFamily: 'ui-monospace, monospace', fill: '#737373' }}>
              [{ex.types.join(', ')}]
            </text>
          </g>
        ))}

        {/* Custom type → ? */}
        <g>
          <rect
            x={execX} y={execY2 + execH + 20} width={execW} height={40} rx={4}
            fill="rgba(0,0,0,0.02)" stroke="#6b7280" strokeWidth={1} strokeDasharray="4 3"
          />
          <text x={execX + execW / 2} y={execY2 + execH + 44} textAnchor="middle"
            style={{ fontSize: '10px', fontFamily: 'ui-monospace, monospace', fill: '#6b7280' }}>
            your-custom-executor
          </text>
        </g>

        {/* Routing arrows: types → executors */}
        {/* skill → skill-executor */}
        <line x1={arrowStartX - 20} y1={typesTopY + typeBoxH / 2}
          x2={execX - 4} y2={execY1 + 20}
          stroke="#0ea5e9" strokeWidth={1.2} markerEnd="url(#ea-arr)" />

        {/* power → skill-executor */}
        <line x1={arrowStartX - 20} y1={typesTopY + (typeBoxH + typeGap) + typeBoxH / 2}
          x2={execX - 4} y2={execY1 + 45}
          stroke="#8b5cf6" strokeWidth={1.2} markerEnd="url(#ea-arr)" />

        {/* talent → talent-executor */}
        <line x1={arrowStartX - 20} y1={typesTopY + 2 * (typeBoxH + typeGap) + typeBoxH / 2}
          x2={execX - 4} y2={execY2 + execH / 2}
          stroke="#f59e0b" strokeWidth={1.2} markerEnd="url(#ea-arr)" />

        {/* custom → custom-executor */}
        <line x1={arrowStartX - 20} y1={typesTopY + 3 * (typeBoxH + typeGap) + typeBoxH / 2}
          x2={execX - 4} y2={execY2 + execH + 40}
          stroke="#6b7280" strokeWidth={1.2} strokeDasharray="4 3" markerEnd="url(#ea-arr)" />

        {/* Arrow label */}
        <text x={(arrowStartX + execX) / 2 - 20} y={padY + 38} textAnchor="middle"
          style={{ fontSize: '9px', fontFamily: 'ui-monospace, monospace', fill: '#737373', letterSpacing: '0.06em' }}>
          getExecutorForType()
        </text>

        {/* Entry point label on right */}
        <text x={execX + execW + 16} y={execY1 + 36}
          style={{ fontSize: '9px', fontFamily: 'ui-monospace, monospace', fill: '#737373' }}>
          entry: dist/index.js
        </text>
        <text x={execX + execW + 16} y={execY1 + 50}
          style={{ fontSize: '9px', fontFamily: 'ui-monospace, monospace', fill: '#737373' }}>
          uses: codeboltjs SDK
        </text>

        {/* Source discovery section */}
        <line x1={padX} y1={srcY - 14} x2={W - padX} y2={srcY - 14}
          stroke="rgba(11,13,11,0.10)" strokeWidth="0.8" />

        {SOURCES.map((s, i) => {
          const y = srcY + 12 + i * (srcBoxH + srcGap);
          return (
            <g key={s.name}>
              <rect x={srcX} y={y} width={srcW} height={srcBoxH} rx={3}
                fill="rgba(0,0,0,0.02)" stroke="#3f3f46" strokeWidth={0.8}
              />
              {/* Priority badge */}
              <rect x={srcX + 8} y={y + 8} width={56} height={14} rx={2}
                fill={i === 0 ? 'rgba(14,165,233,0.1)' : 'rgba(0,0,0,0.04)'}
                stroke={i === 0 ? '#0ea5e9' : '#a1a1aa'} strokeWidth={0.6}
              />
              <text x={srcX + 36} y={y + 19} textAnchor="middle"
                style={{ fontSize: '8px', fontFamily: 'ui-monospace, monospace', fontWeight: 600, fill: i === 0 ? '#0ea5e9' : '#737373' }}>
                {s.name}
              </text>
              {/* Path */}
              <text x={srcX + 76} y={y + 19}
                style={{ fontSize: '10px', fontFamily: 'ui-monospace, monospace', fill: '#18181b' }}>
                {s.path}
              </text>
              {/* Priority */}
              <text x={srcX + srcW - 12} y={y + 19} textAnchor="end"
                style={{ fontSize: '9px', fontFamily: 'ui-monospace, monospace', fill: '#737373' }}>
                priority {s.priority}
              </text>
            </g>
          );
        })}

        {/* Priority arrow */}
        <text x={srcX - 24} y={srcY + 30 + srcBoxH / 2} textAnchor="middle"
          style={{ fontSize: '10px', fill: '#737373' }}>
          ↑
        </text>
        <text x={srcX - 24} y={srcY + 30 + srcBoxH + srcGap + srcBoxH / 2} textAnchor="middle"
          style={{ fontSize: '9px', fill: '#a1a1aa' }}>
          |
        </text>
        <text x={srcX - 24} y={srcY + 30 + 2 * (srcBoxH + srcGap) + srcBoxH / 2} textAnchor="middle"
          style={{ fontSize: '10px', fill: '#737373' }}>
          ↓
        </text>
      </svg>
    </div>
  );
}
