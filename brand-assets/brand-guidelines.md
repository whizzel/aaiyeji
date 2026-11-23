# Aaiyeji brand guidelines (initial concept)

> Status: concept for the first release. Replace after formal brand approval.
> The feeling: **Indian celebration, editorial luxury** — a thoughtful welcome,
> a beautiful first impression, a celebration that feels personal to every guest.

## 1. Name and voice

- The brand name is **Aaiyeji** (title case) or **AAIYEJI** (wordmark/eyebrows).
  Never "AaiyeJi", "AAIYEJi" or "Aaiye ji" in brand placements.
- Brand line: **“A beautiful way to say, you’re invited.”**
- Supporting line: **“Your story. Your celebration. One beautiful link.”**
- Tone: warm, confident, natural. Speak like a gracious host, not a startup.
- Avoid: “revolutionary”, “cutting-edge”, “unparalleled”, “next-level”, fake
  urgency, invented statistics, discounts or testimonials.
- Commercial honesty: prices exactly as the data file; taxes note — “Final quote
  and applicable taxes, if any, will be confirmed before booking.” Delivery
  timing begins after all required details and assets are received and confirmed.

## 2. Palette

Source of truth: `brand-tokens.css` / `design-tokens.json`.

| Token | Value | Role |
| ----- | ----- | ---- |
| `--aaiyeji-wine` | `#70233F` | Primary brand colour; key buttons, headings on light, strong accents |
| `--aaiyeji-deep` | `#351824` | Dark sections, premium contrast, footer |
| `--aaiyeji-gold` | `#C99B50` | Fine borders, rules, highlights (never large fills on light) |
| `--aaiyeji-ivory` | `#FBF7F0` | Main warm background |
| `--aaiyeji-blush` | `#F0DFDA` | Soft section/card tint |
| `--aaiyeji-sage` | `#7D927F` | Restrained secondary accent (tags, small icons) |
| `--aaiyeji-ink` | `#2D2529` | Body text |
| `--aaiyeji-white` | `#FFFFFF` | Clean card surfaces |

Derived tones (`wine-soft`, `gold-soft`, `ivory-dim`, `line`, `night`) support
hovers, dark-surface gold and hairlines. Rules:

- Generous ivory space; wine typography/controls; delicate gold lines;
  restrained blush panels; occasional sage.
- Body text on ivory is ink or deep — never gold (contrast).
- Gold text is only for small labels on deep/wine surfaces; use `gold-soft`
  there for readability.
- No gradient-heavy sections; depth comes from paper tones and hairlines.

## 3. Typography

- **Display:** Cormorant Garamond (400–700 + italic) — headlines, couple names,
  large numerals. Fallbacks: Georgia, Times New Roman, serif.
- **Body/UI:** DM Sans — copy, controls, labels. Fallbacks: system-ui, Segoe UI.
- **Indic:** Noto Serif Devanagari for Hindi/Marathi lines; add the matching
  Noto script font when a new regional language is introduced.
- Loaded via `next/font` with `display: swap`; CSS variables
  `--font-cormorant`, `--font-dmsans`, `--font-notodev`.
- Headings: display serif, tight leading (1.05–1.15), wine or deep on light.
- Eyebrows: DM Sans, 11–12px, uppercase, letter-spacing 0.2em+, gold or sage.
- Body: 15–17px, leading 1.6–1.7, ink. Minimum 14px anywhere.

## 4. Logo

- System: arch-and-lotus **symbol** + **AAIYEJI** wordmark (letterspaced serif).
- Clear space: at least the height of the arch finial (≈ ¼ of symbol height)
  on all sides. Minimum sizes: symbol 20px, full lockup 120px wide.
- On light: wine symbol lines, gold inner arch. On dark: gold/ivory lines.
- Never stretch, rotate, recolour outside the palette, add effects, or place
  on busy imagery without a solid panel.
- The SVG wordmark uses live text (editable concept). Convert to outlines for
  final production artwork.

## 5. Visual motifs

- **Welcome arch / doorway** — the “aaiye” feeling; ogee arches as frames and
  gates, drawn as fine line art, never heavy fills.
- **Floral line art** — lotus buds, petals, curling stems; small and precise.
- **Jaali-inspired geometry** — occasional fine lattice, low opacity.
- **Thin gold rules & frames** — 1px borders, double-frame cards.
- **Paper** — ivory/blush surfaces, soft shadows, no glassmorphism.
- No emoji as brand identity. No cartoonish or stereotypical clip-art.

## 6. Buttons

- **Primary:** wine fill, ivory text, pill radius, DM Sans 600, comfortable
  padding (≥ 44px tap height). Hover: wine-soft, slight lift.
- **Secondary:** transparent, 1px wine/gold border, wine text (ivory on dark).
- **Ghost/link:** wine text with arrow, underline on hover.
- Focus: visible 2px outline (wine on light, gold-soft on dark), 2px offset.
- Labels are verbs: “Explore invitation styles”, “Create my invitation”,
  “View live demo”, “Chat on WhatsApp”.

## 7. Cards

- White or ivory surface, 1px `line` border, radius 1rem, soft shadow
  (0 1px 2px rgba(53,24,36,.05), 0 12px 32px rgba(53,24,36,.06)).
- Featured pricing card: deep/wine surface, gold hairline double frame,
  gold-soft eyebrow “Recommended”.
- Demo invitation cards use their own theme (royal night/wine, floral
  ivory/blush/sage, minimal warm-white/hairline).

## 8. Motion

- Subtle fade/slide reveals (≤ 600ms), gentle hovers, small decorative drift.
- Always honour `prefers-reduced-motion`. Never block content behind animation
  (the demo welcome gate is a single tap, skippable by keyboard).

## 9. Imagery

Original SVG/CSS artwork only for now. Real photography must be licensed,
stored locally and registered in `imagery/README.md`. Demo content is always
fictional and labelled “Aaiyeji sample invitation”.
