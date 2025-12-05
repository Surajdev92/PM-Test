import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/home/Hero/Hero";
import MarketDataStrip from "../../components/home/MarketDataStrip/MarketDataStrip";
import MarketCategories from "../../components/home/MarketCategories/MarketCategories";
import EmpowerTrading from "../../components/home/EmpowerTrading/EmpowerTrading";
import Withdrawals from "../../components/home/Withdrawals/Withdrawals";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import AccessSection from "../../components/home/AccessSection/AccessSection";
import GetStarted from "../../components/home/GetStarted/GetStarted";
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
        <EmpowerTrading />
        <Withdrawals />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
