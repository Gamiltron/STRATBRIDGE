import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="11" cy="13" r="7" />
      <circle cx="11" cy="13" r="3" />
      <path d="M11 13 20 4" />
      <path d="M16 4h4v4" />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M20 4S7 3 5 12c-1.5 6.5 3 8 3 8" />
      <path d="M20 4c1 8-4 13-12 15" />
      <path d="M8 20c2-6 6-10 10-12" />
    </svg>
  )
}

export function BarChartIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M4 20h16" />
      <rect x="5" y="12" width="3.2" height="5" />
      <rect x="10.4" y="8" width="3.2" height="9" />
      <rect x="15.8" y="4.5" width="3.2" height="12.5" />
    </svg>
  )
}

export function GearIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" />
    </svg>
  )
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 10h6M9 14h6M9 18h4" />
    </svg>
  )
}

export function ChipIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </svg>
  )
}

export function DatabaseIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  )
}

export function BoxIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </svg>
  )
}

export function SyncIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  )
}

export function BanknoteIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5Z" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function FileContractIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="m8 18 4-3 3 4" />
    </svg>
  )
}

export function FileCheckIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  )
}

export function ListIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M3 7h2M3 12h2M3 17h2" />
      <path d="M9 7h12M9 12h8M9 17h10" />
    </svg>
  )
}

export function CloudIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

export function ServerIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  )
}

export function TruckIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  )
}

export function CartIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L21 8H6" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8 7.3 12 15.7M16 7.3 12 15.7M8.4 6h7.2" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}

export function LightbulbIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  )
}

export function WorkflowIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M21 9V7a2 2 0 0 0-2-2h-4" />
      <path d="M9 21h4a2 2 0 0 0 2-2v-4" />
      <path d="M7 9v2a2 2 0 0 0 2 2h6" />
    </svg>
  )
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </svg>
  )
}

export function ScanTextIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </svg>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 16l.9 2.1 2.1.9-2.1.9L19 22l-.9-2.1L16 19l2.1-.9z" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
