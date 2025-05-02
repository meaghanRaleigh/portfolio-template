module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a6e5c',
        secondary: '#8fc1b5',
        accent: '#bcdff1',
        muted: '#7a8498',
        background: '#eae7dc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  
}
