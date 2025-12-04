import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/home/Hero/Hero'
import MarketDataStrip from '../../components/home/MarketDataStrip/MarketDataStrip'
import MarketCategories from '../../components/home/MarketCategories/MarketCategories'
import Features from '../../components/home/Features/Features'
import TradingPlatforms from '../../components/home/TradingPlatforms/TradingPlatforms'
import Statistics from '../../components/home/Statistics/Statistics'
import Testimonials from '../../components/home/Testimonials/Testimonials'
import FAQ from '../../components/home/FAQ/FAQ'
import AccessSection from '../../components/home/AccessSection/AccessSection'
import Footer from '../../components/footer/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MarketDataStrip />
        <MarketCategories />
        <Features />
        <TradingPlatforms />
        <Statistics />
        <Testimonials />
        <FAQ />
        <AccessSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

