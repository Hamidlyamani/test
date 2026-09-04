type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconFlame({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.5c2.5 1.8 4 4.9 4 8.3 0 2-1 4.3-2.5 6l-1.5 1.7-1.5-1.7C9 15.1 8 12.8 8 10.8c0-3.4 1.5-6.5 4-8.3Z"
      />
      <circle cx="12" cy="10" r="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 16.5 6 21l3.5-1.5M15.5 16.5 18 21l-3.5-1.5" />
    </svg>
  );
}

export function IconMedal({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="12" cy="8.5" r="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.2 12.5-1.7 8 5.5-2.8 5.5 2.8-1.7-8" />
    </svg>
  );
}

export function IconWrench({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a3 3 0 0 0 4 4L21 8l-3-3-2.3 1.3ZM4 20l6.5-6.5M9.3 9.7a3 3 0 0 0-4-4L3 8l3 3 2.3-1.3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 11 7 7-2 2-7-7" />
    </svg>
  );
}

export function IconShieldCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 5 6v5.5c0 4.2 2.8 7.6 7 9 4.2-1.4 7-4.8 7-9V6l-7-2.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function IconRoof({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12 12 4l9 8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 10.5V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

export function IconDroplet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c3 4 6 7.7 6 11.3A6 6 0 1 1 6 14.3C6 10.7 9 7 12 3Z"
      />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 13 9 5 9-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 17.5 9 5 9-5" />
    </svg>
  );
}

export function IconGutter({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 6v5a4 4 0 0 0 4 4h1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 15v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 18.5 2.5 2.5 2.5-2.5" />
    </svg>
  );
}

export function IconBroom({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3 6.5 10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 10.5 3 20l8.5-3.8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3l3.5 3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.5 6.8 17.7M11.2 13.3 9 15.5" />
    </svg>
  );
}

export function IconSkylight({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10 12 4l8 6" />
      <rect x="7" y="10" width="10" height="9.5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v9.5" />
    </svg>
  );
}

export function IconThermometer({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 4.5a2 2 0 0 1 4 0v8a4 4 0 1 1-4 0v-8Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4.5" />
    </svg>
  );
}

export function IconBadgeCert({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="12" cy="9" r="5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13 6.8 21l5.2-2.8 5.2 2.8-1.7-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 9 1.7 1.7L14.5 7" />
    </svg>
  );
}

export function IconStar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
    </svg>
  );
}

export function IconMapPin({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-7.6 7-12.3A7 7 0 0 0 5 8.7C5 13.4 12 21 12 21Z" />
      <circle cx="12" cy="8.7" r="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="12" cy="12" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconDocument({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 3h8l4 4v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5h7M8.5 16h7M8.5 9h3" />
    </svg>
  );
}

export function IconCheckCircle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="12" cy="12" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.3 12.3 2.6 2.6 4.8-5.4" />
    </svg>
  );
}

export function IconHeadset({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 13.5v-1.8a7.5 7.5 0 0 1 15 0v1.8" />
      <rect x="3" y="13" width="4" height="6.2" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="17" y="13" width="4" height="6.2" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 19.2v.8a3 3 0 0 1-3 3h-2" />
    </svg>
  );
}

export function IconEuro({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.3A6.2 6.2 0 0 0 8 12a6.2 6.2 0 0 0 8.5 5.7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.3 10h7.2M5.3 14h6.2" />
    </svg>
  );
}

export function IconPhone({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.2 4h2.6l1 3.6-2 1.6a11.4 11.4 0 0 0 5.6 5.6l1.6-2 3.6 1v2.6a1.6 1.6 0 0 1-1.7 1.6C10.4 17.5 6.5 13.6 5.6 6.7A1.6 1.6 0 0 1 7.2 4Z"
      />
    </svg>
  );
}

export function IconSearch({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="10.3" cy="10.3" r="6" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-4.2-4.2" />
    </svg>
  );
}

export function IconAlertTriangle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 21.5 20h-19L12 3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconScale({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 21h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6 5 8l3.2 6.2a3.6 3.6 0 0 0 5.6 0L17 8 12 6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8H2.5M17 8h2.5" />
    </svg>
  );
}

export function IconRuler({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.5 15.5 5-5 15 15M8.5 10.5l2 2M11 8l2 2M13.5 5.5l2 2"
      />
    </svg>
  );
}

export function IconMail({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export function IconLeaf({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19c-1-6 2-13 14-14 1 12-6 15-14 14Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c3-4 6.5-7 12-11.5" />
    </svg>
  );
}
