# GettingStarted Specification

## Overview
- **Target file:** `components/GettingStarted.tsx`
- **Interaction model:** static
- **Height:** ~2654px (tall due to big heading + 4 step cards)
- **Background:** rgb(133, 131, 124) — mid sage gray

## DOM Structure
```
<section> (mid-gray bg)
  <!-- Top: big heading + CTA -->
  <div> (max-width 1440px, mx-auto, px-20, pt-20, pb-16)
    <div> (flex, justify-between, align-start)
      <h2> (large multi-line heading)
        <span>get</span>
        <span>your</span>
        <br/>
        <span class="bold">AVIRA</span>
        <br/>
        <span>in just a</span>
        <br/>
        <span>few steps</span>
      </h2>
      <div> (right: CTA button)
        <a class="btn-primary-red">View collection</a>
      </div>
    </div>
  </div>

  <!-- 4-column step grid -->
  <div> (4-col grid, px-20, pb-20, gap-8)
    <!-- Step 1 - visually active/bright -->
    <div class="step-card active">
      <p class="step-num">01</p>
      <h3>REQUEST A CONSULTATION</h3>
      <p>Book a 15-minute call to discuss your space, your taste, and which AVIRA pieces would suit it. We will walk you through the collection and discuss customisation options.</p>
    </div>
    <!-- Steps 2, 3, 4 - muted -->
    <div class="step-card">...</div>
    <div class="step-card">...</div>
    <div class="step-card">...</div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(133, 131, 124)
- paddingTop: 80px
- paddingBottom: 80px

### H2 heading
- fontSize: 60px
- fontWeight: 400
- color: rgb(247, 243, 232)   /* cream */
- textTransform: lowercase  /* "get", "your", "just", "few", "steps" are lowercase */
- lineHeight: 1.05
- fontFamily: 'DM Sans', sans-serif

### H2 bold word ("AVIRA")
- fontWeight: 700
- textTransform: uppercase

### "View collection" button
- backgroundColor: rgb(233, 58, 55)
- color: rgb(251, 249, 244)
- padding: 14px 20px
- borderRadius: 4px
- fontSize: 16px

### Step grid
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 32px
- padding: 0 80px 80px 80px

### Step card (inactive/muted)
- display: flex
- flexDirection: column
- gap: 16px

### Step card (active — step 1)
- same as inactive, but text is brighter

### Step number
- fontSize: 14px
- fontWeight: 400
- color: rgb(233, 58, 55)   /* red for active step */
- color: rgb(211, 209, 201)   /* muted for inactive */
- fontFamily: 'DM Sans', sans-serif

### Step title (active)
- fontSize: 32px
- fontWeight: 700
- color: rgb(247, 243, 232)   /* bright cream */
- textTransform: uppercase
- fontFamily: 'DM Sans', sans-serif
- lineHeight: 1.1

### Step title (inactive)
- fontSize: 24px
- fontWeight: 400
- color: rgb(211, 209, 201)   /* muted cream */
- textTransform: uppercase

### Step description (active only — inactive has no description visible)
- fontSize: 16px
- color: rgb(211, 209, 201)
- lineHeight: 1.6

## States & Behaviors
- Static layout — step 1 always appears active/bright
- No hover or scroll behavior

## Text Content
- Heading: "get / your / AVIRA / in just a / few steps"
- CTA: "View collection"
- Step 1 (active): "01 / REQUEST A CONSULTATION / Book a 15-minute call to discuss your space..."
- Step 2: "02 / RECEIVE YOUR TAILORED PROPOSAL"
- Step 3: "03 / CONFIRM YOUR ORDER"
- Step 4: "04 / RECEIVE YOUR AVIRA"

## Responsive Behavior
- **Desktop:** 4-col grid
- **Mobile:** 2-col grid or single column, h2 36px
- **Breakpoint:** ~768px → 2 col; ~480px → 1 col
