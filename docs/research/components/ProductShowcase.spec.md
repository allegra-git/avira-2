# ProductShowcase Specification

## Overview
- **Target file:** `components/ProductShowcase.tsx`
- **Interaction model:** static (image display, no video — AVIRA has no Vimeo)
- **Height:** 885px
- **Background:** rgb(110, 110, 104) — dark olive gray

## DOM Structure
```
<section> (full-width, dark gray bg, 885px tall)
  <div> (inner container, max-width 1360px, mx-auto, relative, h-full)
    <div> (centered image wrapper)
      <img> (AVIRA tray hero shot — full product on gray bg)
    </div>
    <div> (bottom-right corner mini card, absolute positioned)
      <p>316L MARINE STEEL</p>
      <p>320 × 240 mm</p>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(110, 110, 104)
- height: 885px
- width: 100%
- position: relative
- overflow: hidden

### Image wrapper
- display: flex
- alignItems: center
- justifyContent: center
- height: 100%
- width: 100%

### Product image
- maxWidth: 700px
- maxHeight: 700px
- objectFit: contain
- display: block
- margin: 0 auto

### Bottom-right spec card (absolute)
- position: absolute
- bottom: 40px
- right: 40px
- backgroundColor: rgb(247, 243, 232)   /* cream */
- padding: 20px 24px
- borderRadius: 4px
- width: ~200px

### Spec card text (label)
- fontSize: 11px
- fontWeight: 400
- color: rgb(133, 131, 124)
- textTransform: uppercase
- letterSpacing: 0.1em
- fontFamily: 'DM Sans', sans-serif

### Spec card text (value)
- fontSize: 16px
- fontWeight: 700
- color: rgb(0, 0, 0)
- fontFamily: 'DM Sans', sans-serif

## States & Behaviors
- Static — no interaction

## Assets
- Product image: use a styled gray placeholder div (400x400) with centered text "AVIRA TRAY" until real photo available
- Style placeholder: backgroundColor: rgb(90, 90, 86), color: rgb(200,200,196), fontSize: 14px, letterSpacing: 0.2em

## Text Content
Spec card:
- Label: "MATERIAL"  Value: "316L MARINE STEEL"
- Label: "DIMENSIONS"  Value: "320 × 240 mm"
- Label: "FINISH"  Value: "BRUSHED"

## Responsive Behavior
- **Desktop:** 885px tall, image centered
- **Mobile:** height 400px, image scales down, spec card remains bottom-right but smaller
- **Breakpoint:** ~768px
