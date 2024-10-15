/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/**/*.{html,js,jsx}",
        "./dev_modules/@local/**/*.{html,js,jsx}",
        "./dev_modules/@ocdla/global-components/**/*.{html,js,jsx}",
        "./node_modules/@ocdla/global-components/**/*.{html,js,jsx}"
    ],
    theme: {
        screens: {
        'phone': '320px',
        'tablet-portrait': '480px',
        'tablet': '800px',
        'laptop': '1024px',
        'desktop': '1280px'
        },
        extend: {
            colors: {
                "lod-light": "rgb(219 228 243)",
                "lod-dark": "rgb(28 30 60)"
            },
            fontFamily: {
                sans: ["Open Sans", "Verdana", ...defaultTheme.fontFamily.sans],
                oswald: ["Oswald", ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};
