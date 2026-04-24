import Nav from "@/components/Nav"
import GettingStarted from "@/components/GettingStarted"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <main>
      <Nav />
      {/* Page header */}
      <section style={{ backgroundColor: 'rgba(13,13,13,0.93)', padding: '120px 80px 80px 80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <span style={{ fontSize: 11, color: 'rgba(223,225,226,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 16, fontFamily: 'var(--font-sans)', fontWeight: 200 }}>About AVIRA</span>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 200, color: '#dfe1e2', textTransform: 'uppercase', lineHeight: 1.0, fontFamily: 'var(--font-sans)', margin: '0 0 24px 0' }}>Objects<br />of Purpose</h1>
          <p style={{ fontSize: 16, color: 'rgba(223,225,226,0.5)', fontWeight: 200, fontFamily: 'var(--font-sans)', maxWidth: 480, lineHeight: 1.7, margin: 0 }}>AVIRA is a Geneva-based studio creating luxury tableware and service accessories handcrafted from reclaimed yacht materials. Each piece is unique, purposeful, and built to last.</p>
        </div>
      </section>
      <GettingStarted />
      <Footer />
    </main>
  )
}
