/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFC107", // Mustard Yellow
                secondary: "#171717", // Neutral 900 (Black)
                accent: "#f4f4f0", // Neo-Brutalist Canvas Color (Pale Cream)
                textMain: "#374151", // Gray 700
                textLight: "#9CA3AF", // Gray 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'brutal': '5px 5px 0px 0px #171717',
                'brutal-lg': '8px 8px 0px 0px #171717',
                'brutal-sm': '3px 3px 0px 0px #171717',
            }
        },
    },
    plugins: [],
}
