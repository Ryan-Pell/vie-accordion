const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const dts = require('vite-plugin-dts')

const packageJson = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), dts() ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: packageJson.name,
      fileName: (format) => `${packageJson.name}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});