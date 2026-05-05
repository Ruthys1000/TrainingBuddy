'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              Training<span className="text-primary">Buddy</span>
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            <a
              href="#tools"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-slate-100 transition-colors duration-150"
            >
              הכלים
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-slate-100 transition-colors duration-150"
            >
              אודות
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
