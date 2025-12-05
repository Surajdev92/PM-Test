import React, { useMemo } from "react";
import Container from "../common/Container";
import logoPng from "../../assets/images/Logo.png";
import PaymentIcons from "./PaymentIcons";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/Twitter.svg";
import linkedinIcon from "../../assets/icons/Linkedin.svg";
import instagramIcon from "../../assets/icons/Instagram.svg";
import youtubeIcon from "../../assets/icons/Youtube.svg";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = useMemo(
    () => [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Markets", href: "#our-markets" },
        { label: "Platforms", href: "#platforms" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "FAQ", href: "#faq" },
        { label: "Terms & Conditions", href: "#terms" },
        { label: "Privacy Policy", href: "#privacy" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Careers", href: "#careers" },
        { label: "News & Updates", href: "#news" },
        { label: "Partnerships", href: "#partnerships" },
        { label: "Legal Documents", href: "#legal" },
      ],
    },
  ],
    []
  );

  return (
    <footer className="bg-neutral-900 text-white border-t-[24px] border-primary">
      <PaymentIcons />
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2 pr-10">
              <a
                href="/"
                className="inline-flex items-center mb-4"
                aria-label="Premier Markets Home"
              >
                <img
                  src={logoPng}
                  alt="Premier Markets"
                  className="h-11 w-auto"
                />
              </a>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                CFDs are complex instruments and come with a high risk of losing
                money rapidly due to leverage. 21.38% of retail investor
                accounts generate profits when trading CFDs with this provider.
                You should consider whether you understand how CFDs work and
                whether you can afford to take the high risk of losing your
                money.
              </p>
              <div className="flex gap-4">
                <a
                  href="#facebook"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#linkedin"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#instagram"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#youtube"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="YouTube"
                >
                  <img
                    src={youtubeIcon}
                    alt="YouTube"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#twitter"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Twitter"
                >
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="mt-[60px] col-span-1 pl-20">
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-neutral-400 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-neutral-400 text-sm leading-6 text-center">
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. 21.38% of retail investor accounts
            generate profits when trading CFDs with this provider. You should
            consider whether you understand how CFDs work and whether you can
            afford to take the high risk of losing your money company number:
            <br />
            <br />
            A000003075 in Anguilla. Our registered office is located at
            Anguilla, The Valley, Kismet House, Sandy Hill, PO Box P.O.Box
            174The information on this site is not directed at residents of
            Russia, Afghanistan, Belgium, Canada, India, United States or any
            country or jurisdiction where such distribution or use would be
            contrary to local law, sanctions or regulation.
          </div>
        </div>
      </Container>
      <div className="flex border-t border-white/20 px-8 py-8 justify-center">
        <p className="text-neutral-400 text-sm text-center">
          Copyright © {new Date().getFullYear()} Premier Markets - All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
