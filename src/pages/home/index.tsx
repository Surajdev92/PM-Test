import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/home/Hero/Hero";
import MarketDataStrip from "../../components/home/MarketDataStrip/MarketDataStrip";
import MarketCategories from "../../components/home/MarketCategories/MarketCategories";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import AccessSection from "../../components/home/AccessSection/AccessSection";
import Footer from "../../components/footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MarketDataStrip />
        <MarketCategories />
        <AccessSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
