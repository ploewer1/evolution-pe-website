import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, ...p });

export const ArrowRight = (p: P) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ExternalLink = (p: P) => (<svg {...base(p)}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>);
export const Check = (p: P) => (<svg {...base(p)}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>);
export const Menu = (p: P) => (<svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const Close = (p: P) => (<svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const ChevronDown = (p: P) => (<svg {...base(p)}><path d="M6 9l6 6 6-6" /></svg>);
export const Compass = (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>);

/* Product pictograms */
export const IconApp = (p: P) => (<svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="3" /><path d="M8 8h8M8 12h5M8 16h3" /><circle cx="16.5" cy="15.5" r="1.4" /></svg>);
export const IconCalendar = (p: P) => (<svg {...base(p)}><rect x="3.5" y="5" width="17" height="15" rx="3" /><path d="M8 3v4M16 3v4M3.5 10h17M8 14h2M12 14h2M8 17h2" /></svg>);
export const IconChart = (p: P) => (<svg {...base(p)}><path d="M4 20V4M4 20h16" /><rect x="7.5" y="11" width="3" height="6" rx="0.8" /><rect x="12.5" y="7" width="3" height="10" rx="0.8" /><rect x="17.5" y="13" width="2" height="4" rx="0.8" /></svg>);
export const IconTimer = (p: P) => (<svg {...base(p)}><circle cx="12" cy="13.5" r="7" /><path d="M12 9.5v4l2.5 1.5M9.5 3h5" /></svg>);
export const IconHome = (p: P) => (<svg {...base(p)}><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z" /></svg>);
export const IconClipboard = (p: P) => (<svg {...base(p)}><rect x="5" y="4.5" width="14" height="16.5" rx="2.5" /><path d="M9 4.5V3.5h6v1M8.5 10h7M8.5 14h7M8.5 17.5h4" /></svg>);
export const IconUsers = (p: P) => (<svg {...base(p)}><circle cx="9" cy="8.5" r="3" /><path d="M3.5 19c.5-3 2.6-4.8 5.5-4.8s5 1.8 5.5 4.8" /><circle cx="17" cy="9.5" r="2.4" /><path d="M16 14.4c2.6-.2 4.2 1.2 4.7 4" /></svg>);
export const IconShield = (p: P) => (<svg {...base(p)}><path d="M12 3l7.5 2.6v5.7c0 4.4-3 7.8-7.5 9.7-4.5-1.9-7.5-5.3-7.5-9.7V5.6z" /><path d="M9 12l2.2 2.2L15.5 10" /></svg>);
export const IconBook = (p: P) => (<svg {...base(p)}><path d="M4.5 5.5A2 2 0 0 1 6.5 4H19v14H6.5a2 2 0 0 0-2 2z" /><path d="M4.5 18.5V5.5M9 8h6" /></svg>);
export const IconBox = (p: P) => (<svg {...base(p)}><path d="M4 8l8-4 8 4v8l-8 4-8-4z" /><path d="M4 8l8 4 8-4M12 12v8" /></svg>);
export const IconPrint = (p: P) => (<svg {...base(p)}><path d="M7 9V4h10v5M7 17H5a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 5 9h14a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 17h-2" /><rect x="7" y="14" width="10" height="6" rx="1" /></svg>);
export const IconHeart = (p: P) => (<svg {...base(p)}><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" /></svg>);
export const IconLock = (p: P) => (<svg {...base(p)}><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></svg>);
