import React from 'react'
import Container from '../../common/Container'

interface MarketDataItem {
  pair: string
  value: string
  change: string
  isPositive: boolean
}

const MarketDataStrip: React.FC = () => {
  const marketData: MarketDataItem[] = [
    { pair: 'USD/EUR', value: '0.00014', change: '-234.45', isPositive: false },
    { pair: 'XAUUSD', value: '2,045.23', change: '+12.34', isPositive: true },
    { pair: 'USD/EUR', value: '0.00014', change: '-234.45', isPositive: false },
  ]

  return (
    <div className="bg-accent-500 text-white py-3 overflow-hidden">
      <Container>
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 min-w-fit"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs">🇺🇸</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{item.pair}</span>
                <span className="text-sm">{item.value}</span>
                <span
                  className={`text-sm font-medium ${
                    item.isPositive ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default MarketDataStrip

