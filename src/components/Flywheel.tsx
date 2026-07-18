'use client';

import { motion } from 'framer-motion';

interface FlywheelStage {
  n: string;
  title: string;
  body: string;
}

interface FlywheelProps {
  stages: FlywheelStage[];
  centerLabel: string;
  centerSub?: string;
  delay?: number;
  size?: number;
}

export function Flywheel({ stages, centerLabel, centerSub, delay = 0.5, size = 520 }: FlywheelProps) {
  const cx = size / 2;
  const cy = size / 2;
  const ringR = size * 0.27; // radius of the circular arc itself
  const labelR = size * 0.46; // radius where stage labels sit — well clear of the ring
  const count = stages.length;

  const anglesDeg = stages.map((_, i) => -90 + (360 / count) * i);

  const ringPoints = anglesDeg.map((deg) => {
    const rad = deg * (Math.PI / 180);
    return { x: cx + ringR * Math.cos(rad), y: cy + ringR * Math.sin(rad) };
  });

  const labelPoints = anglesDeg.map((deg) => {
    const rad = deg * (Math.PI / 180);
    return { x: cx + labelR * Math.cos(rad), y: cy + labelR * Math.sin(rad) };
  });

  // Arc path between consecutive ring points (clockwise, slightly inset so arrowheads land cleanly)
  const arcPaths = ringPoints.map((p, i) => {
    const next = ringPoints[(i + 1) % count];
    return `M ${p.x} ${p.y} A ${ringR} ${ringR} 0 0 1 ${next.x} ${next.y}`;
  });

  const labelWidth = Math.max(150, size * 0.32);

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        <defs>
          <marker
            id="flywheel-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L6,3 z" fill="#000" />
          </marker>
        </defs>
        {arcPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="#000"
            strokeWidth={2}
            markerEnd="url(#flywheel-arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: delay + 0.3 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
          />
        ))}
        {/* thin radial connectors from the ring out to each label, so the pairing reads clearly */}
        {ringPoints.map((p, i) => {
          const lp = labelPoints[i];
          const dx = lp.x - p.x;
          const dy = lp.y - p.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const start = { x: p.x + (dx / len) * 14, y: p.y + (dy / len) * 14 };
          const end = { x: p.x + (dx / len) * (len - 40), y: p.y + (dy / len) * (len - 40) };
          return (
            <motion.line
              key={i}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#d1d5db"
              strokeWidth={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + i * 0.15 + 0.1, duration: 0.4 }}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute flex flex-col items-center justify-center text-center border-2 border-black rounded-full bg-white"
        style={{
          width: ringR * 1.05,
          height: ringR * 1.05,
          left: cx - (ringR * 1.05) / 2,
          top: cy - (ringR * 1.05) / 2,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.5 }}
      >
        <p className="text-lg font-black text-black leading-tight px-3">{centerLabel}</p>
        {centerSub && <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">{centerSub}</p>}
      </motion.div>

      {/* numbered stops sitting directly on the ring */}
      {ringPoints.map((p, i) => (
        <motion.div
          key={i}
          className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold"
          style={{ left: p.x - 16, top: p.y - 16 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.15, duration: 0.4 }}
        >
          {stages[i].n}
        </motion.div>
      ))}

      {/* labels placed outside the ring, clear of the arc stroke */}
      {stages.map((s, i) => {
        const p = labelPoints[i];
        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center text-center bg-white"
            style={{ width: labelWidth, left: p.x - labelWidth / 2, top: p.y - 22 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + i * 0.15 + 0.1, duration: 0.5 }}
          >
            <p className="text-lg font-bold text-black leading-tight">{s.title}</p>
            {s.body && (
              <p className="text-sm text-gray-600 font-light leading-snug mt-1">{s.body}</p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
