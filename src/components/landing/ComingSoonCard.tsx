'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
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
      {/* Card */}
      <div className="bg-card rounded-2xl border border-dashed border-border p-6 opacity-60 select-none">
        <div className="flex items-start justify-between mb-4">
          <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', colors.iconBg)}>
            <Icon className={cn('w-6 h-6', colors.iconText)} />
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
            בקרוב
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1">{tool.name}</h3>
        <p className={cn('text-sm font-medium mb-3', colors.iconText)}>
          {tool.tagline}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 blur-[2px]">
          {tool.description}
        </p>

        <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
          <Lock className="w-3.5 h-3.5" />
          בפיתוח
        </div>
      </div>

      {/* Overlay hint */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
    </motion.div>
  )
}
