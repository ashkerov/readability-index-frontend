import type { SyntheticEvent } from 'react'


const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
<rect width="400" height="300" fill="#cce0f5"/>
<text x="50%" y="50%" fill="#005df9" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle">No Image</text>
</svg>`

export const DEFAULT_IMAGE: string = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  PLACEHOLDER_SVG,
)}`

export const resolveImage = (url: string): string => (url ? url : DEFAULT_IMAGE)

export const handleImageError = (event: SyntheticEvent<HTMLImageElement>): void => {
  const img = event.currentTarget
  if (img.dataset.fallbackApplied === 'true') return
  img.dataset.fallbackApplied = 'true'
  img.src = DEFAULT_IMAGE
}