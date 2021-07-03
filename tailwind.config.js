module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '320px',
            // => @media (min-width: 640px) { ... }

            'md': '640px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                primary: {
                    light: '#8EB7FB',
                    DEFAULT: '#1A4CED'
                },
            },
            backgroundImage: theme => ({
                'footer-pattern': "url('./assets/Shape_05.png')",
                'footer-pattern2x': "url('./assets/Shape_05@2x.png')",
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}