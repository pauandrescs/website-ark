'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { WORLD_PATH, geo } from '../lib/worldMapPath';

export { geo };

const BASE = { x: 0, y: 0, w: 1000, h: 500 };
const MIN_W = 125;   // max zoom  (1000 / 8)
const MAX_W = 1000;  // min zoom  (full map)

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

export default function WorldMap({ markers = [] }) {
  const svgRef = useRef(null);
  const drag = useRef(null);
  const [view, setView] = useState(BASE);
  const viewRef = useRef(view);
  viewRef.current = view;

  // client px -> svg units
  const toSvg = useCallback((clientX, clientY) => {
    const r = svgRef.current.getBoundingClientRect();
    return {
      x: view.x + ((clientX - r.left) / r.width) * view.w,
      y: view.y + ((clientY - r.top) / r.height) * view.h,
    };
  }, [view]);

  const clampView = (v) => {
    const w = clamp(v.w, MIN_W, MAX_W);
    const h = w / 2;
    return {
      w, h,
      x: clamp(v.x, 0, MAX_W - w),
      y: clamp(v.y, 0, 500 - h),
    };
  };

  const zoomAt = useCallback((px, py, factor) => {
    setView((cur) => {
      const w = clamp(cur.w * factor, MIN_W, MAX_W);
      const h = w / 2;
      const x = px - ((px - cur.x) * w) / cur.w;
      const y = py - ((py - cur.y) * h) / cur.h;
      return clampView({ x, y, w, h });
    });
  }, []);

  // Native non-passive wheel listener so preventDefault works (no page scroll)
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const handler = (e) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const v = viewRef.current;
      const px = v.x + ((e.clientX - r.left) / r.width) * v.w;
      const py = v.y + ((e.clientY - r.top) / r.height) * v.h;
      zoomAt(px, py, e.deltaY < 0 ? 1 / 1.18 : 1.18);
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [zoomAt]);

  const onDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const dx = ((e.clientX - drag.current.x) / r.width) * view.w;
    const dy = ((e.clientY - drag.current.y) / r.height) * view.h;
    drag.current = { x: e.clientX, y: e.clientY };
    setView((cur) => clampView({ ...cur, x: cur.x - dx, y: cur.y - dy }));
  };
  const onUp = () => { drag.current = null; };

  const btnZoom = (factor) => zoomAt(view.x + view.w / 2, view.y + view.h / 2, factor);
  const reset = () => setView(BASE);

  const zoomed = view.w < MAX_W;
  const strokeScale = view.w / MAX_W; // keep line/marker weight visually constant

  return (
    <div className="world-map-wrap">
      <svg
        ref={svgRef}
        className="world-map-svg"
        viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="World map showing ARK Platforms locations. Scroll or use buttons to zoom, drag to pan."
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        onDoubleClick={(e) => { const p = toSvg(e.clientX, e.clientY); zoomAt(p.x, p.y, 1 / 1.8); }}
        style={{ cursor: drag.current ? 'grabbing' : zoomed ? 'grab' : 'default' }}
      >
        <defs>
          <radialGradient id="wm-glow" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="rgba(197,163,93,0.10)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="1000" height="500" fill="url(#wm-glow)" />
        <path className="world-land" d={WORLD_PATH} style={{ strokeWidth: 0.6 * strokeScale }} />
        {markers.map((m, i) => (
          <g key={m.label || i}>
            <circle className="presence-ping" cx={m.x} cy={m.y} r={4 * strokeScale} style={{ animationDelay: `${(i % 6) * 0.4}s` }} />
            <circle className="presence-dot" cx={m.x} cy={m.y} r={4 * strokeScale} />
            {m.label && (
              <text className="wm-label" x={m.x + 9 * strokeScale} y={m.y + 3 * strokeScale} style={{ fontSize: 12 * strokeScale }}>{m.label}</text>
            )}
          </g>
        ))}
      </svg>

      <div className="world-map-hint">Scroll or pinch to zoom · drag to pan</div>

      <div className="world-map-ctrls">
        <button type="button" aria-label="Zoom in" onClick={() => btnZoom(1 / 1.4)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
        </button>
        <button type="button" aria-label="Zoom out" onClick={() => btnZoom(1.4)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14" /></svg>
        </button>
        <button type="button" aria-label="Reset view" onClick={reset} disabled={!zoomed}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" /></svg>
        </button>
      </div>
    </div>
  );
}
