import type {Config} from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx,mdx}", "./app/**/*.{ts,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)"],
                montserrat: ["var(--font-montserrat)"],
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                show: "show 2s ease"
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
                show: {
                    from: {
                        opacity: "0",
                        filter: "blur(10px)"
                    },
                    to: {
                        opacity: "1",
                        filter: "blur(0px)"
                    }
                }
            },
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
    },
    darkMode: "selector",
    plugins: [addVariablesForColors],
};
export default config;

const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({addBase, theme}: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}
