import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProblemStatement from "@/components/ProblemStatement";
import FeatureCards from "@/components/FeatureCards";
import DarkStatement from "@/components/DarkStatement";
import ScrollSteps from "@/components/ScrollSteps";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductShowcase />
      <ProblemStatement />
      <FeatureCards />
      <DarkStatement />
      <ScrollSteps />
      <GettingStarted />
      <Footer />
    </main>
  );
}
