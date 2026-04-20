# Page Topology — AVIRA (cloned from kitro.ch/solution)

## Source: https://www.kitro.ch/solution
## Target: AVIRA — Objects of Purpose

---

## Overall Layout
- Single-page scroll, 18156px total height
- Background: cream `#F7F3E8` globally
- No scroll-snap, no smooth-scroll library detected
- Framer-built source (not relevant to our Next.js build)

---

## Section Map (top to bottom)

| # | Name | offsetTop | Height | Background | Interaction |
|---|------|-----------|--------|------------|-------------|
| 0 | Nav | sticky (0) | 80px | transparent → cream on scroll | scroll-driven |
| 1 | Hero | 80 | 372px | cream #F7F3E8 | static |
| 2 | Product Showcase | 452 | 885px | gray #6E6E68 | video/media |
| 3 | Problem Statement | 1337 | 352px | cream #F7F3E8 | static + floating images |
| 4 | Feature Cards | 1689 | 660px | dark #6E6E68 | horizontal scroll |
| 5 | Dark Statement | 2349 | 2076px | dark-olive #6E6E68 | static + product image |
| 6 | Scroll-Driven Steps | 5847 | 5709px | cream #F7F3E8 | scroll-driven IntersectionObserver |
| 7 | Getting Started | 11556 | 2654px | mid-gray #85837C | static |
| 8 | Trust Badges | 14210 | 130px | cream #F7F3E8 | static |
| 9 | Footer | 17261 | 895px | dark #323232 | static |

---

## Z-Index Layers
- Nav: z-index 9, sticky top-0
- All other sections: z-index 1 (flow)

## Dependencies
- Nav floats over everything (sticky)
- Scroll-Driven Steps (§6) has sticky internal tab bar at top
