import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="about" className="bg-white border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-foreground">
              Training<span className="text-primary">Buddy</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            כלי AI לפיתוח ולמידה ארגונית — בנוי עבור מנהלי למידה והדרכה
          </p>

          <p className="text-xs text-muted">© 2025 TrainingBuddy</p>
        </div>
      </div>
    </footer>
  )
}
