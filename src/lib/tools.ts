import {
  Calendar,
  PenLine,
  Brain,
  BarChart3,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import type { Tool } from '@/types/tools'

export const tools: Tool[] = [
  {
    id: 'luzon',
    name: 'לוז״ן',
    tagline: 'מחולל לו״ז לימי למידה מרחוק',
    description:
      'יוצר לוח זמנים מפורט ליום הדרכה מרחוק, כולל הודעת ווטסאפ מוכנה לשליחה ישירה ותכנים רלוונטיים מהאינטרנט — בהתאם לאילוצים ולהגדרות שלך.',
    href: 'https://example.com/luzon',
    icon: Calendar,
    color: 'blue',
    badge: 'חדש',
  },
  {
    id: 'writing-coach',
    name: 'מאמן כתיבה',
    tagline: 'שפר את יכולת הכתיבה המקצועית שלך',
    description:
      'מאבחן פערים בכתיבה ומספק יחידות מיקרו-למידה ממוקדות בזמן אמת — לא רק מתקן את הטקסט, אלא מפתח את כשירות הכתיבה שלך לאורך זמן.',
    href: 'https://example.com/writing-coach',
    icon: PenLine,
    color: 'violet',
  },
  {
    id: 'course-builder',
    name: 'מחולל קורסים',
    tagline: 'בניית סילבוס ותוכנית לימודים בקלות',
    description: 'כלי AI שמסייע לבנות קורסים, סילבוסים ותוכניות הכשרה מקצועיות.',
    href: '#',
    icon: Brain,
    color: 'emerald',
    comingSoon: true,
  },
  {
    id: 'learning-analytics',
    name: 'אנליטיקת למידה',
    tagline: 'תובנות מבוססות נתונים על תהליכי הלמידה',
    description: 'מנתח נתוני למידה ומספק המלצות לשיפור הדרכות ותכניות פיתוח.',
    href: '#',
    icon: BarChart3,
    color: 'orange',
    comingSoon: true,
  },
]

export const colorConfig: Record<
  string,
  {
    iconBg: string
    iconText: string
    badgeBg: string
    badgeText: string
    hoverBorder: string
    glowColor: string
  }
> = {
  blue: {
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    hoverBorder: 'hover:border-blue-200',
    glowColor: 'rgba(37, 99, 235, 0.12)',
  },
  violet: {
    iconBg: 'bg-violet-100',
    iconText: 'text-violet-600',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-700',
    hoverBorder: 'hover:border-violet-200',
    glowColor: 'rgba(124, 58, 237, 0.12)',
  },
  emerald: {
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    hoverBorder: 'hover:border-emerald-200',
    glowColor: 'rgba(5, 150, 105, 0.12)',
  },
  orange: {
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-600',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-700',
    hoverBorder: 'hover:border-orange-200',
    glowColor: 'rgba(234, 88, 12, 0.12)',
  },
}
