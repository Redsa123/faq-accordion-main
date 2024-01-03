/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            white: "hsl(0, 0%, 100%)",
            lightpink: "hsl(275, 100%, 97%)",
            grayishpurple: "hsl(292, 16%, 49%)",
            darkpurple: "hsl(292, 42%, 14%)",
        },
        fontFamily: {
            workSans: ["Work Sans", "sans-serif"],
        },
        screens: {
            tablet: "640px",
        },
    },
    plugins: [],
};
