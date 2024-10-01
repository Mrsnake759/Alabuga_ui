/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {},
    colors: {
      'base-black': '#141414',
      'brand_primary': '#2C3C98',
      'brand_1': '#1F59B0',
      'brand_2': '#0671E0',
      'brand_3': '#7DD5F7',
      'brand-second_primary': '#162554',
      'brand-second_1': '#1082CE',
      'brand-second_2': '#52C7F4',
      'brand-second_3': '#A1E1F9',
      'brand-second_4': '#BFEAFB',
      'brand-second_5': '#DEF4FD',
      'gray-dask_1': '#6B7A99',
      'gray-dask_2': '#7C89A3',
      'gray-dask_3': '#A2A9B8',
      'gray-dask_4': '#C0C6D1',
      'gray-dask_5': '#F0F2F5',
      'gray-morn_1': '#D3D8E6',
      'gray-morn_2': '#E1E4EB',
      'gray-morn_3': '#EDEFF3',
      'gray-morn_4': '#F5F6FA',
      'system-success_deepdark': '#096237',
      'system-success_dark': '#228B45',
      'system-success_1': '#28C75D',
      'system-success_light': '#E9F9EF',
      'system-warning_deepdark': '#8F5714',
      'system-warning_dark': '#E9A21D',
      'system-warning_1': '#F8B73F',
      'system-warning_light': '#FEF8EC',
      'system-error_deepdark': '#B9212E',
      'system-error_dark': '#D82E2E',
      'system-error_1': '#FF564E',
      'system-error_light': '#FFEEED',
    }
  },
  plugins: [],
}

