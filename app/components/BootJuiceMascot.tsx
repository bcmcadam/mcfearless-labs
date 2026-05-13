export function BootJuiceMascot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 320"
      className="bj-mascot"
      preserveAspectRatio="xMidYMax meet"
      aria-label="Boot Juice mascot kicking"
    >
      <defs>
        <linearGradient id="bj-skin" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#5A3420" />
          <stop offset="0.55" stopColor="#6B3A22" />
          <stop offset="1" stopColor="#4A2A18" />
        </linearGradient>
        <linearGradient id="bj-shirt" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFF4E0" />
          <stop offset="1" stopColor="#FBE9CF" />
        </linearGradient>
      </defs>
      <ellipse cx="140" cy="310" rx="90" ry="8" fill="#141414" opacity="0.35" />
      <g>
        <rect x="108" y="200" width="30" height="72" fill="#1F4FC4" stroke="#141414" strokeWidth="3" rx="6" />
        <line x1="123" y1="202" x2="123" y2="270" stroke="#141414" strokeWidth="1" opacity="0.4" />
        <path
          d="M92 262 L148 262 L150 286 Q150 296 138 296 L98 296 Q86 296 86 286 L86 278 L66 284 L70 272 L86 268 Z"
          fill="#E52421"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M96 270 Q118 284 142 270" fill="none" stroke="#FFC72C" strokeWidth="1.5" />
        <path d="M100 278 Q118 288 140 278" fill="none" stroke="#FFC72C" strokeWidth="1.5" />
        <rect x="86" y="296" width="4" height="12" fill="#141414" />
      </g>
      <path
        d="M84 174 Q140 168 196 174 L206 228 Q140 240 74 228 Z"
        fill="#1F4FC4"
        stroke="#141414"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="82" y="168" width="120" height="12" fill="#141414" stroke="#141414" strokeWidth="2" />
      <rect x="134" y="169" width="14" height="10" fill="#FFC72C" stroke="#141414" strokeWidth="2" />
      <g className="bj-kick-leg">
        <rect x="132" y="180" width="28" height="62" fill="#1F4FC4" stroke="#141414" strokeWidth="3" rx="6" />
        <line x1="146" y1="182" x2="146" y2="240" stroke="#141414" strokeWidth="1" opacity="0.4" />
        <path
          d="M118 234 L172 234 L182 258 Q184 270 170 270 L132 270 Q118 270 116 262 L115 252 L140 260 L142 248 L124 246 Z"
          fill="#E52421"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M124 244 Q150 258 176 244" fill="none" stroke="#FFC72C" strokeWidth="1.5" />
        <path d="M122 252 Q150 264 178 252" fill="none" stroke="#FFC72C" strokeWidth="1.5" />
        <rect x="176" y="258" width="5" height="14" fill="#141414" />
      </g>
      <path
        d="M96 104 Q140 92 184 104 L196 178 Q140 188 84 178 Z"
        fill="url(#bj-shirt)"
        stroke="#141414"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M96 104 Q104 118 106 134" fill="none" stroke="#141414" strokeWidth="2" opacity="0.5" />
      <path d="M184 104 Q176 118 174 134" fill="none" stroke="#141414" strokeWidth="2" opacity="0.5" />
      <g>
        <text
          x="140"
          y="142"
          textAnchor="middle"
          fontFamily="Ultra, Georgia, serif"
          fontSize="20"
          fontWeight="700"
          fill="#141414"
        >
          Boot
        </text>
        <text
          x="140"
          y="160"
          textAnchor="middle"
          fontFamily="Shrikhand, Georgia, serif"
          fontSize="15"
          fontStyle="italic"
          fill="#E52421"
          transform="rotate(-4, 140, 158)"
        >
          juice
        </text>
      </g>
      <g>
        <path
          d="M96 114 Q62 132 54 176 Q52 188 64 188 Q76 186 74 176 Q80 148 104 134"
          fill="url(#bj-skin)"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="62" cy="188" r="11" fill="url(#bj-skin)" stroke="#141414" strokeWidth="3" />
        <line x1="56" y1="192" x2="68" y2="192" stroke="#141414" strokeWidth="1.5" opacity="0.5" />
        <path
          d="M184 112 Q214 96 230 58 Q234 46 224 42 Q214 40 212 50 Q206 80 180 104"
          fill="url(#bj-skin)"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="225" cy="46" r="11" fill="url(#bj-skin)" stroke="#141414" strokeWidth="3" />
        <line x1="220" y1="42" x2="230" y2="42" stroke="#141414" strokeWidth="1.5" opacity="0.5" />
        <line x1="222" y1="46" x2="228" y2="46" stroke="#141414" strokeWidth="1" opacity="0.4" />
      </g>
      <path
        d="M126 82 L154 82 L152 108 Q140 112 128 108 Z"
        fill="url(#bj-skin)"
        stroke="#141414"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g className="bj-head">
        <path
          d="M98 66 Q100 30 140 26 Q180 30 182 66 Q184 94 164 108 Q152 116 140 116 Q128 116 116 108 Q96 94 98 66 Z"
          fill="url(#bj-skin)"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M100 52 Q102 28 140 22 Q178 28 180 52 Q180 58 176 58 L104 58 Q100 58 100 52 Z"
          fill="#1C1410"
          stroke="#141414"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M100 58 Q130 56 140 58 Q156 56 180 58" fill="none" stroke="#141414" strokeWidth="2" />
        <g fill="#2a1E18">
          <circle cx="114" cy="40" r="1.5" />
          <circle cx="126" cy="34" r="1.5" />
          <circle cx="140" cy="32" r="1.5" />
          <circle cx="154" cy="34" r="1.5" />
          <circle cx="166" cy="40" r="1.5" />
          <circle cx="120" cy="48" r="1.5" />
          <circle cx="148" cy="46" r="1.5" />
          <circle cx="160" cy="50" r="1.5" />
        </g>
        <path d="M112 68 Q122 64 132 68" fill="#1C1410" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
        <path d="M148 68 Q158 64 168 68" fill="#1C1410" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
        <g stroke="#141414" strokeWidth="2.5" fill="#fff" strokeLinecap="round">
          <path d="M114 78 Q122 74 132 78 Q122 82 114 78 Z" />
          <path d="M148 78 Q158 74 168 78 Q158 82 148 78 Z" />
        </g>
        <circle cx="124" cy="78" r="2" fill="#141414" />
        <circle cx="158" cy="78" r="2" fill="#141414" />
        <path
          d="M140 82 Q138 92 136 96 Q140 100 144 96 Q142 92 140 82"
          fill="none"
          stroke="#141414"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <path
          d="M124 102 Q132 98 140 100 Q148 98 156 102 Q150 106 140 104 Q130 106 124 102 Z"
          fill="#1C1410"
          stroke="#141414"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M128 110 Q140 116 152 110" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="138" y="111" width="6" height="2" fill="#FFF4E0" />
        <path
          d="M132 112 Q140 118 148 112 Q148 120 140 122 Q132 120 132 112 Z"
          fill="#1C1410"
          stroke="#141414"
          strokeWidth="1.5"
        />
        <path d="M96 78 Q92 84 96 92 Q100 94 102 88" fill="url(#bj-skin)" stroke="#141414" strokeWidth="2" />
        <circle cx="96" cy="92" r="4" fill="none" stroke="#FFC72C" strokeWidth="2.5" />
        <g>
          <rect x="108" y="72" width="26" height="14" rx="3" fill="#141414" stroke="#141414" strokeWidth="2" />
          <rect x="146" y="72" width="26" height="14" rx="3" fill="#141414" stroke="#141414" strokeWidth="2" />
          <line x1="134" y1="78" x2="146" y2="78" stroke="#141414" strokeWidth="3" />
          <rect x="112" y="74" width="6" height="3" fill="#FFF4E0" opacity="0.85" />
          <rect x="150" y="74" width="6" height="3" fill="#FFF4E0" opacity="0.85" />
        </g>
      </g>
      <g className="bj-sparkles">
        <line x1="48" y1="284" x2="28" y2="284" stroke="#FFC72C" strokeWidth="4" strokeLinecap="round" />
        <line x1="48" y1="284" x2="34" y2="270" stroke="#FFC72C" strokeWidth="4" strokeLinecap="round" />
        <line x1="48" y1="284" x2="34" y2="298" stroke="#FFC72C" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
