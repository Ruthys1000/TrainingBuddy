'use client'

import { motion } from 'framer-motion'
import { Bell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { colorConfig } from '@/lib/tools'
import type { Tool } from '@/types/tools'

interface ComingSoonCardProps {
  tool: Tool
  index: number
}

export default function ComingSoonCard({ tool, index }: ComingSoonCardProps) {
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
      className="relative"
    >
      <div className="bg-card rounded-2xl border border-dashed border-border p-6 select-none">
        <div className="flex items-start justify-between mb-4">
          <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center opacity-60', colors.iconBg)}>
            <Icon className={cn('w-6 h-6', colors.iconText)} />
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
            בקרוב
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1 opacity-70">{tool.name}</h3>
        <p className={cn('text-sm font-medium mb-3 opacity-60', colors.iconText)}>
          {tool.tagline}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 blur-[2px] opacity-60">
          {tool.description}
        </p>

        <a
          href={`mailto:contact@trainingbuddy.co.il?subject=עניין בכלי ${tool.name}`}
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border transition-colors duration-150',
            colors.badgeBg,
            colors.iconText,
            colors.hoverBorder,
            'hover:opacity-80'
          )}
        >
          <Bell className="w-3.5 h-3.5" />
          עדכנו אותי
        </a>
      </div>

      {/* Overlay hint */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </motion.div>
  )
}
