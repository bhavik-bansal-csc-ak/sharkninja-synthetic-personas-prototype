// Inline SVG icons. All take className + size props.
const Svg = ({ children, className = "", size = 18, stroke = 2 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const IconAnalytics = (p) => (
  <Svg {...p}>
    <path d="M3 3v18h18" />
    <polyline points="7 14 11 10 15 14 21 8" />
  </Svg>
);

export const IconGrid = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Svg>
);

export const IconPlay = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
  </Svg>
);

export const IconUsers = (p) => (
  <Svg {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

export const IconStar = (p) => (
  <Svg {...p}>
    <path d="M12 2l2.39 4.84L20 8.27l-3.83 3.74.91 5.32L12 14.77l-5.08 2.56.91-5.32L4 8.27l5.61-1.43L12 2z" />
  </Svg>
);

export const IconSearch = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16.65" y2="16.65" />
  </Svg>
);

export const IconBell = (p) => (
  <Svg {...p}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </Svg>
);

export const IconInfo = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </Svg>
);

export const IconActivity = (p) => (
  <Svg {...p}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </Svg>
);

export const IconChevronLeft = (p) => (
  <Svg {...p}>
    <polyline points="15 18 9 12 15 6" />
  </Svg>
);

export const IconChevronRight = (p) => (
  <Svg {...p}>
    <polyline points="9 18 15 12 9 6" />
  </Svg>
);

export const IconArrowRight = (p) => (
  <Svg {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Svg>
);

export const IconPlus = (p) => (
  <Svg {...p} stroke={p.stroke || 2.4}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Svg>
);

export const IconWarning = (p) => (
  <Svg {...p}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Svg>
);

export const IconCategory = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </Svg>
);

export const IconFace = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 20.66c.5-2 2.5-3.66 5-3.66s4.5 1.66 5 3.66" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p} stroke={p.stroke || 2.5}>
    <polyline points="20 6 9 17 4 12" />
  </Svg>
);

export const IconQuote = (p) => (
  <Svg {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
);

export const IconSparkles = (p) => (
  <Svg {...p}>
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </Svg>
);

export const IconDownload = (p) => (
  <Svg {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </Svg>
);

// Domain tile icons
export const TileFloor = (p) => (
  <Svg {...p}>
    <path d="M9 6V3h6v3" />
    <path d="M5 6h14l-1.5 14h-11L5 6z" />
    <path d="M9 10v6" />
    <path d="M15 10v6" />
  </Svg>
);
export const TileKitchen = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="13" r="7" />
    <path d="M9 13h6" />
    <path d="M12 6V3" />
  </Svg>
);
export const TileBeauty = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="4" />
    <path d="M12 13v8" />
    <path d="M9 21h6" />
  </Svg>
);
export const TileOutdoor = (p) => (
  <Svg {...p}>
    <path d="M3 12h18" />
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12c1-3 2-4 4-4s3 1 4 4" />
  </Svg>
);
export const TileAir = (p) => (
  <Svg {...p}>
    <path d="M4 12c0-4 3-7 7-7" />
    <path d="M20 12c0 4-3 7-7 7" />
    <path d="M2 8h6" />
    <path d="M16 16h6" />
  </Svg>
);
export const TilePet = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="14" r="5" />
    <circle cx="6" cy="8" r="2" />
    <circle cx="10" cy="5" r="2" />
    <circle cx="14" cy="5" r="2" />
    <circle cx="18" cy="8" r="2" />
  </Svg>
);

export const tileFor = (domain) => {
  switch (domain) {
    case "kitchen": return TileKitchen;
    case "beauty": return TileBeauty;
    case "outdoor": return TileOutdoor;
    case "air": return TileAir;
    case "pet": return TilePet;
    case "floor":
    default: return TileFloor;
  }
};

export const tileColor = (domain) => {
  switch (domain) {
    case "kitchen": return "bg-[#ffe1d4] text-[#943700]";
    case "beauty": return "bg-[#fbdce8] text-[#8a3360]";
    case "outdoor": return "bg-[#d8efd9] text-[#1f5c2a]";
    case "air": return "bg-[#d2eaf2] text-[#1e5b75]";
    case "pet": return "bg-[#ece1d2] text-[#6e4a1d]";
    case "floor":
    default: return "bg-primary-fixed text-primary-container";
  }
};
