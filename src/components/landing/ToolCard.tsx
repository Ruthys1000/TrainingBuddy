'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { colorConfig } from '@/lib/tools'
import type { Tool } from '@/types/tools'

interface ToolCardProps {
  tool: Tool
  index: number
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  const colors = colorConfig[tool.color]
  const Icon = tool.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      <Link
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group block bg-card rounded-2xl border border-border p-6 shadow-sm',
          'hover:-translate-y-1.5 hover:shadow-xl',
          'transition-all duration-200 ease-out',
          colors.hoverBorder
        )}
        style={
          {
            '--glow': colors.glowColor,
          } as React.CSSProperties
        }
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center',
              colors.iconBg
            )}
          >
            <Icon className={cn('w-6 h-6', colors.iconText)} />
          </div>
          {tool.badge && (
            <span
              className={cn(
                'px-2.5 py-1 rounded-full text-xs font-semibold',
                colors.badgeBg,
                colors.badgeText
              )}
            >
              {tool.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-1">{tool.name}</h3>
        <p className={cn('text-sm font-medium mb-3', colors.iconText)}>
          {tool.tagline}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {tool.description}
        </p>

        {/* Footer */}
        <div
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-semibold',
            colors.iconText,
            'group-hover:gap-2.5 transition-all duration-150'
          )}
        >
          פתח כלי
          {/* Arrow flipped for RTL */}
          <ArrowLeft className="w-4 h-4 scale-x-[-1]" />
        </div>
      </Link>
    </motion.div>
  )
}
