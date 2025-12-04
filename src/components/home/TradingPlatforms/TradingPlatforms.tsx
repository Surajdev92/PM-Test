import React from 'react'
import Container from '../../common/Container'
import Card from '../../common/Card'

interface Platform {
  name: string
  description: string
  features: string[]
  icon: React.ReactNode
}

const TradingPlatforms: React.FC = () => {
  const platforms: Platform[] = [
    {
      name: 'WebTrader',
      description: 'Trade directly from your browser with our powerful web-based platform.',
      features: ['No download required', 'Real-time charts', 'Advanced order types', 'Multi-device sync'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Mobile App',
      description: 'Trade on the go with our intuitive mobile trading application.',
      features: ['iOS & Android', 'Push notifications', 'Quick trade execution', 'Portfolio tracking'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'MetaTrader 5',
      description: 'Access the world\'s most popular trading platform with full MT5 support.',
      features: ['Expert Advisors', 'Custom indicators', 'Algorithmic trading', 'Market analysis tools'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Choose Your Trading Platform
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Access your account from any device with our range of powerful trading platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="text-primary mb-6 flex justify-center">
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {platform.name}
              </h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                {platform.description}
              </p>
              <ul className="space-y-2 mb-6">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-700">
                    <svg
                      className="w-5 h-5 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Get Started
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TradingPlatforms

