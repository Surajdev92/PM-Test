import React, { useState } from 'react'
import Container from '../common/Container'
import Logo from '../common/Logo'
import Button from '../common/Button'

interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
}

const navItems: NavItem[] = [
  { label: 'Trading', href: '#trading', hasDropdown: true },
  { label: 'Discover', href: '#discover', hasDropdown: true },
  { label: 'Promotions', href: '#promotions', hasDropdown: true },
  { label: 'Company', href: '#company', hasDropdown: true },
  { label: 'Partner with us', href: '#partner', hasDropdown: false },
]

const MainHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccountType, setActiveAccountType] = useState<'personal' | 'institutional'>('personal')

  return (
    <>
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
                  aria-label={item.label}
                >
                  {item.label}
                  {item.hasDropdown && (
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button label="Register" variant="primary" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-neutral-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Account Type Tabs */}
          <div className="flex items-center gap-4 pb-2 border-b border-neutral-200">
            <button
              onClick={() => setActiveAccountType('personal')}
              className={`text-sm font-medium pb-2 transition-colors ${
                activeAccountType === 'personal'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              aria-label="Personal Account"
            >
              Personal
            </button>
            <button
              onClick={() => setActiveAccountType('institutional')}
              className={`text-sm font-medium pb-2 transition-colors ${
                activeAccountType === 'institutional'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              aria-label="Institutional Account"
            >
              Institutional
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <Container>
              <nav className="flex flex-col py-4 gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-neutral-700 hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <Button label="Register" variant="primary" className="w-full" />
                </div>
              </nav>
            </Container>
          </div>
        )}
      </header>
    </>
  )
}

export default MainHeader

