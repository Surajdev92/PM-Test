import React from "react";
import Container from "../common/Container";
import visaIcon from "../../assets/icons/Visa.png";
import applePayIcon from "../../assets/icons/Apple Pay.png";
import skrillIcon from "../../assets/icons/Skrill.png";
import mastercardIcon from "../../assets/icons/Mastercard.png";
import paypalIcon from "../../assets/icons/Paypal.png";

const PaymentIcons: React.FC = () => {
  const paymentMethods = [
    { name: "PayPal", icon: paypalIcon },
    { name: "Mastercard", icon: mastercardIcon },
    { name: "Skrill", icon: skrillIcon },
    { name: "Apple Pay", icon: applePayIcon },
    { name: "Visa", icon: visaIcon },
  ];

  return (
    <section className="bg-neutral-900 border-b border-white/20 py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap- md:gap-8 lg:gap-20">
          {paymentMethods.map((method) => (
            <div key={method.name} className="flex items-center justify-center">
              <img
                src={method.icon}
                alt={method.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PaymentIcons;
