// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [{
      provider: "local",
      name: "Futura",
      cssVariable: "--font-futura",
      variants: [
        {
          weight: 300,
          style: "normal",
          src: ["./src/assets/fonts/FuturaPTLight.otf"]
        },
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/FuturaPTBook.otf"]
        },
        {
          weight: 500,
          style: "normal",
          src: ["./src/assets/fonts/FuturaPTMedium.otf"]
        },
        {
          weight: 600,
          style: "normal",
          src: ["./src/assets/fonts/FuturaPTHeavy.otf"]
        },
        {
          weight: 700,
          style: 'normal',
          src: ["./src/assets/fonts/FuturaPTBold.otf"]
        },
        {
          weight: 700,
          style: 'normal',
          src: ["./src/assets/fonts/FuturaPTExtraBold.otf"]
        }
      ]
    }]
  }
});