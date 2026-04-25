import React from 'react';
import './diagrams.css';

/**
 * Agent Framework Patterns — Composable / Builder / Processor.
 *
 * Three columns sharing a base. Each column shows the pattern's
 * complexity meter, primary use case, and the call-shape sketch.
 */

const W = 760;
const H = 360;

type Pattern = {
  x: number;
  title: string;
  level: number; // 1..3
  use: string;
  sketch: string[];
};

const PATTERNS: Pattern[] = [
  {
    x: 32,
    title: 'COMPOSABLE',
    level: 1,
    use: 'rapid agents · langchain / mastra shape',
    sketch: [
      'new ComposableAgent({',
      '  instructions, model,',
      '  tools, memory,',
      '})',
    ],
  },
  {
    x: 272,
    title: 'BUILDER',
    level: 2,
    use: 'fine-grained prompt control · file injection',
    sketch: [
      'new InitialPromptBuilder(msg)',
      '  .addFile(path)',
      '  .addTaskDetails(task)',
      '  .build()',
    ],
  },
  {
    x: 512,
    title: 'PROCESSOR',
    level: 3,
    use: 'custom loops · deliberation · non-tool agents',
    sketch: [
      'class MyProcessor extends',
      '  BaseProcessor {',
      '  async process(messages) {',
      '    /* your loop */',
      '  }',
      '}',
    ],
  },
];

export default function AgentFrameworkPatterns() {
  return (
    <div className="cb-diagram cb-diagram--patterns">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-labelledby="agent-framework-patterns-title"
      >
        <title id="agent-framework-patterns-title">
          Three patterns for defining a Codebolt agent — composable, builder, processor
        </title>

        <text x="32" y="28" className="cb-section-label">
          THREE PATTERNS · pick the lowest complexity that fits
        </text>
        <text x="32" y="46" className="cb-axis-label">
          all three live in @codebolt/agent · same memory · same tools · same runtime
        </text>

        {PATTERNS.map((p) => {
          const colW = 216;
          return (
            <g key={p.title}>
              {/* column box */}
              <rect x={p.x} y="68" width={colW} height="252" rx="4" className="cb-box" />

              {/* title */}
              <text x={p.x + colW / 2} y="92" textAnchor="middle" className="cb-box-title">
                {p.title}
              </text>

              {/* complexity meter (3 dots, filled by level) */}
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  cx={p.x + colW / 2 - 14 + i * 14}
                  cy="106"
                  r="3"
                  className={i < p.level ? 'cb-flow-dot' : 'cb-box'}
                />
              ))}
              <text x={p.x + colW / 2} y="124" textAnchor="middle" className="cb-box-sub">
                complexity
              </text>

              {/* divider */}
              <line
                x1={p.x + 16}
                y1="138"
                x2={p.x + colW - 16}
                y2="138"
                className="cb-flow-line"
              />

              {/* use case */}
              <text x={p.x + colW / 2} y="156" textAnchor="middle" className="cb-box-sub">
                BEST FOR
              </text>
              <foreignObject x={p.x + 12} y="162" width={colW - 24} height="40">
                <div className="cb-pattern-use">{p.use}</div>
              </foreignObject>

              {/* sketch box */}
              <rect
                x={p.x + 12}
                y="208"
                width={colW - 24}
                height="98"
                rx="3"
                className="cb-box"
              />
              {p.sketch.map((line, i) => (
                <text
                  key={i}
                  x={p.x + 22}
                  y={224 + i * 14}
                  className="cb-pattern-code"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}

        {/* base rail */}
        <line x1="32" y1="334" x2={W - 32} y2="334" className="cb-flow-line" />
        <text x={W / 2} y="350" textAnchor="middle" className="cb-axis-label">
          start composable · move to builder when prompts get specific · processor when the loop itself changes
        </text>
      </svg>
    </div>
  );
}
