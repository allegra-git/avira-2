# FeatureCards Specification

## Overview
- **Target file:** `components/FeatureCards.tsx`
- **Interaction model:** horizontal scroll
- **Height:** ~660px
- **Background:** rgb(110, 110, 104) — dark olive gray

## DOM Structure
```
<section> (dark olive bg, py-20)
  <div> (scroll container, overflow-x: auto, no-scrollbar)
    <div> (flex row, gap-4, px-20, width: fit-content)
      <!-- 4 cards -->
      <div class="feature-card"> (each ~380px × 280px)
        <div class="icon-line"/> (short horizontal dash, cream, 32px wide, 2px tall)
        <h3> (card title)
        <p> (card description)
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(110, 110, 104)
- paddingTop: 80px
- paddingBottom: 80px

### Scroll container
- overflowX: auto
- scrollbarWidth: none (-webkit-scrollbar: none)
- width: 100%

### Cards row
- display: flex
- flexDirection: row
- gap: 16px
- paddingLeft: 80px
- paddingRight: 80px
- width: fit-content

### Each card
- width: 380px
- minHeight: 280px
- flexShrink: 0
- backgroundColor: rgb(90, 90, 85)   /* slightly darker than section bg */
- borderRadius: 4px
- padding: 32px
- display: flex
- flexDirection: column
- gap: 16px

### Icon dash
- width: 32px
- height: 2px
- backgroundColor: rgb(211, 209, 201)   /* muted cream */
- marginBottom: 8px

### Card title (h3)
- fontSize: 18px
- fontWeight: 700
- color: rgb(211, 209, 201)   /* muted cream */
- fontFamily: 'DM Sans', sans-serif
- textTransform: uppercase
- letterSpacing: 0.05em

### Card description
- fontSize: 16px
- fontWeight: 400
- color: rgb(173, 170, 162)   /* lighter muted */
- fontFamily: 'DM Sans', sans-serif
- lineHeight: 1.5

## States & Behaviors
- Horizontal scroll on the cards row
- Card hover: translateY(-2px), transition 0.2s ease

## Assets
- No images in cards — text + dash only

## Text Content
Card 1:
- Title: "Handcrafted quality, without compromise"
- Description: "Every piece is built by hand in our workshop. No shortcuts, no production line — only skilled hands and the right materials."

Card 2:
- Title: "Marine-grade durability"
- Description: "316L stainless steel and teak are built to endure the ocean. They'll outlast anything you ask of them at home."

Card 3:
- Title: "Each piece is unique"
- Description: "Reclaimed materials mean no two pieces are identical. The grain, texture and patina of your AVIRA is yours alone."

Card 4:
- Title: "Zero compromise on finish"
- Description: "Brushed steel, CNC-engraved teak and woven rope — every surface is finished to a standard you can feel with your hands."

## Responsive Behavior
- **Desktop:** 4 cards in horizontal scroll row, ~380px each
- **Mobile:** cards 280px wide, same horizontal scroll
- **Breakpoint:** always horizontal scroll, no stacking
