import React from 'react'
import Container from '../../common/Container'

const AccessSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary via-primary-700 to-primary-600 text-white py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join 50,000+
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Experience advanced trading tools, transparent and competitive
            pricing, and institutional-grade execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AccessSection

