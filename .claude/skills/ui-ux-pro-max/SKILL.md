# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications with 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 technology stacks.

## When to Apply

Use this skill for tasks involving **UI structure, visual design decisions, interaction patterns, or user experience quality control**. Apply it when changes affect how features "look, feels, moves, or is interacted with."

### Must Use Situations
- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components (buttons, modals, forms, tables, charts)
- Choosing color schemes, typography systems, spacing standards, or layout systems
- Reviewing UI code for user experience, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior
- Making product-level design decisions regarding style and brand expression

### Skip When
- Developing pure backend logic
- Working on API or database design
- Optimizing performance unrelated to interface
- Handling infrastructure or DevOps work
- Writing non-visual scripts or automation tasks

## Rule Categories by Priority (1-10)

| Priority | Category | Impact | Key Checks | Anti-Patterns |
|----------|----------|--------|-----------|---------------|
| 1 | Accessibility | CRITICAL | "Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels" | Icon-only buttons without labels |
| 2 | Touch & Interaction | CRITICAL | "Min size 44×44px, 8px+ spacing, Loading feedback" | Hover-only interactions |
| 3 | Performance | HIGH | "WebP/AVIF, Lazy loading, CLS < 0.1" | Layout thrashing |
| 4 | Style Selection | HIGH | "Match product type, Consistency, SVG icons" | Emoji as icons |
| 5 | Layout & Responsive | HIGH | "Mobile-first, Viewport meta, No horizontal scroll" | Fixed px widths |
| 6 | Typography & Color | MEDIUM | "Base 16px, Line-height 1.5, Semantic tokens" | Gray-on-gray text |
| 7 | Animation | MEDIUM | "150–300ms duration, Motion conveys meaning" | Decorative-only animation |
| 8 | Forms & Feedback | MEDIUM | "Visible labels, Error near field, Helper text" | Placeholder-only labels |
| 9 | Navigation Patterns | HIGH | "Predictable back, Bottom nav ≤5, Deep linking" | Overloaded navigation |
| 10 | Charts & Data | LOW | "Legends, Tooltips, Accessible colors" | Color-alone meaning |

## Key Accessibility Rules (Priority 1)

**Critical checks:** Maintain 4.5:1 contrast ratio for normal text; use 3:1 for large text. Ensure visible focus rings on interactive elements (2–4px). Provide descriptive alt text for meaningful images. Use aria-labels for icon-only buttons. Support full keyboard navigation with logical tab order. Avoid removing focus rings or creating icon-only buttons without labels.

## Touch & Interaction Rules (Priority 2)

**Critical requirements:** Set minimum touch target size to 44×44 points (Apple) or 48×48 dp (Material). Maintain 8px+ gaps between touch targets. Avoid hover-only interactions; use click/tap for primacy. Provide clear loading feedback during async operations. Ensure error messages appear near the problem field. Add cursor-pointer to clickable web elements.

## Performance Rules (Priority 3)

**High impact:** Optimize images with WebP/AVIF formats and lazy loading. Declare width/height or use aspect-ratio to prevent layout shift. Use font-display: swap to avoid invisible text. Implement code splitting by route. Maintain Cumulative Layout Shift (CLS) below 0.1. Virtualize lists with 50+ items. Keep per-frame work under 16ms for 60fps.

## Style Selection Rules (Priority 4)

**High importance:** Match style to product type. Maintain consistency across all pages. Use SVG icons instead of emojis. Select color palettes based on product/industry. Align shadow and blur effects with chosen style (glass/flat/clay). Support platform idioms (iOS vs Material). Ensure hover/pressed/disabled states are visually distinct.

## Layout & Responsive Rules (Priority 5)

**High requirements:** Include viewport meta tag (width=device-width, initial-scale=1). Design mobile-first, then scale up. Use systematic breakpoints (375/768/1024/1440px). Keep minimum body text at 16px on mobile. Prevent horizontal scroll on mobile. Maintain consistent max-width on desktop (e.g., max-w-6xl). Define z-index scale. Avoid nested scroll regions.

## Typography & Color Rules (Priority 6)

**Medium importance:** Use 1.5-1.75 line-height for body text. Limit line length to 65-75 characters. Match heading/body font personalities. Implement consistent type scales. Maintain darker text on light backgrounds. Define semantic color tokens instead of raw hex values. Design dark mode with desaturated/lighter variants. Test all foreground/background pairs for 4.5:1 contrast.

## Animation Rules (Priority 7)

**Medium importance:** Keep micro-interactions to 150–300ms duration. Use transform/opacity only (avoid animating width/height). Show skeleton screens or progress for operations exceeding 300ms. Animate 1-2 key elements per view maximum. Use ease-out for entering, ease-in for exiting. Ensure every animation expresses cause-effect, not decoration only. Respect prefers-reduced-motion preferences.

## Forms & Feedback Rules (Priority 8)

**Medium requirements:** Use visible labels per input (not placeholder-only). Display errors below related fields. Show loading feedback, then success/error state. Mark required fields with indicators. Provide helpful empty-state messages and actions. Auto-dismiss toasts in 3-5 seconds. Confirm before destructive actions. Validate on blur, not keystroke. Support autofill with semantic attributes.

## Navigation Rules (Priority 9)

**High importance:** Limit bottom navigation to 5 items with labels and icons. Use drawers/sidebars for secondary navigation. Make back navigation predictable and consistent. Ensure all key screens are reachable via deep links. Highlight current location visually. Preserve scroll position and state when navigating back. Support system gesture navigation without conflicts.

## Charts & Data Rules (Priority 10)

**Low priority:** Match chart type to data (trend→line, comparison→bar, proportion→pie). Use accessible color palettes avoiding red/green only pairs. Always provide table alternative for accessibility. Supplement color with patterns/textures for colorblind users. Show legends near charts. Provide tooltips on hover/tap. Label axes with units and readable scale.

## How to Use This Skill

### Workflow Steps

**Step 1:** Analyze user requirements (product type, audience, style keywords, technology stack).

**Step 2:** Generate design system using: `python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system`

**Step 3:** Supplement with detailed searches by domain (product, style, color, typography, chart, ux, google-fonts, react, web, prompt).

**Step 4:** Apply stack-specific guidelines: `python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack react-native`

### Available Domains

- `product`: Product type recommendations
- `style`: UI styles, colors, effects
- `typography`: Font pairings, Google Fonts
- `color`: Color palettes by product type
- `landing`: Page structure, CTA strategies
- `chart`: Chart types, library recommendations
- `ux`: Best practices, anti-patterns
- `google-fonts`: Individual Google Fonts lookup
- `react`: React/Next.js performance
- `web`: App interface guidelines
- `prompt`: AI prompts, CSS keywords

## Common Professional UI Issues

### Icons & Visual Elements

Avoid emoji as structural icons; use vector-based icons (Lucide, react-native-vector-icons). Maintain consistent icon sizing via design tokens. Use one icon style per hierarchy level (filled vs outline). Ensure 44×44pt minimum touch targets with expanded hitSlop if needed. Keep stroke width consistent within visual layers.

### Interaction Patterns

Provide clear pressed feedback within 80-150ms. Keep micro-interactions to 150-300ms with native-feeling easing. Ensure screen reader focus order matches visual order. Use disabled semantics with reduced emphasis. Prevent gesture conflicts and nested tap/drag regions. Prefer native interactive primitives with proper accessibility roles.

### Light/Dark Mode

Maintain primary text contrast ≥4.5:1 and secondary ≥3:1 in both themes. Test both modes independently (don't infer from one). Ensure borders/dividers visible in both. Use token-driven theming mapped per theme. Apply modal scrims strong enough to isolate foreground (typically 40-60% black opacity).

### Layout & Spacing

Respect safe areas for headers, tab bars, and CTA bars. Add spacing for status bars and gesture areas. Keep predictable content widths per device class. Use consistent 4/8dp spacing rhythm. Maintain readable text measure on large devices. Define vertical rhythm tiers by hierarchy. Increase horizontal insets on larger widths and landscape orientation.

## Pre-Delivery Checklist

**Visual Quality:**
- No emojis as icons; use SVG instead
- Consistent icon family and styling
- Correct official brand assets with proper proportions
- Pressed states don't shift layout bounds
- Semantic theme tokens used consistently

**Interaction:**
- All tappable elements provide pressed feedback
- Touch targets meet minimum size (44x44pt iOS, 48x48dp Android)
- Micro-interaction timing in 150-300ms range
- Disabled states visually clear and non-interactive
- Screen reader labels descriptive and focus order logical
- No gesture conflicts (tap/drag/back-swipe)

**Light/Dark Mode:**
- Primary text contrast ≥4.5:1 both modes
- Secondary text contrast ≥3:1 both modes
- Dividers and states distinguishable in both
- Modal scrim opacity adequate (40-60%)
- Both themes tested before delivery

**Layout:**
- Safe areas respected for fixed UI
- Scroll content not hidden behind bars
- Verified on small phone, large phone, tablet (portrait + landscape)
- Gutters adapt by device size and orientation
- 4/8dp spacing rhythm maintained
- Text measure readable on larger devices

**Accessibility:**
- Meaningful images/icons have accessibility labels
- Form fields have labels, hints, error messages
- Color not sole indicator
- Reduced motion and dynamic text size supported
- Accessibility traits (selected, disabled, expanded) announced correctly
