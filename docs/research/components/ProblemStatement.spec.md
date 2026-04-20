# ProblemStatement Specification

## Overview
- **Target file:** `components/ProblemStatement.tsx`
- **Interaction model:** static
- **Height:** ~352px top section + image strip below
- **Background:** rgb(247, 243, 232) — cream

## DOM Structure
```
<section> (cream bg)
  <div> (2-col grid, max-width 1440px, mx-auto, px-8, py-16)
    <div> (left col ~50%)
      <h2> (mixed weight title)
        <span class="regular">THE BEAUTY OF</span>
        <br/>
        <span class="bold">RECLAIMED</span>
        <br/>
        <span class="bold">MATERIALS</span>
      </h2>
    </div>
    <div> (right col ~50%, flex-col, gap-6)
      <p> (paragraph 1)
      <p> (paragraph 2)
      <a href="#">Learn about our materials</a>
    </div>
  </div>
  <div> (full-width horizontal image strip, overflow-x: auto, no-scrollbar)
    <div> (flex row, gap-4)
      <!-- 4 material photos: teak planks, carbon fiber, stainless steel, rope coils -->
      <div class="material-card"> (each ~300px wide, 240px tall)
        <img>
        <p class="label">TEAK DECK PLANKING</p>
      </div>
      ...
    </div>
  </div>
</section>
```

## Computed Styles

### H2 title
- fontSize: 32px
- lineHeight: 1.1
- fontFamily: 'DM Sans', sans-serif
- color: rgb(233, 58, 55)
- textTransform: uppercase

### H2 .regular spans
- fontWeight: 400

### H2 .bold spans
- fontWeight: 700

### Body paragraphs (right col)
- fontSize: 20px
- fontWeight: 400
- color: rgb(133, 131, 124)
- fontFamily: 'DM Sans', sans-serif
- lineHeight: 1.6

### Source link
- fontSize: 20px
- color: rgb(233, 58, 55)
- fontWeight: 400
- textDecoration: underline

### Image strip container
- display: flex
- flexDirection: row
- overflowX: auto
- scrollbarWidth: none
- gap: 16px
- paddingLeft: 80px
- paddingBottom: 40px

### Material card
- width: 300px
- flexShrink: 0
- height: 240px
- position: relative
- overflow: hidden
- borderRadius: 4px

### Material card image
- width: 100%
- height: 100%
- objectFit: cover

### Material card label
- fontSize: 12px
- fontWeight: 400
- color: rgb(133, 131, 124)
- textTransform: uppercase
- letterSpacing: 0.1em
- marginTop: 8px

## States & Behaviors
- Image strip: horizontally scrollable, hide scrollbar
- Static otherwise

## Assets
- Use colored placeholder divs for material images (no real photos yet):
  - Teak: backgroundColor #8B6914 (warm brown)
  - Carbon: backgroundColor #1a1a1a (near black)
  - Steel: backgroundColor #7e8285 (brushed steel gray — AVIRA's own color)
  - Rope: backgroundColor #C4A35A (rope/hemp tan)

## Text Content
- Heading: "THE BEAUTY OF / RECLAIMED / MATERIALS"
- Para 1: "Every AVIRA piece begins with salvage — teak deck planking stripped from decommissioned yachts, carbon composite hull off-cuts, and 316L marine-grade stainless steel hardware with decades of ocean history."
- Para 2: "Nothing is wasted. Materials that once sailed the world become objects of quiet, enduring purpose for the spaces where life is lived."
- Link: "Learn about our materials"
- Image labels: "TEAK DECK PLANKING" | "CARBON COMPOSITE" | "316L MARINE STEEL" | "YACHT RIGGING ROPE"

## Responsive Behavior
- **Desktop:** 2-col grid for text, full-width image strip below
- **Mobile:** single column, h2 24px, image strip scrolls horizontally
- **Breakpoint:** ~768px
