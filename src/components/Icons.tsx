import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 20,
  height: 20,
  ...p,
});

export const IconSite = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4" width="19" height="16" rx="2" />
    <path d="M2.5 9h19M6 6.5h.01M8.6 6.5h.01" />
    <path d="M7 12.5h6M7 16h9" />
  </svg>
);

export const IconCode = (p: P) => (
  <svg {...base(p)}>
    <path d="m8.5 8-4.5 4 4.5 4M15.5 8l4.5 4-4.5 4M13.5 5.5l-3 13" />
  </svg>
);

export const IconReact = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="2.1" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

export const IconDashboard = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
    <path d="M2.5 8.5h19M7 12v4.5M11 12v4.5M15 12v2.5M18.5 12v4.5" />
  </svg>
);

export const IconWrench = (p: P) => (
  <svg {...base(p)}>
    <path d="M15.5 3.5a5.5 5.5 0 0 0-5 7.8L3.8 18a2 2 0 1 0 2.8 2.8l6.7-6.7a5.5 5.5 0 0 0 7-7.2l-3 3-2.6-.6-.6-2.6z" />
  </svg>
);

export const IconApi = (p: P) => (
  <svg {...base(p)}>
    <circle cx="5.5" cy="12" r="2.5" />
    <circle cx="18.5" cy="6" r="2.5" />
    <circle cx="18.5" cy="18" r="2.5" />
    <path d="M8 11l8-4M8 13l8 4" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5 10-11" strokeWidth={2} />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

export const IconWhatsapp = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.5 20.5 5 16.4A8 8 0 1 1 8 19.3z" />
    <path d="M9 9.2c0 3 2.3 5.2 5.2 5.2.6 0 1.2-.5 1.2-1.1l-1.6-.8-.9.9c-1-.5-1.8-1.3-2.3-2.3l.9-.9-.8-1.6c-.7 0-1.7.1-1.7 1.6z" />
  </svg>
);

export const IconGithub = (p: P) => (
  <svg {...base(p)}>
    <path d="M9.3 20.4c-4 1.2-4-2.2-5.6-2.6m11.2 5v-3.4c0-1 .1-1.4-.5-2 2.3-.3 4.5-1.2 4.5-5a3.9 3.9 0 0 0-1.1-2.7 3.6 3.6 0 0 0-.1-2.7s-.9-.3-2.9 1.1a9.7 9.7 0 0 0-5 0C7.8 4.7 6.9 5 6.9 5a3.6 3.6 0 0 0-.1 2.7A3.9 3.9 0 0 0 5.7 10.4c0 3.8 2.2 4.6 4.5 5-.6.6-.6 1.2-.5 2v3.4" />
  </svg>
);

export const IconLinkedin = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-3.6a2 2 0 0 1 4 0V17M11.5 10.5V17" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base(p)}>
    <path d="M6.2 3.5h3l1.4 3.6-1.9 1.4a11.5 11.5 0 0 0 5.3 5.3l1.4-1.9 3.6 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h11" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 7.2V12l3.2 2" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3.2 8.8 4.6L12 12.4 3.2 7.8z" />
    <path d="m3.2 12.4 8.8 4.6 8.8-4.6M3.2 16.7l8.8 4.6 8.8-4.6" />
  </svg>
);

export const IconDatabase = (p: P) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="6" rx="7.8" ry="3" />
    <path d="M4.2 6v12c0 1.7 3.5 3 7.8 3s7.8-1.3 7.8-3V6M4.2 12c0 1.7 3.5 3 7.8 3s7.8-1.3 7.8-3" />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3.2 13.9 9 20 11l-6.1 2L12 18.8 10.1 13 4 11l6.1-2z" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg {...base({ ...p, strokeWidth: 1.3 })}>
    <path d="M9.5 6.5C6.8 7.7 5.2 10 5.2 13.2c0 2.6 1.4 4.3 3.5 4.3 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.1-2.9-2.7-2.9-.3 0-.6 0-.8.1.3-1.5 1.4-2.8 3-3.6zm8.6 0C15.4 7.7 13.8 10 13.8 13.2c0 2.6 1.4 4.3 3.5 4.3 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.1-2.9-2.7-2.9-.3 0-.6 0-.8.1.3-1.5 1.4-2.8 3-3.6z" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconMinus = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
);

export const IconTerminal = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4" width="19" height="16" rx="2" />
    <path d="m6.5 9.5 3 2.5-3 2.5M12.5 15h5" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.8v5.4c0 4.2 2.9 7.9 7 9.8 4.1-1.9 7-5.6 7-9.8V5.8z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const IconUsers = (p: P) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6M16 5.4a3.2 3.2 0 0 1 0 6.2M18 14.6c2 .6 3.3 2.1 3.7 4.4" />
  </svg>
);

export const IconChart = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16.5v-4M12 16.5v-8M16 16.5v-5.5M20 16.5V7" />
  </svg>
);

export const serviceIcons = {
  site: IconSite,
  code: IconCode,
  react: IconReact,
  dashboard: IconDashboard,
  wrench: IconWrench,
  api: IconApi,
};
