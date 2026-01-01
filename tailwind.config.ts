import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    dark: "var(--primary-dark)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    dark: "var(--secondary-dark)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    light: "var(--accent-light)",
                },
                border: "var(--border)",
                glass: "var(--glass)",
            },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
            animation: {
                "gradient-mesh": "gradient-mesh 20s ease infinite",
                "noise": "noise 0.2s infinite",
            },
            keyframes: {
                "gradient-mesh": {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(30px, -30px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                },
                "noise": {
                    "0%": { transform: "translate(0, 0)" },
                    "10%": { transform: "translate(-5%, -5%)" },
                    "20%": { transform: "translate(-10%, 5%)" },
                    "30%": { transform: "translate(5%, -10%)" },
                    "40%": { transform: "translate(-5%, 15%)" },
                    "50%": { transform: "translate(-10%, 5%)" },
                    "60%": { transform: "translate(15%, 0%)" },
                    "70%": { transform: "translate(0%, 15%)" },
                    "80%": { transform: "translate(-15%, 10%)" },
                    "90%": { transform: "translate(10%, 5%)" },
                    "100%": { transform: "translate(5%, 0%)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
