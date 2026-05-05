import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { tools } from '@/lib/tools'

export default function Footer() {
  const activeTools = tools.filter((t) => !t.comingSoon)

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-foreground">
                Training<span className="text-primary">Buddy</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              כלי AI לפיתוח ולמידה ארגונית — בנוי עבור מנהלי למידה והדרכה.
            </p>
          </div>

          {/* Tools links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">הכלים</h4>
            <ul className="space-y-2">
              {activeTools.map((tool) => (
                <li key={tool.id}>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">יצירת קשר</h4>
            <a
              href="mailto:contact@trainingbuddy.co.il"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              contact@trainingbuddy.co.il
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">© 2025 TrainingBuddy. כל הזכויות שמורות.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#tools"
              className="text-xs text-muted hover:text-muted-foreground transition-colors duration-150"
            >
              הכלים
            </Link>
            <Link
              href="#about"
              className="text-xs text-muted hover:text-muted-foreground transition-colors duration-150"
            >
              אודות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
