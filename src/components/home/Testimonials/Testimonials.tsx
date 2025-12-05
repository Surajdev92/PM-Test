import React, { useState } from "react";
import Container from "../../common/Container";
import testimonialBg from "../../../assets/images/Testmonial Bg.png";
import earthIcon from "../../../assets/icons/Earth.svg";
import emailIcon from "../../../assets/icons/Email.svg";
import vectorIcon from "../../../assets/icons/Vector.svg";

interface Testimonial {
  content: string;
  name: string;
  initials: string;
  icon: string;
}

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials: Testimonial[] = [
    {
      content:
        "I'm new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there.",
      name: "Adam Keller",
      initials: "AK",
      icon: vectorIcon,
    },
    {
      content:
        "Premier works well for me. KYC was fast and support people (Thx milos!!) helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
      name: "Lucas Vermeer",
      initials: "LV",
      icon: vectorIcon,
    },
    {
      content:
        "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
      name: "David Lorens",
      initials: "DL",
      icon: emailIcon,
    },
    {
      content:
        "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too",
      name: "Marco Lazzari",
      initials: "ML",
      icon: earthIcon,
    },
    {
      content:
        "I think Premier's trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys",
      name: "Petar Ilic",
      initials: "PL",
      icon: emailIcon,
    },
    {
      content:
        "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here.",
      name: 'Mark "Clips" Renard',
      initials: "MR",
      icon: emailIcon,
    },
    {
      content:
        "Good service Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mT5 Thank you!",
      name: "TradeAce92",
      initials: "TA",
      icon: vectorIcon,
    },
    {
      content:
        "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
      name: "Shivani Kaur",
      initials: "SK",
      icon: earthIcon,
    },
    {
      content:
        "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
      name: "Mateusz Durek",
      initials: "MD",
      icon: emailIcon,
    },
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="relative py-16 pb-8 md:py-24 md:pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={testimonialBg}
          alt=""
          className="w-full h-full object-fill"
          aria-hidden="true"
        />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              What <span className="text-primary">Premier</span> Traders are
              saying about us
            </h2>
            <p className="text-base md:text-lg text-text-primary max-w-2xl mx-auto mb-6">
              Join a growing community of professionals who rely on our platform
              to trade smarter every day.
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev > 0 ? prev - 1 : totalPages - 1
                  )
                }
                className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
                aria-label="Previous testimonials"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages - 1 ? prev + 1 : 0
                  )
                }
                className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
                aria-label="Next testimonials"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-primary/20 p-6 flex flex-col"
              >
                {/* Testimonial Text */}
                <p className="text-sm text-text-primary mb-4 pb-4 border-b border-neutral-200 leading-relaxed flex-grow">
                  {testimonial.content}
                </p>

                {/* Footer with Name and Icon */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Initials Circle */}
                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-semibold text-sm">
                      {testimonial.initials}
                    </div>
                    <div className="font-semibold text-text-primary text-sm">
                      {testimonial.name}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.icon}
                      alt=""
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
