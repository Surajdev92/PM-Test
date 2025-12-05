import React, { useState } from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Button from "../common/Button";
import userIcon from "../../assets/icons/User.svg";
import arrowRightIcon from "../../assets/icons/Arrow Right.svg";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Trading", href: "#trading", hasDropdown: true },
  { label: "Discover", href: "#discover", hasDropdown: true },
  { label: "Promotions", href: "#promotions", hasDropdown: true },
  { label: "Company", href: "#company", hasDropdown: true },
  { label: "Partner with us", href: "#partner", hasDropdown: false },
];

const MainHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-[99]">
        <Container>
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center xl:gap-8 gap-6 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary transition-colors font-medium flex items-center gap-1 xl:text-sm text-xs"
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
                  {item.label === "Partner with us" && (
                    <img
                      src={arrowRightIcon}
                      alt=""
                      className="w-3.5 h-3.5 ml-1"
                      aria-hidden="true"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5 ml-auto">
              <Button label="Register" variant="primary" />
              <img
                src={userIcon}
                alt=""
                className="w-6 h-6"
                aria-hidden="true"
              />
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
                  <Button
                    label="Register"
                    variant="primary"
                    className="w-full"
                  />
                </div>
              </nav>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};

export default MainHeader;
