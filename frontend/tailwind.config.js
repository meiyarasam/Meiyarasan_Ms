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
                accent: "#F3F4F6", // Gray 100 (Background)
                textMain: "#374151", // Gray 700
                textLight: "#9CA3AF", // Gray 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
