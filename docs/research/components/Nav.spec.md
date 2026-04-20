# Nav Specification

## Overview
- **Target file:** `components/Nav.tsx`
- **Interaction model:** scroll-driven — transparent at top, gains background on scroll
- **Height:** 80px
- **Position:** sticky, top: 0, z-index: 9

## DOM Structure
```
<nav> (sticky, full-width, 80px tall)
  <div> (inner container, max-width 1440px, mx-auto, px-8)
    <a href="/"> (logo — AVIRA wordmark)
    <ul> (nav links, horizontal, gap ~48px, centered)
      <li><a>Collection</a></li>
      <li><a>Craft</a></li>
      <li><a>Materials</a></li>
      <li><a>About</a></li>
    </ul>
    <div> (right side CTA)
      <a href="#">Shop Now</a>  ← primary button
      <a href="#">Contact</a>  ← ghost/text link
    </div>
  </div>
</nav>
```

## Computed Styles

### Nav container (state A — top of page)
- position: sticky
- top: 0
- zIndex: 9
- height: 80px
- width: 100%
- backgroundColor: transparent (rgba(0,0,0,0))
- transition: all 0.3s ease

### Nav container (state B — scrolled)
- backgroundColor: rgb(247, 243, 232)  /* cream — same as body */
- boxShadow: 0 1px 0 rgba(0,0,0,0.08)

### Logo text "AVIRA"
- fontFamily: 'DM Sans', sans-serif
- fontSize: 18px
- fontWeight: 700
- color: rgb(233, 58, 55)   /* primary red */
- letterSpacing: 0.15em
- textTransform: uppercase

### Nav links
- fontFamily: 'DM Sans', sans-serif
- fontSize: 14px
- fontWeight: 400
- color: rgb(0, 0, 0)
- letterSpacing: normal
- opacity: 1 (hover: 0.6, transition 0.2s)

### "Shop Now" button
- backgroundColor: rgb(133, 131, 124)  /* muted gray */
- color: rgb(251, 249, 244)             /* near-white cream */
- padding: 10px 20px
- borderRadius: 4px
- fontSize: 14px
- fontFamily: 'DM Sans', sans-serif
- border: none

### "Contact" link
- backgroundColor: transparent
- color: rgb(0, 0, 0)
- fontSize: 14px
- padding: 10px 16px

## States & Behaviors

### Scroll-triggered background
- **Trigger:** window.scrollY > 50
- **State A:** backgroundColor: transparent
- **State B:** backgroundColor: rgb(247, 243, 232), boxShadow: 0 1px 0 rgba(0,0,0,0.08)
- **Transition:** transition: background-color 0.3s ease, box-shadow 0.3s ease
- **Implementation:** useEffect with scroll listener, toggle class or state

## Assets
- No images — logo is text "AVIRA" in red

## Text Content
- Logo: AVIRA
- Links: Collection | Craft | Materials | About
- CTA: Shop Now | Contact

## Responsive Behavior
- **Desktop (1440px):** full horizontal nav as described
- **Mobile (390px):** hamburger menu icon, links hidden, logo left + hamburger right
- **Breakpoint:** collapses at ~768px
