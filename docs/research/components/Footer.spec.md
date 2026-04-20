# Footer Specification

## Overview
- **Target file:** `components/Footer.tsx`
- **Interaction model:** static
- **Height:** ~895px
- **Background:** rgb(50, 50, 50) — near-black dark

## DOM Structure
```
<footer> (dark bg)
  <div> (max-width 1440px, mx-auto, px-20, py-20)
    <div> (4-col grid)
      <!-- Col 1: Navigation links -->
      <div>
        <p class="col-label">COLLECTION</p>
        <ul>
          <li><a>Service Tray</a></li>
          <li><a>Coaster</a></li>
          <li><a>Bottle Container</a></li>
          <li><a>About AVIRA</a></li>
          <li><a>Craft</a></li>
          <li><a>Materials</a></li>
        </ul>
      </div>
      <!-- Col 2: Contact -->
      <div>
        <p class="col-label">CONTACT</p>
        <p>Geneva, Switzerland</p>
        <a href="#">Schedule a call</a>
        <a href="mailto:hello@avira.studio">hello@avira.studio</a>
      </div>
      <!-- Col 3: Follow + Social -->
      <div>
        <p class="col-label">FOLLOW US</p>
        <ul>
          <li><a>Instagram</a></li>
          <li><a>LinkedIn</a></li>
        </ul>
      </div>
      <!-- Col 4: Newsletter signup -->
      <div>
        <p class="col-label">STAY UPDATED</p>
        <p>Subscribe for new pieces and stories from the workshop.</p>
        <form>
          <input type="email" placeholder="your@email.com"/>
          <button type="submit">Sign up</button>
        </form>
        <p class="legal">By subscribing you agree to our Privacy Policy.</p>
      </div>
    </div>
    <!-- Bottom bar -->
    <div class="footer-bottom"> (flex, justify-between, mt-16, pt-8, border-top)
      <p>© 2025 AVIRA</p>
      <p>Objects of Purpose</p>
    </div>
  </div>
</footer>
```

## Computed Styles

### Footer
- backgroundColor: rgb(50, 50, 50)
- color: rgb(166, 166, 166)

### Column label
- fontSize: 16px
- fontWeight: 400
- color: rgb(127, 127, 127)
- textTransform: uppercase
- letterSpacing: 0.08em
- marginBottom: 16px
- fontFamily: 'DM Sans', sans-serif

### Nav/contact links
- fontSize: 16px
- color: rgb(166, 166, 166)
- textDecoration: none
- display: block
- marginBottom: 8px
- fontFamily: 'DM Sans', sans-serif
- hover: color rgb(247, 243, 232), transition 0.2s

### Newsletter input
- backgroundColor: rgb(70, 70, 70)
- border: none
- color: rgb(247, 243, 232)
- padding: 10px 16px
- borderRadius: 4px
- fontSize: 14px
- width: 100%
- marginBottom: 8px

### Newsletter button
- backgroundColor: rgb(247, 243, 232)
- color: rgb(50, 50, 50)
- padding: 10px 20px
- borderRadius: 4px
- fontSize: 14px
- border: none

### Legal text
- fontSize: 12px
- color: rgb(100, 100, 100)
- marginTop: 8px

### Footer bottom bar
- borderTop: 1px solid rgb(70, 70, 70)
- paddingTop: 32px
- marginTop: 64px
- display: flex
- justifyContent: space-between
- fontSize: 14px
- color: rgb(100, 100, 100)

## States & Behaviors
- Link hover: color changes to cream rgb(247, 243, 232), transition 0.2s

## Text Content
- Col 1 label: "COLLECTION"
- Links: Service Tray / Coaster / Bottle Container / About AVIRA / Craft / Materials
- Col 2 label: "CONTACT"
- Address: Geneva, Switzerland
- Link: Schedule a call
- Email: hello@avira.studio
- Col 3 label: "FOLLOW US"
- Socials: Instagram / LinkedIn
- Col 4 label: "STAY UPDATED"
- Copy: "Subscribe for new pieces and stories from the workshop."
- Legal: "By subscribing you agree to our Privacy Policy."
- Bottom: "© 2025 AVIRA" / "Objects of Purpose"

## Responsive Behavior
- **Desktop:** 4-col grid
- **Mobile:** 2-col or single col, newsletter full width
- **Breakpoint:** ~768px
