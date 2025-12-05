/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DC2626", // Red primary color from design
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#DC2626",
          600: "#B91C1C",
          700: "#991B1B",
          800: "#7F1D1D",
          900: "#7F1D1D",
        },
        accent: {
          DEFAULT: "#10B981", // Green for market data
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        text: {
          primary: "#151515",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-1": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "display-2": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "display-3": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "44px", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        card: "0px 4px 8px 0px #00000017",
        "button-glow":
          "0px 4px 24px 0px rgba(255, 74, 74, 0.25), 0px 4px 34px 0px rgba(255, 0, 0, 0.25), 0px 4px 34px 0px rgba(255, 255, 255, 0.25)",
      },
      backgroundImage: {
        "card-border-gradient":
          "linear-gradient(180deg, #FFE6E7 0%, #ED1D25 62.02%)",
        "pill-bg-gradient": "linear-gradient(90deg, #900003 0%, #730307 100%)",
        "pill-border-gradient":
          "linear-gradient(90deg, #ED1D25 0%, #FF9595 100%)",
        "hover-bg-gradient":
          "linear-gradient(126.89deg, #ED1D25 -17.29%, #871115 171.67%)",
        "hover-border-gradient":
          "linear-gradient(90deg, #FF434A 0%, #FFA7AA 100%)",
        "gold-card-gradient":
          "linear-gradient(262.27deg, #940006 10.82%, #220001 125.85%)",
        "button-wrapper-gradient":
          "linear-gradient(90.64deg, #6D0002 -2.57%, #FFFFFF 108.74%)",
        "button-bg-gradient":
          "linear-gradient(90deg, #390507 0%, #962020 100%)",
        "withdrawals-bg-gradient":
          "linear-gradient(102.54deg, #FFDFDF -11.21%, #FFFCFC 23.26%, #FFD5D6 95.34%)",
        "get-started-bg-gradient":
          "linear-gradient(90deg, #BE050D 0%, #580000 100%)",
        "step-border-gradient":
          "linear-gradient(200.56deg, #FFFFFF 22.55%, rgba(255, 151, 151, 0) 86.36%)",
        "step-bg-gradient":
          "linear-gradient(145.78deg, #FF696F 5.81%, #ED1D25 79.76%)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
