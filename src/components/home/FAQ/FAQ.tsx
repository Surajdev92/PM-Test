import React, { useState } from 'react'
import Container from '../../common/Container'

interface FAQItem {
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'How do I open a trading account?',
      answer: 'Opening an account is quick and easy. Simply click the "Register" button, fill in your details, verify your identity, and you can start trading within minutes.',
    },
    {
      question: 'What is the minimum deposit?',
      answer: 'We offer flexible account options with no minimum deposit requirement. You can start trading with any amount that suits your needs.',
    },
    {
      question: 'What trading platforms do you offer?',
      answer: 'We offer WebTrader for browser-based trading, mobile apps for iOS and Android, and full MetaTrader 5 support for advanced traders.',
    },
    {
      question: 'Are my funds secure?',
      answer: 'Yes, your funds are protected with industry-leading security measures, segregated accounts, and regulatory compliance. We prioritize the safety of your investments.',
    },
    {
      question: 'What markets can I trade?',
      answer: 'You can trade over 17,000 instruments including forex, stocks, indices, commodities, and cryptocurrencies from a single account.',
    },
    {
      question: 'Do you offer demo accounts?',
      answer: 'Yes, we offer free demo accounts with virtual funds so you can practice trading and explore our platforms risk-free before opening a live account.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Find answers to common questions about trading with Premier Markets.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQ

