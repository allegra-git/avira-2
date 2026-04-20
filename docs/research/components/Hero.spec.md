# Hero Specification

## Overview
- **Target file:** `components/Hero.tsx`
- **Interaction model:** static
- **Height:** ~372px (auto on mobile)
- **Background:** rgb(247, 243, 232) — cream

## DOM Structure
```
<section> (full-width, cream bg, pt-20 pb-0)
  <div> (2-col grid, max-width 1440px, mx-auto, px-8)
    <div> (left col ~55% width)
      <h1> (large uppercase title, mixed weights)
        <span class="regular">THE </span>
        <span class="bold">LUXURY</span>
        <br/>
        <span class="bold">TABLEWARE</span>
        <br/>
        <span class="regular">FOR MODERN</span>
        <br/>
        <span class="regular">SPACES</span>
      </h1>
    </div>
    <div> (right col ~45% width, flex-col, justify-center, gap-6)
      <p> (subtitle text, muted gray)
      <div> (button row, flex gap-3)
        <a class="btn-primary">View Collection</a>
        <a class="btn-ghost">Learn the craft</a>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(247, 243, 232)
- paddingTop: 80px  /* clear nav */
- paddingBottom: 0

### Container
- display: grid
- gridTemplateColumns: 55% 45%
- maxWidth: 1440px
- margin: 0 auto
- padding: 40px 80px 0 80px
- alignItems: center

### H1 title
- fontSize: 60px
- lineHeight: 1.0
- fontFamily: 'DM Sans', sans-serif
- color: rgb(233, 58, 55)   /* primary red */
- textTransform: uppercase
- margin: 0

### H1 .regular spans
- fontWeight: 400

### H1 .bold spans
- fontWeight: 700

### Subtitle paragraph
- fontSize: 20px
- fontWeight: 400
- color: rgb(133, 131, 124)  /* muted gray */
- fontFamily: 'DM Sans', sans-serif
- lineHeight: 1.5
- maxWidth: 400px

### "View Collection" button (primary)
- backgroundColor: rgb(233, 58, 55)
- color: rgb(0, 0, 0)
- padding: 14px 20px
- borderRadius: 4px
- fontSize: 16px
- fontFamily: 'DM Sans', sans-serif
- border: none
- height: 48px

### "Learn the craft" button (ghost)
- backgroundColor: transparent
- color: rgb(0, 0, 0)
- border: 1px solid rgb(133, 131, 124)
- padding: 14px 20px
- borderRadius: 4px
- fontSize: 16px
- height: 48px

## States & Behaviors
- Static — no scroll or hover-driven behavior on the section itself
- Buttons: hover opacity 0.85, transition 0.2s

## Assets
- No images in this section

## Text Content
- Heading line 1: "THE"
- Heading line 2: "LUXURY" (bold)
- Heading line 3: "TABLEWARE" (bold)
- Heading line 4: "FOR MODERN"
- Heading line 5: "SPACES"
- Subtitle: "Each piece handcrafted from reclaimed yacht materials — teak, carbon composite, and 316L marine-grade stainless steel."
- CTA 1: "View Collection"
- CTA 2: "Learn the craft"

## Responsive Behavior
- **Desktop (1440px):** 2-column grid as above
- **Mobile (390px):** single column, h1 font-size 36px, subtitle below heading, buttons stack
- **Breakpoint:** stacks at ~768px
