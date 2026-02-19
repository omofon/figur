import BusinessFeatures from "../components/BusinessFeatures";
import CTA from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Testimonials from "../components/Testimonnials";

function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />
      <main className="pt-24 flex flex-col gap-16 md:gap-20">
        <Hero />
        <Services />
        <Partners />
        <BusinessFeatures />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
