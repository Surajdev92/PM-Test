import React from 'react'
import Container from '../common/Container'

const TopHeader: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white text-sm border-b border-neutral-800">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href="#webtrader"
              className="hover:text-primary transition-colors"
              aria-label="WebTrader"
            >
              WebTrader
            </a>
            <a
              href="#support"
              className="hover:text-primary transition-colors"
              aria-label="Support"
            >
              Support
            </a>
            <a
              href="#demo"
              className="hover:text-primary transition-colors"
              aria-label="Open Demo Account"
            >
              Open Demo
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3 11v6a2 2 0 002 2h6M3 11V5a2 2 0 012-2h6a2 2 0 012 2v6"
              />
            </svg>
            <button
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-label="Select Language"
            >
              EN
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopHeader

