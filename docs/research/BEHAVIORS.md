# Behaviors — AVIRA (cloned from kitro.ch/solution)

## Nav Scroll Behavior
- **Trigger**: page scroll past ~50px
- **State A (top)**: backgroundColor transparent, text rgb(0,0,0), no shadow
- **State B (scrolled)**: backgroundColor changes to muted-gray (matching section below), text cream
- **Transition**: transition: all (smooth)
- **Implementation**: JS scroll listener, add/remove class `.scrolled`

## Scroll-Driven Steps Section (§6)
- **Interaction model**: SCROLL-DRIVEN — NOT click-driven
- Tab bar ("01 SOURCE / 02 CRAFT / 03 FINISH / 04 DELIVER") is sticky at top below nav
- Active tab highlights in red as user scrolls through each sub-section
- Each step is a full-viewport-height panel; scrolling past it advances to the next tab
- **Mechanism**: IntersectionObserver on each step panel, rootMargin "-40% 0px -40% 0px"
- Active tab: color #E93A37, inactive: color #ADAAA2
- **Implementation**: IntersectionObserver, not click handlers

## Feature Cards (§4)
- Horizontal scroll container
- Cards overflow right, user scrolls horizontally
- On desktop: 4+ cards visible partially

## Getting Started Steps (§7)
- 4-column horizontal layout on desktop
- Step 3 appears visually highlighted/active (brighter text)
- Static layout, no interaction

## Hover States
- All buttons: opacity or background shift on hover, transition 0.2s
- Nav links: opacity 0.7 on hover
- Feature cards: slight lift (translateY -2px) on hover

## Animations
- Section headings: fade-up on scroll into view (IntersectionObserver)
- Product images in §6: cross-fade between steps as tab changes
