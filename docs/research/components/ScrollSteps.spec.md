# ScrollSteps Specification

## Overview
- **Target file:** `components/ScrollSteps.tsx`
- **Interaction model:** SCROLL-DRIVEN — sticky tab bar advances as user scrolls through 4 panels
- **Total height:** ~5700px (4 panels × ~1400px each)
- **Background:** rgb(247, 243, 232) — cream

## DOM Structure
```
<section style="position: relative">
  <!-- Sticky tab bar -->
  <div class="tab-bar"> (sticky, top: 80px — below nav)
    <div class="tab active" data-step="0">01 SOURCE</div>
    <div class="tab" data-step="1">02 CRAFT</div>
    <div class="tab" data-step="2">03 FINISH</div>
    <div class="tab" data-step="3">04 DELIVER</div>
  </div>

  <!-- 4 step panels stacked vertically -->
  <div class="step-panel" data-index="0"> (1400px tall)
    <div class="step-content"> (split: left image, right text)
      <div class="step-image"> (large product/process image)
        <img>
      </div>
      <div class="step-text">
        <p class="step-label">AUTOMATED MATERIAL SOURCING</p>
        <h2>NO SHORTCUTS, / NO WAITING</h2>
        <p class="step-description">...</p>
        <a href="#">Learn more</a>
        <ul class="step-bullets">
          <li><strong>Source</strong> — reclaimed teak and carbon from certified yacht breakers</li>
          <li><strong>Verify</strong> — marine provenance checked before acquisition</li>
          <li><strong>Store</strong> — climate-controlled workshop storage</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- repeat for panels 1, 2, 3 -->
</section>
```

## Computed Styles

### Tab bar
- position: sticky
- top: 80px   /* sits directly below nav */
- zIndex: 8
- backgroundColor: rgb(247, 243, 232)
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- width: 100%
- borderBottom: 1px solid rgba(0,0,0,0.1)
- padding: 0 80px

### Tab (inactive)
- fontSize: 14px
- fontWeight: 400
- color: rgb(173, 170, 162)   /* gray inactive */
- padding: 20px 0
- fontFamily: 'DM Sans', sans-serif
- textTransform: uppercase
- letterSpacing: 0.08em
- cursor: default

### Tab (active)
- color: rgb(233, 58, 55)   /* red */
- fontWeight: 400

### Step panel
- height: 1400px   /* tall enough to create scroll time */
- display: flex
- alignItems: center
- padding: 0 80px
- gap: 80px

### Step image (left ~55%)
- width: 55%
- height: 900px
- position: relative
- overflow: hidden
- borderRadius: 4px

### Step image img
- width: 100%
- height: 100%
- objectFit: cover
- Use placeholders: step 0 #7a6040, step 1 #2a2a28, step 2 #7e8285, step 3 #3a4a3a

### Step text (right ~40%)
- width: 40%
- display: flex
- flexDirection: column
- gap: 24px

### Step label
- fontSize: 16px
- fontWeight: 400
- color: rgb(173, 170, 162)
- textTransform: uppercase
- letterSpacing: 0.1em

### Step H2
- fontSize: 60px
- fontWeight: 400
- color: rgb(233, 58, 55)   /* red */
- textTransform: uppercase
- lineHeight: 1.0
- fontFamily: 'DM Sans', sans-serif

### H2 bold words
- fontWeight: 700

### Step description
- fontSize: 16px
- color: rgb(133, 131, 124)
- lineHeight: 1.6

### "Learn more" link
- fontSize: 14px
- color: rgb(211, 209, 201)
- textTransform: uppercase
- letterSpacing: 0.08em

### Bullet list
- listStyle: none
- padding: 0
- display: flex
- flexDirection: column
- gap: 12px

### Bullet item
- fontSize: 16px
- color: rgb(133, 131, 124)

### Bullet strong
- color: rgb(0, 0, 0)
- fontWeight: 700

## States & Behaviors

### Scroll-driven tab advancement
- **CRITICAL: SCROLL-DRIVEN, not click-driven**
- **Mechanism:** IntersectionObserver on each `.step-panel`, rootMargin: "-40% 0px -40% 0px"
- When a panel enters viewport center → its tab becomes active (color #E93A37)
- All other tabs → inactive (color #ADAAA2)
- **Implementation:**
```tsx
useEffect(() => {
  const panels = document.querySelectorAll('.step-panel');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveStep(Number(entry.target.dataset.index));
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  panels.forEach(p => observer.observe(p));
  return () => observer.disconnect();
}, []);
```

## Per-Step Content

### Step 0: SOURCE
- Label: "RECLAIMED MATERIAL SOURCING"
- Title: "NO SHORTCUTS, / NO WAITING"
- Description: "We source exclusively from certified yacht breakers and sailing clubs across Europe. Every plank of teak, every sheet of carbon, every steel fitting is checked for marine provenance before it enters our workshop."
- Link: "Watch sourcing process"
- Bullets: Source / Verify / Catalogue

### Step 1: CRAFT
- Label: "HAND WORKSHOP PRODUCTION"
- Title: "YOUR / MATERIAL, / MADE / PURPOSEFUL"
- Description: "Each piece is CNC-routed, welded or woven by hand in our Geneva workshop. No injection moulding, no batch production — every AVIRA is built as a single commission."
- Bullets: Cut / Shape / Assemble

### Step 2: FINISH
- Label: "PRECISION SURFACE FINISHING"
- Title: "DETAILS / THAT / MATTER"
- Description: "Brushing, engraving, rope-weaving. The final finish of each piece takes longer than building it. We work to a standard your fingertips will notice before your eyes do."
- Bullets: Brush / Engrave / Inspect

### Step 3: DELIVER
- Label: "WHITE-GLOVE DELIVERY"
- Title: "READY / FOR YOUR / SPACE"
- Description: "Each AVIRA arrives gift-packaged in a custom kraft box with a certificate of provenance — the boat it came from, the year it sailed."
- Bullets: Package / Certify / Deliver

## Responsive Behavior
- **Desktop:** side-by-side image + text per panel
- **Mobile:** image on top, text below; tab bar scrolls horizontally; panel height 800px
- **Breakpoint:** ~768px
