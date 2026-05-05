'use client'

import { motion } from 'framer-motion'
import { Users, Target, Puzzle } from 'lucide-react'

const cards = [
  {
    icon: Users,
    title: 'מי אנחנו',
    body: 'כלי AI שנבנו על ידי מנהלי למידה, עבור מנהלי למידה — אנשים שמבינים מה באמת נדרש בשטח.',
  },
  {
    icon: Target,
    title: 'המשימה שלנו',
    body: 'לחסוך זמן יקר של הכנה ולשפר את איכות ההדרכה, כדי שתוכלו להתמקד במה שחשוב — האנשים.',
  },
  {
    icon: Puzzle,
    title: 'הגישה שלנו',
    body: 'כלים ממוקדי-בעיה, לא פתרונות כלליים. כל כלי נבנה לפתור אתגר ספציפי אחד, בצורה הטובה ביותר.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white border-t border-border py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            על TrainingBuddy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            פלטפורמה שנולדה מהשטח — מהצורך האמיתי של מנהלי למידה לעבוד חכם יותר.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl border border-border p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
