function ButterflySvg({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 180"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="butterfly-wing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5f8" stopOpacity="0.98" />
          <stop offset="38%" stopColor="#ffa0c5" stopOpacity="0.96" />
          <stop offset="68%" stopColor="#ff6faa" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#ff8c5c" stopOpacity="0.94" />
        </linearGradient>
        <radialGradient id="butterfly-body-glow" cx="50%" cy="34%" r="74%">
          <stop offset="0%" stopColor="#fff8fb" stopOpacity="0.98" />
          <stop offset="60%" stopColor="#ffd6e6" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#ff9bc8" stopOpacity="0.18" />
        </radialGradient>
      </defs>
      <g className="butterfly-wing butterfly-wing-left">
        <path d="M105 88C74 25 28 22 19 54c-8 28 11 63 53 70 14 2 24-7 33-36Z" />
        <path d="M102 92C66 103 49 131 61 154c11 22 39 17 52-8 8-16 5-34-11-54Z" />
      </g>
      <g className="butterfly-wing butterfly-wing-right">
        <path d="M115 88c31-63 77-66 86-34 8 28-11 63-53 70-14 2-24-7-33-36Z" />
        <path d="M118 92c36 11 53 39 41 62-11 22-39 17-52-8-8-16-5-34 11-54Z" />
      </g>
      <g className="butterfly-body">
        <rect x="104" y="44" width="12" height="82" rx="6" />
        <ellipse cx="110" cy="86" rx="18" ry="36" fill="url(#butterfly-body-glow)" opacity="0.72" />
        <path d="M110 44c0-13 9-22 20-28" />
        <path d="M110 44c0-13-9-22-20-28" />
      </g>
    </svg>
  )
}

export default ButterflySvg
