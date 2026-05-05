'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const transition = (delay: number) => ({
  duration: 0.6,
  ease: 'easeOut' as const,
  delay,
})

const hidden = { opacity: 0, y: 24 }
const visible = { opacity: 1, y: 0 }

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-44">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-background" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-50" />

      {/* Decorative blobs */}
      <div
        className="blob-animate absolute -top-40 start-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)',
        }}
      />
      <div
        className="blob-animate absolute top-10 end-1/4 w-[550px] h-[550px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)',
          animationDelay: '3s',
        }}
      />
      <div
        className="blob-animate absolute bottom-0 start-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)',
          animationDelay: '5s',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={transition(0)}
          className="inline-flex mb-8"
        >
          <span className="shimmer-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-medium text-foreground shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            כלים מבוססי AI למנהלי למידה
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={hidden}
          animate={visible}
          transition={transition(0.1)}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-7"
        >
          <span className="gradient-text">הדרכה חכמה.</span>
          <br />
          <span className="text-foreground">מהירה. מדויקת.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={hidden}
          animate={visible}
          transition={transition(0.2)}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          TrainingBuddy מרכז כלי AI שתוכננו במיוחד עבור מנהלי למידה והדרכה —
          חסוך זמן, שפר תוצאות, ועבוד בצורה חכמה יותר.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={transition(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#tools"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-base"
          >
            גלה את הכלים
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-muted-foreground hover:text-foreground font-medium rounded-xl hover:bg-slate-100 transition-colors duration-150 text-base"
          >
            למד עוד
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={transition(0.4)}
          className="mt-16 flex flex-wrap justify-center gap-x-16 gap-y-6"
        >
          {[
            { label: 'כלים זמינים', value: '2+' },
            { label: 'חסכון בזמן הכנה', value: '80%' },
            { label: 'מנהלי למידה', value: 'מאות' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-foreground tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
