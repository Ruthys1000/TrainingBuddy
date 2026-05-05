'use client'

import { motion } from 'framer-motion'
import { MousePointerClick, SlidersHorizontal, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'בחר כלי',
    body: 'גלה את הכלי שמתאים לאתגר הספציפי שלך — לוח זמנים, כתיבה, קורסים ועוד.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'הגדר את הצרכים',
    body: 'ענה על כמה שאלות ממוקדות. הכלי מתאים את עצמו להקשר, לקהל, ולאילוצים שלך.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'קבל תוצאה',
    body: 'קבל פלט מקצועי ומוכן לשימוש תוך שניות — ושמור שעות של עבודה.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          איך זה עובד?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          שלושה צעדים פשוטים מהצורך לתוצאה.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
        {/* Connector line (desktop only) */}
        <div className="hidden sm:block absolute top-9 start-[calc(16.6%+24px)] end-[calc(16.6%+24px)] h-px bg-border" />

        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-4 shadow-sm">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              <span className="text-xs font-bold text-primary mb-1 tracking-widest">
                {step.number}
              </span>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                {step.body}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
