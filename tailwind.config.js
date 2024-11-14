/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      fontFamily :{
        boogaloo: ["Boogaloo","sans-serif"]
      },
      colors:{
        DarkNavy: '#1e1f29', //background color
        DeepPurple: '#2d2f42',
        NeonPink:'#ff4ec3', // primary color
        BrightTeal: '#0fffc1',
        ElectricBlue: '#0070ff',
        SodaPop:'#ff918A',
        MediumOrchid:'#c252e1',
        Slateblue:'#7d5dff',
        Purple: '#9d4edd', //accent color
        BrightYellow: '#ffee32',
        ceramic:'#f3e7d8',
        blackholeburgundy: '#201e4b',
        looseChange:'#ffdb8c'
        

      }
    },
  },
  plugins: [],
}

