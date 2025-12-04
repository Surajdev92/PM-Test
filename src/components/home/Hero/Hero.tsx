import React from 'react'
import Container from '../../common/Container'
import Button from '../../common/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      <Container>
        <div className="relative z-10 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trade Forex with Premier Markets
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                Access global markets with advanced trading tools, competitive
                spreads, and institutional grade execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  label="Start Trading"
                  variant="white"
                  onClick={() => {}}
                />
                <Button
                  label="Try Demo Account"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-neutral-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="bg-neutral-50 p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                        My Watchlist
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            name: 'Vanguard S&P 500',
                            symbol: 'VUSA',
                            price: '$75.48',
                            change: '+1.1575',
                            positive: true,
                          },
                          {
                            name: 'iShares Core S&P 500',
                            symbol: 'IVV',
                            price: '$75.48',
                            change: '-0.10',
                            positive: false,
                          },
                          {
                            name: 'Invesco QQQ Trust',
                            symbol: 'QQQ',
                            price: '$75.48',
                            change: '+0.01',
                            positive: true,
                          },
                          {
                            name: '21Shares Bitcoin Core',
                            symbol: 'VUSA',
                            price: '$75.48',
                            change: '-0.12',
                            positive: false,
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                          >
                            <div>
                              <p className="font-medium text-neutral-900 text-sm">
                                {item.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {item.symbol}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-neutral-900 text-sm">
                                {item.price}
                              </p>
                              <p
                                className={`text-xs font-medium ${
                                  item.positive
                                    ? 'text-accent-600'
                                    : 'text-red-600'
                                }`}
                              >
                                {item.change}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shadow effect */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero

