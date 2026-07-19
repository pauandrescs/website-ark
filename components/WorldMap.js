import { WORLD_PATH } from '../lib/worldMapPath';

// Equirectangular projection helpers (viewBox 0 0 1000 500)
export const geo = (lat, lon) => ({
  x: Math.round(((lon + 180) / 360) * 1000),
  y: Math.round(((90 - lat) / 180) * 500),
});

export default function WorldMap({ markers = [] }) {
  return (
    <svg
      className="world-map-svg"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="World map showing ARK Platforms locations"
    >
      <defs>
        <radialGradient id="wm-glow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="rgba(197,163,93,0.10)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="500" fill="url(#wm-glow)" />
      <path className="world-land" d={WORLD_PATH} />
      {markers.map((m, i) => (
        <g key={m.label || i}>
          <circle className="presence-ping" cx={m.x} cy={m.y} r="4" style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
          <circle className="presence-dot" cx={m.x} cy={m.y} r="4" />
          {m.label && (
            <text className="wm-label" x={m.x + 9} y={m.y + 3}>{m.label}</text>
          )}
        </g>
      ))}
    </svg>
  );
}
