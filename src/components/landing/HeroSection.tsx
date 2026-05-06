'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Calendar, Clock, CheckCircle2 } from 'lucide-react'

const transition = (delay: number) => ({
  duration: 0.6,
  ease: 'easeOut' as const,
  delay,
})

const hidden = { opacity: 0, y: 24 }
const visible = { opacity: 1, y: 0 }

const scheduleItems = [
  { time: '09:00', title: 'פתיחה ובניית אמון', duration: '20 דק׳', color: 'bg-blue-500' },
  { time: '09:20', title: 'הצגת נושא: כלי AI', duration: '35 דק׳', color: 'bg-violet-500' },
  { time: '09:55', title: 'תרגול בזוגות', duration: '30 דק׳', color: 'bg-emerald-500' },
  { time: '10:25', title: 'הפסקה קצרה', duration: '10 דק׳', color: 'bg-slate-600' },
]

function BrowserMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient glow behind the mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/25 via-violet-600/20 to-indigo-600/25 blur-3xl rounded-3xl" />

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
        {/* Browser chrome bar */}
        <div className="bg-slate-800/90 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-white/5">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 bg-slate-700/80 rounded-md h-5 text-[10px] text-slate-400 flex items-center px-2 font-mono">
            luzon-ruthys.vercel.app
          </div>
        </div>

        {/* App content */}
        <div className="bg-slate-900 p-5 space-y-2.5" dir="rtl">
          {/* App header */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-none">לוז״ן</p>
              <p className="text-slate-500 text-[10px] mt-0.5">יום הדרכה · 3 שעות</p>
            </div>
          </div>

          {/* Schedule rows */}
          {scheduleItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.35, ease: 'easeOut' }}
              className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.07] transition-colors rounded-xl px-3 py-2.5"
            >
              <span className="text-slate-500 text-[11px] font-mono w-10 shrink-0 text-left">
                {item.time}
              </span>
              <div className={`w-1 h-7 rounded-full shrink-0 ${item.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium truncate">{item.title}</p>
                <p className="text-slate-500 text-[10px] flex items-center gap-1 mt-0.5">
                  <Clock className="w-2.5 h-2.5" />
                  {item.duration}
                </p>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/50 shrink-0" />
            </motion.div>
          ))}

          {/* WhatsApp message ready */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="mt-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2.5"
          >
            <p className="text-emerald-400 text-[10px] font-semibold mb-1 flex items-center gap-1">
              <span>✓</span> הודעת ווטסאפ מוכנה לשליחה
            </p>
            <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-2">
              שלום לכולם 👋 היום נלמד על כלי AI לעולם ההדרכה. נתחיל ב-09:00...
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.4, type: 'spring' }}
        className="absolute -bottom-4 -start-4 bg-slate-800 border border-white/10 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-blue-400" />
        </div>
        <div>
          <p className="text-white text-[10px] font-semibold">נוצר תוך 8 שניות</p>
          <p className="text-slate-500 text-[9px]">מבוסס AI</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 lg:py-40">
      {/* Mesh gradient */}
      <div className="absolute inset-0 hero-mesh" />

      {/* Dot grid overlay */}
      <div className="dot-grid-dark absolute inset-0" />

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* Text column */}
          <div className="text-center lg:text-start order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={hidden}
              animate={visible}
              transition={transition(0)}
              className="inline-flex mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-white/70 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                כלים מבוססי AI למנהלי למידה
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={hidden}
              animate={visible}
              transition={transition(0.1)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-7 text-white"
            >
              <span className="gradient-text-hero">הדרכה חכמה.</span>
              <br />
              <span>מהירה. מדויקת.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={hidden}
              animate={visible}
              transition={transition(0.2)}
              className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              TrainingBuddy מרכז כלי AI שתוכננו במיוחד עבור מנהלי למידה והדרכה —
              חסוך זמן, שפר תוצאות, ועבוד בצורה חכמה יותר.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={hidden}
              animate={visible}
              transition={transition(0.3)}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a
                href="#tools"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-l from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                גלה את הכלים
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-400 hover:text-white font-medium rounded-xl hover:bg-white/5 border border-white/10 transition-all duration-150 text-base"
              >
                למד עוד
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={hidden}
              animate={visible}
              transition={transition(0.4)}
              className="mt-14 flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6"
            >
              {[
                { label: 'כלים זמינים', value: '5+' },
                { label: 'חסכון בזמן הכנה', value: '80%' },
                { label: 'מנהלי למידה', value: 'מאות' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-start">
                  <div className="text-3xl font-extrabold text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mockup column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <BrowserMockup />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
