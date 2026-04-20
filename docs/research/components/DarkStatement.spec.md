# DarkStatement Specification

## Overview
- **Target file:** `components/DarkStatement.tsx`
- **Interaction model:** static
- **Height:** ~2076px (tall because it contains a large product photo below the text)
- **Background:** rgb(110, 110, 104) — dark olive gray

## DOM Structure
```
<section> (dark olive bg)
  <!-- Top text block -->
  <div> (2-col grid, max-width 1440px, mx-auto, px-20, pt-20 pb-16)
    <div> (left col ~50%)
      <p class="label">EXCEPTIONAL CRAFTSMANSHIP</p>
      <h2>
        <span class="regular">THE</span>
        <span class="regular">PURPOSEFUL</span>
        <br/>
        <span class="regular">WAY TO</span>
        <span class="regular">MAKE</span>
        <br/>
        <span class="regular">OBJECTS</span>
      </h2>
    </div>
    <div> (right col ~50%, flex-col, justify-center, gap-6)
      <p> (description paragraph)
      <div> (button row, flex, gap-3)
        <a class="btn-ghost-cream">View materials</a>
        <a class="btn-primary-red">View collection</a>
      </div>
      <!-- "WITH AVIRA YOUR HOME CAN" stats block -->
      <div class="stats-block">
        <p class="stats-label">WITH AVIRA YOUR HOME CAN</p>
        <div class="stats-grid"> (3 stats)
          <div><span class="stat-value">100%</span><span>reclaimed origin</span></div>
          <div><span class="stat-value">0</span><span>synthetic materials</span></div>
          <div><span class="stat-value">Each</span><span>piece unique</span></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Large product image -->
  <div> (full-width image block, ~1400px tall)
    <img src="product-workshop.jpg" (placeholder: dark workshop/craft scene)
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(110, 110, 104)

### Label ("EXCEPTIONAL CRAFTSMANSHIP")
- fontSize: 16px
- fontWeight: 400
- color: rgb(211, 209, 201)
- textTransform: uppercase
- letterSpacing: 0.1em
- fontFamily: 'DM Sans', sans-serif
- marginBottom: 16px

### H2 title
- fontSize: 60px
- fontWeight: 400
- color: rgb(247, 243, 232)   /* cream */
- textTransform: uppercase
- lineHeight: 1.0
- fontFamily: 'DM Sans', sans-serif

### Description paragraph
- fontSize: 20px
- color: rgb(247, 243, 232)
- fontFamily: 'DM Sans', sans-serif
- lineHeight: 1.6
- maxWidth: 480px

### "View materials" button (ghost on dark)
- backgroundColor: rgb(110, 110, 104)
- border: 1px solid rgb(133, 131, 124)
- color: rgb(110, 110, 104)   /* blends with bg */
- padding: 14px 20px
- borderRadius: 4px
- fontSize: 16px
- NOTE: appears as a muted box button

### "View collection" button (primary red)
- backgroundColor: rgb(233, 58, 55)
- color: rgb(251, 249, 244)
- padding: 14px 20px
- borderRadius: 4px
- fontSize: 16px

### Stats label
- fontSize: 14px
- color: rgb(173, 170, 162)
- textTransform: uppercase
- letterSpacing: 0.1em
- marginBottom: 12px

### Stats grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px
- marginTop: 32px

### Stat value
- fontSize: 32px
- fontWeight: 700
- color: rgb(247, 243, 232)
- display: block

### Stat label
- fontSize: 14px
- color: rgb(173, 170, 162)

### Large product image
- width: 100%
- height: 700px
- objectFit: cover
- objectPosition: center
- Use a dark placeholder: backgroundColor #3a3a36

## States & Behaviors
- Static section

## Text Content
- Label: "EXCEPTIONAL CRAFTSMANSHIP"
- Heading: "THE / PURPOSEFUL / WAY TO MAKE / OBJECTS"
- Description: "AVIRA goes beyond aesthetics. Every piece combines hand-craftsmanship with salvaged ocean materials. From sourcing to final finish, each object is built without compromise — to be used, not displayed."
- CTA 1: "View materials"
- CTA 2: "View collection"
- Stats label: "WITH AVIRA YOUR HOME CAN"
- Stat 1: "100%" / "reclaimed origin"
- Stat 2: "0" / "synthetic materials"
- Stat 3: "Each" / "piece unique"

## Responsive Behavior
- **Desktop:** 2-col text block + full-width image below
- **Mobile:** single column, h2 36px, image height 300px
- **Breakpoint:** ~768px
