tailwind.config = {
    theme: {
        extend: {
            colors: {
                pale_orange: '#ffd9a6',
                light_orange: '#fbb03b',
                orange: '#f7931e'
            },
            fontFamily: {
                title: ['Playfair Display SC', 'serif'],
                sans: ['Josefin Sans', 'sans-serif']
            },
            backgroundImage:
            {
                mobile: "url('/bg-mobile.png')",
                desktop: "url('/bg-desktop.png')"
            }
        }
    }
}