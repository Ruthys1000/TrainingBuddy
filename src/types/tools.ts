import type { LucideIcon } from 'lucide-react'

export type ToolColor = 'blue' | 'violet' | 'emerald' | 'orange' | 'rose' | 'teal' | 'amber'

export interface Tool {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  icon: LucideIcon
  color: ToolColor
  badge?: string
  comingSoon?: boolean
}
