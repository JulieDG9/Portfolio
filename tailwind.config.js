/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        bannerWidthText: "723px",
      },
      colors: {
        htmlColor: "#FFD5D1",
        htmlText: "#FF6E5E",
        cssColor: "#C3DDE4",
        cssText: "#136980",
        jsColor: "#F7EBB6",
        jsText: "#A08300",
        sassColor: "#F3E1E7",
        sassText: "#C6255D",
        reactColor: "#CCE2E4",
        reactText: "#018A96",
        gradientOne: "#6366f1",
      },
    },
  },
  plugins: [],
};
