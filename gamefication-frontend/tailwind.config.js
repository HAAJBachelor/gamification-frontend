/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        colors: {
            background: 'rgb(43,43,43)',
            gameComps: 'rgb(65,65,65)',
            hover: 'rgb(88, 88, 88)',
            'gray': colors.gray,
            'black': colors.black,
            'white': colors.white,
            'red': colors.red,
            'green': colors.green,
            'blue': colors.blue,
            'cyan': colors.cyan,
            'amber': colors.amber,
            'pink': colors.pink,
            'purple': colors.purple,
            'yellow': colors.yellow,
            'slate': colors.slate,
            'zinc': colors.zinc,
        },
        extend: {
            animation: {
                'scale-up-down-opacity': 'scaleupdownopacity 0.5s ease-in-out ',
                'scale-up-down': 'scaleupdown 0.5s ease-in-out ',
            },
            keyframes: {
                scaleupdownopacity: {
                    '0%': {transform: 'scale(0.75) translateY(40px)', opacity: '0%'},
                    '50%': {transform: 'scale(1) translateY(-10px)'},
                    '100%': {opacity: '100% ', transform: 'scale(1)'}
                },
                scaleupdown: {
                    '0%': {transform: 'scale(0.75)'},
                    '50%': {transform: 'scale(1)'}
                }
            }
        }

    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}
