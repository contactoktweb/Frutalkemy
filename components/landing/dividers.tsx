"use client"

interface DividerProps {
  fromColor: string
  toColor: string
  flip?: boolean
}

// Clean diagonal slant
export function SlantDivider({ fromColor, toColor, flip = false }: DividerProps) {
  return (
    <div className={`relative w-full h-16 md:h-32 ${flip ? 'scale-x-[-1]' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
        <path fill={fromColor} d="M0,0 L1440,0 L1440,100 L0,100 Z" />
        <path fill={toColor} d="M0,100 L1440,100 L1440,0 L0,100 Z" />
      </svg>
    </div>
  )
}

// Very smooth elegant curve
export function ElegantWave({ fromColor, toColor, flip = false }: DividerProps) {
  return (
    <div className={`relative w-full h-20 md:h-32 ${flip ? 'scale-x-[-1]' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
        <path fill={fromColor} d="M0,0 L1440,0 L1440,100 L0,100 Z" />
        <path fill={toColor} d="M0,100 L1440,100 L1440,40 C1080,110 360,-10 0,60 Z" />
      </svg>
    </div>
  )
}

// Asymmetrical gentle curve
export function SoftCurve({ fromColor, toColor, flip = false }: DividerProps) {
  return (
    <div className={`relative w-full h-16 md:h-28 ${flip ? 'scale-x-[-1]' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
        <path fill={fromColor} d="M0,0 L1440,0 L1440,100 L0,100 Z" />
        <path fill={toColor} d="M0,100 L1440,100 L1440,10 C720,130 0,10 0,100 Z" />
      </svg>
    </div>
  )
}

// A simple straight divider for clean cuts
export function StraightDivider({ fromColor, toColor }: DividerProps) {
  return (
    <div className="relative w-full h-4" style={{ marginTop: '-1px', marginBottom: '-1px', background: `linear-gradient(to bottom, ${fromColor} 50%, ${toColor} 50%)` }} />
  )
}

// Keep the old names so page.tsx doesn't break, but use the new clean SVGs
export const TornPaperDivider = ElegantWave
export const DrippingDivider = SlantDivider
export const JaggedDivider = SlantDivider
export const SplashDivider = (props: DividerProps & { accentColor?: string }) => <SoftCurve {...props} />
export const WaveDivider = ElegantWave

