import Header from "./components/Header";
import Hero from "./components/Hero";
import StartHere from "./components/StartHere";
import FeaturedComparisons from "./components/FeaturedComparisons";
import BestTools from "./components/BestTools";
import FeaturedGuides from "./components/FeaturedGuides";
import HowWeReview from "./components/HowWeReview";
import Newsletter from "./components/Newsletter";
import SecondaryCTA from "./components/SecondaryCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <StartHere />
      <FeaturedComparisons />
      <BestTools />
      <FeaturedGuides />
      <HowWeReview />
      <Newsletter />
      <SecondaryCTA />
      <Footer />
    </main>
  );
}
