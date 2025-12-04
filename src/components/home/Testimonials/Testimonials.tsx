import React from 'react'
import Container from '../../common/Container'
import Card from '../../common/Card'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Trader',
      content: 'Premier Markets has transformed my trading experience. The execution speed and competitive spreads are unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Day Trader',
      content: 'The mobile app is fantastic - I can trade from anywhere. The platform is intuitive and the customer support is always helpful.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Swing Trader',
      content: 'I\'ve been trading with Premier Markets for over 2 years. The range of instruments and the reliability of the platform keep me coming back.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Our Traders Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join thousands of satisfied traders who trust Premier Markets for their trading needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-500">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials

