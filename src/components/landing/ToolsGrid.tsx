'use client'

import { tools } from '@/lib/tools'
import ToolCard from './ToolCard'
import ComingSoonCard from './ComingSoonCard'

export default function ToolsGrid() {
  const activeTools = tools.filter((t) => !t.comingSoon)
  const comingSoonTools = tools.filter((t) => t.comingSoon)

  return (
    <section id="tools" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          הכלים שלנו
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          כל כלי תוכנן לפתור אתגר ספציפי של מנהלי למידה — בצורה חכמה, מהירה
          וקלה לשימוש.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {activeTools.map((tool, i) => (
          <ToolCard key={tool.id} tool={tool} index={i} />
        ))}
        {comingSoonTools.map((tool, i) => (
          <ComingSoonCard
            key={tool.id}
            tool={tool}
            index={activeTools.length + i}
          />
        ))}
      </div>
    </section>
  )
}
