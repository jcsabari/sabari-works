/**
 * Single dynamic icon component for the whole site.
 * Pass a `name` string — zero client JS (server-rendered in .astro files by default).
 *
 * Usage in .astro:
 *   import SiteIcon from '../components/SiteIcon.tsx';
 *   <SiteIcon name="mail" size={22} />
 */

import {
  FiMail, FiPhone, FiArrowRight, FiArrowLeft,
  FiFilm, FiStar, FiBox, FiZap, FiImage, FiPenTool,
  FiDownload, FiEye, FiExternalLink,
  FiCheckCircle, FiClock, FiChevronDown, FiPlay,
  FiTool, FiVideo, FiCrosshair,
} from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  MdOutlineAnimation, MdAutoFixHigh,
  MdColorLens, MdViewInAr,
} from 'react-icons/md';
import { SiDavinciresolve, SiBlender } from 'react-icons/si';

/* eslint-disable @typescript-eslint/no-explicit-any */
const ICONS: Record<string, React.ComponentType<any>> = {
  // ── ui / navigation ───────────────────────────────────
  mail:         FiMail,
  phone:        FiPhone,
  linkedin:     FaLinkedinIn,
  arrowRight:   FiArrowRight,
  arrowLeft:    FiArrowLeft,
  externalLink: FiExternalLink,
  download:     FiDownload,
  eye:          FiEye,
  check:        FiCheckCircle,
  clock:        FiClock,
  chevronDown:  FiChevronDown,
  play:         FiPlay,

  // ── portfolio categories ──────────────────────────────
  video:  FiFilm,
  motion: MdOutlineAnimation,
  vfx:    MdAutoFixHigh,
  color:  MdColorLens,
  threed: MdViewInAr,

  // ── software stack (Adobe removed branding from SI in v5 — using Feather/MD fallbacks) ──
  aftereffects: FiZap,      // motion/fx feel
  premiere:     FiVideo,    // video timeline feel
  davinci:      SiDavinciresolve,
  blender:      SiBlender,
  cinema4d:     FiBox,      // 3D box
  photoshop:    FiImage,    // image/photo
  illustrator:  FiPenTool,  // vector/pen
  mocha:        FiCrosshair,// tracking crosshair
  tool:         FiTool,
};

export default function SiteIcon({
  name,
  size = 20,
  className = '',
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

